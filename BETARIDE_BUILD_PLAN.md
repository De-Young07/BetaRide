# BetaRide Booking-First Build Plan

**Status:** Approved design direction, ready for engineering review  
**Prepared:** 5 November 2026  
**Product:** BetaRide, an on-demand local transport network for Ilorin  
**Primary launch outcome:** A first-time rider can understand BetaRide and begin a ride request in one glance.

## 1. Product decision

BetaRide is not a brochure with a sign-up button. It is a booking experience with a clear trust story around it.

The homepage must answer three questions, in this order:

1. **Can I request a ride now?**
2. **Will I know who is coming and what I will pay?**
3. **Why should I trust BetaRide over street hailing?**

The public site continues to explain corridors, safety, driver verification, and the pilot model. Those are supporting sections, not the first action a rider sees.

### Success criteria

| Outcome | Launch target |
|---|---:|
| First-time visitors who start a ride request | 35%+ of qualified traffic |
| Median time from page load to request submission | Under 60 seconds |
| Riders completing pickup/destination entry without help | 90%+ |
| Requests ending with an understandable result | 100% |
| Booking components meeting WCAG 2.2 AA | 100% |
| Nonessential media blocking the booking form | 0 instances |

## 2. Approved experience decisions

| Decision | Approved direction |
|---|---|
| Homepage priority | Booking-first rider experience |
| First-screen interaction | One request card with pickup, destination, vehicle choice, fare guidance, and **Find a ride** |
| Account gate | Let a rider prepare a request as a guest; require phone verification only when sending it |
| Pickup entry | Visible landmark search plus optional **Use my location** |
| No driver response | Explain the result, retain trip details, and offer a guided retry, fare/vehicle adjustment, or corridor guidance |
| Counter-offers | Short ranked offer list showing final fare, ETA, vehicle, rating, and verification; rider explicitly accepts one |
| Trust before dispatch | Show a privacy-safe driver summary before acceptance; reveal the full trip card only after a match |
| Hero composition | Asymmetric split: quiet booking surface plus real transport photography, never text over a busy photo |
| Visual language | Deep navy, signal gold, warm neutral surfaces, utility-led typography |
| Mobile | Form first, shallow image band, sticky action once valid inputs are present |
| Quality baseline | WCAG 2.2 AA plus explicit image and loading budgets at launch |
| Image publication | Publish only verified, licensed, accurately contextualized imagery |

## 3. Homepage information architecture

### Desktop

```text
Header
├── BetaRide wordmark
├── How it works / Corridors / Safety
└── Driver portal

Booking hero
├── Left: request card
│   ├── Pickup landmark [Use my location]
│   ├── Destination landmark
│   ├── Vehicle preference: Keke / Motorcycle / Car
│   ├── Recommended fare range
│   └── Find a ride
└── Right: approved local-transport image

Trust strip
├── Verified operators
├── Transparent final fare
└── Direct settlement policy

How matching works → corridor coverage → safety → driver partnership → footer
```

### Mobile

```text
Header: logo + menu
Short transport image band
Booking card
├── Pickup
├── Destination
├── Vehicle preference
├── Fare guidance
└── Sticky Find a ride action after valid input
Trust strip, then supporting content
```

On mobile, do not place the booking form below a large image, use hover-only controls, or let the sticky button cover validation text or the software keyboard.

## 4. Core rider journey

| Step | Rider action | What the rider sees | Required system behavior |
|---|---|---|---|
| 1 | Lands on BetaRide | Booking form, local transport image, short trust statement | Render the form before nonessential imagery completes |
| 2 | Chooses pickup | Landmark search and optional GPS shortcut | Use curated landmarks; GPS is optional, never a gate |
| 3 | Chooses destination and vehicle | Fare range and eligible vehicle choices | Validate corridor and availability rules |
| 4 | Starts request | Clear loading state with an accessible progress announcement | Create a draft request; phone verification gates dispatch, not form entry |
| 5 | Receives offers | Ranked verified driver offers with final fare and expiry | Broadcast to eligible drivers; prevent open-ended chat negotiation |
| 6 | Selects an offer | Confirmation with driver/vehicle summary and final fare | Lock the accepted offer atomically and expire competing offers |
| 7 | Waits for pickup | Full trip card, support, share-trip, cancellation, pickup instructions | Reveal only the contact details necessary after match |
| 8 | Completes trip | Settlement reminder and a short feedback prompt | Record completion, safety event links, and quality signals |

### Emotional storyboard

| Moment | Rider feeling | Product response |
|---|---|---|
| Opens the page | “Can this help me quickly?” | A visible request card, not a registration wall |
| Enters pickup | “Will it understand where I am?” | Familiar landmark search and GPS fallback |
| Waits for offers | “Is anything happening?” | Timed, accessible matching status and clear recovery options |
| Compares offers | “Who can I trust?” | Final fare, ETA, vehicle, rating, verification badge |
| Accepts a driver | “What happens next?” | Full trip card and clear pickup/support instructions |
| No drivers accept | “Am I stuck?” | Retained details plus practical alternatives, never a dead end |

## 5. Booking state contract

