---
title: "Business Discovery & Strategic Alignment"
subtitle: "Master Document 1 of 5 — The Universal Execution Framework"
version: "1.0.0"
date: "October 2026"
author: "System Discovery Team"
status: "Template — Ready for Use"
---

<div style="text-align: center; page-break-after: always; padding-top: 200px;">

# BUSINESS DISCOVERY & STRATEGIC ALIGNMENT

## Master Document 1 of 5

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
2. [Section A: Business Context & Vision (Q1–Q5)](#section-a-business-context--vision-q1q5)
3. [Section B: Market & Competitive Landscape (Q6–Q10)](#section-b-market--competitive-landscape-q6q10)
4. [Section C: Financial & Resource Constraints (Q11–Q15)](#section-c-financial--resource-constraints-q11q15)
5. [Section D: Risk, Governance & Decision-Making (Q16–Q20)](#section-d-risk-governance--decision-making-q16q20)
6. [Scoring Summary](#scoring-summary)
7. [Decision Matrix](#decision-matrix)
8. [Readiness Checklist](#readiness-checklist)
9. [Appendix](#appendix)

---

## How to Use This Document

This document is **Document 1 of 5** in the Universal Execution Framework. It focuses on understanding the **business context** — the WHY behind the system you're about to build.

### Instructions

1. **Before the first client meeting**, review all 20 questions to prepare your interview strategy.
2. **During discovery sessions**, work through each section systematically. Not every question needs to be answered in one session.
3. **Score each answer** using the 0–3 rubric provided. A question scored 0 or 1 is a red flag that requires follow-up.
4. **Complete the Decision Matrix** at the end to crystallize strategic choices.
5. **Use the Readiness Checklist** to determine if you have enough information to proceed to Document 2 (System Architecture).

### Scoring Guide

| Score | Label | Meaning |
|-------|-------|---------|
| 0 | Not Addressed | The question was not answered or is unknown |
| 1 | Partially Addressed | A vague or incomplete answer was given |
| 2 | Fully Addressed | A clear, actionable answer was provided |
| 3 | Exceptional | Answer includes evidence, data, or strategic depth |

### When to Use

- **New client engagements** — Run this before any technical work begins
- **Internal projects** — Even internal systems need business justification
- **Rescue projects** — Use this to diagnose misalignment on failing projects
- **Scope expansions** — Re-run relevant sections when scope changes significantly

---

## Section A: Business Context & Vision (Q1–Q5)

*This section establishes the foundational understanding of the organization, its mission, and why this system needs to exist. Without clear answers here, everything downstream is built on assumptions.*

---

### Q1: What is the organization's core mission, and how does this system serve it?

**Why This Matters:**
Every system must connect to the organization's reason for existing. A system that doesn't serve the core mission will struggle for executive sponsorship, budget, and user adoption. This question forces stakeholders to articulate the strategic link between what they do and what they're asking you to build.

**Expected Answer Format:**
A 2–3 paragraph narrative that states the organization's mission, identifies the strategic pillar this system supports, and explains the connection between the two.

**Example Answer:**
> *"Our mission is to democratize financial literacy for underserved communities across West Africa. This learning management system directly serves our education delivery pillar — it will replace our current in-person-only model with a blended learning platform, allowing us to reach 10x more learners without 10x the instructors. The system is core to our 2027 expansion strategy into 5 new countries."*

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q2: What specific business problem or opportunity does this system address?

**Why This Matters:**
Systems built to solve vague problems deliver vague results. This question forces precision — is this a pain point elimination (defensive) or a growth opportunity (offensive)? The answer shapes everything from feature prioritization to ROI measurement. If the stakeholder can't articulate the problem clearly, the project is already at risk.

**Expected Answer Format:**
A problem statement following the format: "[Who] currently experiences [problem] when trying to [goal], which results in [measurable impact]." Alternatively, an opportunity statement: "[Opportunity] exists because [market gap], which could generate [projected value]."

**Example Answer:**
> *"Our field sales team of 200 agents currently tracks customer interactions in personal notebooks and WhatsApp groups. This causes: (a) zero visibility into pipeline for management, (b) 30% of leads are contacted by multiple agents, creating customer frustration, and (c) when an agent leaves, all their customer relationships are lost. We estimate this costs us ₦45M annually in lost deals and duplicated effort."*

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q3: Who are the key stakeholders, and what are their competing priorities?

**Why This Matters:**
Every project has multiple stakeholders with different — often conflicting — priorities. The CFO cares about cost, the CTO cares about architecture, the end-users care about simplicity, and the CEO cares about speed-to-market. Identifying these tensions early prevents mid-project political derailments and helps you navigate trade-off decisions.

**Expected Answer Format:**
A stakeholder map table listing: Name/Role, Interest in the project, Level of influence (High/Medium/Low), Key priority, and Potential conflict with other stakeholders.

**Example Answer:**

> | Stakeholder | Role | Influence | Priority | Potential Conflict |
> |------------|------|-----------|----------|-------------------|
> | Adaeze Obi | CEO | High | Launch before Q2 investor meeting | Speed vs quality |
> | Chukwu Eze | CTO | High | Scalable architecture, no vendor lock-in | Over-engineering vs speed |
> | Fatima Bello | Head of Sales | Medium | Easy to use, mobile-first | Feature requests vs scope |
> | IT Team | Operations | Medium | Low maintenance burden | New tech vs existing stack |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q4: What does success look like in 3 months, 12 months, and 3 years?

**Why This Matters:**
Success without a timeline is a fantasy. This question forces the client to think beyond "launch day" and define measurable outcomes at three horizons: immediate (prove it works), medium-term (prove it delivers value), and long-term (prove it was the right investment). These become your project's North Star metrics and protect you from scope creep — if a feature request doesn't serve one of these milestones, it can be deferred.

**Expected Answer Format:**
A three-tier success framework with specific, measurable outcomes for each time horizon. Each tier should include at least one quantitative metric.

**Example Answer:**
> **3 Months (Launch + Validation):**
> - System is live with 50 pilot users
> - 80% of pilot users logging in at least 3x per week
> - Zero critical bugs in production
>
> **12 Months (Value Delivery):**
> - 500 active users across 3 departments
> - 40% reduction in manual reporting time
> - Customer satisfaction score ≥ 4.2/5.0
>
> **3 Years (Strategic Impact):**
> - System handles all 5 business units across 3 countries
> - Platform generates ₦200M in cost savings annually
> - System becomes a competitive differentiator referenced in investor materials

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q5: What existing processes or systems will this replace, augment, or integrate with?

**Why This Matters:**
No system exists in a vacuum. Understanding the current landscape — spreadsheets, legacy software, manual processes, third-party tools — reveals hidden dependencies, data migration needs, user habits that must be respected, and political landmines (someone built that spreadsheet and is proud of it). This question is the foundation of your integration strategy and change management plan.

**Expected Answer Format:**
An inventory table listing each existing system/process, its purpose, current users, data it holds, and whether the new system will replace, augment, or integrate with it.

**Example Answer:**

> | Current System/Process | Purpose | Users | Data Held | Relationship |
> |----------------------|---------|-------|-----------|-------------|
> | Excel spreadsheets (shared drive) | Sales tracking | 200 agents | 3 years of customer data | **Replace** |
> | WhatsApp Business groups | Team communication | All staff | Unstructured conversations | **Augment** (notifications) |
> | QuickBooks | Invoicing | Finance team (5) | Financial records | **Integrate** (API sync) |
> | Manual paper forms | Field visit reports | 200 agents | Visit logs (not digitized) | **Replace** |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section B: Market & Competitive Landscape (Q6–Q10)

*This section maps the external forces that shape the system — users, competitors, regulations, and industry trends. A system built in ignorance of its market context is a system destined for irrelevance.*

---

### Q6: Who are the end-users, and what are their pain points and workflows?

**Why This Matters:**
The success of any system is ultimately determined by whether real humans can and will use it. This question goes beyond demographics to understand the daily reality of the people who will interact with the system — their frustrations, their workarounds, their skill levels, and their motivations. Building for imagined users instead of real ones is the #1 cause of system abandonment.

**Expected Answer Format:**
User persona profiles (2–4 personas) that include: name, role, tech savviness (1–5), daily workflow description, top 3 pain points, current workarounds, and what would delight them.

**Example Answer:**
> **Persona: Emeka — Field Sales Agent**
> - **Role:** Visits 8–12 clients daily across Lagos
> - **Tech Savviness:** 2/5 (uses WhatsApp and basic phone features)
> - **Daily Workflow:** Receives lead list via WhatsApp → visits clients → takes notes in notebook → reports to manager via voice note at end of day
> - **Pain Points:** (1) No way to check if another agent already contacted a lead, (2) Loses notebook data when phone/notebook is stolen, (3) Manager asks for reports he already gave verbally
> - **Workarounds:** Takes photos of notebook pages, sends to personal WhatsApp "Saved Messages"
> - **What would delight him:** "Just let me tap a button after each visit and be done. No typing essays."

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q7: What competitive or alternative solutions exist, and why are they insufficient?

**Why This Matters:**
If a perfect solution already exists, building a custom system is a waste of money. This question forces honest evaluation of the build-vs-buy decision and identifies specific gaps in existing solutions that justify custom development. If the client can't articulate why off-the-shelf doesn't work, you should push back on building from scratch.

**Expected Answer Format:**
A competitive analysis table listing each alternative, its strengths, its specific shortcomings for this use case, pricing, and a verdict (viable/not viable/partial fit).

**Example Answer:**

> | Solution | Strengths | Why It Falls Short | Pricing | Verdict |
> |---------|-----------|-------------------|---------|---------|
> | Salesforce | Industry standard, robust | Too complex for low-tech users, expensive per seat, overkill for our needs | $25/user/month | Not viable |
> | Zoho CRM | Affordable, customizable | Poor offline support (critical for field agents), no local payment integration | $12/user/month | Partial fit |
> | Google Sheets + Forms | Free, familiar | No real-time sync, no role-based access, data integrity issues at scale | Free | Not viable at scale |
> | Custom-built by competitor X | They solved a similar problem | Their solution is proprietary and not for sale | N/A | N/A |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q8: What regulatory, legal, or compliance requirements constrain this system?

**Why This Matters:**
Regulatory compliance is non-negotiable and discovering requirements late is catastrophically expensive. Data protection laws (GDPR, NDPR, POPIA), industry-specific regulations (HIPAA, PCI-DSS, SOX), accessibility requirements, and data residency laws can fundamentally reshape architecture, hosting, and feature decisions. Getting this wrong can result in fines, lawsuits, or forced system shutdowns.

**Expected Answer Format:**
A compliance inventory listing each regulation/standard, its jurisdiction, which aspects of the system it affects, specific requirements, and current compliance status.

**Example Answer:**

> | Regulation | Jurisdiction | System Impact | Key Requirements | Status |
> |-----------|-------------|---------------|-----------------|--------|
> | NDPR (Nigeria Data Protection Regulation) | Nigeria | User data storage, consent | Data processing consent, right to erasure, breach notification within 72hrs | Not yet assessed |
> | PCI-DSS | Global | Payment processing | Encrypt card data, access logging, annual audit | N/A — no direct card storage planned |
> | GDPR | EU (if EU users) | Data export, deletion | Data portability, cookie consent, DPO appointment | Needed if we expand to EU |
> | Industry: CBN Guidelines | Nigeria | Financial reporting | Transaction audit trail, KYC data retention 6 years | Partially compliant |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q9: What is the total addressable market or internal user base for this system?

**Why This Matters:**
The scale of the user base determines everything from infrastructure sizing to support staffing to licensing costs. A system for 50 internal users has fundamentally different requirements than one for 50,000 customers. This question also forces stakeholders to think about growth trajectory — if they're planning to 10x users in 2 years, the architecture must support it from day one (or have a clear scaling strategy).

**Expected Answer Format:**
A user base projection table showing current users, 12-month projection, and 3-year projection, broken down by user type. Include geographic distribution if relevant.

**Example Answer:**
> | User Type | Current | 12-Month Projection | 3-Year Projection |
> |----------|---------|--------------------|--------------------|
> | Field Sales Agents | 200 | 500 | 2,000 |
> | Sales Managers | 15 | 40 | 150 |
> | Admin/Finance | 5 | 10 | 30 |
> | Executive Dashboard Users | 3 | 5 | 15 |
> | **Total** | **223** | **555** | **2,195** |
>
> **Geographic Distribution:** Currently Lagos only → 12 months: Lagos + Abuja + Port Harcourt → 3 years: 12 cities across Nigeria + Ghana + Kenya

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q10: What industry trends or emerging technologies could impact this system's relevance?

**Why This Matters:**
Technology moves fast. A system designed without awareness of where the industry is heading risks being obsolete before it launches. AI/ML integration, mobile-first shifts, voice interfaces, blockchain for audit trails, low-code platforms enabling competitors — these trends don't just affect features, they affect whether the system should be built at all. This question also surfaces opportunities to leapfrog competitors by adopting emerging capabilities early.

**Expected Answer Format:**
A trend analysis listing 3–5 relevant trends, their potential impact on the system (positive/negative/neutral), time horizon (imminent/1–2 years/3–5 years), and recommended response (adopt, monitor, ignore).

**Example Answer:**

> | Trend | Impact | Horizon | Response |
> |-------|--------|---------|----------|
> | AI-powered sales forecasting | Positive — enhances our analytics module | 1–2 years | **Adopt** — build data structures to support ML from day one |
> | WhatsApp Business API maturation | Positive — native channel for our users | Imminent | **Adopt** — integrate WhatsApp as primary notification channel |
> | Low-code CRM platforms (e.g., Airtable, Retool) | Negative — competitors could build faster | Imminent | **Monitor** — our offline-first requirement is our moat |
> | 5G rollout in urban Nigeria | Positive — reduces need for offline-first | 3–5 years | **Monitor** — don't remove offline support yet |
> | Data sovereignty regulations tightening | Neutral — we're already local-hosted | 1–2 years | **Monitor** — ensure cloud provider has Nigerian data centers |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section C: Financial & Resource Constraints (Q11–Q15)

*This section confronts the pragmatic reality — money, people, time, and consequences. The most beautiful architecture in the world is worthless if the budget runs out at 60% completion. These questions ensure the project is grounded in financial and operational reality.*

---

### Q11: What is the budget range, and how is it structured (CapEx vs OpEx)?

**Why This Matters:**
Budget structure affects everything from technology choices (self-hosted vs SaaS) to team composition (full-time vs contractors) to timeline (can we parallel-track workstreams?). CapEx (capital expenditure) budgets are one-time and often easier to secure but harder to extend. OpEx (operational expenditure) budgets are recurring and more flexible but require ongoing justification. Many projects fail not because they ran out of money, but because they had the wrong *type* of money.

**Expected Answer Format:**
A budget breakdown showing total budget, allocation by phase (discovery, build, launch, operations), CapEx vs OpEx split, contingency reserve, and approval authority for overruns.

**Example Answer:**
> **Total Budget:** ₦85,000,000 (~$55,000 USD)
>
> | Phase | Allocation | Type | Notes |
> |-------|-----------|------|-------|
> | Discovery & Design | ₦8,500,000 (10%) | CapEx | Includes research, prototyping |
> | Development & Testing | ₦51,000,000 (60%) | CapEx | Core build, 6-month estimate |
> | Launch & Migration | ₦8,500,000 (10%) | CapEx | Data migration, training, rollout |
> | Year 1 Operations | ₦12,750,000 (15%) | OpEx | Hosting, support, maintenance |
> | Contingency | ₦4,250,000 (5%) | CapEx | CEO approval required for access |
>
> **Overrun Authority:** CTO can approve up to 10% overrun. Beyond that requires board approval.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q12: What is the expected ROI timeline and how will it be measured?

**Why This Matters:**
If you can't measure ROI, you can't prove the system's value — and systems that can't prove their value get defunded, deprioritized, or replaced. This question forces stakeholders to define success in financial terms, which also helps with feature prioritization: features that directly impact ROI get built first, vanity features get deferred. It also protects you as the builder — clear ROI metrics are your proof of delivery.

**Expected Answer Format:**
An ROI projection with specific metrics, measurement method, baseline (current state), target (future state), and break-even timeline.

**Example Answer:**
> **Break-even Target:** 14 months post-launch
>
> | ROI Metric | Baseline (Today) | Target (12 Months) | Measurement Method |
> |-----------|-------------------|--------------------|--------------------|
> | Revenue per agent | ₦2.5M/quarter | ₦3.5M/quarter | CRM pipeline reports |
> | Lead response time | 48 hours avg | 4 hours avg | System timestamp analytics |
> | Agent onboarding time | 3 weeks | 1 week | HR records |
> | Lost deals from duplication | 30% of pipeline | < 5% | Duplicate detection logs |
> | Management reporting time | 2 days/week | 30 min/week | Manager time-tracking survey |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q13: What internal resources (people, skills, infrastructure) are available?

**Why This Matters:**
The gap between available resources and required resources defines your project risk. A client with a strong IT team might be able to co-develop and self-maintain; a client with no technical staff needs a fully managed solution with comprehensive documentation and training. This question also identifies skill gaps that need to be filled — either through hiring, training, or your team providing ongoing support.

**Expected Answer Format:**
A resource inventory listing available people (roles, skills, availability), existing infrastructure (servers, cloud accounts, CI/CD), and identified gaps that need to be filled.

**Example Answer:**
> **People:**
> | Role | Name/Count | Skills | Availability |
> |------|-----------|--------|-------------|
> | IT Manager | James Okafor | Linux admin, basic SQL | 50% (shared with other projects) |
> | Junior Developers | 2 | HTML/CSS, basic JavaScript | 100% (can be assigned full-time) |
> | UI/UX Designer | None | — | **GAP — needs hiring or outsource** |
>
> **Infrastructure:**
> - AWS account (underutilized, basic tier)
> - GitHub organization (free plan)
> - No CI/CD pipeline
> - Office has stable internet; field offices have intermittent connectivity
>
> **Identified Gaps:** Senior backend developer, UI/UX designer, DevOps capability

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q14: What are the hard deadlines, and what drives them (contracts, events, regulations)?

**Why This Matters:**
Not all deadlines are equal. A deadline driven by a regulatory compliance date is immovable and failure means fines. A deadline set because "the CEO mentioned it in a board meeting" is soft and negotiable. Understanding the *driver* behind each deadline lets you advise on realistic phasing — perhaps the full system can't be ready by the regulatory deadline, but the compliance-relevant module can be. This question also exposes hidden constraints (e.g., "our legacy vendor contract expires in March — we must migrate by then or renew for another year").

**Expected Answer Format:**
A timeline table listing each deadline, what drives it (regulatory, contractual, strategic, arbitrary), whether it's hard or soft, consequence of missing it, and which system components must be ready by that date.

**Example Answer:**

> | Deadline | Driver | Hard/Soft | Consequence of Missing | Components Needed |
> |---------|--------|-----------|----------------------|-------------------|
> | Jan 15, 2027 | Legacy CRM contract renewal | **Hard** | Forced to renew at ₦18M/year | Core CRM + data migration |
> | Mar 1, 2027 | Board presentation | Soft | Embarrassment, loss of confidence | Dashboard + reporting module |
> | Jun 1, 2027 | NDPR audit | **Hard** | Potential fines up to 2% of revenue | Consent management, data controls |
> | Dec 31, 2027 | Expansion to Abuja | Soft | Delayed growth, competitors gain ground | Multi-location support |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q15: What is the cost of inaction — what happens if this system is NOT built?

**Why This Matters:**
This is the most powerful question in the entire framework. It flips the conversation from "why should we build this?" to "what's the cost of NOT building this?" If the answer is "nothing much changes," the project shouldn't exist. If the answer reveals hemorrhaging money, losing customers, or regulatory exposure, you have a mandate. This question also provides ammunition for budget discussions — when someone wants to cut scope, you can point back to the cost of inaction.

**Expected Answer Format:**
A scenario analysis describing what happens in 6 months, 12 months, and 3 years if the current state persists, with quantified financial and operational impact.

**Example Answer:**
> **6 Months — Slow Bleed:**
> - Continue losing ₦3.75M/month to lead duplication and missed follow-ups
> - 2 more experienced agents will likely leave due to tooling frustration (replacement cost: ₦1.5M each)
> - Competitors with CRM systems continue to close deals faster
>
> **12 Months — Accelerating Pain:**
> - Legacy CRM contract auto-renews at ₦18M/year for a system nobody uses properly
> - NDPR audit exposes data handling gaps — estimated remediation: ₦8M + potential fine
> - Management continues flying blind on pipeline — missed revenue forecast by 25% last year
>
> **3 Years — Existential Risk:**
> - Competitors with data-driven operations win larger accounts
> - Inability to scale to new cities without visibility into field operations
> - Total estimated cost of inaction: ₦120M+ in lost revenue, fines, and operational inefficiency

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section D: Risk, Governance & Decision-Making (Q16–Q20)

*This section addresses the political, organizational, and risk dimensions that kill more projects than bad code ever does. A technically perfect system that nobody has authority to approve, nobody manages scope for, and nobody prepared the organization to adopt is a technically perfect failure.*

---

### Q16: Who has final decision-making authority, and what is the approval process?

**Why This Matters:**
"Design by committee" is where projects go to die slowly. Clear decision-making authority means faster iterations, fewer reversals, and less time wasted presenting to people who can't approve. This question identifies who can say YES, who can say NO, who can block without authority, and what the escalation path looks like when stakeholders disagree.

**Expected Answer Format:**
A RACI-style matrix for key decision types (feature scope, technology choices, budget allocation, timeline changes, go-live approval), plus a description of the approval workflow.

**Example Answer:**

> | Decision Type | Responsible | Accountable | Consulted | Informed |
> |--------------|------------|-------------|-----------|----------|
> | Feature scope changes | Product Manager | CEO | CTO, Sales Head | All stakeholders |
> | Technology stack choices | CTO | CTO | Dev team, Security | CEO, Board |
> | Budget re-allocation | CFO | CEO | CTO, Product Manager | Board |
> | Timeline changes | Project Manager | CEO | All leads | All stakeholders |
> | Go-live approval | CTO + Product Manager | CEO | QA lead, Sales Head | All staff |
>
> **Approval Workflow:** Proposals submitted via shared doc → 48-hour review period → Decision meeting (Thursdays) → Decision logged in project wiki. Emergency decisions: CEO + CTO can approve via WhatsApp with email confirmation within 24 hours.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q17: What are the top 5 risks that could derail this project?

**Why This Matters:**
Every project has risks. The dangerous ones are the risks nobody talks about. This question forces stakeholders to confront uncomfortable realities — political opposition, skill gaps, budget uncertainty, market shifts, or dependencies on unreliable third parties. By naming risks explicitly, you can create mitigation strategies before they become crises. The absence of identified risks is itself the biggest risk.

**Expected Answer Format:**
A risk register with each risk rated by probability (High/Medium/Low), impact (High/Medium/Low), mitigation strategy, risk owner, and trigger indicators.

**Example Answer:**

> | # | Risk | Probability | Impact | Mitigation | Owner | Trigger |
> |---|------|------------|--------|------------|-------|---------|
> | 1 | Key developer leaves mid-project | Medium | High | Document everything, pair programming, notice period enforcement | CTO | Developer expresses dissatisfaction |
> | 2 | Client scope creep ("just one more feature") | High | High | Signed scope document, change request process with cost estimates | PM | >3 unplanned feature requests in a sprint |
> | 3 | Data migration from legacy system is messier than expected | High | Medium | Allocate 2x estimated migration time, early data audit | Tech Lead | Data quality report shows >20% inconsistencies |
> | 4 | End-user resistance to new system | Medium | High | Early user involvement, champion program, phased rollout | Sales Head | Pilot adoption <50% after 2 weeks |
> | 5 | Budget cut due to economic downturn | Low | Critical | Phase deliverables so each phase delivers standalone value | CEO | Quarterly revenue misses forecast by >15% |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q18: What organizational changes (restructuring, hiring, training) are needed?

**Why This Matters:**
A new system often requires a new way of working. If you deploy a CRM but don't change the sales process, nobody will use it. If you build an analytics dashboard but don't hire someone who can interpret data, it's a fancy screensaver. This question surfaces the human and organizational changes that must happen *alongside* the technical build — and these changes often take longer and are harder than the technology.

**Expected Answer Format:**
A change impact assessment listing each organizational change needed, who it affects, effort required, timeline, dependencies, and change management approach.

**Example Answer:**

> | Change Needed | Who's Affected | Effort | Timeline | Approach |
> |--------------|---------------|--------|----------|----------|
> | Hire UI/UX Designer | Product team | Medium | Before design phase | Recruit or contract — CTO to lead |
> | Train 200 agents on new system | Field sales | High | 4 weeks pre-launch | Regional training sessions + video tutorials |
> | Restructure reporting lines (agents → system-based assignments) | Sales org | High | At launch | Phased rollout by region, Sales Head to lead |
> | Create "System Admin" role | IT team | Low | Before launch | Promote existing IT staff, provide training |
> | Sunset WhatsApp for business communication | All staff | Medium | 3 months post-launch | Gradual migration with dual-running period |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q19: How will scope changes and feature requests be managed during development?

**Why This Matters:**
Scope creep is the silent killer of projects. Without a formal process, every stakeholder becomes a product manager, every meeting generates new requirements, and the project timeline stretches indefinitely while the budget stays fixed. This question establishes the "immune system" of your project — the process that protects the plan from well-intentioned but destructive additions.

**Expected Answer Format:**
A scope management process description covering: how requests are submitted, how they're evaluated (criteria), who approves, impact assessment template, and communication of decisions.

**Example Answer:**
> **Scope Change Process:**
>
> 1. **Submit:** All feature requests submitted via a standard form (Requestor, Description, Business justification, Urgency)
> 2. **Triage:** Product Manager reviews within 48 hours, categorizes as:
>    - 🟢 **In-scope** (already planned, adjust priority)
>    - 🟡 **Nice-to-have** (add to backlog for future sprint)
>    - 🔴 **Scope change** (requires formal change request)
> 3. **Impact Assessment** (for 🔴 items): Tech Lead provides effort estimate, timeline impact, cost impact
> 4. **Decision:** CEO + CTO approve/reject in weekly steering meeting
> 5. **Communication:** Decision + rationale communicated to requestor within 24 hours
>
> **Rule:** No scope change is implemented without a signed-off impact assessment. "Can you just quickly add..." is not a valid request channel.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q20: What is the exit strategy if the system fails to meet its objectives?

**Why This Matters:**
Nobody likes planning for failure, but the absence of an exit strategy creates a "zombie project" — one that everyone knows is failing but nobody has the framework to kill. This question establishes the criteria for pulling the plug, the process for doing so gracefully, and the fallback plan. Ironically, having a clear exit strategy often *prevents* failure because it creates accountability and forces regular check-ins against success criteria.

**Expected Answer Format:**
A structured exit strategy covering: failure criteria (when do we admit it's not working), decision process, data preservation plan, contractual implications, and fallback options.

**Example Answer:**
> **Failure Criteria (any 2 of the following triggers an exit review):**
> - Pilot adoption below 30% after 6 weeks despite training
> - Budget overrun exceeds 40% with <60% of features delivered
> - Key sponsor (CEO) withdraws support
> - Regulatory blocker discovered that requires fundamental re-architecture
>
> **Exit Review Process:**
> 1. CTO + PM prepare honest assessment report
> 2. Steering committee reviews within 1 week
> 3. Options presented: Pivot, Pause, or Terminate
>
> **If Terminated:**
> - All source code and documentation delivered to client (they own it)
> - Data exported in standard formats (CSV, JSON)
> - 30-day transition support period
> - Lessons learned documented for future projects
>
> **Fallback Options:**
> - Revert to legacy system (kept running in parallel during pilot)
> - Evaluate SaaS alternatives (Zoho CRM) with migration from partially built system
> - Reduce scope to "CRM-lite" — just lead tracking and basic reporting

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Scoring Summary

### How to Score

Add up all individual question scores. The maximum possible score is **60** (20 questions × 3 points each).

| Section | Q1 | Q2 | Q3 | Q4 | Q5 | Subtotal |
|---------|----|----|----|----|----|----|
| A: Business Context & Vision | __ | __ | __ | __ | __ | __/15 |
| B: Market & Competitive Landscape | __ | __ | __ | __ | __ | __/15 |
| C: Financial & Resource Constraints | __ | __ | __ | __ | __ | __/15 |
| D: Risk, Governance & Decision-Making | __ | __ | __ | __ | __ | __/15 |
| **TOTAL** | | | | | | **__/60** |

### Readiness Thresholds

| Score Range | Readiness Level | Recommended Action |
|-------------|----------------|-------------------|
| **48–60** | 🟢 **Ready to Proceed** | Move to Document 2 (System Architecture) |
| **36–47** | 🟡 **Conditionally Ready** | Address gaps in any question scored 0 or 1 before proceeding |
| **24–35** | 🟠 **Significant Gaps** | Schedule follow-up discovery sessions for weak sections |
| **0–23** | 🔴 **Not Ready** | Major alignment issues — consider whether project should proceed |

---

## Decision Matrix

*Based on the answers gathered above, crystallize the key strategic decisions:*

| Decision | Option A | Option B | Option C | Recommendation | Rationale |
|----------|----------|----------|----------|---------------|-----------|
| Build vs Buy vs Hybrid | Build from scratch | Buy off-the-shelf | Hybrid (buy core, build custom) | | |
| In-house vs Outsource | Internal team builds | External agency/contractor | Mixed team | | |
| Phased vs Big-Bang Launch | Phase by module over 6 months | Build everything, launch once | Phase by user group (pilot → rollout) | | |
| Cloud vs On-Premise | Public cloud (AWS/GCP/Azure) | On-premise hosting | Hybrid cloud | | |
| Budget Strategy | Fixed-price contract | Time & materials | Retainer + milestones | | |

---

## Readiness Checklist

*All items must be checked before proceeding to Document 2: System Architecture & Technical Specification.*

- [ ] Business case is articulated and documented (Q1, Q2)
- [ ] Key stakeholders are identified with roles and priorities (Q3)
- [ ] Success metrics are defined with timelines (Q4)
- [ ] Current system landscape is mapped (Q5)
- [ ] End-user personas are defined (Q6)
- [ ] Competitive analysis is complete (Q7)
- [ ] Regulatory requirements are identified (Q8)
- [ ] User base projections are quantified (Q9)
- [ ] Budget is confirmed with structure and contingency (Q11)
- [ ] ROI metrics and timeline are agreed (Q12)
- [ ] Resource gaps are identified with mitigation plans (Q13)
- [ ] Hard deadlines are confirmed with drivers (Q14)
- [ ] Risk register is populated with mitigations (Q17)
- [ ] Decision-making authority is clear (Q16)
- [ ] Scope change process is agreed (Q19)
- [ ] Exit strategy is defined (Q20)
- [ ] All sections score ≥ 36/60 total
- [ ] No individual question scored 0

---

## Appendix

### A. Supporting Documents Collected

| Document | Source | Date Received | Stored At |
|----------|--------|--------------|-----------|
| | | | |
| | | | |
| | | | |

### B. Discovery Session Log

| Session # | Date | Attendees | Topics Covered | Follow-up Items |
|-----------|------|-----------|---------------|----------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

### C. Stakeholder Contact List

| Name | Role | Email | Phone | Preferred Contact Method |
|------|------|-------|-------|-------------------------|
| | | | | |
| | | | | |
| | | | | |

---

*This document is part of the Universal Execution Framework. Proceed to **Document 2: System Architecture & Technical Specification** when the Readiness Checklist is complete.*

---

**Document End — Business Discovery & Strategic Alignment v1.0.0**
