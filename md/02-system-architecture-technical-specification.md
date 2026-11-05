---
title: "System Architecture & Technical Specification"
subtitle: "Master Document 2 of 5 — The Universal Execution Framework"
version: "1.0.0"
date: "October 2026"
author: "System Discovery Team"
status: "Template — Ready for Use"
---

<div style="text-align: center; page-break-after: always; padding-top: 200px;">

# SYSTEM ARCHITECTURE & TECHNICAL SPECIFICATION

## Master Document 2 of 5

### The Universal Execution Framework

---

**Version:** 1.0.0
**Date:** October 2026
**Prepared By:** ______________________________
**Prepared For:** ______________________________
**Project Name:** ______________________________

---

*This document is part of the Universal Execution Framework — a suite of 5 master documents designed to guide the discovery, design, build, deployment, and operation of any system, for any organization, at any scale.*

</div>

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | October 2026 | — | Initial template release |
| | | | |
| | | | |

---

## Table of Contents

1. [How to Use This Document](#how-to-use-this-document)
2. [Section A: System Scope & Boundaries (Q1–Q5)](#section-a-system-scope--boundaries-q1q5)
3. [Section B: Architecture & Technology Choices (Q6–Q10)](#section-b-architecture--technology-choices-q6q10)
4. [Section C: Data & Integration Strategy (Q11–Q15)](#section-c-data--integration-strategy-q11q15)
5. [Section D: Scalability & Future-Proofing (Q16–Q20)](#section-d-scalability--future-proofing-q16q20)
6. [Scoring Summary](#scoring-summary)
7. [Decision Matrix](#decision-matrix)
8. [Readiness Checklist](#readiness-checklist)
9. [Appendix](#appendix)

---

## How to Use This Document

This document is **Document 2 of 5** in the Universal Execution Framework. It focuses on defining the **technical blueprint** — the WHAT and HOW of the system you're about to build.

### Prerequisites

Before starting this document, ensure that **Document 1: Business Discovery & Strategic Alignment** has been completed with a readiness score of at least 36/60 and no individual question scored 0. The business context established in Document 1 directly informs every architectural decision made here.

### Instructions

1. **Before technical planning sessions**, review all 20 questions to identify which require input from different specialists (backend, frontend, security, infrastructure).
2. **Involve the right people** — this document requires input from technical leads, architects, security specialists, and operations engineers. Business stakeholders should review but not drive answers.
3. **Score each answer** using the 0–3 rubric provided. A question scored 0 or 1 indicates a technical risk that must be resolved before development begins.
4. **Complete the Decision Matrix** at the end to lock down foundational technology choices.
5. **Use the Readiness Checklist** to determine if you have enough technical clarity to proceed to Document 3 (Design & User Experience Strategy).

### Scoring Guide

| Score | Label | Meaning |
|-------|-------|---------|
| 0 | Not Addressed | The question was not answered or is unknown |
| 1 | Partially Addressed | A vague or incomplete answer was given |
| 2 | Fully Addressed | A clear, actionable answer was provided |
| 3 | Exceptional | Answer includes evidence, benchmarks, or architectural depth |

### When to Use

- **Greenfield projects** — Define the architecture before writing the first line of code
- **System migrations** — Map the current architecture and plan the target state
- **Scale-up phases** — Revisit when the system outgrows its original design
- **Post-incident reviews** — Use relevant sections to identify architectural weaknesses exposed by failures

---

## Section A: System Scope & Boundaries (Q1–Q5)

*This section draws the precise lines around what the system does and does not do. Ambiguous boundaries lead to feature creep, integration nightmares, and teams building in conflicting directions. Every hour spent clarifying scope here saves ten hours of rework later.*

---

### Q1: What are the exact functional requirements — what must the system DO?

**Why This Matters:**
Functional requirements are the contract between what stakeholders expect and what engineers build. Vague requirements like "manage customers" produce vague systems. Specific requirements like "allow a cashier to search customers by phone number and display their purchase history within 2 seconds" produce specific, testable features. Every requirement not captured here will surface as a surprise mid-development — and surprises during development are expensive.

**Expected Answer Format:**
A structured requirements table organized by module/feature area, with each requirement having a unique ID, description, priority (Must/Should/Could/Won't — MoSCoW), acceptance criteria, and the Document 1 question it traces back to.

**Example Answer:**

> | ID | Module | Requirement | Priority | Acceptance Criteria | Traces To |
> |----|--------|------------|----------|--------------------|-----------| 
> | FR-001 | Lead Management | System shall allow agents to create a new lead with name, phone, location, and category | Must | Lead created with all fields, appears in agent's lead list within 1 second | Doc1 Q2, Q6 |
> | FR-002 | Lead Management | System shall prevent duplicate leads by matching on phone number | Must | Duplicate warning shown when phone number matches existing lead (fuzzy match ±1 digit) | Doc1 Q2 |
> | FR-003 | Visit Tracking | Agent can log a client visit with one tap, attaching GPS location and timestamp | Must | Visit logged with location accuracy ≤50m, works offline | Doc1 Q6 |
> | FR-004 | Reporting | Manager dashboard shows pipeline by agent, region, and stage | Must | Dashboard loads in <3 seconds with up to 10,000 leads | Doc1 Q4 |
> | FR-005 | Notifications | System sends WhatsApp notification to agent when a new lead is assigned | Should | Notification delivered within 60 seconds via WhatsApp Business API | Doc1 Q5, Q6 |
> | FR-006 | Analytics | AI-powered lead scoring based on interaction history | Could | Accuracy ≥70% in predicting conversion (measured after 6 months of data) | Doc1 Q10 |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q2: What are the non-functional requirements (performance, availability, security)?

**Why This Matters:**
Non-functional requirements (NFRs) define how well the system works, not what it does. A system that does everything the user wants but takes 30 seconds to load each page is a system nobody uses. NFRs drive architectural decisions more than functional requirements do — the difference between a monolith and microservices, between a single database and a distributed system, between a static site and a real-time application is almost always driven by NFRs, not features.

**Expected Answer Format:**
A categorized NFR table covering at minimum: performance (response times, throughput), availability (uptime targets), security (authentication, encryption), reliability (data durability, recovery), and usability (accessibility, browser support). Each NFR should have a measurable threshold and a rationale.

**Example Answer:**

> | Category | Requirement | Threshold | Rationale |
> |----------|------------|-----------|-----------|
> | Performance | Page load time (p95) | < 2 seconds on 3G connection | Field agents use mid-range phones on Nigerian mobile networks |
> | Performance | API response time (p99) | < 500ms | Dashboard must feel responsive for managers |
> | Performance | Concurrent users | 500 simultaneous without degradation | Peak usage during Monday morning team check-ins |
> | Availability | Uptime | 99.5% (allows ~44 hours downtime/year) | Non-critical business tool, not life-safety |
> | Availability | Offline capability | Full CRUD operations offline for up to 72 hours | Agents in areas with no connectivity for days |
> | Security | Authentication | OAuth 2.0 + MFA for admin users | NDPR compliance + protect customer data |
> | Security | Data encryption | AES-256 at rest, TLS 1.3 in transit | Regulatory requirement + industry standard |
> | Security | Session timeout | 30 minutes inactive (mobile), 15 minutes (web admin) | Balance security with field usability |
> | Reliability | Data durability | Zero data loss for completed transactions | Business-critical customer and financial data |
> | Reliability | Recovery | RPO: 1 hour, RTO: 4 hours | Acceptable for business operations (not financial trading) |
> | Usability | Browser support | Chrome 90+, Safari 14+, Samsung Internet 15+ | Covers 95% of target user devices (from analytics) |
> | Usability | Language | English (primary), Pidgin English (notifications) | Matches user demographics from Q6 research |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q3: What is the system boundary — what's in scope vs out of scope?

**Why This Matters:**
Every system has a boundary — a line that separates "things this system handles" from "things that are someone else's problem." Without a clear boundary, the system grows tentacles into every adjacent domain: it starts as a CRM and ends up doing payroll, inventory management, and email marketing — poorly. Defining the boundary protects the team from scope creep and clarifies integration points. Equally important is documenting what's explicitly OUT of scope, so stakeholders can't claim it was "implied."

**Expected Answer Format:**
A two-column boundary diagram (In Scope / Out of Scope) organized by capability area, plus a list of grey-zone items that need a decision. Each out-of-scope item should reference what system or process handles it instead.

**Example Answer:**

> **System Boundary: Field Sales Management Platform**
>
> | In Scope | Out of Scope | Handled By |
> |----------|-------------|------------|
> | Lead creation, assignment, tracking | Lead generation/marketing campaigns | Marketing team + Mailchimp |
> | Client visit logging with GPS | GPS fleet tracking/route optimization | Separate fleet system (future) |
> | Sales pipeline and forecasting | Invoice generation and payment processing | QuickBooks (API integration) |
> | Manager dashboards and reports | Executive BI analytics (cross-department) | Power BI / Tableau (data export) |
> | User authentication and role-based access | Identity management for all company systems | Microsoft Entra ID (SSO integration) |
> | WhatsApp notifications | Full customer communication (email, SMS, chat) | Separate communications platform |
> | Offline data sync | Offline video/image processing | Not supported in v1 |
>
> **Grey Zone (Needs Decision):**
> - Customer complaint tracking — currently in scope, but could be deferred to a dedicated support system
> - Commission calculation — agents want it, but Finance uses a complex Excel model that may not translate easily
> - Inter-branch lead transfers — needed by month 6, but adds significant complexity to data model

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q4: What external systems, APIs, or data sources must this system integrate with?

**Why This Matters:**
No modern system exists in isolation. Integration points are where the most painful bugs live — different data formats, inconsistent availability, version mismatches, rate limits, and authentication headaches. Each integration adds a dependency you don't control. This question maps every external touchpoint so the team can assess complexity, plan for failure modes, and negotiate API contracts early. Discovering an integration requirement mid-development typically costs 3-5x more than discovering it here.

**Expected Answer Format:**
An integration inventory table listing each external system, the type of integration (API, file transfer, database link, webhook), data exchanged (direction and format), frequency (real-time, batch, on-demand), authentication method, current status (available, needs negotiation, unknown), and risk level.

**Example Answer:**

> | External System | Integration Type | Data Flow | Format | Frequency | Auth Method | Status | Risk |
> |----------------|-----------------|-----------|--------|-----------|-------------|--------|------|
> | QuickBooks Online | REST API | Outbound: invoices, payments | JSON | Real-time (on sale completion) | OAuth 2.0 | API available, sandbox access obtained | Low |
> | WhatsApp Business API | REST API (via provider) | Outbound: notifications, reminders | JSON | Event-driven | API Key + webhook verification | Provider selected (360dialog), in testing | Medium |
> | Google Maps Platform | REST API | Outbound: geocoding requests. Inbound: coordinates, addresses | JSON | On-demand (per visit log) | API Key | Active account, billing configured | Low |
> | Microsoft Entra ID | SAML 2.0 / OIDC | Bidirectional: user provisioning, SSO | XML/JWT | On-demand (login) | Client credentials | Requires IT department coordination | Medium |
> | Legacy Excel data | File import | Inbound: historical customer data, leads | CSV/XLSX | One-time migration + monthly reconciliation | N/A (manual upload) | Data quality unknown — needs audit | High |
> | Company ERP (SAP) | RFC/BAPI or REST | Inbound: product catalog, pricing | JSON/XML | Daily batch sync | Certificate-based | No API documentation available yet | High |
>
> **Integration Risks to Escalate:**
> - SAP integration has no documented API — may require custom middleware or manual data feeds
> - WhatsApp Business API has rate limits (1,000 messages/day on standard tier) — may need upgraded plan for 200+ agents
> - Legacy Excel data likely contains duplicates, inconsistent formats, and missing fields — allocate 2x estimated migration time

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q5: What is the expected data volume, velocity, and variety (3Vs)?

**Why This Matters:**
Data characteristics determine infrastructure choices at a fundamental level. A system handling 1,000 records per day has completely different architecture needs than one handling 1,000,000 per second. Getting this wrong means either over-engineering (spending money on infrastructure you don't need) or under-engineering (system collapses under real-world load). The 3Vs framework — Volume (how much), Velocity (how fast), and Variety (how diverse) — provides a structured way to think about data requirements and drives decisions about database type, caching strategy, queue architecture, and storage costs.

**Expected Answer Format:**
A 3Vs analysis table breaking down each data category (users, transactions, logs, files, etc.) by current volume, projected growth (12-month and 3-year), velocity (reads/writes per second), format/variety, and storage implications.

**Example Answer:**

> **Volume:**
> | Data Category | Current | 12-Month Projection | 3-Year Projection | Storage Estimate |
> |--------------|---------|--------------------|--------------------|-----------------|
> | Customer records | 5,000 | 25,000 | 150,000 | ~50 MB → 1.5 GB |
> | Lead/opportunity records | 2,000/month | 10,000/month | 50,000/month | ~200 MB/year → 6 GB/year |
> | Visit logs (with GPS) | 0 (new) | 60,000/month (200 agents × 10 visits/day × 30 days) | 300,000/month | ~500 MB/year → 3 GB/year |
> | File attachments (photos, docs) | 0 (new) | 20,000 files/month (~2 MB avg) | 100,000 files/month | ~40 GB/year → 200 GB/year |
> | Audit/event logs | N/A | 500,000 events/month | 2,500,000 events/month | ~5 GB/year → 25 GB/year |
>
> **Velocity:**
> | Operation | Expected Rate | Peak Rate | Latency Target |
> |-----------|--------------|-----------|----------------|
> | Read (dashboard queries) | 50 req/min | 200 req/min (Monday 9 AM) | < 500ms |
> | Write (visit logs, lead updates) | 100 req/min | 400 req/min (end of business day) | < 1 second |
> | Search (customer lookup) | 30 req/min | 100 req/min | < 300ms |
> | File upload | 10 req/min | 50 req/min (batch sync after offline period) | < 5 seconds |
>
> **Variety:**
> | Data Type | Format | Schema Stability | Notes |
> |-----------|--------|-----------------|-------|
> | Structured (customers, leads) | Relational tables | High | Well-defined schema, rarely changes |
> | Semi-structured (visit notes) | JSON/text | Medium | Free-text fields with optional structured tags |
> | Geospatial (GPS coordinates) | lat/long pairs | High | Requires spatial indexing for proximity queries |
> | Binary (photos, documents) | JPEG, PNG, PDF | N/A | Object storage, not database |
> | Time-series (event logs) | Append-only log | High | Write-heavy, rarely updated, queried by time range |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section B: Architecture & Technology Choices (Q6–Q10)

*This section makes the foundational technology decisions that are expensive to reverse. Changing a database engine 6 months into development is a project restart. Choosing the wrong architecture pattern means living with its constraints for years. These questions force deliberate, justified choices — not defaults or resume-driven development.*

---

### Q6: What architectural pattern best fits this system (monolith, microservices, serverless, hybrid)?

**Why This Matters:**
Architecture pattern is the single most consequential technical decision you'll make. It determines team structure (Conway's Law), deployment complexity, debugging difficulty, and long-term maintenance cost. Microservices are not inherently better than monoliths — they're a tradeoff of operational complexity for independent scaling and deployment. For most teams under 30 engineers, a well-structured monolith or modular monolith outperforms microservices. This question forces an honest assessment of the team's ability to operate the architecture they choose.

**Expected Answer Format:**
A comparison matrix evaluating 2–3 candidate patterns against the project's specific constraints (team size, deployment frequency, scaling needs, operational capability), followed by a recommendation with clear rationale.

**Example Answer:**

> **Candidates Evaluated:**
>
> | Criteria | Monolith | Modular Monolith | Microservices |
> |----------|----------|-----------------|---------------|
> | Team size fit (5 developers) | ✅ Ideal for small teams | ✅ Good — modules without operational overhead | ❌ Too few people to own separate services |
> | Deployment complexity | ✅ Single deployment artifact | ✅ Single deployment, modular boundaries | ❌ Requires container orchestration, service mesh |
> | Offline-first requirement | ✅ Single sync endpoint | ✅ Single sync, but can evolve | 🟡 Complex — which services sync offline? |
> | Independent scaling | ❌ Scales as a whole | 🟡 Can extract hot modules later | ✅ Scale individual services independently |
> | Operational maturity needed | Low | Low-Medium | High (Kubernetes, observability, distributed tracing) |
> | Time to first deployment | 2–4 weeks | 3–5 weeks | 8–12 weeks (infra setup alone) |
>
> **Recommendation: Modular Monolith**
>
> Start as a modular monolith with clear module boundaries (Lead Management, Visit Tracking, Reporting, Notifications, User Management). This gives us the simplicity of a monolith with the option to extract high-traffic modules (like Reporting) into separate services later if scaling demands it. The team of 5 cannot realistically operate a microservices architecture, and the offline-first requirement is dramatically simpler with a single sync endpoint.
>
> **Extraction triggers:** If any single module exceeds 60% of total CPU usage, or if the team grows beyond 15 developers, re-evaluate microservices for that module.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q7: What technology stack is mandated or preferred, and why?

**Why This Matters:**
Technology choices are never purely technical — they're constrained by team skills, hiring market, vendor relationships, licensing costs, and organizational politics. A "better" technology that nobody on the team knows is worse than a "good enough" technology the team ships with confidently. This question separates mandated constraints (things you can't change) from preferences (things you could push back on), and forces justification for each choice so future teams understand *why* and can decide *when to change*.

**Expected Answer Format:**
A technology stack table organized by layer (frontend, backend, database, infrastructure, DevOps), listing each technology, whether it's mandated or preferred, the justification, alternatives considered, and team proficiency level (1–5).

**Example Answer:**

> | Layer | Technology | Mandated/Preferred | Justification | Alternatives Considered | Team Proficiency |
> |-------|-----------|-------------------|---------------|------------------------|-----------------|
> | Frontend (Mobile) | React Native | Preferred | Cross-platform from single codebase, team knows React | Flutter (higher performance, but team has no Dart experience) | 3/5 |
> | Frontend (Admin Web) | React + Vite | Preferred | Consistent with mobile stack, fast build times | Next.js (SSR unnecessary for admin panel) | 4/5 |
> | Backend | Node.js (Express) | Preferred | JavaScript full-stack reduces context switching, large npm ecosystem | Python/Django (stronger ORM, but splits the team's language expertise) | 4/5 |
> | Database (Primary) | PostgreSQL 15 | Preferred | Strong JSON support for semi-structured data, PostGIS for geospatial, proven at scale | MySQL (less capable JSON/geo), MongoDB (team prefers SQL, ACID needed) | 3/5 |
> | Database (Cache) | Redis | Preferred | Session management, queue jobs, real-time dashboard caching | Memcached (simpler but less versatile) | 2/5 |
> | File Storage | AWS S3 | Mandated | Client has existing AWS account, S3 is industry standard | Azure Blob (client has no Azure presence) | 3/5 |
> | Infrastructure | AWS (Lagos region: af-south-1) | Mandated | Data residency requirement (NDPR), client's existing account | GCP (no Africa region), Azure (available but client is AWS) | 2/5 |
> | CI/CD | GitHub Actions | Preferred | Team already uses GitHub, free tier sufficient for now | GitLab CI (more features, but adds another platform) | 3/5 |
> | Monitoring | Datadog | Preferred | Best-in-class APM, but expensive — evaluate after MVP | CloudWatch (cheaper, less capable), Grafana+Prometheus (self-hosted, more ops work) | 1/5 |
>
> **Key Constraint:** The client's CTO has mandated AWS and prefers JavaScript-based stack to match the skill set of their two junior developers who will co-maintain the system.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q8: How will data be modeled, stored, and accessed (relational, NoSQL, graph, hybrid)?

**Why This Matters:**
Data modeling is the foundation the entire system stands on. A poorly modeled database creates problems that compound over time — slow queries, data inconsistencies, impossible-to-write reports, and painful migrations. The choice between relational, document, graph, or hybrid storage isn't about what's trendy — it's about how the data naturally relates. Customer data with strict relationships and transactions demands relational. Event streams and logs suit time-series or append-only stores. This question ensures the data model is designed for the access patterns that matter, not just for insertion convenience.

**Expected Answer Format:**
An entity-relationship summary listing the major entities, their relationships, estimated row counts, primary access patterns (how data is queried most often), and the storage engine selected for each data domain. Include a simplified ER diagram in text form.

**Example Answer:**

> **Core Entities and Relationships:**
> ```
> [User] 1──M [Lead] M──M [Tag]
>   │                │
>   │                1
>   │                │
>   └──1──M [Visit]──┘
>                │
>                M
>                │
>            [Attachment]
>
> [User] M──1 [Branch]
> [User] M──1 [Role]
> [Lead] M──1 [Pipeline Stage]
> ```
>
> **Data Domain Strategy:**
>
> | Data Domain | Storage Engine | Justification | Primary Access Patterns |
> |------------|---------------|---------------|------------------------|
> | Core business data (Users, Leads, Visits, Branches) | PostgreSQL (relational) | Strong relationships, ACID transactions needed for lead assignment, referential integrity | Lookup by ID, search by phone/name, filter by branch/agent, join for reports |
> | Geospatial data (visit locations) | PostgreSQL + PostGIS extension | Same database, native spatial queries for "nearest leads" and visit radius reports | Bounding box queries, distance calculations, spatial aggregation |
> | Visit notes and custom fields | PostgreSQL JSONB columns | Semi-structured data that varies by client, but still needs SQL querying | Filter/search within JSON fields, aggregate across records |
> | File metadata | PostgreSQL (references to S3 keys) | Metadata is relational, binary content in S3 | Lookup by parent entity (Lead, Visit), list by type/date |
> | Event logs / audit trail | PostgreSQL partitioned tables (by month) | Write-heavy, time-range queries, partition old data for archival | Time-range queries, filter by user/entity, compliance audits |
> | Session and cache data | Redis | Ephemeral, high-speed access, TTL-based expiration | Session lookup by token, cache invalidation by key pattern |
>
> **Why Single Database (PostgreSQL):** With our data volumes (see Q5), a single well-indexed PostgreSQL instance handles everything comfortably. Adding separate database engines increases operational complexity without proportional benefit at our scale. Re-evaluate when any single table exceeds 100M rows or write throughput exceeds 5,000 TPS.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q9: What authentication, authorization, and security architecture is required?

**Why This Matters:**
Security architecture is not a feature you add later — it's a property of the system from day one. A system that stores customer data, processes financial transactions, or handles personal information has legal obligations (NDPR, GDPR) that translate directly into architectural requirements. Getting authentication wrong means data breaches. Getting authorization wrong means users seeing or modifying data they shouldn't. Getting encryption wrong means regulatory fines. This question forces a comprehensive security design before the first line of code is written.

**Expected Answer Format:**
A multi-layer security architecture covering: authentication method (how users prove identity), authorization model (how permissions are enforced), data protection (encryption at rest and in transit), API security (rate limiting, input validation), and compliance controls (audit logging, data handling). Include a role-permission matrix.

**Example Answer:**

> **Authentication Architecture:**
> - **Primary method:** JWT-based authentication with refresh tokens
> - **Token lifecycle:** Access token: 15 minutes. Refresh token: 7 days (mobile), 24 hours (web admin)
> - **Password policy:** Minimum 8 characters, at least 1 uppercase, 1 number, 1 special character. Bcrypt hashing with cost factor 12
> - **MFA:** Required for Admin and Manager roles (TOTP via authenticator app). Optional for agents
> - **SSO:** Microsoft Entra ID integration via OIDC for corporate users
> - **Offline auth:** Cached JWT with device-bound encryption key. Re-authentication required after 72 hours offline
>
> **Authorization Model — Role-Based Access Control (RBAC):**
>
> | Permission | Agent | Team Lead | Manager | Admin | Super Admin |
> |-----------|-------|-----------|---------|-------|-------------|
> | View own leads | ✅ | ✅ | ✅ | ✅ | ✅ |
> | View team leads | ❌ | ✅ | ✅ | ✅ | ✅ |
> | View all leads | ❌ | ❌ | ✅ | ✅ | ✅ |
> | Create/edit leads | ✅ | ✅ | ✅ | ✅ | ✅ |
> | Delete leads | ❌ | ❌ | ✅ | ✅ | ✅ |
> | Reassign leads | ❌ | ✅ (within team) | ✅ (any) | ✅ | ✅ |
> | View reports | ❌ | Team only | Branch only | All | All |
> | Manage users | ❌ | ❌ | ❌ | ✅ | ✅ |
> | System configuration | ❌ | ❌ | ❌ | ❌ | ✅ |
> | Export data | ❌ | ❌ | ✅ (own branch) | ✅ (all) | ✅ (all) |
>
> **Data Protection:**
> - At rest: AES-256 encryption for database (AWS RDS encryption), S3 server-side encryption (SSE-S3)
> - In transit: TLS 1.3 for all connections (HTTPS, database connections, Redis)
> - PII fields (phone, email, address): Application-level encryption with key rotation every 90 days
> - Backup encryption: AWS KMS managed keys
>
> **API Security:**
> - Rate limiting: 100 requests/minute per user (authenticated), 20 requests/minute (unauthenticated)
> - Input validation: Server-side validation on all endpoints (never trust client-side only)
> - CORS: Whitelist specific domains only
> - SQL injection: Parameterized queries only (ORM enforced)
> - XSS: Content Security Policy headers + output encoding

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q10: How will the system handle failures, retries, and disaster recovery?

**Why This Matters:**
Every system fails. The question isn't whether it will happen, but how the system behaves when it does. A system that crashes silently and loses data on failure is a system that destroys trust. A system that degrades gracefully, retries intelligently, and recovers automatically is a system that earns confidence. This question forces the team to think about failure as a design parameter — not an afterthought. It also establishes the recovery playbook that the operations team will follow at 3 AM when things go wrong.

**Expected Answer Format:**
A failure mode analysis covering: types of failures expected (network, database, third-party API, disk, application crash), the system's response to each (retry, circuit break, fallback, alert), and a disaster recovery plan with RPO (Recovery Point Objective) and RTO (Recovery Time Objective) targets.

**Example Answer:**

> **Failure Mode Responses:**
>
> | Failure Type | Likelihood | Impact | System Response | User Experience |
> |-------------|-----------|--------|----------------|-----------------|
> | Network loss (mobile agent) | High (daily) | Low | Queue writes locally, sync when connected, conflict resolution on server | "Saved offline — will sync when connected" toast message |
> | Database connection failure | Low | Critical | Connection pool retry (3 attempts, exponential backoff), alert ops team after 3 failures | "Service temporarily unavailable" page, auto-retry every 30s |
> | WhatsApp API down | Medium | Low | Queue notifications, retry with exponential backoff (max 6 hours), fall back to SMS after 1 hour | Notification delayed but eventually delivered, user not aware |
> | S3 upload failure | Low | Medium | Retry 3x, store file locally on server, background job retries hourly | "Upload in progress" with eventual success notification |
> | Application crash | Low | High | Auto-restart via process manager (PM2), health check triggers redeployment if restart fails | Brief interruption (<30 seconds), no data loss due to transaction safety |
> | Full region outage (AWS af-south-1) | Very Low | Critical | Manual failover to eu-west-1 (pre-configured standby), DNS switch via Route 53 | 15–60 minute outage during failover, data loss limited to RPO window |
>
> **Disaster Recovery Plan:**
> - **RPO (Recovery Point Objective):** 1 hour — automated database backups every hour via RDS snapshots
> - **RTO (Recovery Time Objective):** 4 hours — includes time to provision infrastructure, restore backup, verify data integrity, switch DNS
> - **Backup strategy:** Hourly RDS snapshots (retained 7 days), daily full backup to S3 cross-region (retained 30 days), monthly archive to S3 Glacier (retained 1 year)
> - **DR Testing:** Full recovery drill every 6 months. Tabletop exercise every quarter
> - **Runbook:** Step-by-step recovery procedures documented in operations wiki, tested by operations team
>
> **Circuit Breaker Pattern (for external APIs):**
> - Closed (normal): requests flow through
> - Open (after 5 consecutive failures): requests immediately return cached/fallback response, alert sent
> - Half-open (after 60 seconds): single test request sent, if successful → close circuit

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section C: Data & Integration Strategy (Q11–Q15)

*This section addresses the plumbing — how data moves into, through, and out of the system. Data migration failures, API contract disputes, and state management bugs account for more production incidents than any other category. Getting this section right means the system works reliably with the real world, not just in demo environments.*

---

### Q11: What is the data migration strategy from existing systems?

**Why This Matters:**
Data migration is the most underestimated task in every project. The existing data is always messier than anyone admits — duplicates, missing fields, inconsistent formats, orphaned records, and encoding issues lurk in every legacy system. A migration that "should take a weekend" regularly takes weeks of cleaning, mapping, validating, and re-running. This question forces a realistic assessment of the migration challenge and a strategy that won't corrupt the new system with dirty data on day one.

**Expected Answer Format:**
A migration plan covering: source system inventory (what data lives where), data quality assessment (known issues), field mapping strategy (old schema → new schema), cleansing rules, migration approach (big-bang vs phased), validation strategy, and rollback plan if migration fails.

**Example Answer:**

> **Source System Inventory:**
>
> | Source | Format | Records | Data Quality | Owner |
> |--------|--------|---------|-------------|-------|
> | Main Excel spreadsheet (CRM data) | .xlsx (12 sheets) | ~5,000 customer records, ~8,000 interaction records | Poor — duplicates, missing phone numbers (~15%), inconsistent naming | Sales Head |
> | Regional spreadsheets (3 offices) | .xlsx / .csv | ~2,000 leads total | Medium — some overlap with main spreadsheet, different column names | Regional managers |
> | WhatsApp export | .txt chat logs | N/A — unstructured | Very poor — useful for relationship history only, not importable as records | N/A |
> | QuickBooks | API export | ~3,000 invoices | Good — structured financial data | Finance team |
>
> **Cleansing Rules:**
> 1. Phone numbers: Normalize to international format (+234...), remove duplicates, flag records with no phone
> 2. Customer names: Title case, merge duplicates with fuzzy match (Levenshtein distance ≤ 2)
> 3. Dates: Standardize to ISO 8601 (multiple formats found: DD/MM/YYYY, MM-DD-YY, written month)
> 4. Addresses: Geocode using Google Maps API, flag unresolvable addresses for manual review
> 5. Currency: Standardize to Naira, convert USD entries at migration-date exchange rate
>
> **Migration Approach: Phased**
> - **Phase 1 (Week 1):** Migrate customer master data from main spreadsheet (clean, deduplicate, validate)
> - **Phase 2 (Week 2):** Migrate regional data, merge with Phase 1 (resolve conflicts manually)
> - **Phase 3 (Week 3):** Migrate historical interaction data (read-only, for reference)
> - **Phase 4 (Week 4):** Validate with business users, fix discrepancies, lock legacy systems
>
> **Validation:** Business users spot-check 10% of migrated records. Automated checks: record counts match, no orphaned references, all required fields populated.
>
> **Rollback:** Legacy spreadsheets preserved as read-only. New system can be wiped and re-migrated within 24 hours during the first month.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q12: How will real-time vs batch processing be handled?

**Why This Matters:**
Not all data needs to be processed instantly. A dashboard that updates every 15 minutes is perfectly fine for most managers, while a duplicate lead warning must appear in real-time before the agent makes a call. Choosing real-time processing for everything is expensive (infrastructure costs, engineering complexity) and often unnecessary. Choosing batch processing for everything makes the system feel sluggish. This question forces the team to classify each data flow by its actual latency requirement, so the architecture handles each one appropriately.

**Expected Answer Format:**
A data flow classification table listing each major data operation, its latency requirement (real-time, near-real-time, batch), the processing method, justification for the classification, and infrastructure implications.

**Example Answer:**

> | Data Flow | Latency Requirement | Method | Justification | Infrastructure |
> |-----------|-------------------|--------|---------------|----------------|
> | Lead creation/update | Real-time (< 1s) | Synchronous API call → database write | Agent needs immediate confirmation | Standard request-response |
> | Duplicate detection | Real-time (< 2s) | Synchronous query on lead creation | Must prevent duplicates before agent acts on lead | Database index on phone number + fuzzy match function |
> | Visit log sync (offline → server) | Near-real-time (< 5 min after connectivity restored) | Background sync queue with conflict resolution | Agents go offline for hours; data must sync reliably when they reconnect | Client-side queue + server-side merge endpoint |
> | Dashboard metrics | Near-real-time (15-minute refresh) | Materialized views refreshed on schedule | Managers don't need second-by-second data, pre-computed views are much faster to query | PostgreSQL materialized views + pg_cron |
> | WhatsApp notifications | Near-real-time (< 60s) | Async job queue (Redis + Bull) | Decoupled from user action, retryable, rate-limited by WhatsApp API | Redis queue with retry logic |
> | Monthly sales reports | Batch (daily aggregation) | Nightly scheduled job | Reports cover full-day periods, running overnight avoids peak-hour load | pg_cron or external scheduler (GitHub Actions on cron) |
> | Data export (CSV/Excel) | Batch (on-demand, async) | Background job triggered by user request, download link emailed when ready | Large exports (10,000+ rows) would time out as synchronous requests | Background worker + S3 temporary file + email notification |
> | AI lead scoring | Batch (weekly recalculation) | Scheduled ML pipeline | Scoring model needs accumulated data, not real-time updates | Separate compute job, writes scores back to database |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q13: What API contracts and versioning strategy will be used?

**Why This Matters:**
APIs are contracts between systems and teams. A broken API contract breaks every system that depends on it — and often the breakage is silent until a customer reports corrupted data or a missing feature. Clear contracts prevent "it worked on my machine" disputes and enable teams to develop independently. Versioning strategy determines how the API evolves without breaking existing clients — critical when mobile apps can't be force-updated and third-party integrations depend on stable endpoints.

**Expected Answer Format:**
A specification covering: API style (REST, GraphQL, gRPC), naming conventions, versioning approach (URL path, header, query parameter), deprecation policy, contract documentation method, and error response format. Include example endpoint definitions.

**Example Answer:**

> **API Style:** RESTful with JSON request/response bodies
>
> **Base URL Pattern:** `https://api.example.com/v{N}/{resource}`
>
> **Versioning Strategy:** URL path versioning (`/v1/`, `/v2/`)
> - Why: Explicit, easy to route, easy to monitor per-version traffic
> - Alternative considered: Header versioning (`Accept: application/vnd.example.v2+json`) — rejected as harder to debug and test in browser
>
> **Deprecation Policy:**
> 1. New version released → old version enters "sunset" period (6 months minimum)
> 2. Sunset notice added to response headers: `Sunset: Sat, 01 Apr 2028 00:00:00 GMT`
> 3. Dashboard shows percentage of traffic still on deprecated version
> 4. Email notification to API consumers at 6 months, 3 months, 1 month, and 1 week before sunset
> 5. After sunset: deprecated endpoints return `410 Gone` with migration guide URL
>
> **Example Endpoints:**
> ```
> GET    /v1/leads                    → List leads (paginated, filterable)
> POST   /v1/leads                    → Create a lead
> GET    /v1/leads/{id}               → Get a single lead
> PATCH  /v1/leads/{id}               → Update a lead (partial update)
> DELETE /v1/leads/{id}               → Soft-delete a lead
> GET    /v1/leads/{id}/visits        → List visits for a lead
> POST   /v1/leads/{id}/visits        → Log a visit for a lead
> GET    /v1/reports/pipeline         → Pipeline summary report
> ```
>
> **Standard Error Response Format:**
> ```json
> {
>   "error": {
>     "code": "VALIDATION_ERROR",
>     "message": "Phone number is required",
>     "details": [
>       { "field": "phone", "rule": "required", "message": "Phone number cannot be empty" }
>     ],
>     "request_id": "req_abc123",
>     "documentation_url": "https://docs.example.com/errors/VALIDATION_ERROR"
>   }
> }
> ```
>
> **Documentation:** OpenAPI 3.1 specification, auto-generated from code annotations, hosted on Swagger UI at `/docs`. Updated automatically on each deployment.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q14: How will the system manage state (sessions, caching, distributed state)?

**Why This Matters:**
State management is where "it works in development" dies in production. A system that stores sessions in server memory breaks when you add a second server. A system that caches aggressively serves stale data. A system that doesn't cache at all falls over under load. The offline-first requirement adds another dimension — the mobile app holds local state that must eventually reconcile with server state. This question forces the team to design a state management strategy that works across server instances, survives restarts, and handles the reality of distributed systems.

**Expected Answer Format:**
A state management plan covering each type of state (session, application cache, user data, distributed locks, offline state), where it lives, its lifecycle (creation, expiration, invalidation), and how consistency is maintained.

**Example Answer:**

> **State Types and Management:**
>
> | State Type | Storage | Lifecycle | Consistency Strategy |
> |-----------|---------|-----------|---------------------|
> | User sessions | Redis (with TTL) | Created on login, expires after 30 min inactive (mobile: 7 days), destroyed on logout | Single source of truth — Redis cluster with replication |
> | API response cache | Redis (with TTL) | Set on first request, TTL varies by endpoint (dashboard: 15 min, user profile: 5 min, static config: 1 hour) | Cache-aside pattern — check cache first, fall back to database, invalidate on write |
> | Dashboard aggregations | PostgreSQL materialized views | Refreshed every 15 minutes via scheduled job | Eventually consistent — users see data up to 15 minutes old, timestamp shown on dashboard |
> | Mobile offline state | SQLite (on device) | Created during normal use, synced to server when connectivity is available | Last-write-wins with server-side conflict detection and manual resolution queue for conflicts |
> | Distributed locks | Redis (SETNX with TTL) | Acquired for critical operations (lead assignment), TTL of 30 seconds to prevent deadlocks | Single Redis instance for locks — acceptable at our scale, Redlock if we add replicas |
> | File upload progress | Redis (with TTL) | Created on upload start, updated during upload, expires 1 hour after completion | Best-effort — if lost, upload restarts |
>
> **Offline Sync Protocol (Critical Path):**
> 1. Mobile app writes to local SQLite with a local UUID and timestamp
> 2. On connectivity, app sends a batch of changes with local timestamps
> 3. Server compares timestamps against its records:
>    - No conflict → apply changes, return server UUIDs
>    - Conflict (server record modified since local copy was created) → return conflict for manual resolution
> 4. App replaces local UUIDs with server UUIDs, marks records as synced
> 5. Conflict queue: manager reviews and resolves conflicting changes via admin panel
>
> **Cache Invalidation Strategy:**
> - Write-through: on any write to a cached entity, invalidate the cache key immediately
> - Pattern-based invalidation: `leads:*` invalidated when any lead is created/updated/deleted
> - Background refresh: dashboard caches are refreshed proactively by scheduled job, not by user request

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q15: What logging, monitoring, and observability infrastructure is needed?

**Why This Matters:**
A system without observability is a system you're flying blind. When things go wrong — and they will — logs, metrics, and traces are the difference between "we found and fixed the issue in 20 minutes" and "we've been debugging for 3 days and still don't know what happened." Observability isn't just for debugging: it drives product decisions (which features are actually used?), capacity planning (are we approaching limits?), and security (is someone brute-forcing login?). This question ensures the team builds visibility into the system from the start, not retrofits it after the first outage.

**Expected Answer Format:**
An observability architecture covering: what is logged (and at what level), what metrics are collected, what alerts are configured, what tools are used, and how data is retained and accessed. Include a severity/alert matrix.

**Example Answer:**

> **Three Pillars of Observability:**
>
> **1. Logging:**
> | Log Level | What Gets Logged | Retention | Storage |
> |-----------|-----------------|-----------|---------|
> | ERROR | Unhandled exceptions, failed API calls, data integrity violations | 90 days | CloudWatch Logs |
> | WARN | Degraded performance, retry attempts, deprecated API usage | 30 days | CloudWatch Logs |
> | INFO | API requests (method, path, status, duration), user login/logout, business events (lead created, visit logged) | 14 days | CloudWatch Logs |
> | DEBUG | Detailed function-level traces, SQL queries, cache hit/miss | 3 days (only in staging) | Local/CloudWatch |
>
> - **Structured logging:** JSON format with correlation ID, user ID, request ID, timestamp
> - **PII protection:** Phone numbers and email addresses masked in logs (`+234***4567`)
> - **No secrets:** API keys, tokens, and passwords are NEVER logged (enforced by logging middleware)
>
> **2. Metrics:**
> | Metric | Type | Alert Threshold | Dashboard |
> |--------|------|----------------|-----------|
> | API response time (p50, p95, p99) | Histogram | p99 > 2s for 5 minutes | Performance |
> | Error rate (5xx responses) | Counter | > 1% of requests for 5 minutes | Reliability |
> | Active users (concurrent sessions) | Gauge | > 400 (80% of capacity) | Capacity |
> | Database connections (active/idle) | Gauge | Active > 80% of pool size | Infrastructure |
> | Offline sync queue depth | Gauge | > 1,000 pending syncs | Operations |
> | Failed login attempts per user | Counter | > 5 in 10 minutes | Security |
> | Background job queue length | Gauge | > 100 jobs pending for > 15 minutes | Operations |
>
> **3. Distributed Tracing:**
> - Trace ID propagated through all service layers (API → database → cache → external APIs)
> - Every API request gets a unique `X-Request-ID` header, returned to client for support reference
> - Traces retained for 7 days, sampled at 10% in production (100% in staging)
>
> **Alert Routing:**
> | Severity | Criteria | Channel | Response Time |
> |----------|---------|---------|---------------|
> | Critical | System down, data loss risk, security breach | PagerDuty → Phone call to on-call engineer | < 15 minutes |
> | High | Feature broken for all users, error rate > 5% | Slack #incidents + PagerDuty | < 1 hour |
> | Medium | Performance degradation, elevated error rate (1–5%) | Slack #monitoring | < 4 hours |
> | Low | Non-critical warnings, approaching capacity limits | Slack #monitoring | Next business day |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section D: Scalability & Future-Proofing (Q16–Q20)

*This section forces the team to look beyond launch day. A system that works perfectly for 200 users but collapses at 2,000 is a system with a timer on it. These questions ensure the architecture can grow with the business, adapt to changing requirements, and manage the inevitable accumulation of technical debt — without requiring a complete rewrite.*

---

### Q16: What are the scalability requirements (users, transactions, geographic distribution)?

**Why This Matters:**
Scalability isn't about handling infinite load — it's about knowing your growth trajectory and ensuring the architecture can handle it without a rewrite. If the business plans to grow from 200 to 2,000 users in 3 years, the system needs to handle that growth curve smoothly. Geographic distribution adds latency challenges (users in Lagos vs Nairobi), data residency requirements (different countries, different laws), and infrastructure decisions (multi-region deployment). This question converts business growth plans from Document 1 into concrete technical scalability targets.

**Expected Answer Format:**
A scalability projection table showing current load, 12-month target, and 3-year target across key dimensions (concurrent users, transactions per second, data volume, geographic regions), plus the scaling strategy for each dimension (vertical, horizontal, CDN, multi-region).

**Example Answer:**

> | Dimension | Current (Launch) | 12-Month Target | 3-Year Target | Scaling Strategy |
> |-----------|-----------------|-----------------|---------------|-----------------|
> | Concurrent users | 50 | 200 | 1,000 | Horizontal scaling — add application server instances behind load balancer |
> | API requests per minute | 200 | 1,000 | 5,000 | Auto-scaling group based on CPU utilization (target: 70%) |
> | Database size | 1 GB | 10 GB | 100 GB | Vertical scaling (upgrade instance) → read replicas at 50 GB → sharding only if needed |
> | File storage | 5 GB | 50 GB | 500 GB | S3 with lifecycle rules (move to Infrequent Access after 90 days, Glacier after 1 year) |
> | Geographic regions | 1 (Lagos) | 1 (Lagos) + CDN edge | 3 (Lagos + Nairobi + Accra) | CDN for static assets first → multi-region database replication when user base in other regions exceeds 500 |
> | Background job throughput | 100/hour | 1,000/hour | 10,000/hour | Horizontal worker scaling, queue-based with Redis |
>
> **Scaling Triggers (Automated):**
> - CPU utilization > 70% for 5 minutes → add 1 application server instance
> - Database connection pool > 80% utilized → alert for manual scaling review
> - Response time p95 > 3 seconds for 10 minutes → scale up + alert
>
> **Anti-Patterns to Avoid:**
> - Don't scale for peak that happens once a week (Monday 9 AM) — auto-scale handles this
> - Don't move to multi-region until a region has 500+ users — latency from CDN is acceptable below this threshold
> - Don't shard the database until a single table exceeds 100M rows — PostgreSQL handles everything below this efficiently

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q17: How will the system be containerized, orchestrated, and deployed?

**Why This Matters:**
The gap between "it works on my laptop" and "it works in production" is bridged by containerization and deployment infrastructure. Without containers, every deployment is a snowflake — different server configurations, missing dependencies, "works in staging but not production" mysteries. Without orchestration, scaling is manual and error-prone. This question ensures the team has a reproducible, automated path from code commit to running system — and that the deployment infrastructure matches the team's operational capability (don't pick Kubernetes if nobody knows Kubernetes).

**Expected Answer Format:**
A deployment architecture description covering: containerization strategy (Docker, buildpacks), orchestration platform (Kubernetes, ECS, manual), deployment pipeline stages, environment promotion strategy, and infrastructure-as-code approach.

**Example Answer:**

> **Containerization:**
> - All application components packaged as Docker containers
> - Multi-stage Dockerfile: build stage (install dependencies, compile) → production stage (minimal image, non-root user)
> - Base images: `node:20-alpine` (smallest secure image, ~50MB vs ~900MB for full node image)
> - Image registry: Amazon ECR (private, within same AWS account)
> - Image tagging: `<service>:<git-sha>-<timestamp>` (immutable, traceable to exact commit)
>
> **Orchestration: AWS ECS Fargate (Not Kubernetes)**
>
> | Why ECS Fargate | Why NOT Kubernetes |
> |-----------------|-------------------|
> | Serverless containers — no EC2 instances to manage | Team of 5 has no Kubernetes experience |
> | Simpler than EKS, sufficient for our scale | Kubernetes operational overhead is unjustified below 20 services |
> | Native AWS integration (ALB, CloudWatch, IAM) | EKS adds $73/month per cluster just for the control plane |
> | Auto-scaling built in, pay per vCPU-second | Kubernetes autoscaling requires Cluster Autoscaler + HPA configuration |
>
> **Deployment Pipeline:**
> ```
> Code Push → GitHub Actions CI:
>   1. Lint + type-check (30s)
>   2. Unit tests (2 min)
>   3. Integration tests against test DB (3 min)
>   4. Build Docker image (1 min)
>   5. Push to ECR (30s)
>   6. Deploy to staging (2 min)
>   7. Run smoke tests against staging (1 min)
>   8. Manual approval gate ← (required for production)
>   9. Deploy to production (rolling update, 5 min)
>  10. Post-deploy health check (1 min)
>  11. Notify Slack channel
> ```
>
> **Infrastructure as Code:** Terraform for AWS resources (VPC, ECS, RDS, S3, IAM). Version-controlled in same repo under `/infrastructure`. Changes require PR review from at least one team member.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q18: What is the technical debt management strategy?

**Why This Matters:**
Technical debt is inevitable. Every shortcut taken to meet a deadline, every "we'll fix it later" comment in the code, every dependency not upgraded adds to the pile. Left unmanaged, technical debt compounds like financial debt — it slows development, increases bug rates, and eventually makes the codebase unmaintainable. The goal isn't zero debt (that's unrealistic) but conscious debt — knowing what you owe, why you incurred it, and when you'll pay it back. This question establishes the discipline to track and manage debt before it cripples the project.

**Expected Answer Format:**
A technical debt management framework covering: how debt is identified and categorized, how it's tracked, how repayment is prioritized and scheduled, and what percentage of engineering capacity is allocated to debt reduction.

**Example Answer:**

> **Debt Categories:**
>
> | Category | Definition | Examples | Severity |
> |----------|-----------|---------|----------|
> | **Deliberate-Prudent** | Conscious shortcut with known tradeoff | "Ship without pagination — add before user base hits 1,000" | Low (planned payback) |
> | **Deliberate-Reckless** | Conscious shortcut with no plan to fix | "Copy-paste this module 4 times because refactoring is slow" | High (compounds fast) |
> | **Inadvertent-Prudent** | Learned a better approach after building | "We now know the data model should have been normalized differently" | Medium (refactor when touching) |
> | **Inadvertent-Reckless** | Didn't know it was bad | "Storing passwords in plain text" (this would be caught by Q9, but as an example) | Critical (fix immediately) |
>
> **Tracking System:**
> - All technical debt tracked as GitHub Issues with label `tech-debt`
> - Each issue includes: What was done, why (link to decision or deadline), impact if not fixed, estimated effort to fix, proposed fix
> - Tech debt dashboard: count by category, total estimated hours, age of oldest unresolved item
>
> **Debt Repayment Strategy:**
> - **20% rule:** Every sprint allocates 20% of engineering capacity to technical debt reduction
> - **Boy Scout rule:** Every PR that touches a file with known debt must improve it (even slightly)
> - **Debt ceiling:** If total estimated debt hours exceed 2x current sprint capacity, no new features until debt is reduced below threshold
> - **Quarterly debt review:** Team reviews all tech debt, re-prioritizes, retires resolved items, escalates aging items
>
> **Debt Prevention:**
> - Code review checklist includes "Does this introduce tech debt? If yes, is a debt ticket created?"
> - Architecture Decision Records (ADRs) document every significant trade-off and its planned payback
> - Linting and static analysis enforced in CI — prevents common categories of inadvertent debt

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q19: How will the system accommodate future feature additions without major refactoring?

**Why This Matters:**
The system you launch is not the system you'll have in 2 years. Features will be added, requirements will change, integrations will multiply. An architecture that requires major surgery for every new feature is an architecture that slows the business down. This question forces the team to design for extensibility — clear module boundaries, plugin points, configurable behaviors, and data models that can accommodate new fields without schema migrations. The goal isn't to predict the future — it's to build a foundation flexible enough to handle the unpredictable.

**Expected Answer Format:**
A extensibility strategy covering: module boundary rules (how new features are added without affecting existing ones), extension points (where the system is designed to be extended), data model flexibility (how new fields and entities are added), feature flag strategy, and specific known future requirements from Document 1 with how the architecture accommodates them.

**Example Answer:**

> **Module Boundary Rules:**
> - Each module has a public API (exported functions/types) and private internals
> - Modules communicate through defined interfaces, never by directly accessing another module's database tables
> - New modules can be added by: creating a new directory, registering routes, and adding database migrations — no changes to existing modules required
>
> **Designed Extension Points:**
>
> | Extension Point | Mechanism | Example Future Use |
> |----------------|-----------|-------------------|
> | Notification channels | Plugin interface — implement `send(recipient, message)` | Add SMS, email, push notifications alongside WhatsApp |
> | Report types | Report generator interface — implement `generate(params) → data` | Add custom reports without modifying reporting engine |
> | Data import sources | Import adapter interface — implement `parse(file) → records` | Import from new CRM systems, CSV formats, APIs |
> | Workflow triggers | Event-driven hooks — subscribe to business events | Auto-assign leads based on custom rules, trigger external API calls |
> | Authentication providers | Auth strategy interface — implement `authenticate(credentials) → user` | Add Google SSO, Apple Sign-In, biometric authentication |
>
> **Data Model Flexibility:**
> - JSONB `metadata` column on core entities (Leads, Visits, Users) — stores custom fields without schema migration
> - Custom field definitions stored in a configuration table — admin can add new fields via UI
> - Enumerated values (lead stages, categories) stored in reference tables, not code constants — changeable without deployment
>
> **Feature Flags:**
> - All new features wrapped in feature flags (using environment variables for MVP, feature flag service if complexity grows)
> - Flags enable: gradual rollout (10% → 50% → 100%), A/B testing, instant kill switch for broken features
> - Flag naming convention: `FF_<MODULE>_<FEATURE>` (e.g., `FF_LEADS_AI_SCORING`)
>
> **Known Future Requirements (from Document 1) — Architecture Readiness:**
>
> | Future Requirement | Timeline | How Architecture Accommodates It |
> |-------------------|----------|----------------------------------|
> | Multi-branch support | 6 months | `branch_id` on all relevant tables from day one, branch-scoped queries |
> | Multi-currency | 12 months | `currency` column on financial records from day one, conversion layer placeholder |
> | Multi-language UI | 18 months | i18n keys instead of hardcoded strings from day one, language files loaded dynamically |
> | AI lead scoring | 12 months | Data model captures all interaction data needed for ML training from day one |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q20: What proof-of-concept or spike work is needed before committing to the architecture?

**Why This Matters:**
The most dangerous word in architecture is "should" — as in "the offline sync should work" or "Redis should handle our session load." Architecture based on assumptions instead of evidence is architecture that collapses on contact with reality. Spikes and proof-of-concept work convert "should" into "does" by testing the riskiest assumptions before the team commits months of development to an approach that might not work. A 2-day spike that reveals a fundamental flaw saves 2 months of rework.

**Expected Answer Format:**
A spike backlog listing each experiment needed, what assumption it tests, success criteria (how you'll know if it works), estimated time, and the architectural decision it de-risks. Prioritized by risk level.

**Example Answer:**

> | # | Spike | Assumption to Test | Success Criteria | Effort | De-Risks |
> |---|-------|-------------------|-----------------|--------|----------|
> | 1 | **Offline sync with conflict resolution** | "We can reliably sync SQLite ↔ PostgreSQL with last-write-wins and detect conflicts" | 100 records created offline, synced with < 5% requiring manual conflict resolution. No data loss | 3 days | Core user experience for field agents (blocking if this fails) |
> | 2 | **WhatsApp Business API integration** | "360dialog API can deliver templated messages to Nigerian phone numbers within 60 seconds" | 50 test messages sent, 95% delivered within 60 seconds, template approval process documented | 2 days | Notification channel viability |
> | 3 | **PostgreSQL + PostGIS performance at scale** | "Spatial queries (find leads within 5km) perform under 500ms with 150,000 lead records" | Load test with 150K synthetic records, 100 concurrent spatial queries, p95 < 500ms | 1 day | Database technology choice for geospatial features |
> | 4 | **React Native offline-first architecture** | "React Native with WatermelonDB (SQLite wrapper) provides acceptable CRUD performance offline" | Create, read, update, delete 1,000 records offline with < 200ms per operation on a mid-range Android device | 2 days | Mobile technology choice |
> | 5 | **SAP ERP API exploration** | "We can extract product catalog and pricing data from the client's SAP system" | Successfully retrieve product list and current pricing via RFC or REST API, document authentication and rate limits | 2 days | Integration feasibility (currently highest risk) |
> | 6 | **ECS Fargate deployment pipeline** | "We can deploy a Dockerized Node.js app to ECS Fargate with rolling updates and zero-downtime deployments" | Full CI/CD pipeline working: push to GitHub → tests → build → deploy → health check. Zero-downtime verified with load test during deployment | 1 day | Deployment infrastructure choice |
>
> **Priority Order:** Spike 1 (offline sync) → Spike 5 (SAP) → Spike 2 (WhatsApp) → Spike 4 (React Native offline) → Spike 3 (PostGIS) → Spike 6 (ECS)
>
> **Total Spike Investment:** 11 days (2.2 weeks)
>
> **Decision Gate:** If Spike 1 or 4 fails (offline capability is not viable), the architecture must be fundamentally reconsidered — escalate to steering committee before proceeding.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Scoring Summary

### How to Score

Add up all individual question scores. The maximum possible score is **60** (20 questions × 3 points each).

| Section | Q1 | Q2 | Q3 | Q4 | Q5 | Subtotal |
|---------|----|----|----|----|----|------|
| A: System Scope & Boundaries | __ | __ | __ | __ | __ | __/15 |
| B: Architecture & Technology Choices | __ | __ | __ | __ | __ | __/15 |
| C: Data & Integration Strategy | __ | __ | __ | __ | __ | __/15 |
| D: Scalability & Future-Proofing | __ | __ | __ | __ | __ | __/15 |
| **TOTAL** | | | | | | **__/60** |

### Readiness Thresholds

| Score Range | Readiness Level | Recommended Action |
|-------------|----------------|--------------------|
| **48–60** | 🟢 **Ready to Proceed** | Move to Document 3 (Design & User Experience Strategy) |
| **36–47** | 🟡 **Conditionally Ready** | Address gaps in any question scored 0 or 1 before proceeding |
| **24–35** | 🟠 **Significant Gaps** | Schedule follow-up technical deep-dives for weak sections |
| **0–23** | 🔴 **Not Ready** | Major architectural uncertainty — conduct spikes (Q20) before proceeding |

---

## Decision Matrix

*Based on the answers gathered above, crystallize the key technology decisions:*

| Decision | Option A | Option B | Option C | Recommendation | Rationale |
|----------|----------|----------|----------|---------------|-----------|
| Cloud Provider | AWS | Google Cloud Platform | Microsoft Azure | | |
| Database Type | PostgreSQL (Relational) | MongoDB (Document) | Hybrid (Relational + Document) | | |
| Architecture Pattern | Monolith | Modular Monolith | Microservices | | |
| Framework Selection | Node.js + Express | Python + Django | Go + Gin | | |
| Container Orchestration | AWS ECS Fargate | Kubernetes (EKS) | No containers (EC2 direct) | | |
| API Style | REST | GraphQL | gRPC | | |
| Mobile Framework | React Native | Flutter | Native (Swift + Kotlin) | | |

---

## Readiness Checklist

*All items must be checked before proceeding to Document 3: Design & User Experience Strategy.*

- [ ] Functional requirements are listed with priorities and acceptance criteria (Q1)
- [ ] Non-functional requirements have measurable thresholds (Q2)
- [ ] System boundary is clearly defined with in-scope and out-of-scope items (Q3)
- [ ] All external integrations are identified with risk assessments (Q4)
- [ ] Data volume, velocity, and variety projections are quantified (Q5)
- [ ] Architecture pattern is selected with documented rationale (Q6)
- [ ] Technology stack is defined with mandated vs preferred distinctions (Q7)
- [ ] Data model is designed for primary access patterns (Q8)
- [ ] Security architecture covers authentication, authorization, and encryption (Q9)
- [ ] Failure modes are identified with system responses documented (Q10)
- [ ] Data migration strategy is realistic with cleansing rules defined (Q11)
- [ ] Real-time vs batch processing decisions are justified (Q12)
- [ ] API contracts and versioning strategy are documented (Q13)
- [ ] State management strategy covers offline sync and caching (Q14)
- [ ] Observability infrastructure (logs, metrics, traces, alerts) is planned (Q15)
- [ ] Scalability targets are defined with scaling triggers (Q16)
- [ ] Deployment pipeline is designed and orchestration platform selected (Q17)
- [ ] Technical debt management process is established (Q18)
- [ ] All critical spikes are completed with documented results (Q20)
- [ ] No individual question scored 0
- [ ] Decision Matrix is completed with rationale for each choice

---

## Appendix

### A. Architecture Decision Records (ADRs)

| ADR # | Title | Status | Date | Decision |
|-------|-------|--------|------|----------|
| ADR-001 | | | | |
| ADR-002 | | | | |
| ADR-003 | | | | |

### B. Spike/PoC Results Log

| Spike # | Date Completed | Result (Pass/Fail) | Key Findings | Decision Impact |
|---------|---------------|-------------------|-------------|----------------|
| | | | | |
| | | | | |
| | | | | |

### C. Technical Session Log

| Session # | Date | Attendees | Topics Covered | Decisions Made |
|-----------|------|-----------|---------------|----------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

### D. Technology Evaluation Matrix

| Technology | Category | Evaluated By | Date | Verdict | Notes |
|-----------|----------|-------------|------|---------|-------|
| | | | | | |
| | | | | | |
| | | | | | |

---

*This document is part of the Universal Execution Framework. Proceed to **Document 3: Design & User Experience Strategy** when the Readiness Checklist is complete.*

---

**Document End — System Architecture & Technical Specification v1.0.0**