| Feature | Loading | Empty | Error | Success | Partial / recovery |
|---|---|---|---|---|---|
| Landmark search | Inline progress; keyboard remains usable | “Try a nearby landmark or use your location” | “Couldn’t search places. Retry or enter a nearby landmark.” | Selectable place result | GPS denied or inaccurate: manual landmark entry stays available |
| Fare guidance | Skeleton range | “Choose route to see a guide” | “Fare guide unavailable; you can still propose an amount” | Recommended range and explanation | Out-of-corridor route: show supported corridor guidance |
| Driver matching | Live elapsed status, announced to screen readers | N/A | “Matching paused. Your request was not sent.” | Ranked offers or confirmed driver | No acceptance: retain details; adjust fare/vehicle, retry, or inspect corridor coverage |
| Driver offers | Refresh state and visible expiry | “No offers yet” | “Offers could not refresh; retry” | Explicit selection confirmation | Expired offer: remove it and explain why without clearing the trip |
| Confirmation | Dispatch-lock progress | N/A | “That offer is no longer available. Pick another.” | Trip card with final fare, pickup, support, share-trip, cancel | Network loss: show request reference and safe retry path |

## 6. Visual and content system

Create `DESIGN.md` and a semantic CSS token layer before rebuilding the page.

### Initial tokens

```css
:root {
  --color-ink: #0A1526;
  --color-ink-strong: #07101D;
  --color-action: #E5A00D;
  --color-action-hover: #CF8E06;
  --color-surface: #FAF8F5;
  --color-surface-raised: #FFFFFF;
  --color-surface-muted: #F4EFEA;
  --color-border: #E8E2D9;
  --color-text: #172033;
  --color-text-muted: #526070;
  --color-success: #16794A;
  --color-danger: #B42318;
  --focus-ring: #0D2342;
  --radius-control: 12px;
  --radius-panel: 20px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
}
```

Use Plus Jakarta Sans for interface and body copy. Keep expressive serif treatment out of booking controls. If a display accent is retained for a short supporting phrase, it must never obscure the request form or function as the primary visual voice.

### Component rules

- Every field has a persistent visible label. A placeholder never substitutes for a label.
- Buttons, field affordances, and offer rows have at least 44px targets.
- Use gold for the primary ride action and meaningful live status only. Do not use it as a general decorative wash.
- Use cards only where there is a discrete choice: the booking surface, a driver offer, or a safety action. Do not rebuild the page as a card grid.
- Support a visible keyboard focus ring, visited-link distinction, `prefers-reduced-motion`, and screen-reader status updates.
- Body text is at least 16px and has at least 4.5:1 contrast.

## 7. Image plan and truth rules

The new image files are currently untracked and are not wired into the application. Do not silently treat them as production assets.

| Asset | Proposed role after approval | Restriction |
|---|---|---|
| `deluxe5.jpg` | Hero or corridor-support image for Keke availability | Verify ownership, location, people/vehicle permission, and commercial rights |
| `pict_large.jpg` | Safety or driver-standard support image | Do not imply the rider is a BetaRide operator unless true |
| `12412090_...jpg` | Local transport/corridor context below the fold | Confirm location, fleet affiliation, and commercial rights |
| `cropped-gokada-1.jpg` | Do not use as BetaRide marketing unless branding/rights are cleared and the context is not misleading | It visibly represents another branded mobility service |
| `shutterstock2308934513.avif` | Use only with an active licence matching public web usage | Keep licence reference with the asset record |
| `OIP.webp`, `OIP (1).webp`, `download.webp` | Evaluate individually during asset review | Treat web-sourced imagery as unapproved until provenance is recorded |

For every publishable asset, record source, licence, consent status, brand/context note, crop variants, file size, and approver. The booking form must render without any of these images.

## 8. Technical architecture for a reliable pilot

Start with a modular monolith. The pilot needs fast iteration, clear ownership, and auditable dispatch, not premature microservices.

```text
Public marketing site / web booking client
            │ HTTPS + WebSocket
            ▼
TypeScript application API
├── Identity and phone verification
├── Landmark and corridor catalogue
├── Fare guidance
├── Ride request and offer lifecycle
├── Driver verification and availability
├── Safety / support events
└── Operations dashboard API
            │
            ├── PostgreSQL + PostGIS (durable transactional data)
            ├── Redis (presence, request fan-out, short-lived locks)
            ├── Background worker (notifications, expiry, reports)
            └── Object storage (driver verification documents, controlled access)
```

### Recommended stack

| Layer | Recommendation | Why |
|---|---|---|
| Public site and rider web app | Next.js + TypeScript, progressively enhanced forms | Keeps static content fast while supporting a real booking flow |
| API | TypeScript Fastify API organized as feature plugins | Clear feature boundaries, validation, testing, WebSocket support without a second framework layer |
| Data | PostgreSQL with PostGIS | Transactions for offer acceptance; spatial queries for nearby eligible drivers |
| Real time | Socket.IO or native WebSocket gateway backed by Redis | Delivers offers and status changes without polling |
| Jobs | BullMQ/Redis worker | Handles offer expiry, notifications, reconciliation, and scheduled reporting |
| Authentication | Phone OTP plus session tokens; role-based access for rider, driver, verifier, operations, admin | Fits the local mobile-first context and separates operational privileges |
| Observability | Structured logs, error tracking, metrics, audit trail | Makes dispatch incidents explainable and recoverable |
| Deployment | Static frontend on Vercel or CDN; containerized API/worker on a managed platform; managed Postgres and Redis | Separates public-page reliability from dispatch processing |

