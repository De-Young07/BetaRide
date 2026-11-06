import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import { randomUUID, createHash } from 'node:crypto';
import { z } from 'zod';

type Request = { id:string; phone:string; pickup:string; destination:string; vehicle:string; fare:number; status:'open'|'matched'|'expired'; stateVersion:number; expiresAt:number; offers:Offer[] };
type Offer = { id:string; driver:string; vehicle:string; eta:number; fare:number; rating:number; verified:boolean; status:'pending'|'accepted'|'expired' };
const requests = new Map<string, Request>();
const sessions = new Map<string, { phone:string; expiresAt:number }>();
const otps = new Map<string, string>();
const corridors = new Map([['offa-garage',{state:'active'}]]);
const landmarks = ['Offa Garage Terminal','Tanke Junction','Gerin Alimi Flyover','Ilorin Innovation Hub','Post Office / Muritala','Tipper Garage / Basin'];
const phoneHash = (value:string) => createHash('sha256').update(value).digest('hex');

const app = Fastify({ logger: true });
await app.register(cors, { origin: process.env.BOOKING_ORIGIN?.split(',') ?? true });
await app.register(rateLimit, { global: true, max: 80, timeWindow: '1 minute' });

app.get('/health', async () => ({ ok:true }));
app.get('/v1/landmarks', async (request) => {
  const q = z.object({ q:z.string().default('') }).parse(request.query).q.toLowerCase();
  return landmarks.filter((name) => name.toLowerCase().includes(q)).map((name) => ({ name, corridor:'offa-garage' }));
});
app.post('/v1/otp/request', { config:{ rateLimit:{ max:3, timeWindow:'10 minutes' } } }, async (request) => {
  const { phone } = z.object({ phone:z.string().regex(/^\+234\d{10}$/) }).parse(request.body);
  const code = process.env.BETARIDE_DEV_OTP ?? String(Math.floor(100000 + Math.random() * 900000));
  otps.set(phone, code);
  app.log.info({ phoneHash:phoneHash(phone) }, 'OTP requested');
  return { accepted:true, ...(process.env.NODE_ENV !== 'production' ? { developmentCode:code } : {}) };
});
app.post('/v1/otp/verify', async (request, reply) => {
  const { phone, code } = z.object({ phone:z.string(), code:z.string().length(6) }).parse(request.body);
  if (otps.get(phone) !== code) return reply.code(401).send({ error:'invalid_otp' });
  const token = randomUUID(); sessions.set(token, { phone, expiresAt:Date.now() + 30 * 60 * 1000 }); otps.delete(phone);
  return { token, expiresInSeconds:1800 };
});
function requireSession(authorization?: string) {
  const token = authorization?.replace(/^Bearer\s+/i, ''); const session = token ? sessions.get(token) : undefined;
  if (!session || session.expiresAt < Date.now()) {
    const error = Object.assign(new Error('Verified session required before dispatch'), { statusCode: 401, code: 'verified_session_required' });
    throw error;
  }
  return session;
}
app.post('/v1/fare-guidance', async (request) => {
  const { vehicle } = z.object({ vehicle:z.enum(['keke','motorcycle','car']) }).parse(request.body);
  const base = vehicle === 'keke' ? 2000 : vehicle === 'motorcycle' ? 1500 : 3500;
  return { low:Math.round(base*.8/100)*100, recommended:base, high:Math.round(base*1.2/100)*100, currency:'NGN' };
});
app.post('/v1/ride-requests', async (request, reply) => {
  const session = requireSession(request.headers.authorization);
  const body = z.object({ pickup:z.string().min(2), destination:z.string().min(2), vehicle:z.enum(['keke','motorcycle','car']), proposedFare:z.number().int().positive() }).parse(request.body);
  const corridor = corridors.get('offa-garage'); if (corridor?.state !== 'active') return reply.code(503).send({ error:'dispatch_paused', retryable:true });
  if ([...requests.values()].some((r) => r.phone === session.phone && r.status === 'open')) return reply.code(409).send({ error:'active_request_exists' });
  const id = randomUUID(); const ride:Request = { id, phone:session.phone, ...body, fare:body.proposedFare, status:'open', stateVersion:1, expiresAt:Date.now()+45_000, offers:[] };
  requests.set(id, ride);
  setTimeout(() => { if (ride.status === 'open') { ride.status='expired'; ride.stateVersion++; ride.offers.forEach((o)=>o.status='expired'); } }, 45_000);
  return reply.code(201).send(publicRequest(ride));
});
app.get('/v1/ride-requests/:id', async (request, reply) => {
  const session = requireSession(request.headers.authorization); const ride = requests.get((request.params as {id:string}).id);
  if (!ride || ride.phone !== session.phone) return reply.code(404).send({ error:'not_found' }); return publicRequest(ride);
});
app.post('/v1/ride-requests/:id/offers/demo', async (request, reply) => {
  const ride = requests.get((request.params as {id:string}).id); if (!ride || ride.status !== 'open') return reply.code(409).send({ error:'request_not_open' });
  ride.offers = [{id:randomUUID(), driver:'Adebayo',vehicle:ride.vehicle,eta:4,fare:ride.fare,rating:4.8,verified:true,status:'pending'},{id:randomUUID(),driver:'Ibrahim',vehicle:ride.vehicle,eta:6,fare:ride.fare+200,rating:4.7,verified:true,status:'pending'}]; ride.stateVersion++; return publicRequest(ride);
});
app.post('/v1/offers/:id/accept', async (request, reply) => {
  const session = requireSession(request.headers.authorization); const key = request.headers['idempotency-key']; if (!key) return reply.code(400).send({ error:'idempotency_key_required' });
  const ride = [...requests.values()].find((candidate)=>candidate.offers.some((offer)=>offer.id === (request.params as {id:string}).id));
  if (!ride || ride.phone !== session.phone || ride.status !== 'open') return reply.code(409).send({ error:'offer_unavailable' });
  const selected = ride.offers.find((offer)=>offer.id === (request.params as {id:string}).id)!; if (selected.status !== 'pending') return reply.code(409).send({ error:'offer_unavailable' });
  selected.status='accepted'; ride.offers.forEach((offer)=>{ if(offer.id!==selected.id) offer.status='expired'; }); ride.status='matched'; ride.stateVersion++;
  return { tripId:randomUUID(), request:publicRequest(ride), message:'Ride confirmed. Your driver will meet you at the pickup point.' };
});
function publicRequest(ride:Request) { return { id:ride.id, pickup:ride.pickup, destination:ride.destination, vehicle:ride.vehicle, fare:ride.fare, status:ride.status, stateVersion:ride.stateVersion, expiresAt:ride.expiresAt, offers:ride.offers }; }
await app.listen({ port:Number(process.env.PORT ?? 4000), host:process.env.HOST ?? '127.0.0.1' });
