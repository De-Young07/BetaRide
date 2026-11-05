---
title: "Operations, Maintenance & Growth"
subtitle: "Master Document 5 of 5 — The Universal Execution Framework"
version: "1.0.0"
date: "October 2026"
author: "System Discovery Team"
status: "Template — Ready for Use"
---

<div style="text-align: center; page-break-after: always; padding-top: 200px;">

# OPERATIONS, MAINTENANCE & GROWTH

## Master Document 5 of 5

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
2. [Section A: Monitoring & Incident Management (Q1–Q5)](#section-a-monitoring--incident-management-q1q5)
3. [Section B: Maintenance & Technical Health (Q6–Q10)](#section-b-maintenance--technical-health-q6q10)
4. [Section C: Documentation & Knowledge Management (Q11–Q15)](#section-c-documentation--knowledge-management-q11q15)
5. [Section D: Scaling & Evolution Strategy (Q16–Q20)](#section-d-scaling--evolution-strategy-q16q20)
6. [Scoring Summary](#scoring-summary)
7. [Decision Matrix](#decision-matrix)
8. [Readiness Checklist](#readiness-checklist)
9. [Appendix](#appendix)

---

## How to Use This Document

This document is **Document 5 of 5** in the Universal Execution Framework. It focuses on sustaining the LIFE of the system — keeping it running, healthy, well-documented, and evolving after launch.

### Prerequisites

Before starting this document, ensure that:
- **Document 1: Business Discovery & Strategic Alignment** is complete (success metrics and growth projections defined)
- **Document 2: System Architecture & Technical Specification** is complete (infrastructure, monitoring hooks, and scalability designed)
- **Document 3: Design & User Experience Strategy** is complete (user journeys and feedback mechanisms planned)
- **Document 4: Quality Assurance, Testing & Deployment** is complete (CI/CD pipeline, release process, and rollback procedures established)

This document bridges the gap between "we launched it" and "it runs reliably for years." Many of the answers here build directly on infrastructure decisions from Document 2 and deployment processes from Document 4.

### Instructions

1. **Don't wait until launch** — Operations planning should begin during development, not after. Monitoring infrastructure, runbooks, and support processes take time to build and test.
2. **Involve operations and support** — If the team that builds the system is different from the team that runs it, both must contribute to this document.
3. **Score each answer** using the 0–3 rubric provided. Questions scored 0 or 1 indicate operational risks that will surface as outages, slow response to incidents, or knowledge loss when team members leave.
4. **Complete the Decision Matrix** at the end to lock down operational tooling and processes.
5. **Use the Readiness Checklist** before accepting the system as "production-ready."

### Scoring Guide

| Score | Label | Meaning |
|-------|-------|---------|
| 0 | Not Addressed | The question was not answered or is unknown |
| 1 | Partially Addressed | A vague or incomplete answer was given |
| 2 | Fully Addressed | A clear, actionable answer was provided |
| 3 | Exceptional | Answer includes automation, tested runbooks, or measured baselines |

### When to Use

- **Pre-launch readiness** — Validate that operational infrastructure is in place before go-live
- **Post-incident reviews** — Use relevant sections to identify operational gaps exposed by incidents
- **Team transitions** — Use when the build team hands off to a maintenance team
- **Growth phases** — Revisit when the system approaches scaling triggers defined here

---

## Section A: Monitoring & Incident Management (Q1–Q5)

*This section builds the early warning system. A system without monitoring is a system that only tells you about problems when users complain — and by then, the problem has been affecting users for hours. Monitoring transforms reactive firefighting into proactive health management. Incident management transforms panicked improvisation into calm, practiced response.*

---

### Q1: What monitoring and alerting strategy will detect system issues?

**Why This Matters:**
Monitoring is the nervous system of your production environment. Without it, you're operating blind — you don't know if the system is slow, if errors are spiking, if the database is running out of connections, or if a background job has been stuck for 6 hours. The goal isn't to monitor everything (that creates alert fatigue), but to monitor the things that predict user-visible problems before users notice them. A good alerting strategy wakes you up for real problems and stays quiet for noise.

**Expected Answer Format:**
A monitoring strategy covering: what metrics are collected (system-level, application-level, business-level), alert conditions and thresholds, alert routing (who gets notified), dashboards (what's visible at a glance), and alert hygiene practices.

**Example Answer:**

> **Monitoring Layers:**
>
> | Layer | What It Monitors | Metrics | Tool | Dashboard |
> |-------|-----------------|---------|------|-----------|
> | **Infrastructure** | Servers, containers, network | CPU, memory, disk I/O, network throughput, container restart count | AWS CloudWatch + Datadog Agent | "Infrastructure Health" dashboard |
> | **Application** | API performance, error rates, business logic | Response times (p50/p95/p99), error rate (4xx/5xx), request throughput, queue depths | Datadog APM | "Application Performance" dashboard |
> | **Database** | Query performance, connections, storage | Slow queries (> 1s), connection pool usage, replication lag, disk usage, cache hit ratio | RDS Performance Insights + CloudWatch | "Database Health" dashboard |
> | **Business** | User behavior, feature usage, business KPIs | Active users, visits logged per hour, sync success rate, daily signups, pipeline conversion rate | PostHog / Mixpanel + custom dashboard | "Business Pulse" dashboard |
> | **External Dependencies** | Third-party API health | WhatsApp API response time, Google Maps API latency, QuickBooks API availability | Synthetic monitoring (uptime checks) | "Dependencies" dashboard |
>
> **Alert Configuration:**
>
> | Alert | Condition | Severity | Notify | Auto-Escalate If No Response |
> |-------|-----------|----------|--------|------------------------------|
> | API down | Health check fails 3x consecutively | Critical | PagerDuty → on-call phone call | 5 minutes → escalate to CTO |
> | High error rate | 5xx errors > 5% of traffic for 3 minutes | Critical | PagerDuty → on-call phone call | 10 minutes → escalate to CTO |
> | Elevated error rate | 5xx errors > 1% of traffic for 5 minutes | High | Slack #incidents + PagerDuty (no phone) | 30 minutes → escalate to on-call |
> | Slow responses | p95 > 3s for 5 minutes | High | Slack #incidents | 1 hour → escalate to on-call |
> | Database connections high | Active connections > 80% of pool | Warning | Slack #monitoring | — |
> | Disk usage high | > 80% on any volume | Warning | Slack #monitoring | — |
> | Sync queue backlog | > 500 pending sync items for > 30 minutes | Warning | Slack #monitoring | 2 hours → escalate to on-call |
> | Zero visits logged | No visits logged in 2 hours (during business hours) | Info | Slack #monitoring | — (may be legitimate quiet period) |
> | Certificate expiring | SSL certificate expires in < 14 days | Warning | Slack #monitoring + email to Tech Lead | — |
>
> **Alert Hygiene:**
> - **Every alert must be actionable.** If an alert fires and the response is "just ignore it," the alert is wrong and must be tuned or removed.
> - **Monthly alert review:** Review all alerts that fired in the past month. Tune noisy alerts (> 5 fires/week with no action). Remove stale alerts. Add alerts for any unmonitored failure that occurred.
> - **Alert fatigue prevention:** Maximum 3 Critical alerts, 5 High alerts, 10 Warning alerts. If the count exceeds this, consolidate or tune before adding new ones.
> - **Snooze policy:** Alerts can be snoozed for a maximum of 4 hours (prevents permanent ignore).

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q2: What is the incident response process (severity levels, escalation, communication)?

**Why This Matters:**
When the system is down and the CEO is asking "what happened?", the worst time to figure out the process is during the incident. An incident response process eliminates confusion about who does what, prevents multiple people from making conflicting changes simultaneously, and ensures communication flows to the right people at the right time. The process doesn't need to be complex — for a team of 5, it needs to be simple, practiced, and muscle-memory.

**Expected Answer Format:**
An incident response plan covering: severity level definitions, response team roles, communication cadence, escalation paths, and resolution tracking.

**Example Answer:**

> **Severity Levels:**
>
> | Severity | Definition | Examples | Response Time | Team Engaged |
> |----------|-----------|---------|---------------|-------------|
> | **SEV-1 (Critical)** | System completely unavailable for all users, or active data loss/corruption | Application crash affecting all users, database corruption, security breach in progress | < 15 minutes | All available engineers + CTO |
> | **SEV-2 (Major)** | Core feature broken for many users, or significant performance degradation | Visit logging failing for all agents, dashboard not loading, sync stuck for 50+ users | < 1 hour | On-call engineer + Tech Lead |
> | **SEV-3 (Minor)** | Feature degraded but workaround available, or affecting < 10% of users | Export button not working (workaround: use API directly), slow performance in one region | < 4 hours | On-call engineer |
> | **SEV-4 (Low)** | Cosmetic issue, minor bug with easy workaround, no user impact | Alignment issue on one screen, incorrect timestamp format, warning log spam | Next business day | Whoever picks up the ticket |
>
> **Incident Response Roles:**
>
> | Role | Responsibility | Who |
> |------|---------------|-----|
> | **Incident Commander (IC)** | Coordinates response, makes decisions, manages communication | On-call engineer (SEV-3/4), Tech Lead (SEV-2), CTO (SEV-1) |
> | **Resolver** | Investigates root cause, implements fix | Available engineer(s) |
> | **Communicator** | Posts status updates to stakeholders and users | Product Manager (or IC if PM unavailable) |
>
> **Incident Workflow:**
>
> 1. **Detect:** Alert fires or user reports issue
> 2. **Triage:** IC assesses severity, creates incident channel (`#incident-YYYY-MM-DD-short-name`)
> 3. **Communicate:** IC posts initial status: "Investigating [issue]. Impact: [who is affected]. ETA for update: [time]."
> 4. **Investigate:** Resolver digs into logs, metrics, recent deployments
> 5. **Fix:** Implement fix (hotfix, rollback, configuration change, or manual intervention)
> 6. **Verify:** Confirm fix resolves the issue (monitoring returns to normal, smoke tests pass)
> 7. **Communicate:** IC posts resolution: "Resolved. Root cause: [summary]. Duration: [X minutes]."
> 8. **Follow up:** Post-incident review scheduled within 48 hours
>
> **Communication Cadence During Active Incident:**
>
> | Severity | Update Frequency | Channel |
> |----------|-----------------|---------|
> | SEV-1 | Every 15 minutes | Incident channel + stakeholder email/WhatsApp |
> | SEV-2 | Every 30 minutes | Incident channel + Slack #general |
> | SEV-3 | On status change (investigating → fixing → resolved) | Incident channel |
> | SEV-4 | When resolved | Ticket comment |
>
> **External User Communication:**
> - SEV-1 lasting > 15 minutes: Status page updated + in-app banner (if accessible)
> - SEV-2 lasting > 1 hour: WhatsApp broadcast to managers
> - SEV-3/4: No external communication unless users report

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q3: What SLAs/SLOs/SLIs define acceptable system performance?

**Why This Matters:**
Without defined service levels, "the system is performing well" is an opinion, not a fact. SLIs (Service Level Indicators) are the metrics you measure. SLOs (Service Level Objectives) are the targets you aim for. SLAs (Service Level Agreements) are the contracts you commit to. Together, they transform vague expectations into measurable commitments that drive architecture decisions, alert configurations, and resource allocation. If you don't define what "good" looks like, every slow page and every transient error becomes a debate.

**Expected Answer Format:**
A service level framework listing each SLI, its corresponding SLO (internal target), SLA (external commitment if applicable), measurement method, and the error budget (how much downtime or degradation is acceptable before action is required).

**Example Answer:**

> **Service Level Framework:**
>
> | SLI (What We Measure) | SLO (Internal Target) | SLA (External Promise) | Measurement | Error Budget (per month) |
> |----------------------|----------------------|----------------------|-------------|------------------------|
> | **Availability** — % of time API returns non-5xx responses | 99.5% | 99% (contractual) | Synthetic health checks every 60 seconds | 3.6 hours downtime/month (SLO) or 7.2 hours (SLA) |
> | **Latency** — API response time (p95) | < 1 second | < 3 seconds | Datadog APM percentile tracking | SLO violation if p95 > 1s for > 30 cumulative minutes |
> | **Data freshness** — Time between offline data creation and server sync | < 5 minutes (when connected) | < 1 hour | Sync timestamp comparison | SLO violation if > 1% of syncs take > 15 minutes |
> | **Correctness** — % of API responses that return accurate data | 99.99% | Not committed externally | Data integrity checks, reconciliation jobs | 0.01% = ~300 incorrect responses per 3 million monthly |
> | **Throughput** — Successful requests per minute | ≥ 1,000 req/min at peak | Not committed | CloudWatch / Datadog metric | SLO violation if throughput < 500 req/min during peak hours |
>
> **Error Budget Policy:**
>
> The error budget is the allowed margin of failure. Once exhausted, the team shifts from feature development to reliability work.
>
> | Error Budget Status | Action |
> |--------------------|--------|
> | > 50% remaining | Normal development — ship features, iterate |
> | 25–50% remaining | Caution — prioritize reliability fixes alongside features |
> | < 25% remaining | **Reliability sprint** — no new features, focus on stability, observability, and testing |
> | Exhausted (0%) | **Feature freeze** until budget is restored. All engineering capacity goes to reliability |
>
> **Error Budget Calculation (Availability SLO: 99.5%):**
> - Monthly budget: 30 days × 24 hours × 0.5% = 3.6 hours of downtime allowed
> - Tracked daily: if 2 hours used by Day 10, we're burning budget 67% faster than sustainable
> - Dashboard shows: budget consumed (hours/minutes), budget remaining, burn rate trend
>
> **SLO Review Cadence:**
> - Monthly: review SLI metrics against SLOs, identify trends
> - Quarterly: review SLO targets — tighten if consistently exceeding (incentivize improvement), loosen if consistently missing (be honest about capability)
> - Annually: review SLA with client — adjust based on demonstrated capability and business needs

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q4: How will on-call rotations and support coverage be structured?

**Why This Matters:**
Systems don't fail during business hours — they fail at 2 AM on Saturday, during holidays, and while the one person who understands the database is on vacation. On-call structure determines who responds, how quickly, and with what support. For a small team, on-call can feel burdensome. But the alternative — nobody is responsible and issues wait until Monday — is worse, because it means users suffer and data corrupts silently. This question designs a sustainable on-call practice that provides coverage without burning out the team.

**Expected Answer Format:**
An on-call plan covering: rotation schedule, escalation tiers, response time expectations, support tools, compensation/acknowledgment, and burnout prevention measures.

**Example Answer:**

> **On-Call Rotation (Team of 5):**
>
> | Week | Primary On-Call | Secondary (Backup) | Notes |
> |------|---------------|-------------------|-------|
> | Week 1 | Engineer A | Engineer B | |
> | Week 2 | Engineer B | Engineer C | |
> | Week 3 | Engineer C | Engineer D | |
> | Week 4 | Engineer D | Engineer E (Tech Lead) | |
> | Week 5 | Engineer E (Tech Lead) | Engineer A | Rotation restarts |
>
> **Coverage Hours:**
> - **Business hours (Mon–Fri, 8 AM – 6 PM WAT):** Primary on-call responds to all severities
> - **After hours (weekday evenings + weekends):** Primary on-call responds to SEV-1 and SEV-2 only. SEV-3/4 wait until next business day
> - **Public holidays:** Reduced coverage — SEV-1 only, 30-minute response time (relaxed from 15 minutes)
>
> **Escalation Tiers:**
>
> | Tier | Who | When Engaged | Response Time |
> |------|-----|-------------|---------------|
> | Tier 1 | Primary on-call engineer | First responder for all alerts | < 15 min (SEV-1), < 1 hour (SEV-2) |
> | Tier 2 | Secondary (backup) engineer | If primary doesn't respond within response time | < 30 min after escalation |
> | Tier 3 | Tech Lead / CTO | If Tier 1 + 2 can't resolve within 1 hour, or for SEV-1 incidents | < 15 min after escalation |
> | Tier 4 | External vendor support (AWS, database) | Infrastructure-level issues beyond team's expertise | Per vendor SLA |
>
> **On-Call Equipment and Access:**
> - On-call engineer has: laptop with VPN, PagerDuty app on phone, access to all monitoring dashboards, SSH access to production (via bastion host), database read access
> - Runbook accessible from phone (hosted on Notion, accessible offline via app)
> - Emergency communication: dedicated WhatsApp group for on-call escalation
>
> **On-Call Expectations:**
> - Must be reachable within response time (phone on, not traveling to remote areas)
> - Must be able to investigate (laptop accessible, internet connection)
> - Does NOT need to be sitting at a computer — just reachable and able to get to one within response time
> - On-call starts Monday 9 AM, ends following Monday 9 AM (week-long rotation)
>
> **Burnout Prevention:**
> - 1 week on, 4 weeks off rotation (with 5-person team)
> - On-call handoff meeting (15 min): outgoing on-call briefs incoming on any ongoing issues, known risks, or things to watch
> - After-hours pages tracked: if average exceeds 3 per on-call week, invest in reliability to reduce alerts
> - On-call recognition: comp time (half-day off after a week with > 2 after-hours incidents)
> - No on-call during team member's vacation — swap scheduled in advance

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q5: What is the post-incident review (PIR) process?

**Why This Matters:**
Incidents are inevitable. Repeating the same incident is a choice. Post-incident reviews (also called retrospectives or post-mortems) transform each incident from a painful experience into a lasting improvement. Without them, the same bugs recur, the same monitoring gaps persist, and the same miscommunications happen again. The key is a blameless culture — the review investigates why the system failed, not who failed. Blame drives hiding; learning drives improvement.

**Expected Answer Format:**
A PIR process covering: when a PIR is triggered, who participates, the PIR template (what gets documented), action item tracking, and how learnings are shared and institutionalized.

**Example Answer:**

> **When PIR Is Required:**
>
> | Condition | PIR Required? | Timeline |
> |-----------|--------------|----------|
> | SEV-1 incident | Always | Within 48 hours of resolution |
> | SEV-2 incident | Always | Within 1 week of resolution |
> | SEV-3 incident with > 30 min user impact | Yes | Within 2 weeks |
> | Near-miss (issue caught before user impact) | Recommended | Within 2 weeks |
> | SEV-4 | No PIR, but root cause documented in ticket | — |
>
> **PIR Participants:**
> - Incident Commander (facilitates)
> - All engineers involved in the incident response
> - Product Manager (for user impact context)
> - Optional: CTO (for SEV-1), relevant stakeholders
>
> **PIR Template:**
>
> ```markdown
> # Post-Incident Review: [Incident Title]
>
> **Date:** [Date]
> **Severity:** [SEV-1/2/3]
> **Duration:** [Detection → Resolution time]
> **Impact:** [Who was affected, how many users, what functionality was broken]
> **Incident Commander:** [Name]
>
> ## Timeline
> | Time (WAT) | Event |
> |-----------|-------|
> | HH:MM | Alert fires / User reports issue |
> | HH:MM | IC acknowledges, begins investigation |
> | HH:MM | Root cause identified |
> | HH:MM | Fix deployed |
> | HH:MM | Verified resolved |
>
> ## Root Cause
> [Clear, factual description of what failed and why. Technical detail for the engineering audience.
> Not: "Engineer X made a mistake." Instead: "The migration script did not account for NULL values in the
> phone column, causing a constraint violation that crashed the application on startup."]
>
> ## Contributing Factors
> - [Factor 1: What environmental or process condition allowed this to happen?]
> - [Factor 2: What monitoring or testing gap failed to catch this earlier?]
> - [Factor 3: What assumption was wrong?]
>
> ## What Went Well
> - [What worked in the response? What should we keep doing?]
>
> ## What Could Be Improved
> - [What was slow, confusing, or missing in the response?]
>
> ## Action Items
> | # | Action | Owner | Due Date | Status |
> |---|--------|-------|----------|--------|
> | 1 | [Specific action to prevent recurrence] | [Name] | [Date] | Open |
> | 2 | [Monitoring/alerting improvement] | [Name] | [Date] | Open |
> | 3 | [Process/runbook improvement] | [Name] | [Date] | Open |
>
> ## Lessons Learned
> [1–3 sentences summarizing the key takeaway for the team]
> ```
>
> **Blameless Culture Rules:**
> - No blame language in PIRs — "the system allowed" instead of "the developer caused"
> - Focus on systemic improvements: "How do we make this class of error impossible?" not "How do we prevent this person from making this error?"
> - PIRs are mandatory learning, not punishment. Attendance is expected, not dreaded.
>
> **Action Item Tracking:**
> - All PIR action items tracked in GitHub Issues with label `pir-action`
> - Reviewed in weekly team standup until closed
> - Action items not completed within 2 sprints are escalated to Tech Lead
> - Quarterly review: what percentage of PIR actions were completed? Are we actually learning, or just documenting?
>
> **Knowledge Sharing:**
> - PIR documents stored in project wiki, searchable by incident type
> - Monthly "Incident of the Month" review in team meeting (5 minutes, anonymous, educational)
> - Common failure patterns documented in runbooks (link from PIR to relevant runbook update)

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section B: Maintenance & Technical Health (Q6–Q10)

*This section addresses the slow decay that kills systems between incidents. While incidents are dramatic, the daily erosion of technical health is more dangerous: unpatched dependencies accumulate vulnerabilities, backups that were never tested fail when needed, technical debt slows every new feature, and storage fills up silently until the system crashes at 3 AM on a Saturday. These questions build the maintenance discipline that keeps the system healthy between crises.*

---

### Q6: How will dependencies, libraries, and frameworks be kept updated?

**Why This Matters:**
Every dependency is a trust relationship. You trust that the library author writes secure code, maintains backward compatibility, and responds to vulnerabilities promptly. That trust erodes over time — the library you adopted 2 years ago may now have known CVEs, deprecated APIs, or abandoned maintenance. The average JavaScript project has hundreds of transitive dependencies, each one a potential attack surface or breaking change. This question ensures dependencies are managed proactively rather than ignored until something breaks or a security audit flags 47 critical vulnerabilities.

**Expected Answer Format:**
A dependency management strategy covering: update cadence, automation (Dependabot/Renovate), risk assessment for updates, major version upgrade policy, and monitoring for end-of-life/deprecated dependencies.

**Example Answer:**

> **Update Cadence:**
>
> | Update Type | Frequency | Process | Risk Level |
> |------------|-----------|---------|------------|
> | Patch versions (bug fixes) | Weekly (automated) | Dependabot PR → CI passes → merge | Low — patches are backward compatible by convention |
> | Minor versions (new features) | Bi-weekly (automated with review) | Dependabot PR → CI passes → developer reviews changelog → merge | Low-Medium — occasionally introduces subtle behavior changes |
> | Major versions (breaking changes) | Quarterly (planned) | Manual evaluation: read migration guide, estimate effort, test in staging, schedule sprint time | High — requires code changes, testing, and validation |
> | Security patches | Immediately (within SLA from Doc 4 Q15) | Critical: hotfix process. High: current sprint. Medium: next sprint | Varies — urgency overrides normal cadence |
>
> **Automation:**
> - **Tool:** Dependabot (GitHub native) with auto-merge enabled for patch updates that pass CI
> - **Grouping:** Related packages grouped into single PR (e.g., all `@types/*` packages, all ESLint plugins)
> - **Schedule:** PRs created Monday 9 AM (reviewed during weekly maintenance window)
> - **Security alerts:** GitHub Dependabot security advisories monitored, Snyk continuous monitoring as backup
>
> **Major Version Upgrade Policy:**
>
> | Before Upgrading | Check |
> |-----------------|-------|
> | Read the full changelog and migration guide | What breaks? What changes? |
> | Check GitHub issues for common migration problems | Are others hitting issues? |
> | Verify the new version supports our Node.js / React Native version | Compatibility matrix |
> | Create a branch, upgrade, run full test suite | Does everything pass? |
> | Test in staging for 1 week before production | Any subtle issues under real-ish load? |
> | Have a rollback plan (revert to previous version) | Can we undo quickly if needed? |
>
> **Dependency Health Dashboard (reviewed quarterly):**
>
> | Metric | Target | Measurement |
> |--------|--------|-------------|
> | Dependencies with known CVEs | 0 (Critical/High) | Snyk dashboard |
> | Dependencies > 2 major versions behind | < 5% of total | Custom script comparing `package.json` vs npm registry |
> | Deprecated dependencies | 0 | `npm outdated` + manual review |
> | Abandoned dependencies (no commits in 12 months) | 0 in core dependencies | Manual review quarterly |
>
> **When to Replace a Dependency:**
> - Author has abandoned it (no response to issues, no commits in 12+ months)
> - A vulnerability is disclosed and no patch is forthcoming
> - The dependency's scope has grown far beyond what we use (bloat)
> - A better, actively maintained alternative exists with a clear migration path

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q7: What is the backup and disaster recovery strategy (RPO, RTO)?

**Why This Matters:**
Backups are insurance. Disaster recovery is the claims process. Most teams have backups but have never tested restoring from them — and untested backups are theoretical backups. When the database corrupts, the AWS region goes down, or a developer accidentally runs `DELETE FROM users` without a WHERE clause, the questions are: How much data did we lose? How long until the system is back? A backup strategy without tested recovery is wishful thinking.

**Expected Answer Format:**
A backup and DR strategy covering: what's backed up, backup schedule, RPO/RTO targets (from Document 2 Q10), recovery procedures, backup testing schedule, and geographic redundancy.

**Example Answer:**

> **Backup Inventory:**
>
> | What | Backup Method | Frequency | Retention | Storage Location | RPO |
> |------|-------------|-----------|-----------|-----------------|-----|
> | PostgreSQL database | RDS automated snapshots | Every 1 hour | 7 days | Same region (af-south-1) | 1 hour |
> | PostgreSQL database | Manual snapshot + cross-region copy | Daily (2 AM WAT) | 30 days | Cross-region (eu-west-1) | 24 hours (for regional DR) |
> | PostgreSQL WAL logs | RDS continuous backup (point-in-time recovery) | Continuous | 7 days | Same region | ~5 minutes |
> | File storage (S3) | S3 versioning + cross-region replication | Continuous | 90 days (versions), 1 year (current) | Primary: af-south-1, Replica: eu-west-1 | Near-zero (replication lag < 15 min) |
> | Application configuration | Git repository (Terraform + env configs) | Every commit | Indefinite | GitHub (cloud) | Near-zero |
> | Secrets | AWS Secrets Manager | Versioned | 30 versions | Same region | Near-zero |
>
> **Recovery Targets (from Document 2 Q10):**
>
> | Scenario | RPO (Max Data Loss) | RTO (Max Downtime) | Recovery Method |
> |----------|--------------------|--------------------|-----------------|
> | Accidental data deletion (small) | 5 minutes | 30 minutes | Point-in-time recovery to moment before deletion |
> | Database corruption | 1 hour | 2 hours | Restore from latest hourly snapshot |
> | Full region outage | 24 hours | 8 hours | Restore from cross-region backup, redeploy infrastructure in eu-west-1 |
> | Accidental table drop | 5 minutes | 1 hour | Point-in-time recovery for affected table |
> | Ransomware / full compromise | 24 hours | 24 hours | Restore from immutable cross-region backup, rebuild infrastructure from Terraform |
>
> **Recovery Procedures (documented in operations runbook):**
>
> 1. **Point-in-time recovery:** `aws rds restore-db-instance-to-point-in-time --source-db-instance-identifier prod-db --target-db-instance-identifier prod-db-recovery --restore-time 2027-03-15T14:00:00Z`
> 2. **Snapshot restore:** `aws rds restore-db-instance-from-db-snapshot --db-instance-identifier prod-db-recovery --db-snapshot-identifier prod-db-hourly-2027-03-15-14-00`
> 3. **Cross-region failover:** Full runbook with Terraform commands to provision infrastructure in eu-west-1 and restore database from cross-region snapshot
>
> **Backup Testing:**
>
> | Test | Frequency | What It Validates | Last Tested |
> |------|-----------|------------------|-------------|
> | Snapshot restore (same region) | Monthly | Can we restore a database from snapshot and start the application successfully? | _________ |
> | Point-in-time recovery | Quarterly | Can we recover to a specific point in time and verify data integrity? | _________ |
> | Cross-region recovery | Bi-annually | Can we rebuild the entire system in a different AWS region from backups? | _________ |
> | S3 versioned file recovery | Quarterly | Can we recover a deleted or overwritten file from S3 versioning? | _________ |
> | Full disaster recovery drill | Annually | End-to-end: detect failure → invoke DR → restore service → verify data | _________ |
>
> **The Cardinal Rule:** A backup that has never been tested is not a backup. It's a hope.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q8: How will technical debt be tracked, prioritized, and addressed?

**Why This Matters:**
Technical debt is the gap between how the system was built and how it should have been built. Some debt is intentional (shipped a shortcut to meet a deadline), some is accidental (didn't know the better approach at the time). Left unmanaged, debt compounds: each shortcut makes the next feature slower, each workaround makes the next bug harder to find, until the team spends more time fighting the codebase than improving it. This question ensures debt is visible, measured, and systematically reduced — not just complained about in retrospectives.

**Expected Answer Format:**
A technical debt management system covering: how debt is identified and categorized, the tracking mechanism, prioritization criteria, allocation of engineering time, and metrics for measuring debt reduction progress.

**Example Answer:**

> **Debt Identification Sources:**
>
> | Source | How Debt Is Surfaced | Frequency |
> |--------|-----------------------|-----------|
> | Code review | Reviewer tags shortcuts with `TODO: tech-debt` comments and links to tracking issue | Every PR |
> | Post-incident reviews | Root cause analysis reveals systemic weaknesses | After each SEV-1/2 incident |
> | Developer friction log | Engineers log frustrations ("this file is impossible to modify without breaking 3 other things") | Continuous (shared doc) |
> | Static analysis | Linting warnings, complexity scores, code smell detection (SonarQube/ESLint) | CI — every PR |
> | Dependency scanning | Outdated or deprecated libraries | Weekly |
> | Architecture Decision Records | When an ADR explicitly acknowledges a shortcut | When decisions are made |
>
> **Debt Categorization:**
>
> | Category | Impact | Examples | Typical Effort |
> |----------|--------|---------|----------------|
> | **Safety debt** | Risk of outage, data loss, or security breach | Missing error handling on critical path, no input validation on API, hardcoded credentials | Hours to days |
> | **Velocity debt** | Slows feature development | Duplicated code requiring changes in 5 places, no tests on frequently-changed module, undocumented module API | Days |
> | **Scalability debt** | Limits growth | N+1 database queries, missing database indexes, synchronous processing that should be async | Hours to days |
> | **Maintenance debt** | Increases operational burden | Missing monitoring, no runbook for manual process, dependency 3 major versions behind | Hours |
>
> **Prioritization Matrix:**
>
> | | Low Effort (< 1 day) | Medium Effort (1–3 days) | High Effort (> 3 days) |
> |---|---------------------|-------------------------|----------------------|
> | **High Impact** (safety/velocity) | Do now (next sprint) | Plan for upcoming sprint | Dedicated debt sprint |
> | **Medium Impact** (scalability) | Boy Scout rule (fix when touching) | Backlog — next available sprint | Plan for quarter |
> | **Low Impact** (maintenance) | Boy Scout rule | Backlog | Defer until painful |
>
> **Engineering Time Allocation:**
> - **20% of every sprint** dedicated to technical debt reduction (1 day per developer per sprint)
> - **Debt sprint:** Every 6th sprint is 100% debt reduction (aligns with quarterly planning)
> - **Boy Scout rule enforcement:** PRs that touch files with known debt should include at least one improvement
>
> **Debt Dashboard (reviewed monthly):**
>
> | Metric | Current | Target | Trend |
> |--------|---------|--------|-------|
> | Total open debt issues | __ | < 30 | ↑↓→ |
> | Safety debt issues | __ | 0 | ↑↓→ |
> | Average debt issue age | __ days | < 60 days | ↑↓→ |
> | Debt issues resolved this month | __ | ≥ 5 | ↑↓→ |
> | Developer friction score (1–10 survey) | __ | ≤ 3 | ↑↓→ |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q9: What is the data retention and archival policy?

**Why This Matters:**
Data grows. Indefinitely. A system that stores every record forever will eventually drown in its own data — queries slow down, storage costs escalate, and compliance regulations are violated (some laws require data to be deleted after a certain period, not just retained). A retention policy balances three competing needs: keeping data available for business operations (recent data must be fast to query), preserving data for compliance (regulatory retention periods), and managing costs (old data should be cheaper to store). This question ensures deliberate decisions about what to keep, what to archive, and what to delete.

**Expected Answer Format:**
A data retention policy covering: data categories, retention periods, archival strategy (where old data goes), deletion procedures (how data is permanently removed), and compliance alignment.

**Example Answer:**

> **Retention Policy by Data Category:**
>
> | Data Category | Hot Storage (Fast Query) | Warm Storage (Archive) | Cold Storage (Compliance) | Deletion |
> |--------------|------------------------|----------------------|--------------------------|----------|
> | Active customer records | Indefinite (while customer is active) | After 2 years of inactivity → move to archive table | N/A | Upon verified deletion request (NDPR right to erasure) |
> | Lead/opportunity records | 2 years | Years 2–5: archived, queryable via admin tool | Years 5–7: S3 Glacier (compliance retention) | After 7 years |
> | Visit logs | 1 year | Years 1–3: archived table with summary data | Years 3–7: S3 Glacier | After 7 years |
> | File attachments (photos, docs) | 6 months (S3 Standard) | Months 6–12: S3 Infrequent Access | Years 1–5: S3 Glacier | After 5 years |
> | Audit logs | 1 year | Years 1–3: compressed in database | Years 3–7: S3 Glacier | After 7 years (regulatory) |
> | Application logs | 14 days (CloudWatch) | Days 14–90: CloudWatch Infrequent Access | Not retained beyond 90 days | After 90 days |
> | Session data (Redis) | TTL-based (max 7 days) | N/A | N/A | Auto-deleted by Redis TTL |
> | Analytics events | 2 years | Years 2–5: aggregated summaries only (raw events deleted) | N/A | Raw events deleted after 2 years |
>
> **Archival Implementation:**
> - **Database archival:** Scheduled job (monthly) moves records older than retention threshold to `_archive` tables in same database (partitioned by year). Archive tables are excluded from full-text search indexes.
> - **S3 lifecycle rules:** Automatically transition objects between storage classes based on age (configured in Terraform)
> - **Query access to archived data:** Admin panel includes "Include archived data" toggle on search/filter (slower queries, but data is accessible without IT intervention)
>
> **Deletion Procedures:**
> - **User data deletion request (NDPR/GDPR right to erasure):**
>   1. Request received and verified (identity confirmation)
>   2. Admin initiates deletion via admin panel
>   3. System soft-deletes records (marks as deleted, excluded from all queries)
>   4. After 30-day grace period (in case of accidental request): hard-delete from all storage (database, S3, backups)
>   5. Deletion certificate generated (proof of deletion for compliance)
>   6. SLA: completed within 30 days of verified request
>
> - **Bulk data cleanup (maintenance):**
>   - Monthly job identifies records past retention period
>   - Generates deletion report for review (how many records, which categories)
>   - Admin approves or adjusts before execution
>   - Deletion is logged and auditable
>
> **Cost Projection:**
>
> | Year | Hot Storage (RDS + S3 Standard) | Archive (S3 IA + Glacier) | Total |
> |------|-------------------------------|--------------------------|-------|
> | Year 1 | ~$150/month | ~$5/month | ~$155/month |
> | Year 2 | ~$200/month | ~$20/month | ~$220/month |
> | Year 3 (without archival) | ~$400/month | — | ~$400/month |
> | Year 3 (with archival policy) | ~$200/month | ~$50/month | ~$250/month |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q10: How will system performance be optimized over time?

**Why This Matters:**
Performance doesn't stay constant — it degrades. As data accumulates, queries slow down. As features are added, page weight increases. As users grow, concurrency patterns change. A system that's fast at launch can become frustratingly slow within a year if performance isn't actively managed. This question establishes the practices that keep the system fast: regular measurement, proactive optimization, and defined triggers for when "fast enough" becomes "too slow."

**Expected Answer Format:**
A performance management plan covering: baseline metrics, measurement cadence, optimization triggers, common optimization techniques, and performance budgets.

**Example Answer:**

> **Performance Baselines (measured at launch, tracked monthly):**
>
> | Metric | Baseline (Launch) | Acceptable Range | Optimization Trigger |
> |--------|-------------------|-----------------|---------------------|
> | API p50 response time | 120ms | < 300ms | > 300ms for 1 week |
> | API p95 response time | 450ms | < 1,000ms | > 1,000ms for 1 week |
> | Dashboard page load (web) | 1.2s | < 3s | > 3s for 1 week |
> | Mobile app launch to usable | 2.5s | < 5s | > 5s for 1 week |
> | Database slowest query (p95) | 50ms | < 200ms | > 200ms or new queries in slow log |
> | Background job processing time | 30s/batch | < 120s/batch | > 120s or queue growing faster than processing |
> | JavaScript bundle size (web) | 180KB gzipped | < 300KB gzipped | > 300KB |
>
> **Monthly Performance Review:**
> 1. Compare current metrics against baselines — identify degradation trends
> 2. Review RDS Performance Insights — identify slow queries introduced by recent features
> 3. Review Datadog APM — identify endpoints with increasing response times
> 4. Review bundle size trend — identify increasing JavaScript payload
> 5. Document findings and create optimization issues for anything approaching trigger thresholds
>
> **Optimization Techniques (applied when triggered):**
>
> | Technique | When to Apply | Expected Impact | Effort |
> |-----------|-------------|-----------------|--------|
> | Add database indexes | Query appears in slow query log or EXPLAIN shows sequential scan | 10x–100x query speedup | 1 hour |
> | Optimize N+1 queries | API endpoint loading related data in a loop | 5x–20x response time improvement | 2–4 hours |
> | Add/tune caching (Redis) | Same expensive query runs repeatedly for different users | 10x–50x for cached requests | 2–4 hours |
> | Materialized views for dashboards | Complex aggregation queries run on every dashboard load | 100x for dashboard queries | 4–8 hours |
> | Code splitting (frontend) | Bundle size exceeding budget | 30–50% initial load reduction | 4–8 hours |
> | Image optimization | Page weight increasing from uncompressed images | 50–80% image size reduction | 2–4 hours |
> | Database connection pooling tune | Connection pool saturation during peak hours | Eliminates connection wait time | 1 hour |
> | Database VACUUM/ANALYZE | Query planner using stale statistics after large data changes | Restore optimal query plans | 30 minutes |
>
> **Performance Budget (enforced in CI):**
> - API endpoint response: warn if p95 > 500ms in integration tests, block if > 2s
> - Page bundle size: warn if total > 250KB gzipped, block if > 400KB
> - Lighthouse score (web): warn if < 80, block if < 60
> - Database query count per API request: warn if > 10 queries, block if > 20 (N+1 detector)

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section C: Documentation & Knowledge Management (Q11–Q15)

*This section addresses the organizational memory. Code lives in the repository. Knowledge lives in people's heads — and people leave, forget, go on vacation, and get sick. Documentation is the mechanism that transfers knowledge from heads to a durable, searchable, shareable format. Systems without documentation are systems held hostage by the engineers who built them.*

---

### Q11: What documentation must be created and maintained (technical, user, API)?

**Why This Matters:**
Documentation serves different audiences with different needs. A field agent needs to know how to log a visit, not how the visit API is implemented. A developer needs to understand the data model, not the sales process. An operations engineer needs runbooks for incident response, not wireframe annotations. When documentation is one undifferentiated blob, nobody finds what they need and nobody maintains it. This question defines what documentation exists, who it's for, and who's responsible for keeping it current.

**Expected Answer Format:**
A documentation inventory listing each document type, its audience, its purpose, its format and location, the owner responsible for maintenance, and the update trigger (when it needs to change).

**Example Answer:**

> **Documentation Inventory:**
>
> | Document Type | Audience | Purpose | Format/Location | Owner | Update Trigger |
> |--------------|----------|---------|-----------------|-------|----------------|
> | **README.md** | Developers | Project overview, setup instructions, architecture overview | Markdown in repo root | Tech Lead | Any change to setup process or architecture |
> | **API Documentation** | Developers + Integrators | Complete reference of all API endpoints, request/response formats, auth | OpenAPI spec (auto-generated) + Swagger UI at `/docs` | Auto-generated from code annotations | Every API change (enforced by CI) |
> | **Architecture Decision Records (ADRs)** | Developers | Why key technical decisions were made, alternatives considered | Markdown in `/docs/adr/` | Developer who made the decision | When a new significant decision is made |
> | **Operations Runbooks** | On-call engineers | Step-by-step procedures for common operational tasks and incidents | Notion wiki (accessible from phone) | Tech Lead / On-call engineers | After each incident where the runbook was insufficient |
> | **User Guide** | End users (agents, managers) | How to use the system — task-based, with screenshots | Help center (in-app + web, built with GitBook or similar) | Product Manager | With each feature release |
> | **Admin Guide** | IT administrators | System configuration, user management, troubleshooting | Markdown in `/docs/admin/` or Notion | Tech Lead | When admin features change |
> | **Onboarding Guide** | New developers | How to set up the development environment, codebase tour, contribution guidelines | Markdown in `/docs/development/` | Most recent hire (they have the freshest perspective) | When development setup changes |
> | **Data Dictionary** | Developers + BI/Analysts | Description of every database table, column, and relationship | Auto-generated from database schema + manual annotations | Tech Lead | When schema changes |
> | **Deployment Guide** | DevOps / Developers | How to deploy, rollback, and manage infrastructure | Markdown in `/docs/deployment/` | Tech Lead | When deployment process changes |
> | **Change Log** | All stakeholders | What changed in each release | CHANGELOG.md (auto-generated from PR titles) | Automated + PM review | Every release |
>
> **Documentation Quality Standards:**
> - Every document has: title, date last updated, owner, audience statement
> - No document older than 6 months without a reviewed-and-confirmed date
> - Screenshots in user guides are refreshed with each major UI change
> - Code examples in technical docs are tested (extracted and run in CI, or clearly marked as pseudocode)
>
> **Anti-Documentation-Rot Measures:**
> - **Quarterly documentation audit:** Each team member reviews 2–3 documents for accuracy
> - **"Docs or it didn't happen" rule:** New features are not considered "done" until user documentation is updated
> - **Stale document warning:** Documents not updated in 6 months are flagged for review

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q12: How will knowledge be transferred when team members change?

**Why This Matters:**
People leave. They get promoted, they change teams, they take new jobs, they go on parental leave. When they leave, their knowledge leaves with them — unless it's been deliberately captured and transferred. The cost of losing undocumented knowledge is measured in weeks of ramp-up time for the replacement, bugs from misunderstanding the codebase, and repeated mistakes from forgotten lessons. This question ensures knowledge transfer is a planned activity, not an emergency scramble during someone's last week.

**Expected Answer Format:**
A knowledge transfer plan covering: what knowledge must be transferred, how it's captured (documentation, pairing, recordings), the transfer process for planned departures, the mitigation strategy for unplanned departures, and cross-training practices.

**Example Answer:**

> **Knowledge Transfer Triggers:**
>
> | Trigger | Lead Time | Process |
> |---------|-----------|---------|
> | Planned departure (resignation) | 2–4 weeks | Structured KT plan (see below) |
> | Internal transfer (new role) | 1–2 weeks | Abbreviated KT — they're still in the company |
> | Extended leave (parental, medical) | Variable | KT for critical responsibilities, with return plan |
> | Unplanned departure (sudden resignation) | 0 days | Activate bus factor mitigation (see below) |
>
> **Structured Knowledge Transfer Plan (for planned departures):**
>
> | Week | Activity | Output |
> |------|---------|--------|
> | Week 1 | Departing team member creates a "knowledge map" — list of everything they know that nobody else does | Knowledge map document: systems owned, undocumented processes, tribal knowledge, key contacts, "where the bodies are buried" |
> | Week 2 | Pairing sessions on each knowledge area (2 hours each, recorded) with designated successor | Recorded pairing sessions + updated documentation |
> | Week 3 | Successor shadows departing member for all operational tasks | Successor can perform all tasks independently |
> | Week 4 (if available) | Departing member is backup only — successor handles everything, escalates if stuck | Confidence that successor is self-sufficient |
>
> **Bus Factor Mitigation (ongoing, before anyone leaves):**
>
> The "bus factor" is the number of people who could be hit by a bus before the project is in trouble. Target: no knowledge area has a bus factor of 1.
>
> | Practice | How It Helps | Frequency |
> |---------|-------------|-----------|
> | **Code ownership rotation** | Each module has a primary and secondary owner. Rotate secondary ownership quarterly | Quarterly |
> | **Pair programming on complex tasks** | Two people understand every significant change | When changing critical paths |
> | **Architecture walkthroughs** | Monthly 30-minute session where one engineer explains a system component to the team | Monthly |
> | **"Hit by a bus" document** | Each engineer maintains a 1-page document: what they own, where to find things, key passwords/access | Updated quarterly (15 minutes) |
> | **Shared password manager** | No credentials exist only in one person's head | Always |
> | **Recorded decision-making** | ADRs capture why, not just what — so future team members don't reverse good decisions | Every significant decision |
>
> **Cross-Training Priority Matrix:**
>
> | Knowledge Area | Current Owner(s) | Bus Factor | Cross-Training Priority |
> |---------------|-----------------|-----------|------------------------|
> | Database administration | Tech Lead | 1 | 🔴 Critical — schedule training |
> | CI/CD pipeline | Engineer A | 1 | 🔴 Critical — schedule pairing |
> | Offline sync logic | Engineer B | 1 | 🔴 Critical — pair with Engineer C |
> | API development | 3 engineers | 3 | 🟢 Adequate |
> | React Native mobile | Engineer B + C | 2 | 🟡 Acceptable — maintain through code review |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q13: What training materials and onboarding processes are needed for new users?

**Why This Matters:**
A system is only as valuable as the number of people who can use it effectively. If onboarding is "here's the app, figure it out," adoption will be slow, support tickets will surge, and users will find workarounds (back to WhatsApp and spreadsheets). For users with low tech literacy (like our field agent persona), onboarding is the difference between enthusiastic adoption and quiet abandonment. This question ensures the first experience with the system is guided, positive, and confidence-building.

**Expected Answer Format:**
An onboarding and training plan covering: training materials by user type, delivery method, onboarding flow within the system, ongoing support resources, and success metrics.

**Example Answer:**

> **Training Materials by User Type:**
>
> | User Type | Material | Format | Duration | Delivery Method |
> |-----------|---------|--------|----------|-----------------|
> | Field Agents (200) | "Getting Started" video series | 5 videos, 3–5 min each, in English + Pidgin | 20 minutes total | WhatsApp broadcast (where they already are) + in-app |
> | Field Agents | Quick reference card | Single A4 printable PDF with screenshots: log visit, search client, sync data | 1 page | Printed, laminated, carried in field bag |
> | Field Agents | In-app onboarding flow | Interactive tutorial (tap here, do this, great!) on first login | 5 minutes | Built into the app |
> | Managers (15) | Dashboard training session | Live video call with screen sharing, Q&A | 1 hour | Zoom/Teams, recorded for replay |
> | Managers | Dashboard user guide | Step-by-step guide with screenshots: navigate pipeline, filter data, generate reports, export | 10 pages | PDF + in-app help center |
> | IT Admin (5) | Admin configuration guide | Technical documentation: user management, system config, monitoring, backup verification | 20 pages | Notion wiki + PDF |
> | IT Admin | Live training session | 1:1 with Tech Lead, hands-on configuration walkthrough | 2 hours | In-person or video call |
>
> **In-App Onboarding Flow (First-Time User Experience):**
>
> | Step | Screen | Action | Completion Reward |
> |------|--------|--------|-------------------|
> | 1 | Welcome | "Hi [Name]! Let's get you set up in 5 minutes." | — |
> | 2 | Profile setup | Upload photo, confirm phone number | "Looking good! ✓" |
> | 3 | Log your first visit (guided) | Walk through visit logging with tooltips highlighting each field | "First visit logged! 🎉" |
> | 4 | Find a client (guided) | Search for a demo client, view their profile | "You're a natural! ✓" |
> | 5 | Check your progress (guided) | Navigate to Activity tab, see the visit they just logged | "You're all set! Start using [App Name] for real." |
>
> **Ongoing Support Resources:**
>
> | Resource | Access | Purpose |
> |----------|--------|---------|
> | In-app help center | ? icon on every screen | Context-sensitive help articles |
> | FAQ | Help center section | Top 20 most-asked questions with answers |
> | WhatsApp support group | Managed by regional managers | Peer support (agents help each other) |
> | Support email | support@system.com | Escalation for issues agents and managers can't resolve |
> | Monthly "Tips and Tricks" | WhatsApp broadcast | 1-minute video highlighting a feature most users don't know about |
>
> **Training Effectiveness Metrics:**
>
> | Metric | Target | Measurement |
> |--------|--------|-------------|
> | Onboarding completion rate | ≥ 90% complete all 5 steps within first session | In-app analytics |
> | Time to first real visit log | < 24 hours after account activation | Analytics: timestamp of first non-demo visit |
> | Support tickets in first week | < 0.5 per user | Support system tracking |
> | Training satisfaction (post-training survey) | ≥ 4.0/5.0 | Survey after training session |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q14: How will API documentation be generated and kept in sync?

**Why This Matters:**
API documentation that's wrong is worse than no documentation — it sends integrators down wrong paths, generates incorrect implementations, and creates support tickets that say "I followed the documentation and it doesn't work." The only documentation that stays correct is documentation generated from the source code, because when the code changes, the documentation changes automatically. This question ensures the API documentation is a living artifact, not a one-time snapshot that begins drifting from reality on the day it's published.

**Expected Answer Format:**
An API documentation strategy covering: documentation standard (OpenAPI, GraphQL schema, etc.), generation method (auto from code vs manually maintained), hosting and access, testing/validation, and how breaking changes are communicated.

**Example Answer:**

> **Documentation Standard:** OpenAPI 3.1 Specification
>
> **Generation Method: Code-First (Auto-Generated)**
>
> API documentation is generated directly from code annotations, ensuring the docs always match the implementation.
>
> ```typescript
> /**
>  * @openapi
>  * /api/v1/leads:
>  *   get:
>  *     summary: List leads
>  *     description: Returns a paginated list of leads, filterable by status, agent, and branch.
>  *     parameters:
>  *       - in: query
>  *         name: status
>  *         schema:
>  *           type: string
>  *           enum: [new, contacted, qualified, won, lost]
>  *     responses:
>  *       200:
>  *         description: Paginated list of leads
>  *         content:
>  *           application/json:
>  *             schema:
>  *               $ref: '#/components/schemas/LeadListResponse'
>  */
> router.get('/leads', authenticate, listLeads);
> ```
>
> **Toolchain:**
>
> | Tool | Purpose | When It Runs |
> |------|---------|-------------|
> | `swagger-jsdoc` | Extracts OpenAPI spec from JSDoc annotations in route files | Build step (CI/CD) |
> | `swagger-ui-express` | Serves interactive API documentation at `/docs` | Runtime (available in staging and production) |
> | `openapi-typescript` | Generates TypeScript types from OpenAPI spec (used by frontend for type-safe API calls) | Build step |
> | CI validation | `swagger-jsdoc` output validated against OpenAPI 3.1 schema | Every PR |
>
> **Documentation Access:**
> - **Staging:** `https://staging.api.example.com/docs` — full interactive Swagger UI, "Try it out" enabled
> - **Production:** `https://api.example.com/docs` — read-only Swagger UI, "Try it out" disabled (security)
> - **Raw spec:** `https://api.example.com/docs/openapi.json` — machine-readable for client code generation
>
> **Keeping Documentation in Sync:**
>
> | Mechanism | What It Prevents |
> |-----------|-----------------|
> | OpenAPI spec generated from code annotations at build time | Docs can't drift from implementation |
> | CI validation: spec must be valid OpenAPI 3.1 | Broken or malformed docs blocked |
> | CI check: every route must have an OpenAPI annotation | Undocumented endpoints blocked |
> | TypeScript types generated from spec → frontend compilation fails if API contract changes | Frontend catches API breaking changes at compile time |
> | Changelog generated from spec diff between versions | Breaking changes are automatically detected and documented |
>
> **Breaking Change Communication:**
> - OpenAPI spec diff generated on every PR that modifies API routes
> - Breaking changes (removed endpoints, changed response shapes, new required fields) flagged in PR review
> - Migration guide written in CHANGELOG.md for breaking API changes
> - Deprecation notice added to endpoint 3 months before removal (see Doc 2 Q13 deprecation policy)

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q15: Where will institutional knowledge live (wiki, docs site, runbooks)?

**Why This Matters:**
Institutional knowledge — the "how we do things here," the "why we built it this way," the "what happened last time we tried that" — is the most valuable and most perishable asset in any engineering team. If it lives in Slack messages, it's unsearchable after 90 days. If it lives in someone's head, it leaves when they leave. If it lives in a Google Doc that nobody can find, it might as well not exist. This question establishes the single source of truth for organizational knowledge and the habits that keep it alive.

**Expected Answer Format:**
A knowledge management architecture covering: the primary platform, content organization, access control, search capability, contribution norms, and maintenance practices.

**Example Answer:**

> **Knowledge Architecture:**
>
> | Knowledge Type | Platform | Why This Platform | Access |
> |---------------|----------|------------------|--------|
> | **Code-adjacent docs** (README, ADRs, development guides) | Git repository (`/docs/`) | Version-controlled, reviewed in PRs, lives with the code it describes | All developers |
> | **API documentation** | Auto-generated, hosted at `/docs` | Generated from code, always current | Developers + Integrators |
> | **Operations runbooks** | Notion | Accessible from phone (on-call needs), rich formatting, easy to update under pressure | Operations team |
> | **User-facing help center** | GitBook (or similar) | Purpose-built for end-user documentation, searchable, embeddable in-app | All users (public) |
> | **Decision log** | Git repository (`/docs/adr/`) | Permanent record, version-controlled, searchable | All developers |
> | **Meeting notes and strategy** | Notion | Collaborative editing, templates, linked databases | All team members |
> | **Incident history** | Notion (linked to runbooks) | Searchable incident records with linked PIRs | Operations team |
>
> **Content Organization (Notion — Operations Wiki):**
>
> ```
> 📂 Operations Wiki
> ├── 📋 Runbooks
> │   ├── Database: Restore from backup
> │   ├── Deployment: Rollback procedure
> │   ├── Incident: First responder checklist
> │   ├── Monitoring: Alert response guide (by alert name)
> │   └── Sync: Resolve offline sync conflicts
> ├── 📊 Service Health
> │   ├── SLO dashboard link
> │   ├── Current on-call rotation
> │   └── Recent incidents (last 30 days)
> ├── 📝 Post-Incident Reviews
> │   └── (Organized by date, linked to runbook updates)
> ├── 🔧 Infrastructure
> │   ├── Architecture diagram (kept current)
> │   ├── AWS resource inventory
> │   └── Access management (who has access to what)
> └── 📚 Onboarding
>     ├── New developer setup guide
>     ├── System overview for new team members
>     └── Key contacts and escalation paths
> ```
>
> **Contribution Norms:**
> - **"If you searched for it and didn't find it, write it."** Any time someone spends > 15 minutes finding an answer that should have been documented, they write the document after finding the answer.
> - **"If you read it and it was wrong, fix it."** Everyone has edit access. Fixing stale documentation is as important as fixing bugs.
> - **"If you're doing it for the third time, document it."** Any process repeated 3+ times gets a runbook.
>
> **Search and Discovery:**
> - Notion: Full-text search across all pages
> - Git docs: GitHub search + `grep` in the repository
> - GitBook: Built-in search with instant results
> - Convention: Consistent naming (lowercase, hyphenated, descriptive) makes browsing intuitive
>
> **Maintenance:**
> - Quarterly docs audit: Each team member reviews 3 documents for accuracy, flags outdated content
> - Stale page detection: Notion pages not edited in 6 months are flagged with a "⚠️ Last reviewed: [date]" banner
> - New hire test: When someone new joins, their confusion points become documentation tickets

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section D: Scaling & Evolution Strategy (Q16–Q20)

*This section looks forward. The system you launch is the simplest version the system will ever be. From here, it grows — more users, more features, more integrations, more complexity. These questions ensure growth is planned and managed, rather than chaotic and reactive. They also establish the feedback loop that keeps the system evolving in the right direction — toward what users actually need, not what someone assumed they'd need.*

---

### Q16: What growth triggers will signal the need for scaling interventions?

**Why This Matters:**
Scaling too early wastes money. Scaling too late causes outages. The sweet spot is scaling just before you need to — which requires knowing your limits. Growth triggers are the early warning system that tells you "we're approaching a boundary, start preparing." Without them, the team discovers the limit when the system crashes at 3 AM because the database connection pool was exhausted and nobody was watching.

**Expected Answer Format:**
A growth trigger matrix listing each system dimension (users, data, traffic, features), the current capacity, the trigger point (when to start preparing), the crisis point (when things break), and the scaling action to take.

**Example Answer:**

> | Dimension | Current Capacity | Trigger (Start Preparing) | Crisis (Things Break) | Scaling Action | Lead Time |
> |-----------|-----------------|--------------------------|----------------------|----------------|-----------|
> | Concurrent users | 500 (ECS Fargate, 2 tasks) | 350 concurrent (70%) | 500+ (response times spike, connection pool saturated) | Add ECS tasks (auto-scaling) — configure scaling policy | 1 day to configure, scales in minutes |
> | Database size | 100 GB (RDS db.t3.medium) | 60 GB (60%) | 95 GB+ (storage fills, writes fail) | Increase storage allocation (no downtime with RDS) | 30 minutes |
> | Database CPU | db.t3.medium baseline | CPU credit balance below 30% consistently | Credits exhausted, queries slow 10x | Upgrade to db.t3.large or db.m5.large | 1 hour (requires restart) |
> | Database connections | 100 max (db.t3.medium) | 70 active connections (70%) | 95+ (connection timeout errors) | Upgrade instance (more connections) + add PgBouncer connection pooler | 2–4 hours |
> | API response time | p95 < 500ms | p95 consistently > 800ms | p95 > 2s (user complaints, SLO violation) | Profile and optimize (indexes, caching, query optimization) → scale horizontally if optimization exhausted | 1–5 days depending on root cause |
> | Background job queue | Processing 100 jobs/hour | Queue depth > 500 for > 1 hour | Queue depth > 5,000 (sync delays, stale data) | Add worker instances, optimize job processing, consider priority queues | 1–2 days |
> | S3 storage costs | ~$50/month | > $200/month | > $500/month (budget concern) | Implement lifecycle rules, archive old data, optimize file sizes | 2–4 hours |
> | Number of geographic regions | 1 (Lagos) | 500+ active users in another country | Latency complaints from remote users > 200ms | CDN edge expansion → evaluate multi-region database replication | 2–4 weeks |
> | Team size | 5 engineers | Consistently can't complete planned sprint work | Development velocity drops > 30% | Hire — define role, budget, and ramp-up plan | 2–3 months |
>
> **Monitoring These Triggers:**
> - All metrics above are tracked in a "Capacity Planning" dashboard (Datadog)
> - Weekly check: quick scan of all trigger metrics (5 minutes in standup)
> - Monthly review: detailed analysis with trend projection (are we approaching any trigger?)
> - Alerts configured for each trigger threshold (Warning level, not Critical)

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q17: How will user feedback be collected, analyzed, and incorporated?

**Why This Matters:**
The users know things the team doesn't. They know which features they actually use, which workflows are frustrating, and what they wish the system could do. But feedback doesn't arrive in a structured format — it comes as angry WhatsApp messages, vague feature requests, support tickets about symptoms (not root causes), and awkward silence when a feature is launched and nobody uses it. This question builds the infrastructure for collecting, organizing, and acting on user feedback systematically.

**Expected Answer Format:**
A feedback system design covering: collection channels, feedback categorization, analysis cadence, prioritization criteria, how feedback connects to the product roadmap, and how users are informed that their feedback was heard.

**Example Answer:**

> **Feedback Collection Channels:**
>
> | Channel | Type of Feedback | User Type | Volume (Estimated) | Tool |
> |---------|-----------------|-----------|-------------------|------|
> | In-app feedback button | Bug reports, feature requests, complaints | All users | 20–50/month | Custom form → Notion database |
> | In-app NPS survey | Satisfaction measurement | All users (sampled) | Quarterly survey, 30% response rate | PostHog Surveys |
> | Post-task CES (Customer Effort Score) | Ease of specific workflows | Agents (after key tasks) | Continuous, ~100/month | PostHog Surveys |
> | Support tickets | Issues, questions, workarounds | All users | 30–60/month | Email → Notion (or Freshdesk if volume grows) |
> | WhatsApp feedback group | Informal suggestions, complaints, praise | Field agents | Daily (unstructured) | Monitored by Product Manager |
> | Manager check-in calls | Strategic feedback, process improvements | Managers | Monthly (scheduled) | Zoom, notes in Notion |
> | Usage analytics | Implicit feedback — what's used, what's ignored | All users | Continuous | PostHog |
> | Feature request voting | Prioritization signal from users | All users | Ongoing | In-app feature request board |
>
> **Feedback Analysis Process:**
>
> | Cadence | Activity | Participants | Output |
> |---------|---------|-------------|--------|
> | Weekly | Triage new feedback — categorize, de-duplicate, assign priority | Product Manager | Updated feedback backlog |
> | Bi-weekly | Quantitative analysis — usage trends, NPS trends, support ticket categories | Product Manager + Tech Lead | Metrics report with insights |
> | Monthly | Feedback review meeting — identify patterns, connect to roadmap | Full team | Prioritized feature/improvement candidates |
> | Quarterly | User advisory session — deep-dive with 3–5 power users | Product Manager + Designer | Validated understanding of user needs |
>
> **Feedback Categorization:**
>
> | Category | Action | Example |
> |----------|--------|---------|
> | Bug | File as bug, prioritize by severity | "Visit doesn't save when signal is weak" |
> | Usability issue | File as design improvement, link to relevant journey | "I can't find the export button" |
> | Feature request | Add to feature backlog, tag with requesting user for follow-up | "I want to see my commission forecast" |
> | Process feedback | Share with relevant stakeholder | "Training was too short, I need more practice" |
> | Praise | Share with team (morale), identify what to preserve | "This is so much easier than the old system" |
>
> **Closing the Loop (telling users their feedback was heard):**
> - Bug reports: user notified when fix is deployed
> - Feature requests: user notified if/when feature is built (or if deferred, with brief explanation)
> - "You asked, we built" section in monthly release notes — explicitly credits user feedback
> - Power users who provide valuable feedback are invited to beta testing / advisory sessions

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q18: What is the feature deprecation and sunsetting process?

**Why This Matters:**
Adding features is easy. Removing them is hard — but necessary. Every feature has a maintenance cost: code to update, tests to maintain, documentation to keep current, edge cases to handle, and support questions to answer. Features that nobody uses aren't free — they're a tax on the team's velocity. A deprecation process gives the team a disciplined way to sunset features that no longer justify their cost, without surprising or alienating the users who do rely on them.

**Expected Answer Format:**
A deprecation process covering: how features are identified for deprecation, the evaluation criteria, the communication and transition timeline, the technical removal process, and how users are supported through the change.

**Example Answer:**

> **Deprecation Evaluation Criteria:**
>
> A feature is a candidate for deprecation when:
> - Usage data shows < 5% of active users have used it in the last 90 days
> - Maintenance cost exceeds the feature's value (disproportionate bug rate, complexity for developers)
> - The feature is superseded by a better implementation
> - Regulatory or security requirements make the feature untenable
>
> **Deprecation Timeline:**
>
> | Phase | Duration | Action | Communication |
> |-------|----------|--------|---------------|
> | **1. Evaluate** | 2 weeks | Analyze usage data, assess maintenance cost, identify affected users, consider alternatives | Internal team discussion |
> | **2. Announce** | — | Mark feature as "deprecated" in the system, UI, and documentation | In-app notice to users of the feature, email to stakeholders |
> | **3. Transition** | 3–6 months | Provide migration path to alternative, support users through transition | In-app migration wizard (if applicable), help articles, direct support for power users |
> | **4. Warn** | 1 month before removal | Final notice with exact removal date | In-app warning banner on deprecated feature, email reminder |
> | **5. Remove** | — | Remove feature code, UI, tests, and documentation. Database tables retained for 90 days (soft delete) | "What's changed" in release notes, support article for remaining questions |
> | **6. Clean up** | 30–90 days after removal | Remove database tables, archived data, delete unused assets | Internal only |
>
> **User Impact Assessment (required before deprecation decision):**
>
> | Question | Answer Required |
> |----------|----------------|
> | How many users use this feature monthly? | Exact number from analytics |
> | Are any users highly dependent on it (> 10 uses/week)? | List identified, contacted directly |
> | Is there an adequate alternative? | Specific alternative named with migration path |
> | What data will be affected? | Data retained, exported, or deleted — explicitly stated |
> | What is the cost of NOT deprecating? | Maintenance hours, bug rate, blocking other work |
>
> **Technical Removal Checklist:**
> - [ ] Feature flag disabled in production
> - [ ] UI components removed from all platforms
> - [ ] API endpoints removed (return 410 Gone with migration guide URL)
> - [ ] Background jobs and scheduled tasks disabled
> - [ ] Tests removed or updated
> - [ ] Documentation archived (moved to "Deprecated Features" section, not deleted)
> - [ ] Database tables marked for future cleanup (not dropped immediately)
> - [ ] Analytics events cleaned up

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q19: How will the system's roadmap be managed and communicated?

**Why This Matters:**
A roadmap is the bridge between "what the system does today" and "what the system needs to do tomorrow." Without one, development is reactive — driven by the loudest stakeholder, the latest incident, or whatever the CEO mentioned at lunch. With one, development is strategic — aligned with business goals, user needs, and technical sustainability. The roadmap also manages expectations: stakeholders know what's coming (and what's not), users know their feedback is being heard, and the team knows what to focus on.

**Expected Answer Format:**
A roadmap management plan covering: how the roadmap is created and maintained, the planning cadence, how items are prioritized, how the roadmap is communicated to different audiences, and how it adapts to change.

**Example Answer:**

> **Roadmap Structure:**
>
> | Horizon | Timeframe | Certainty | Level of Detail |
> |---------|-----------|-----------|-----------------|
> | **Now** | Current sprint (2 weeks) | High (committed) | Specific tickets with acceptance criteria |
> | **Next** | Next 1–2 sprints (2–6 weeks) | Medium (planned) | Feature-level descriptions with rough scope |
> | **Later** | 2–6 months | Low (directional) | Theme-level goals tied to business objectives |
> | **Vision** | 6–18 months | Aspirational | Strategic capabilities, not specific features |
>
> **Prioritization Framework: RICE Score**
>
> | Factor | Definition | Scale |
> |--------|-----------|-------|
> | **R**each | How many users will this impact per month? | Number of users |
> | **I**mpact | How much will this improve the user's experience? | 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal |
> | **C**onfidence | How confident are we in our estimates of reach and impact? | 100% = high, 80% = medium, 50% = low |
> | **E**ffort | How many developer-days will this take? | Number of developer-days |
>
> **RICE Score = (Reach × Impact × Confidence) / Effort**
>
> > Example: "Lead duplicate detection" — Reach: 200 agents, Impact: 3 (massive — solves their #1 pain point), Confidence: 100% (validated in user research), Effort: 5 developer-days. RICE = (200 × 3 × 1.0) / 5 = 120
>
> **Roadmap Communication:**
>
> | Audience | What They See | Format | Cadence |
> |----------|-------------|--------|---------|
> | Engineering team | Full roadmap with technical details, dependencies, effort estimates | Notion board / Linear | Continuous access, updated weekly |
> | Product Manager + Stakeholders | Feature-level roadmap with timelines and business impact | Quarterly roadmap presentation + shared Notion page | Quarterly planning + monthly updates |
> | End users | "Coming soon" section in help center — no dates, only confirmed "Next" items | Help center page + in-app teaser (for major features) | Updated monthly |
> | Client executives | Strategic roadmap aligned with business goals from Document 1 | Presentation / PDF | Quarterly business review |
>
> **Roadmap Adaptation:**
> - **Weekly:** Prioritization within "Now" sprint — tactical adjustments based on blockers, discoveries, and urgency
> - **Monthly:** "Next" items reviewed — pull into "Now" or defer based on team capacity and new information
> - **Quarterly:** Full roadmap review — realign "Later" and "Vision" with updated business strategy, user feedback trends, and competitive landscape
> - **Emergency:** Unplanned work (incidents, critical bugs, security) preempts roadmap items — documented as "unplanned work" and tracked as a percentage of sprint capacity (target: < 20%)

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q20: What is the long-term vision — where should this system be in 5 years?

**Why This Matters:**
This is the question that separates a project from a product. A project has a deadline and a handover. A product has a life cycle and an evolution. Articulating the 5-year vision forces stakeholders to think about durability: will this system still be relevant? Will the technology choices still be supportable? Will the team that maintains it still exist? The vision doesn't have to be precise — it needs to be directional. It provides a compass for daily decisions: "Does this shortcut move us toward the vision, or create a barrier we'll have to tear down later?"

**Expected Answer Format:**
A long-term vision covering: where the system should be in 5 years (capabilities, scale, user base), the expected technology landscape, the evolution path (how the system gets from here to there), sustainability plan (who runs it, who pays for it), and the key risks that could derail the vision.

**Example Answer:**

> **The 5-Year Vision:**
>
> *"In 5 years, this system is the operating backbone of a multi-country sales operation serving 5,000+ agents across West and East Africa. It's not just a CRM — it's an intelligent field operations platform that predicts which leads will convert, optimizes agent territories, and provides real-time business intelligence that drives strategic decisions. The platform is profitable as a product (not just an internal tool) — licensed to other companies with similar field sales operations."*
>
> **Vision Milestones:**
>
> | Year | State | Key Capabilities | Scale |
> |------|-------|------------------|-------|
> | Year 1 (Launch) | MVP — Functional CRM with offline support | Lead management, visit logging, basic reporting, WhatsApp notifications | 200 agents, 1 city |
> | Year 2 | Growth — Intelligent CRM | AI lead scoring, territory optimization, advanced analytics, multi-branch | 500 agents, 3 cities |
> | Year 3 | Scale — Multi-country platform | Multi-language, multi-currency, regional data compliance, API marketplace for integrations | 1,500 agents, 2 countries |
> | Year 4 | Product — Licensable platform | White-labeling, self-service configuration, customer-facing admin portal, SaaS billing | 3,000 agents, 4 countries + 2 external customers |
> | Year 5 | Platform — Ecosystem | Partner integrations, marketplace for third-party extensions, mobile-first BI tool, predictive operations | 5,000+ agents, multiple customers and markets |
>
> **Technology Evolution:**
>
> | Current (Year 1) | Planned Evolution | Trigger for Change |
> |------------------|------------------|-------------------|
> | Modular monolith | Extract reporting and notification as separate services | When team grows beyond 15 engineers or reporting load dominates CPU |
> | PostgreSQL (single instance) | Add read replicas → consider partitioning → evaluate multi-region replication | When database size exceeds 500 GB or multi-region users exceed 1,000 |
> | React Native (mobile) | Evaluate native modules for performance-critical features (camera, GPS, background sync) | When app performance consistently falls below targets |
> | ECS Fargate | Evaluate Kubernetes (EKS) if container orchestration needs grow complex | When service count exceeds 10 or we need more sophisticated scheduling |
> | Manual feature flags (env vars) | Migrate to feature flag service (LaunchDarkly, Unleash) | When A/B testing becomes a regular practice or customer-specific configurations are needed |
>
> **Sustainability Plan:**
>
> | Aspect | Year 1–2 | Year 3–5 |
> |--------|---------|----------|
> | Team | External build team + 2 internal junior devs | Internal team of 8–10 (senior hires, build team transitions to advisory) |
> | Funding | Project budget (CapEx) | Revenue-generating product (OpEx from licensing revenue) |
> | Maintenance | Build team maintains | Internal team maintains, external team on retainer for architecture consultation |
> | Technology freshness | Major framework upgrades handled by build team | Internal team capability to handle upgrades independently |
>
> **Risks to the Vision:**
>
> | Risk | Probability | Impact | Mitigation |
> |------|-----------|--------|------------|
> | Market shifts to a dominant SaaS CRM that adds offline support | Medium | High (makes custom build unnecessary) | Build unique value (AI, local integrations, field-specific features) that SaaS can't easily replicate |
> | Team turnover — key engineers leave | High | Medium | Knowledge transfer practices (Q12), documentation discipline, avoid single-person dependencies |
> | Budget cuts during economic downturn | Medium | High | Each release phase delivers standalone value — the system is useful at every milestone, not only at Year 5 |
> | Regulatory complexity in new countries | High | Medium | Build multi-tenancy and compliance framework early (Year 2), don't retrofit |
> | Technology choices become obsolete (e.g., React Native superseded) | Low | Medium | Architecture allows frontend replacement without backend changes (API-first design) |

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
| A: Monitoring & Incident Management | __ | __ | __ | __ | __ | __/15 |
| B: Maintenance & Technical Health | __ | __ | __ | __ | __ | __/15 |
| C: Documentation & Knowledge Management | __ | __ | __ | __ | __ | __/15 |
| D: Scaling & Evolution Strategy | __ | __ | __ | __ | __ | __/15 |
| **TOTAL** | | | | | | **__/60** |

### Readiness Thresholds

| Score Range | Readiness Level | Recommended Action |
|-------------|----------------|--------------------|
| **48–60** | 🟢 **Production Ready** | System is ready for sustained production operation |
| **36–47** | 🟡 **Conditionally Ready** | Address gaps in any question scored 0 or 1 before go-live |
| **24–35** | 🟠 **Significant Gaps** | Schedule follow-up sessions with operations and support teams |
| **0–23** | 🔴 **Not Ready** | Major operational infrastructure missing — delay launch until addressed |

---

## Decision Matrix

*Based on the answers gathered above, crystallize the key operational decisions:*

| Decision | Option A | Option B | Option C | Recommendation | Rationale |
|----------|----------|----------|----------|---------------|-----------|
| Monitoring Platform | Datadog | Grafana + Prometheus (self-hosted) | AWS CloudWatch (native) | | |
| Incident Management | PagerDuty | Opsgenie | Manual rotation + Slack | | |
| Documentation Platform | Notion | Confluence | GitBook + Git-based docs | | |
| Knowledge Base (User-Facing) | GitBook | Zendesk Guide | Custom help center | | |
| Support Model | In-house (engineering team) | Dedicated support hire | Outsourced support | | |
| Backup Strategy | AWS-native (RDS snapshots + S3) | Third-party backup (Veeam, Bareos) | Multi-cloud (cross-provider) | | |

---

## Readiness Checklist

*All items must be checked before the system is considered production-ready.*

- [ ] Monitoring and alerting are configured with actionable thresholds (Q1)
- [ ] Incident response process is documented with severity levels and escalation paths (Q2)
- [ ] SLIs, SLOs, and error budgets are defined and tracked (Q3)
- [ ] On-call rotation is established and sustainable (Q4)
- [ ] Post-incident review process is in place with blameless culture (Q5)
- [ ] Dependency update process is automated with security scanning (Q6)
- [ ] Backup strategy is implemented and tested (at least one restore drill completed) (Q7)
- [ ] Technical debt tracking system is active with allocated engineering time (Q8)
- [ ] Data retention policy is defined and compliant with NDPR requirements (Q9)
- [ ] Performance baselines are measured with optimization triggers defined (Q10)
- [ ] Documentation inventory is complete with identified owners (Q11)
- [ ] Knowledge transfer practices are in place with bus factor > 1 for all critical areas (Q12)
- [ ] User training materials are created and onboarding flow is tested (Q13)
- [ ] API documentation is auto-generated and verified in CI (Q14)
- [ ] Institutional knowledge platform is set up and populated (Q15)
- [ ] Growth triggers are defined with scaling actions documented (Q16)
- [ ] User feedback collection channels are active (Q17)
- [ ] Feature deprecation process is documented (Q18)
- [ ] Product roadmap is created and communicated to stakeholders (Q19)
- [ ] Long-term vision is articulated and shared with the team (Q20)
- [ ] No individual question scored 0
- [ ] Operations runbooks have been tested (at least one drill per runbook)

---

## Appendix

### A. Operational Contacts

| Role | Name | Email | Phone | Availability |
|------|------|-------|-------|-------------|
| On-call engineer (current) | | | | |
| Tech Lead | | | | |
| CTO (escalation) | | | | |
| AWS Support | | | | |
| Domain registrar | | | | |

### B. Service Dependencies

| Service | Provider | Status Page | Support Contact | SLA |
|---------|---------|------------|----------------|-----|
| | | | | |
| | | | | |
| | | | | |

### C. Operational Review Log

| Review Date | Participants | Key Findings | Actions Taken |
|------------|-------------|-------------|---------------|
| | | | |
| | | | |
| | | | |

### D. Growth Milestone Tracker

| Milestone | Target Date | Actual Date | Status | Notes |
|-----------|-----------|-------------|--------|-------|
| 100 active users | | | | |
| 500 active users | | | | |
| 1,000 active users | | | | |
| Multi-branch deployment | | | | |
| Multi-country launch | | | | |

---

*This is the final document in the Universal Execution Framework. When all 5 documents are complete and their Readiness Checklists are satisfied, you have a comprehensive, evidence-based blueprint for building, deploying, and operating a system that serves its users and its organization for years to come.*

---

**Document End — Operations, Maintenance & Growth v1.0.0**