The existing static page may remain online while the rider application is developed behind a feature flag or separate `/book` route. Do not reintroduce the prior serverless deployment pattern that produced 500 errors without an integration test and a staged rollout.

### Repository and deployment boundary

```text
apps/
├── public/     static marketing site
├── booking/    rider booking web application
├── api/        Fastify API
└── worker/     outbox, expiry, notification, and reporting process
packages/
├── contracts/  versioned HTTP/event schemas and generated types only
├── config/     validated runtime configuration schema
└── testkit/    integration fixtures, never production business logic
```

Each `apps/*` package builds, tests, and deploys independently. Applications may depend only on explicit `packages/*` contracts, not direct imports from another application's source tree. A contract change requires compatibility tests and a rollout order that keeps old and new consumers working during deployment.

### Deployment and rollback contract

```text
Backward-compatible migration and contract package
        │
        ▼
API + worker deploy to staging → health checks + synthetic request-to-expiry flow
        │
        ▼
Deploy booking/public clients behind a feature flag
        │
        ▼
Canary pilot corridor → monitor match, error, expiry, and no-show thresholds
        │
        ├── healthy → expand flag/corridor exposure
        └── unhealthy → disable dispatch flag, preserve audit data, roll back compatible app release
```

Every migration and API/event schema must remain compatible through the release window. CI must run contract, integration, and synthetic-dispatch checks before promotion. The operations runbook owns alert thresholds, flag disablement, rollback order, and incident communication.

## 9. Core data model

| Entity | Key fields |
|---|---|
| User | id, phone, role, verification state, consent timestamps |
| Rider profile | user id, display name, saved places, accessibility preferences |
| Driver | user id, verification status, rating, operational zone, wallet status |
| Vehicle | driver id, type, plate, colour, documents, verification expiry |
| Landmark | name, aliases, geometry, corridor, availability state |
| Corridor | origin/destination rule, service window, fare guide, allowed vehicle types |
| Ride request | rider, pickup/destination geometry, vehicle preference, proposed fare, status, expiry |
| Driver offer | request, driver, final fare, ETA, status, expiry, ranking fields |
| Trip | accepted offer, pickup/drop-off events, final state, cancellation reason, settlement note |
| Safety event | trip, reporter, category, severity, escalation state, immutable audit timestamps |
| Asset record | source, licence, consent, approved crop, approved use, expiry |

### Non-negotiable integrity rules

- Only a physically verified, active driver with a valid vehicle and positive wallet status can receive a request.
- One offer can be accepted exactly once. Acceptance must be transactional and revoke competing offers.
- A driver cannot make a new offer while assigned to an active trip.
- Fare and status changes are audit logged with actor, timestamp, and reason.
- Exact rider and driver contact details are withheld until a dispatch is confirmed.
- Location retention, support access, and sharing rules must be documented before collecting live trip data.

### Driver availability and proximity contract

```text
Driver application heartbeat
        │
        ▼
Redis presence key: driver id + coarse location + availability intent + TTL
        │
        ▼
Matching service filters candidates by corridor/proximity/presence freshness
        │
        ▼
Postgres recheck: verified driver + valid vehicle + no active trip + operational eligibility
        │
        ▼
Offer creation; acceptance transaction repeats the durable eligibility check
```

Postgres is authoritative for driver verification, vehicle validity, active-trip state, and operational-zone eligibility. Redis only stores expiring presence and coarse matching location. Heartbeats must expire automatically; stale drivers receive no new offers. If Redis is unavailable, pause new automated matching and return an honest recoverable status rather than falling back to an unbounded database scan.

### Matching-query performance contract

Phase 0 must configure and document, per pilot corridor: search radius, maximum candidate count, maximum presence age, match-window deadline, and the p95 candidate-selection target. The matcher must:

1. Filter to the request's active corridor and durable Postgres eligibility.
2. Filter to fresh Redis presence and coarse proximity.
3. Rank and cap candidates before notification.
4. Return a clear no-match result when the bounded window ends.

Database migrations must add and test the indexes supporting corridor/eligibility filtering and pilot-scale candidate selection. The acceptance criterion is a measured p95 against representative pilot fixtures, not an assumed benchmark.

### Pilot privacy and sensitive-access contract

- Collect precise pickup, destination, and trip-event data only for dispatch, support, safety, fraud prevention, and legally required recordkeeping.
- Before dispatch launch, the accountable privacy owner must approve a purpose-specific retention schedule, the rider-facing privacy notice, and deletion/anonymization jobs.
- Exact locations are available only to the rider/driver during an active trip and to named need-to-know support or safety roles afterward. All staff access requires a purpose code and is audit logged.
- Default analytics use aggregated or redacted corridor-level data. Product analytics must not use full trip coordinates unless separately approved under the retention schedule.
- Access controls, audit records, scheduled deletion/anonymization, export, and authorized incident review are release-gated test cases.

### Offer acceptance transaction contract

```text
POST /v1/offers/:id/accept  +  Idempotency-Key
        │
        ▼
Postgres transaction
├── return prior result when the idempotency key already completed
├── lock ride_request and selected driver_offer rows
├── verify request=open, offer=pending, offer not expired, driver=eligible
├── enforce one accepted offer per request with a database constraint
├── set selected offer=accepted and competing offers=expired
├── create exactly one trip and reserve the driver
├── write an outbox event in the same transaction
└── commit
        │
        ▼
Worker publishes trip.confirmed; client can also recover from GET /ride-requests/:id
```

