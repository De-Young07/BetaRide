import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const demoMode = import.meta.env.PROD && !import.meta.env.VITE_API_URL;
const API = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:4000';
type Offer = { id:string; driver:string; vehicle:string; eta:number; fare:number; rating:number; verified:boolean; status:string };
type Ride = { id:string; status:string; fare:number; offers:Offer[] };

const demoOffers = (vehicle:string, fare:number): Offer[] => [
  { id:'demo-adebayo', driver:'Adebayo', vehicle, eta:4, fare, rating:4.8, verified:true, status:'pending' },
  { id:'demo-ibrahim', driver:'Ibrahim', vehicle, eta:6, fare:fare + 200, rating:4.7, verified:true, status:'pending' }
];

const assetUrl = (file: string) => `${import.meta.env.BASE_URL}${file.replace(/^\//, '')}`;

export function App() {
  const [pickup, setPickup] = useState('Offa Garage Terminal');
  const [destination, setDestination] = useState('Tanke Junction');
  const [vehicle, setVehicle] = useState('keke');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [token, setToken] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [message, setMessage] = useState(demoMode ? 'Management preview — no live dispatch is created here.' : 'Enter your route first. We only verify your phone before dispatch.');
  const [ride, setRide] = useState<Ride>();
  const fare = useMemo(() => vehicle === 'keke' ? 2000 : vehicle === 'motorcycle' ? 1500 : 3500, [vehicle]);
  const formattedPhone = () => `+234${phone.replace(/\D/g, '').replace(/^0/, '')}`;
  const call = async (path:string, body?:object, auth=false) => {
    const response = await fetch(`${API}${path}`, { method:body ? 'POST' : 'GET', headers:{ 'Content-Type':'application/json', ...(auth ? { Authorization:`Bearer ${token}` } : {}) }, body:body ? JSON.stringify(body) : undefined });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error ?? 'Something went wrong. Please retry.');
    return result;
  };
  const requestOtp = async () => {
    if (demoMode) { setShowCode(true); setMessage('Management demo code: 123456'); return; }
    try { const result = await call('/v1/otp/request', { phone:formattedPhone() }); setShowCode(true); setMessage(`Code sent.${result.developmentCode ? ` Development code: ${result.developmentCode}` : ''}`); } catch (error) { setMessage((error as Error).message); }
  };
  const verify = async () => {
    if (demoMode) { if (code === '123456') { setToken('management-demo'); setMessage('Phone verified for the management preview.'); } else setMessage('Use management demo code 123456.'); return; }
    try { const result = await call('/v1/otp/verify', { phone:formattedPhone(), code }); setToken(result.token); setMessage('Phone verified. Your request is ready to send.'); } catch (error) { setMessage((error as Error).message); }
  };
  const findRide = async () => {
    if (demoMode) { setRide({ id:'management-preview', status:'open', fare, offers:demoOffers(vehicle, fare) }); setMessage('Preview offers are ready. No driver has been contacted.'); return; }
    try { const result = await call('/v1/ride-requests', { pickup, destination, vehicle, proposedFare:fare }, true); setMessage('Looking for verified drivers near your route…'); setRide(await call(`/v1/ride-requests/${result.id}/offers/demo`, {}, true)); } catch (error) { setMessage((error as Error).message); }
  };
  const accept = async (offerId:string) => {
    if (demoMode) { setRide((current) => current && ({ ...current, status:'matched', offers:current.offers.map((offer) => ({ ...offer, status:offer.id === offerId ? 'accepted' : 'expired' })) })); setMessage('Preview confirmed. In production, this will notify the selected verified driver.'); return; }
    try { const response = await fetch(`${API}/v1/offers/${offerId}/accept`, { method:'POST', headers:{ Authorization:`Bearer ${token}`, 'Idempotency-Key':crypto.randomUUID() } }); const result = await response.json(); if (!response.ok) throw new Error(result.error); setRide(result.request); setMessage(result.message); } catch (error) { setMessage((error as Error).message); }
  };
  return <main>
    <header>
      <a className="brand" href="/">
        <img src={assetUrl('betaride-logo.jpg')} alt="BetaRide official logo"/>
        <span>BetaRide<small>Move more. Pay less.</small></span>
      </a>
      <nav>
        <a href="/">Home</a>
        <a href="#how">How it works</a>
        <a href="/#routes">Corridors</a>
        <a href="/#safety">Safety</a>
      </nav>
      <a className="driver-link" href="/#driver-model">Driver portal ↗</a>
    </header>
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><i/> ILORIN PILOT · SELECT CORRIDORS</p>
        <h1>Make the move.<br/><em>Keep the choice.</em></h1>
        <p className="lede">Request a verified Keke, motorcycle, or car. See the fare before you accept and pay your driver directly.</p>
        <div className="proof"><span>✓ Verified operators</span><span>✓ Fair fare guidance</span><span>✓ Direct settlement</span></div>
        <div className="transport-visual">
          <img src={assetUrl('pic-01.jpg')} alt="Local Keke service in Ilorin"/>
          <div><b>Offa Garage Terminal</b><small>Five pilot corridors active today</small></div>
        </div>
      </div>
      <form className="booking-card" onSubmit={(event) => { event.preventDefault(); token ? findRide() : requestOtp(); }}>
        <div className="card-head">
          <div><p className="overline">BOOK A RIDE</p><h2>Where are you going?</h2></div>
          <span className="available"><i/> Available</span>
        </div>
        {demoMode && <p className="preview-note">Management preview · no real trip or payment</p>}
        <label><span>Pickup</span><div className="input-wrap"><b>●</b><input value={pickup} onChange={(event) => setPickup(event.target.value)} required/></div><small>Use my location</small></label>
        <label><span>Destination</span><div className="input-wrap"><b className="pin">⌖</b><input value={destination} onChange={(event) => setDestination(event.target.value)} required/></div></label>
        <fieldset>
          <legend>Ride preference</legend>
          <div className="vehicle-picker">
            {[['keke','Keke','Best value'],['motorcycle','Bike','Fastest'],['car','Car','More room']].map(([value,name,note]) => (
              <button type="button" className={vehicle === value ? 'selected' : ''} key={value} onClick={() => setVehicle(value)}>
                <strong>{name}</strong><small>{note}</small>
              </button>
            ))}
          </div>
        </fieldset>
        <div className="fare">
          <span>Suggested fare</span>
          <b>₦{fare.toLocaleString()}</b>
          <small>Typical range ₦{(Math.round(fare * .8 / 100) * 100).toLocaleString()} – ₦{(Math.round(fare * 1.2 / 100) * 100).toLocaleString()}</small>
        </div>
        {!token && (
          <div className="verify">
            <label><span>Phone number</span><input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="801 234 5678" required/></label>
            {showCode && <label><span>6-digit verification code</span><input value={code} onChange={(event) => setCode(event.target.value)} inputMode="numeric" placeholder="123456"/></label>}
            {showCode && <button type="button" className="dark-action" onClick={verify}>Verify phone</button>}
          </div>
        )}
        <button className="primary" disabled={!token && showCode}>{token ? 'Find a verified ride' : 'Continue with phone'} <b>→</b></button>
        <p className="status" role="status">{message}</p>
      </form>
    </section>
    {ride && (
      <section className="offers">
        <div className="section-head">
          <div><p className="overline">MATCHING COMPLETE</p><h2>{ride.status === 'matched' ? 'Your ride is confirmed' : 'Choose your verified driver'}</h2></div>
          <span>Route held for 00:42</span>
        </div>
        {ride.offers.map((offer) => (
          <article key={offer.id}>
            <div className="avatar">{offer.driver[0]}</div>
            <div className="offer-main">
              <b>{offer.driver} {offer.verified && <i>Verified</i>}</b>
              <span>{offer.vehicle} · {offer.eta} min away · ★ {offer.rating}</span>
            </div>
            <div className="offer-fare">
              <small>Final fare</small>
              <b>₦{offer.fare.toLocaleString()}</b>
            </div>
            {offer.status === 'pending' && <button onClick={() => accept(offer.id)}>Choose this ride</button>}
            {offer.status === 'accepted' && <b className="accepted">Confirmed</b>}
          </article>
        ))}
      </section>
    )}
    <section id="how" className="how">
      <p className="overline">HOW BETARIDE WORKS</p>
      <h2>One request. One clear choice.</h2>
      <div>
        <article>
          <img src={assetUrl('pic-01.jpg')} alt="Keke option"/>
          <b>01</b>
          <h3>Tell us the route</h3>
          <p>Choose familiar Ilorin landmarks and the ride that suits your journey.</p>
        </article>
        <article>
          <img src={assetUrl('pic-02.jpg')} alt="Motorcycle option"/>
          <b>02</b>
          <h3>Compare real offers</h3>
          <p>See final fare, ETA, vehicle and verification before you accept.</p>
        </article>
        <article>
          <img src={assetUrl('pic-03.jpg')} alt="Car option"/>
          <b>03</b>
          <h3>Ride with confidence</h3>
          <p>Get trip details, support tools and direct settlement guidance.</p>
        </article>
      </div>
    </section>
    <footer id="safety">
      <a href="/" className="footer-brand"><img src={assetUrl('betaride-logo.jpg')} alt="BetaRide logo"/></a>
      <span>Verified local mobility for Ilorin.</span>
      <span>Safety support · Privacy-first · Fair fares</span>
    </footer>
  </main>;
}
createRoot(document.getElementById('root')!).render(<App/>);