Redis may be used for presence, fan-out, and job transport, but not as the correctness lock for offer acceptance. Lock conflicts and serialization failures return a recoverable response that reloads current request state.

## 10. API and real-time contract

| Capability | Endpoint / event | Notes |
|---|---|---|
| Search landmark | `GET /v1/landmarks?q=` | Return aliases and corridor eligibility; rate limit anonymous use |
| Estimate fare | `POST /v1/fare-guidance` | Return a range and explanation, never a false guarantee |
| Create request | `POST /v1/ride-requests` | Requires verified phone before dispatch |
| Request status | `GET /v1/ride-requests/:id` | Safe polling fallback to WebSockets |
| Driver offer | `POST /v1/ride-requests/:id/offers` | Validate driver eligibility and one-counter-offer policy |
| Accept offer | `POST /v1/offers/:id/accept` | Idempotency key required; atomic lock |
| Rider updates | `ride-request.updated`, `offer.created`, `trip.confirmed` | Accessible UI must announce meaningful changes |
| Driver updates | `request.available`, `offer.accepted`, `offer.expired` | Never require a driver to type while moving |

### Realtime delivery and recovery contract

Every request, offer, and trip transition stores a monotonic `state_version`, a server timestamp, and an audit actor in Postgres. Realtime delivery is advisory, never authoritative:

```text
Committed state transition + outbox row
        │
        ▼
Worker publishes `{resource, id, state_version, event_type}`
        │
        ▼
Authenticated client receives a notification
        │
        ├── version is newer → GET /v1/ride-requests/:id and render durable state
        └── version is stale/duplicate → ignore

Disconnect/reconnect → authenticate again → reload active request(s) → reconcile by state_version
```

Do not put fare, identity, contact details, or location payloads in fan-out messages. Client actions must revalidate request state at the API boundary. Driver-facing notifications have the same recovery rule and expire visibly when the API reports them no longer actionable.

### Identity and abuse-control contract

```text
Guest may search landmarks, choose vehicle, and view fare guidance
        │
        ▼
Request dispatch requires OTP verification
        │
        ▼
Short-lived rider session bound to phone verification
        │
        ▼
Rate-limit and policy checks before broadcasting:
phone + session/device + IP + corridor + active-request count
        │
        ├── allowed → create request and broadcast
        └── blocked → clear recovery message, retry window, auditable reason code
```

Set explicit launch limits in configuration, not source code. Limit OTP sends, verification attempts, active requests, cancellation/retry churn, and dispatch requests by phone/session/IP. Do not log OTP values, full phone numbers, or precise locations in application logs. Operations may override a false positive with an audited action.

## 11. Operations and safety

### Before live dispatch

- Establish the driver verification checklist: NIN policy, guarantor process, vehicle inspection, photo/plate capture, background checks where lawful, and renewal dates.
- Define the operating corridor catalogue with park/union alignment, service hours, landmark names, and escalation contacts.
- Train operations staff to pause drivers, resolve no-show disputes, handle safety reports, and communicate service outages.
- Publish rider-facing rules for fares, cancellation, cash/bank-transfer settlement, data use, and emergency support.
- Conduct a legal, privacy, and insurance review for the actual operating jurisdiction before accepting production rides.

### Operations console

The first operations console should prioritize dispatch health over dashboard decoration:

- Active request queue with status, age, corridor, and safe escalation actions.
- Driver verification queue with document expiry alerts.
- Corridor availability and no-match-rate view.
- Safety/support event queue with restricted access and audit logs.
- Incident timeline for each ride request and trip.

### Dispatch degradation and recovery contract

```text
Health check or authorized operations action
        │
        ▼
Set corridor dispatch state: active | paused | recovering
        │
        ├── active: accept and match new requests
        ├── paused: reject new dispatch with clear status/retry guidance
        └── recovering: run dependency and synthetic-dispatch checks before active

Existing trips, trip status, safety reporting, and support remain available in every state.
```

Only authorized operations roles may change a corridor state. Every change records actor, reason, timestamp, affected corridor, and recovery evidence. Automated health checks may pause matching; resumption requires documented authorized review after health and synthetic-flow checks pass.

## 12. Delivery roadmap

### Phase 0: Validate before building (1–2 weeks)

- Confirm pilot corridors, landmark vocabulary, vehicle categories, fare guidance, service hours, driver verification policy, and support contacts.
- Audit every candidate image and build the asset record.
- Test the paper or clickable booking flow with at least 5 prospective riders and 5 drivers in the pilot zone.
- Define success thresholds for match rate, no-match recovery, offer response time, and cancellation.

### Phase 1: Booking-first public experience (2–3 weeks)

- Create `DESIGN.md`, semantic CSS tokens, and accessible reusable controls.
- Replace the current text-first hero with the approved split booking hero.
- Build landmark search, vehicle selection, client-side validation, fare guidance placeholder, and guest-to-phone-verification handoff.
- Implement responsive, keyboard, screen-reader, and slow-network behavior.
- Ship behind a feature flag and measure request-start conversion.

### Phase 2: Closed pilot dispatch (3–5 weeks)

- Build rider, driver, vehicle, landmark, corridor, request, offer, and trip modules.
- Add phone verification, driver availability, request fan-out, offer expiry, ranked offers, atomic acceptance, and rider updates.
- Provide a minimal driver interface designed for parked use and a minimal operations queue.
- Pilot with a limited, verified driver cohort and the approved corridors only.

### Phase 3: Trust and operations hardening (2–4 weeks)

- Add driver/vehicle verification expiry, audit logs, safety/support events, cancellation handling, and incident playbooks.
- Add observability, request correlation IDs, alerting for matching failures, and daily operational reports.
- Conduct usability testing, accessibility testing, failure-mode testing, and load tests for matching bursts.

### Phase 4: Expand deliberately

- Expand corridors only when the pilot meets supply, match-time, cancellation, and safety thresholds.
- Add preferred places, ride history, rebooking, feedback, and payment integrations only after operational policy supports them.
- Consider native mobile apps after the PWA/web booking flow proves repeat use and operations can support the added surface area.

## 13. Verification plan

### Test stack

| Layer | Tooling | Purpose |
|---|---|---|
| Unit and API/plugin tests | Vitest + Fastify `inject()` | Validation, authorization, error mapping, state-machine transitions |
| Infrastructure integration | Testcontainers with PostgreSQL/PostGIS and Redis | Constraints, row locking, idempotency, transactional outbox, TTL presence, worker recovery |
| Rider browser journeys | Playwright | Booking form, OTP handoff, accessible errors, offer selection, reconnect recovery |
| Accessibility | Playwright plus automated accessibility scan and manual screen-reader review | WCAG 2.2 AA release evidence |

CI must provide Docker-capable runners for Testcontainers. Mocked tests may support fast feedback but cannot replace an integration test for the offer-acceptance, outbox, Redis TTL, or authorization boundaries.

| Area | Verification |
|---|---|
| Booking clarity | Five-second comprehension test: users identify pickup, destination, vehicle choice, and primary action |
| Mobile | Test 320px, 375px, and 768px widths; Android Chrome and iOS Safari; virtual keyboard behavior |
| Accessibility | Automated scan plus keyboard-only and screen-reader checks; manual contrast audit |
| Network resilience | Slow 3G and offline-transition tests; booking form visible before image completion |
| Dispatch integrity | Concurrency tests that attempt simultaneous acceptance of one offer |
| Real time | Connection-loss, reconnection, offer expiry, and duplicate-event tests |
| Safety | Role-based-access tests, audit-log tests, support escalation tabletop exercise |
| Image truth | Asset register review before each public deployment |

### Pilot release-gate suite

Promotion to a live corridor is blocked unless the following pass:

- Testcontainers integration tests prove atomic/idempotent acceptance, competing-offer expiry, outbox recovery, driver eligibility recheck, Redis TTL expiry, authorization/privacy controls, and per-corridor circuit-breaker state.
- Playwright proves landmark entry, OTP handoff, accessible validation errors, offer selection, no-match recovery, reconnect resynchronization, and the booking surface under slow-network media loading.
- CI proves contract compatibility across booking, API, and worker applications.
- Staging synthetic dispatch proves request creation through controlled expiry or confirmation before each canary rollout.

### Coverage diagram

```text
CODE PATHS                                      RIDER / OPERATIONS FLOWS
[GAP] API: POST /ride-requests                 [GAP] Rider starts a request
  ├── OTP/session/rate policy                     ├── landmark + vehicle + fare guidance
  ├── active-request limit                        ├── OTP handoff and recoverable error
  └── corridor dispatch state                     └── no-match retry path
[GAP] API: POST /offers/:id/accept              [GAP] Rider accepts an offer [→E2E]
  ├── idempotency replay                           ├── receives latest durable state
  ├── row lock + constraint                        ├── retries safely after network loss
  ├── competing-offer expiry                       └── sees clear expired-offer recovery
  └── outbox write
[GAP] Worker: outbox and expiry                 [GAP] Driver availability [→E2E]
  ├── at-least-once publication                    ├── fresh heartbeat receives candidate offer
  ├── duplicate event tolerance                    └── stale heartbeat receives none
  └── failed publish retry
[GAP] Realtime recovery                          [GAP] Operations degradation control [→E2E]
  ├── stale notification ignored                   ├── pause corridor blocks new dispatch
  └── reconnect fetches newer state                └── existing trip/support remains reachable

COVERAGE: 0 planned paths implemented/tested; release gate requires ★★★ behavior,
error, and recovery coverage for every row above.
```

## 15a. Engineering review implementation tasks

- [ ] **E1 (P1, human: ~3 days / CC: ~2 hr)** — Scaffold the TypeScript monorepo and independent application pipelines.
  - Surfaced by: R8 multi-app contract.
  - Modules: `apps/public`, `apps/booking`, `apps/api`, `apps/worker`, `packages/contracts`, `packages/config`, `packages/testkit`.
  - Verify: each app builds independently; contract package has compatibility checks.
- [ ] **E2 (P1, human: ~4 days / CC: ~3 hr)** — Implement Fastify identity, corridor, request, offer, and trip plugins with validated contracts.
  - Surfaced by: R1, R3.
  - Verify: Vitest plugin/API tests for validation, authorization, limits, and error mapping.
- [ ] **E3 (P1, human: ~4 days / CC: ~3 hr)** — Implement Postgres request/offer/trip state machine, transaction, constraints, idempotency, and outbox.
  - Surfaced by: R2.
  - Verify: Testcontainers concurrency, retry, and worker-recovery tests.
- [ ] **E4 (P1, human: ~3 days / CC: ~2 hr)** — Implement Redis TTL presence, bounded candidate matching, and realtime advisory updates.
  - Surfaced by: R4, R6, R10.
  - Verify: fresh/stale presence, candidate cap, duplicate notice, and reconnect-resync tests.
- [ ] **E5 (P1, human: ~3 days / CC: ~2 hr)** — Build privacy, audit, operations circuit breaker, and degraded-dispatch controls.
  - Surfaced by: R5, R11.
  - Verify: role/purpose access, deletion job, pause/recover, and existing-trip availability tests.
- [ ] **E6 (P1, human: ~3 days / CC: ~2 hr)** — Build the contract release gate and staging synthetic-dispatch check.
  - Surfaced by: D14.
  - Verify: Docker-capable CI runs Testcontainers and Playwright before canary enablement.

## 15b. Worktree parallelization strategy

| Step | Modules touched | Depends on |
|---|---|---|
| Foundation | monorepo, contracts, config, testkit | — |
| Dispatch core | api, contracts, database migrations | Foundation |
| Booking client | booking, contracts | Foundation |
| Presence/realtime worker | worker, api, contracts | Dispatch core |
| Operations/privacy | api, worker, booking | Dispatch core |
| Release gate | CI, all apps | Dispatch core, booking client, presence/realtime, operations/privacy |

Parallel lanes: Lane A: Dispatch core → presence/realtime. Lane B: Booking client. Lane C: asset/design work from the prior plan. Merge A, B, and C before operations/privacy and release-gate work. Shared `packages/contracts` changes are sequential and require compatibility checks.

## 15c. Not in scope from engineering review

- A specific cloud vendor is deferred until Phase 0 validates Nigerian data residency, SMS/OTP provider coverage, support staffing, and operating cost. The compatibility, staging, flag, and rollback contract is mandatory regardless of vendor.
- Redis Streams event replay is deferred. Durable versioned API reads provide the approved reconnect path for the pilot.
- Native mobile applications remain outside the first pilot; Playwright covers the responsive booking web app.

## 15d. What already exists

- The current project is a static public site: `index.html`, `styles.css`, and `js/script.js`.
- `vercel.json` supports the current static deployment but does not supply API, worker, database, Redis, CI, or test infrastructure.
- Reuse the public page as the marketing surface only. Build booking, API, worker, and operations modules as new code under the approved monorepo layout.

## 15e. Engineering review completion summary

- Scope Challenge: scope accepted as-is.
- Architecture Review: 7 issues found and resolved through D3-D8, D11-D13.
- Code Quality Review: 2 issues found and resolved through D3 and D10.
- Test Review: diagram produced; release-gate suite approved through D9 and D14.
- Performance Review: 1 issue found and resolved through D12.
- Failure modes: 0 critical gaps remain after approved circuit-breaker, recovery, and release-gate contracts.
- Outside voice: unavailable in this run because no configured external reviewer was available; no independent coverage credit.
- Unresolved decisions: 0 in this review.

## 14. Metrics and pilot review cadence

Track these weekly, per corridor and vehicle type:

- Request-start rate and request-completion rate.
- Landmark-search success rate and GPS-fallback usage.
- Median time to first offer and to confirmed dispatch.
- Match rate, no-match rate, guided-retry conversion, cancellation rate, and completion rate.
- Fare deviation from guidance and driver acceptance rate.
- Safety/support events per 100 trips and median resolution time.
- Accessibility defects, JavaScript errors, API errors, p95 latency, and image-weight budget.

Run a weekly operations review during the pilot. Expand only after two consecutive weeks meeting agreed safety, matching, and support thresholds.

## 15. Implementation tasks

- [ ] **T1 (P1, human: ~1 day / CC: ~30 min)** — Create `DESIGN.md` and semantic token layer.
  - Surfaced by: Pass 5 design-system gap.
  - Files: `DESIGN.md`, `styles.css`.
  - Verify: token review plus contrast checks.
- [ ] **T2 (P1, human: ~2 days / CC: ~45 min)** — Rebuild the public hero as an accessible booking-first request surface.
  - Surfaced by: Pass 1 information architecture decision.
  - Files: `index.html`, `styles.css`, `js/script.js`.
  - Verify: five-second test; keyboard and mobile test.
- [ ] **T3 (P1, human: ~2 days / CC: ~1 hr)** — Implement resilient client booking states for landmark search, fare guidance, matching, no-match recovery, and offers.
  - Surfaced by: Pass 2 interaction-state decisions.
  - Files: new booking modules and tests.
  - Verify: scripted state matrix and accessibility announcements.
- [ ] **T4 (P1, human: ~4 days / CC: ~2 hr)** — Build the pilot request/offer API with atomic offer acceptance and audit logs.
  - Surfaced by: the approved driver-offer flow.
  - Files: API, database migrations, integration tests.
  - Verify: concurrent acceptance test and idempotency test.
- [ ] **T5 (P1, human: ~1 day / CC: ~20 min)** — Create and enforce the production asset register.
  - Surfaced by: Pass 7 photo publishing policy.
  - Files: `assets/ASSET_REGISTER.md` and deployment checks.
  - Verify: no public image lacking recorded licence and approved context.
- [ ] **T6 (P2, human: ~3 days / CC: ~90 min)** — Build the closed-pilot driver and operations surfaces.
  - Surfaced by: rider trust and operational requirements.
  - Files: driver/operations application modules.
  - Verify: role-based test scenarios and dispatch drill.
- [ ] **T7 (P1, human: ~1 day / CC: ~30 min)** — Add WCAG 2.2 AA and performance checks to CI.
  - Surfaced by: Pass 6 quality baseline.
  - Files: CI configuration, accessibility and performance tests.
  - Verify: automated checks plus manual screen-reader review.

## 16. Not in the first pilot

- Native iOS and Android applications. The responsive web booking flow must prove the rider journey first.
- City-wide availability. Start with verified corridors and expand based on supply and safety data.
- Open-ended driver/rider chat. It creates driver distraction and inconsistent negotiation.
- Automated surge pricing. The launch model uses transparent fare guidance and one structured counter-offer.
- Unverified photography or imagery that implies affiliation with BetaRide.

## 17. Risks and release gates

| Risk | Mitigation | Gate |
|---|---|---|
| Not enough verified driver supply | Launch only covered corridors and show honest availability | No public dispatch until pilot supply target is met |
| Misleading imagery | Asset register, licensing and affiliation review | No asset reaches production without approval |
| Double booking / race conditions | Transactional offer acceptance and idempotency | Concurrency tests must pass |
| Low connectivity | Progressive enhancement, small media, reconnect/retry behavior | Slow-network test must pass |
| Unsafe driver disclosure | Staged information release and role-based access | Privacy/security review must pass |
| Operations unable to intervene | Minimal operations console and incident playbook | Tabletop exercise must pass |

## Engineering review scope record

- **Target:** `BETARIDE_BUILD_PLAN.md`.
- **Scope Challenge:** The plan contains more than eight planned modules and multiple deployable processes.
- **Feature cuts:** None proposed. The booking, dispatch, safety, and operations features remain in scope for their stated phases.
- **Structure decision:** D2, option A, selected by the user. Retain the original multi-app arrangement: public site, separate booking web app, API, and background worker deploy independently.
- **Accepted scope:** Build the approved phased pilot without reducing product behavior; settle its remaining framework, transaction, deployment, and verification contracts in this engineering review.
- **Pending remedies:** API framework selection, offer-acceptance transaction contract, identity/OTP abuse controls, realtime delivery/recovery contract, and release-gate test coverage.

## Engineering decision ledger

### R1: API framework

- **Finding:** [P1] (confidence: 10/10) `BETARIDE_BUILD_PLAN.md:211` left the API framework undecided.
- **Plan baseline:** NestJS with Fastify adapter, or direct Fastify.
- **Runtime evidence:** No backend scaffold or `package.json` exists in the repository; this is a plan-only decision.
- **Actual answer:** D3, option B, selected by the user.
- **Accepted scope:** Use direct Fastify with feature plugins for identity, corridors, fare guidance, dispatch, offers, trips, operations, and shared infrastructure. Retain the separate API deployment chosen in D2.
- **State:** Approved.

### R2: Offer acceptance correctness

- **Finding:** [P1] (confidence: 10/10) `BETARIDE_BUILD_PLAN.md:240,255` required atomic acceptance but did not define its transaction boundary.
- **Plan baseline:** “Transactional” and “atomic lock” only.
- **Runtime evidence:** No backend exists; the requirement is a proposed production invariant.
- **Actual answer:** D4, option A, selected by the user.
- **Accepted scope:** Enforce offer acceptance with a Postgres transaction, row locks, database constraint, idempotency key, competing-offer expiry, trip creation, driver reservation, and transactional outbox. Redis is not a correctness lock.
- **State:** Approved.

### R3: Identity and dispatch-abuse boundary

- **Finding:** [P1] (confidence: 10/10) `BETARIDE_BUILD_PLAN.md:37,252` required phone verification but had no abuse-control contract.
- **Plan baseline:** Guest planning with verified phone before dispatch.
- **Runtime evidence:** No identity provider, session implementation, or request limiter exists in the repository.
- **Actual answer:** D5, option A, selected by the user.
- **Accepted scope:** Guest planning remains available. Dispatch requires OTP verification and a short-lived rider session, with configurable limits by phone, session/device, IP, corridor, and active-request count, plus safe logging and audited operations overrides.
- **State:** Approved.

### R4: Realtime delivery and recovery

- **Finding:** [P1] (confidence: 10/10) `BETARIDE_BUILD_PLAN.md:213,256-257,324` named realtime transport and reconnection testing but not a recovery contract.
- **Plan baseline:** WebSockets or Socket.IO, Redis fan-out, and a polling fallback.
- **Runtime evidence:** No realtime implementation exists; this is a proposed production contract.
- **Actual answer:** D6, option A, selected by the user.
- **Accepted scope:** Persist a monotonic state version with every request/offer/trip transition. Realtime messages contain only resource/version/event metadata; authenticated clients fetch durable API state, discard stale messages, and resynchronize after reconnect.
- **State:** Approved.

### R5: Pilot location and access policy

- **Finding:** [P1] (confidence: 10/10) `BETARIDE_BUILD_PLAN.md:245,284,390` required a privacy policy but left retention and access undefined.
- **Plan baseline:** Document location retention, support access, and sharing rules before collecting live data.
- **Runtime evidence:** No production data store, access-control implementation, or privacy notice exists in the repository.
- **Actual answer:** D7, option A, selected by the user.
- **Accepted scope:** Adopt minimum-data collection with purpose-specific retention, role- and purpose-gated exact-location access, immutable access audits, redacted default analytics, deletion/anonymization jobs, and a launch-gated rider privacy notice.
- **State:** Approved.

### R6: Driver availability and proximity

- **Finding:** [P1] (confidence: 10/10) `BETARIDE_BUILD_PLAN.md:199-201,212,229,240` required nearby-driver broadcasting without a current-location or stale-presence contract.
- **Plan baseline:** PostGIS for spatial queries and Redis for presence/fan-out.
- **Runtime evidence:** No driver client, heartbeat service, Redis integration, or data schema exists in the repository.
- **Actual answer:** D8, option A, selected by the user.
- **Accepted scope:** Use Postgres for durable eligibility and Redis TTL keys for coarse current location and availability. Match only fresh presence, recheck eligibility during offer creation and acceptance, and pause automated matching if Redis is unavailable.
- **State:** Approved.

### R7: Test stack

- **Finding:** [P1] (confidence: 10/10) `BETARIDE_BUILD_PLAN.md:315-325` required verification but no test framework or real-infrastructure strategy.
- **Plan baseline:** Named checks only; no repository test tooling exists.
- **Runtime evidence:** Static probe found no `package.json`, test config, or existing test files.
- **Actual answer:** D9, option A, selected by the user.
- **Accepted scope:** Use Vitest for unit/API tests, Testcontainers with Postgres/PostGIS and Redis for infrastructure integration, and Playwright for rider-critical browser tests; Docker-capable CI is required.
- **State:** Approved.

### R8: Multi-app repository organization

- **Finding:** [P2] (confidence: 10/10) `BETARIDE_BUILD_PLAN.md:190-217,296-301` specified separate deployables but no contract-sharing boundary.
- **Plan baseline:** Four deployment roles with no repository layout.
- **Runtime evidence:** The repository currently contains only a static website, so no existing application boundary can be reused.
- **Actual answer:** D10, option A, selected by the user.
- **Accepted scope:** Use one TypeScript monorepo with independently deployable `public`, `booking`, `api`, and `worker` applications and narrow versioned shared packages. Disallow direct cross-application source imports.
- **State:** Approved.

### R9: Deployment and rollback contract

- **Finding:** [P1] (confidence: 10/10) `BETARIDE_BUILD_PLAN.md:217,303-307,397-402` required managed deployment and operational recovery without a promotion or rollback sequence.
- **Plan baseline:** Static frontend, managed API/worker/data services, staging rollout mentioned without a contract.
- **Runtime evidence:** Existing `vercel.json` is static-site-only; no CI, API, worker, or deployment configuration exists.
- **Actual answer:** D11, option A, selected by the user.
- **Accepted scope:** Use compatibility-first migrations/contracts, staging health and synthetic-dispatch tests, feature flags, canary corridor rollout, metrics thresholds, and operator-owned rollback/runbooks.
- **State:** Approved.

### R10: Matching-query performance

- **Finding:** [P2] (confidence: 9/10) `BETARIDE_BUILD_PLAN.md:199-201,212,298-300,323-324` proposed nearby-driver matching without query bounds, indexes, or a performance target.
- **Plan baseline:** PostGIS spatial queries and Redis presence.
- **Runtime evidence:** No schema or representative pilot dataset exists, so exact limits are unverified and must be calibrated in Phase 0.
- **Actual answer:** D12, option A, selected by the user.
- **Accepted scope:** Use a corridor-aware bounded candidate query with configurable radius/count/presence age/match deadline, indexed eligibility data, capped notifications, explicit no-match outcome, and measured pilot-scale p95 verification.
- **State:** Approved.

### R11: Operational fail-safe policy

- **Finding:** [P1] (confidence: 10/10) `BETARIDE_BUILD_PLAN.md:283,397-402` described an operations console and dependency failure but not a coordinated safe state.
- **Plan baseline:** Pause automated matching on Redis unavailability and use incident playbooks.
- **Runtime evidence:** No operations console or health-check implementation exists in the repository.
- **Actual answer:** D13, option A, selected by the user.
- **Accepted scope:** Add an auditable per-corridor dispatch circuit breaker with `active`, `paused`, and `recovering` states. Existing-trip support and safety remain available; authorized operations resumes matching only after health and synthetic-flow checks.
- **State:** Approved.

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | — | Not run |
| Outside Review | unavailable | Independent 2nd opinion | 0 | unavailable | No external reviewer configured for this run |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 1 | clean | 10 issues resolved, 0 unresolved |
| Design Review | `/plan-design-review` | UI/UX gaps | 1 | clean | score: 3/10 → 10/10, 10 decisions |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | — | Not run |

**OUTSIDE COVERAGE:** unavailable for engineering review; no independent reviewer completed.

**VERDICT:** Design + Engineering cleared. The pilot is ready to implement once Phase 0 supplies the configured operational values and approved asset/legal records.

NO UNRESOLVED DECISIONS
