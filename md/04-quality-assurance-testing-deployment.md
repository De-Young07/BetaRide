---
title: "Quality Assurance, Testing & Deployment"
subtitle: "Master Document 4 of 5 — The Universal Execution Framework"
version: "1.0.0"
date: "October 2026"
author: "System Discovery Team"
status: "Template — Ready for Use"
---

<div style="text-align: center; page-break-after: always; padding-top: 200px;">

# QUALITY ASSURANCE, TESTING & DEPLOYMENT

## Master Document 4 of 5

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
2. [Section A: Testing Strategy & Standards (Q1–Q5)](#section-a-testing-strategy--standards-q1q5)
3. [Section B: Automation & CI/CD Pipeline (Q6–Q10)](#section-b-automation--cicd-pipeline-q6q10)
4. [Section C: Environments & Data Management (Q11–Q15)](#section-c-environments--data-management-q11q15)
5. [Section D: Release Management & Compliance (Q16–Q20)](#section-d-release-management--compliance-q16q20)
6. [Scoring Summary](#scoring-summary)
7. [Decision Matrix](#decision-matrix)
8. [Readiness Checklist](#readiness-checklist)
9. [Appendix](#appendix)

---

## How to Use This Document

This document is **Document 4 of 5** in the Universal Execution Framework. It focuses on validating the BUILD — ensuring the system works correctly, deploys reliably, and can be released with confidence.

### Prerequisites

Before starting this document, ensure that:
- **Document 1: Business Discovery & Strategic Alignment** is complete (success criteria defined)
- **Document 2: System Architecture & Technical Specification** is complete (technology stack and infrastructure decided)
- **Document 3: Design & User Experience Strategy** is complete (user journeys and acceptance criteria established)

Testing strategy must align with the architecture from Document 2. Acceptance criteria should trace back to the user journeys defined in Document 3 and the business objectives defined in Document 1.

### Instructions

1. **Start early** — Testing strategy should be defined before development begins, not after. This document shapes how code is written, not just how it's tested.
2. **Involve operations** — Deployment and release questions (Q6–Q10, Q16–Q20) require input from whoever manages production infrastructure. If that's the same team that builds the software, even more reason to plan carefully.
3. **Score each answer** using the 0–3 rubric provided. Questions scored 0 or 1 indicate quality risks that will surface as bugs in production, deployment failures, or customer-facing outages.
4. **Complete the Decision Matrix** at the end to lock down testing and deployment tooling.
5. **Use the Readiness Checklist** to determine if you have enough quality infrastructure to proceed to Document 5 (Operations, Maintenance & Growth).

### Scoring Guide

| Score | Label | Meaning |
|-------|-------|---------|
| 0 | Not Addressed | The question was not answered or is unknown |
| 1 | Partially Addressed | A vague or incomplete answer was given |
| 2 | Fully Addressed | A clear, actionable answer was provided |
| 3 | Exceptional | Answer includes evidence, automation, or industry-benchmarked standards |

### When to Use

- **Project kickoff** — Define the testing and deployment strategy before writing the first test
- **Quality crisis** — Audit the current QA process when bugs are slipping through to production
- **CI/CD migration** — Use when moving to a new deployment platform or pipeline
- **Compliance preparation** — Use Sections C and D when preparing for regulatory or security audits

---

## Section A: Testing Strategy & Standards (Q1–Q5)

*This section establishes the philosophy and standards for quality. A testing strategy isn't a list of tools — it's a set of principles that govern how the team thinks about quality, what risks they test for, and what "good enough" means. Without clear standards, testing is either insufficient (bugs reach production) or excessive (tests take forever and nobody maintains them).*

---

### Q1: What is the overall testing strategy (testing pyramid, testing trophy)?

**Why This Matters:**
The testing strategy defines the balance between test types — how many unit tests vs integration tests vs end-to-end tests. Get this wrong and you either have thousands of unit tests that pass while the system is broken (they test implementation, not behavior), or a handful of fragile end-to-end tests that take 45 minutes to run and break every time the UI changes. The right balance depends on the system's architecture, risk profile, and team capabilities. This question forces a deliberate choice rather than an accidental one.

**Expected Answer Format:**
A testing strategy specification naming the chosen model (pyramid, trophy, honeycomb), the rationale for the choice, the target distribution of test types, and what each test type is responsible for validating.

**Example Answer:**

> **Chosen Model: Testing Trophy (Kent C. Dodds)**
>
> **Rationale:** Our system is a full-stack application with a REST API, business logic layer, and React/React Native frontends. The testing trophy prioritizes integration tests over unit tests because integration tests catch the bugs that actually reach users — broken API contracts, failed database queries, state management issues. Pure unit tests for individual functions provide less confidence per test written.
>
> **Target Distribution:**
>
> ```
>        /  \         End-to-End (E2E)     ~10%
>       / ●● \        Smoke tests of critical user journeys
>      /      \
>     / ●●●●●● \      Integration Tests    ~50%
>    /          \      API routes, DB queries, service interactions
>   / ●●●●●●●●●● \    
>  /              \   Unit Tests            ~30%
> /  ●●●●●●●●●●●●  \  Pure business logic, utility functions, validators
> ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
>  ████████████████    Static Analysis       ~10%
>                      TypeScript, ESLint, Stylelint
> ```
>
> **What Each Layer Tests:**
>
> | Layer | What It Validates | Example | Speed | Confidence |
> |-------|------------------|---------|-------|------------|
> | Static Analysis | Type errors, code style, common mistakes | TypeScript catches `undefined` passed to function expecting `string` | Instant (on save) | Low (catches typos, not logic) |
> | Unit Tests | Pure business logic with no side effects | Lead scoring algorithm returns correct score for given inputs | Fast (< 1ms per test) | Medium (logic works, but not in context) |
> | Integration Tests | Components working together correctly | `POST /api/leads` creates a lead in the database, returns correct response, triggers notification job | Medium (50–500ms per test) | High (tests real behavior) |
> | E2E Tests | Complete user journeys from UI to database | Agent opens app → searches client → logs visit → visit appears in manager dashboard | Slow (10–30s per test) | Very high (tests what users experience) |
>
> **Why Not the Testing Pyramid:**
> The classic pyramid emphasizes unit tests at the base. For our use case, many unit tests would test Express route handlers or React components in isolation, which provides low confidence — the real bugs are in how these pieces connect (database queries returning wrong shape, middleware not attaching user context, offline sync losing data). Integration tests provide more confidence per test.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q2: What are the quality gates — what must pass before code is merged?

**Why This Matters:**
Quality gates are the automated and human checkpoints that prevent bad code from reaching production. Without clear gates, merge decisions depend on individual judgment — which varies by deadline pressure, fatigue, and "it works on my machine" bias. A well-defined gate system ensures that every piece of code meets a minimum quality standard before it joins the codebase. The key is balance: too few gates and bugs slip through; too many and the team spends more time satisfying the pipeline than writing code.

**Expected Answer Format:**
A gate sequence listing each checkpoint, what it validates, whether it's automated or manual, whether it blocks merge (hard gate) or warns (soft gate), and the expected time to pass.

**Example Answer:**

> **Merge Gate Sequence (every PR must pass all hard gates):**
>
> | Order | Gate | Type | Block/Warn | Time | What It Catches |
> |-------|------|------|-----------|------|-----------------|
> | 1 | Linting (ESLint + Stylelint) | Automated | Block | < 30s | Code style violations, common JS mistakes, unused variables, CSS inconsistencies |
> | 2 | Type checking (TypeScript) | Automated | Block | < 1 min | Type errors, missing properties, incorrect function signatures |
> | 3 | Unit tests | Automated | Block | < 2 min | Broken business logic, regression in utility functions |
> | 4 | Integration tests | Automated | Block | < 5 min | Broken API endpoints, database query failures, service interaction bugs |
> | 5 | Test coverage check | Automated | Warn (soft) | < 30s | Coverage below threshold (reports but doesn't block — see Q4) |
> | 6 | Security scan (npm audit + Snyk) | Automated | Block (critical/high) / Warn (medium/low) | < 2 min | Known vulnerabilities in dependencies |
> | 7 | Bundle size check | Automated | Warn | < 1 min | Unexpected bundle size increases (> 10% increase triggers warning) |
> | 8 | Code review (human) | Manual | Block | < 24 hours (SLA) | Logic errors, design pattern violations, missing edge cases, readability |
> | 9 | Design QA (for UI changes) | Manual | Block | < 24 hours (SLA) | Visual inconsistencies with Figma, broken states, accessibility issues |
>
> **Gate Bypass Policy:**
> - **Emergency hotfix:** Gates 1–4 still required. Gates 5–9 can be bypassed with CTO approval + post-merge remediation within 24 hours
> - **Documentation-only changes:** Gates 1–2 only (no tests needed for markdown files)
> - **Dependency updates:** Gates 1–6 required. Gate 7 (bundle size) is informational only for dependency updates
>
> **Code Review Standards:**
> - Every PR reviewed by at least 1 team member who didn't write the code
> - Reviewer checklist: correctness, readability, test coverage for new code, error handling, security implications
> - Reviews should be completed within 24 hours (2 business hours for PRs marked "urgent")
> - Feedback is suggestions, not mandates — author makes final call on style preferences. Reviewer blocks only for bugs, security issues, or architecture violations

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q3: What types of testing are required (unit, integration, e2e, performance, security)?

**Why This Matters:**
Different types of tests catch different types of bugs. Unit tests catch logic errors. Integration tests catch broken contracts. End-to-end tests catch broken user workflows. Performance tests catch systems that work perfectly at low load and collapse under real traffic. Security tests catch vulnerabilities that attackers will find whether you test for them or not. Skipping any category doesn't save time — it shifts the cost to production, where bugs are 10–100x more expensive to fix (and arrive as customer complaints instead of test failures).

**Expected Answer Format:**
A testing type inventory listing each type of testing required, what it validates, scope (how much of the system it covers), frequency (when it runs), ownership (who writes and maintains these tests), and tooling.

**Example Answer:**

> | Test Type | What It Validates | Scope | Frequency | Ownership | Tool |
> |-----------|------------------|-------|-----------|-----------|------|
> | **Unit tests** | Pure business logic: validators, calculators, formatters, state transformations | Individual functions/modules | Every PR (CI) | Developer who writes the code | Jest |
> | **Integration tests (API)** | API endpoints return correct data, database queries work, middleware functions correctly, error responses are correct | API routes → database → response | Every PR (CI) | Developer who writes the code | Jest + Supertest + test database |
> | **Integration tests (UI)** | React components render correctly, user interactions produce expected state changes, form validation works | Component → hooks → API call (mocked) | Every PR (CI) | Frontend developer | React Testing Library |
> | **End-to-end tests** | Complete user journeys work from UI to database and back | Entire stack (browser → API → database) | Nightly CI + before release | QA lead (or designated developer) | Playwright (web), Detox (mobile) |
> | **Performance tests** | System handles expected load without degradation, response times meet SLAs (from Doc 2 Q2) | Full stack under simulated load | Before each release + monthly | Tech Lead | k6 (load testing) |
> | **Security tests (SAST)** | Source code doesn't contain known vulnerability patterns (SQL injection, XSS, hardcoded secrets) | All source files | Every PR (CI) | Automated (pipeline) | Semgrep + ESLint security rules |
> | **Security tests (DAST)** | Running application doesn't expose common web vulnerabilities | Deployed staging environment | Weekly (automated) + before release | Tech Lead | OWASP ZAP |
> | **Dependency scanning** | Third-party packages don't contain known CVEs | All npm dependencies | Every PR (CI) + daily (scheduled) | Automated (pipeline) | npm audit + Snyk |
> | **Accessibility tests** | UI meets WCAG 2.1 AA compliance | All UI components and pages | Every PR (automated) + quarterly (manual audit) | Designer + Frontend developer | axe-core (automated), manual screen reader testing |
> | **Visual regression tests** | UI doesn't change unexpectedly between commits | Design system components + key pages | Every PR (CI) | Frontend developer | Chromatic (Storybook) |
> | **Offline/sync tests** | Data created offline syncs correctly, conflicts are detected, no data loss | Mobile app ↔ server sync | Before each release | Mobile developer | Custom test suite (simulated offline conditions) |
> | **Smoke tests** | Critical paths work after deployment | Top 5 user journeys (from Doc 3 Q2) | After every deployment (automated) | Automated (pipeline) | Playwright |
>
> **Testing NOT Required (with rationale):**
> - **Contract testing (Pact):** Only needed with multiple independent services. Our modular monolith has internal module boundaries but no separate deployment units. Revisit if we extract microservices.
> - **Chaos engineering:** Premature at our scale and team size. Revisit when we have 10+ services or serve 10,000+ users.
> - **Mutation testing:** High ROI but high setup cost. Revisit after the first 6 months when the test suite is mature.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q4: What is the acceptable test coverage threshold, and how is it enforced?

**Why This Matters:**
Test coverage is the most misunderstood metric in software engineering. 100% coverage doesn't mean no bugs — it means every line was executed during tests, not that every scenario was validated. 0% coverage means you're shipping code and hoping for the best. The useful middle ground is a threshold that ensures critical paths are tested while acknowledging that some code (UI layouts, configuration files, generated code) doesn't benefit from coverage enforcement. This question forces the team to set a realistic threshold and decide how it's enforced — because a threshold that nobody checks is not a threshold.

**Expected Answer Format:**
A coverage policy specifying: overall coverage threshold, per-module or per-file thresholds (if different), what's excluded from coverage measurement, enforcement mechanism (block merge, report, warn), and the tool used to measure.

**Example Answer:**

> **Coverage Thresholds:**
>
> | Scope | Threshold | Enforcement | Rationale |
> |-------|-----------|-------------|-----------|
> | Overall project | ≥ 75% lines, ≥ 70% branches | Warn (CI reports but doesn't block) | Team is small — blocking on coverage creates merge friction. Warning creates visibility |
> | New code in PR | ≥ 80% lines, ≥ 75% branches | Block (CI fails if new code is below threshold) | New code should be well-tested. Existing legacy code can be improved gradually |
> | Critical modules (auth, payments, data sync) | ≥ 90% lines, ≥ 85% branches | Block | These modules handle sensitive data and complex state — bugs here are catastrophic |
> | Utility/helper functions | ≥ 90% lines | Block | Pure functions are easy to test and contain business logic |
> | UI components (layout only) | No minimum | Excluded from enforcement | Snapshot tests and visual regression catch layout bugs better than line coverage |
> | Configuration and migration files | N/A | Excluded from measurement | These are declarative, not logic — coverage measurement is meaningless |
>
> **Exclusions from Coverage Measurement:**
> ```
> # jest.config.js coveragePathIgnorePatterns
> - **/node_modules/**
> - **/migrations/**
> - **/config/**
> - **/*.d.ts
> - **/test/**  (test files themselves)
> - **/generated/**  (auto-generated code)
> ```
>
> **Coverage Trend Policy:**
> - Coverage must not decrease between releases (ratchet strategy)
> - Monthly coverage report reviewed in team retro
> - If overall coverage drops below 70%, it becomes a sprint priority to restore
>
> **Tool:** Jest built-in coverage (Istanbul/v8) with coverage report uploaded to Codecov for PR-level reporting and historical trends.
>
> **What Coverage Does NOT Replace:**
> - Coverage is a hygiene metric, not a quality metric. A module with 95% coverage can still have critical bugs if the tests don't assert on the right things.
> - Code review remains the primary defense against insufficient test quality. Reviewers should check that tests assert on behavior (not implementation) and cover edge cases (not just happy paths).

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q5: What testing tools, frameworks, and environments will be used?

**Why This Matters:**
Tool selection affects every developer's daily workflow. The testing framework determines how tests are written, how fast they run, how easy they are to debug, and how much boilerplate is required. Choosing tools that don't integrate with the tech stack (from Document 2) creates friction. Choosing tools nobody on the team knows creates a learning curve that delays testing. Choosing tools that are poorly maintained creates a dependency risk. This question forces an intentional tooling decision aligned with the team's capabilities and the project's technical stack.

**Expected Answer Format:**
A testing toolchain specification listing each tool, its purpose, why it was selected (over alternatives), the team's current proficiency, and any licensing or cost implications.

**Example Answer:**

> **Testing Toolchain:**
>
> | Tool | Purpose | Why Selected | Alternatives Considered | Proficiency | Cost |
> |------|---------|-------------|------------------------|-------------|------|
> | **Jest** | Unit + Integration test runner (backend + frontend) | Industry standard for JS/TS, fast parallel execution, excellent mocking, works with React and Node.js | Vitest (newer, faster, but team knows Jest) | 4/5 | Free |
> | **Supertest** | HTTP integration testing | Simple API for testing Express routes without starting the server, integrates cleanly with Jest | Axios (not designed for testing), Pactum (more features than needed) | 3/5 | Free |
> | **React Testing Library** | UI component testing | Tests user behavior (not implementation), aligns with testing trophy philosophy, official React recommendation | Enzyme (deprecated), Cypress Component Testing (heavier setup) | 3/5 | Free |
> | **Playwright** | E2E testing (web) | Cross-browser support, fast execution, excellent debugging tools (trace viewer), auto-waiting for elements | Cypress (single browser, limited multi-tab), Selenium (slower, more boilerplate) | 2/5 | Free |
> | **Detox** | E2E testing (React Native mobile) | Purpose-built for React Native, grey-box testing, works with real device simulators | Appium (slower, more flaky), Maestro (simpler but less mature) | 1/5 | Free |
> | **k6** | Performance/load testing | Developer-friendly (write tests in JS), scriptable, CLI-based, integrates with CI/CD | JMeter (GUI-based, XML configs, painful), Locust (Python, team is JS-focused) | 1/5 | Free (open source) |
> | **Semgrep** | Static Application Security Testing (SAST) | Fast, low false-positive rate, custom rule support, works offline | SonarQube (heavy, requires server), CodeQL (slow for CI) | 1/5 | Free (community rules) |
> | **OWASP ZAP** | Dynamic Application Security Testing (DAST) | Open source, comprehensive scanner, API testing support, CI/CD integration | Burp Suite (expensive), Nuclei (less comprehensive) | 1/5 | Free |
> | **axe-core** | Accessibility testing | Integrates with Jest and Playwright, low false-positive rate, WCAG 2.1 rule set | Pa11y (similar but less active), Lighthouse (broader scope, less focused) | 2/5 | Free |
> | **Chromatic** | Visual regression testing | Native Storybook integration, cloud-based comparison, team review workflow | Percy (similar features, higher cost), reg-suit (self-hosted, more setup) | 1/5 | Free tier (5,000 snapshots/month) |
> | **Codecov** | Coverage reporting | PR-level coverage diffs, historical trends, branch-specific thresholds | Coveralls (similar), built-in Jest reporter (no historical tracking) | 2/5 | Free (open source projects) |
>
> **Test Environments:**
>
> | Environment | Used For | Database | External Services | Data |
> |------------|---------|----------|------------------|------|
> | Local (developer machine) | Unit + integration tests during development | SQLite (in-memory) or Docker PostgreSQL | Mocked (MSW for API mocks) | Fixtures and factories |
> | CI (GitHub Actions) | All automated tests on every PR | Docker PostgreSQL (spun up per test run) | Mocked | Fixtures and factories |
> | Staging | E2E tests, performance tests, manual QA | PostgreSQL (staging instance, seeded with test data) | Real (sandbox accounts for WhatsApp, QuickBooks) | Synthetic test data (realistic but not production) |
>
> **Proficiency Gap Plan:**
> The team has low proficiency in Playwright, Detox, k6, and Semgrep. Mitigation:
> - Week 1 of development: 2-day testing workshop covering Playwright and k6 basics
> - First 2 sprints: Senior developer writes initial E2E test suite as a reference pattern
> - Detox: Defer mobile E2E testing until Sprint 3, by which time the mobile app has stable UI to test against

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section B: Automation & CI/CD Pipeline (Q6–Q10)

*This section defines the assembly line — how code moves from a developer's laptop to a running production system. A well-designed CI/CD pipeline is the single greatest accelerator of engineering velocity. A poorly designed one is the single greatest source of developer frustration. These questions ensure the pipeline is fast, reliable, and trustworthy.*

---

### Q6: What is the CI/CD pipeline architecture (build, test, deploy stages)?

**Why This Matters:**
The CI/CD pipeline is the heartbeat of the engineering team. Every line of code flows through it. A pipeline that takes 45 minutes to run means developers context-switch to other work and forget what they were building. A pipeline that's flaky (passes sometimes, fails sometimes) means developers stop trusting it and merge code without waiting for results. A pipeline that deploys incorrectly means outages. This question forces the team to design a pipeline that's fast (< 15 minutes total), reliable (< 1% flake rate), and safe (no production deployment without passing all gates).

**Expected Answer Format:**
A pipeline architecture diagram showing each stage, its steps, expected duration, failure behavior, and the overall flow from code commit to production deployment.

**Example Answer:**

> **Pipeline Architecture:**
>
> ```
> Developer pushes to feature branch
>         │
>         ▼
> ┌─── CI Pipeline (Triggered automatically) ────────────────────────┐
> │                                                                   │
> │  Stage 1: VALIDATE (parallel, ~1 min)                            │
> │  ├── Lint (ESLint + Stylelint)                                   │
> │  ├── Type check (TypeScript)                                     │
> │  └── Security scan (npm audit + Semgrep)                         │
> │                                                                   │
> │  Stage 2: TEST (parallel where possible, ~5 min)                 │
> │  ├── Unit tests (Jest, ~2 min)                                   │
> │  ├── Integration tests (Jest + Supertest + test DB, ~4 min)      │
> │  ├── UI component tests (React Testing Library, ~3 min)          │
> │  └── Coverage report (uploaded to Codecov)                       │
> │                                                                   │
> │  Stage 3: BUILD (~2 min)                                         │
> │  ├── Build Docker image (multi-stage)                            │
> │  ├── Build React Native bundle (for mobile PRs)                  │
> │  └── Generate OpenAPI docs                                       │
> │                                                                   │
> └──────────────────────────────────────────────────────────────────┘
>         │ All stages pass
>         ▼
>     PR Review (human) — merge when approved
>         │
>         ▼
> ┌─── CD Pipeline (Triggered on merge to main) ─────────────────────┐
> │                                                                   │
> │  Stage 4: DEPLOY TO STAGING (~3 min)                             │
> │  ├── Push Docker image to ECR                                    │
> │  ├── Run database migrations (staging)                           │
> │  └── Deploy to ECS Fargate (staging)                             │
> │                                                                   │
> │  Stage 5: VERIFY STAGING (~3 min)                                │
> │  ├── Health check (HTTP 200 on /health)                          │
> │  ├── Smoke tests (top 5 journeys via Playwright)                 │
> │  └── API contract verification (OpenAPI schema validation)       │
> │                                                                   │
> │  Stage 6: DEPLOY TO PRODUCTION (~5 min)                          │
> │  ├── ⚠️  Manual approval gate (Slack notification + approval)    │
> │  ├── Rolling deployment (ECS, 1 task at a time)                  │
> │  ├── Health check after each task replacement                    │
> │  └── Post-deploy smoke tests (production)                        │
> │                                                                   │
> │  Stage 7: NOTIFY                                                 │
> │  ├── Slack notification: deployment complete                     │
> │  └── Deployment logged (version, commit, timestamp, deployer)    │
> │                                                                   │
> └──────────────────────────────────────────────────────────────────┘
> ```
>
> **Pipeline Metrics Targets:**
>
> | Metric | Target | Action if Missed |
> |--------|--------|-----------------|
> | Total CI time (Stages 1–3) | < 10 minutes | Investigate slow tests, add parallelism |
> | Total CD time (Stages 4–7) | < 15 minutes | Review deployment configuration |
> | Flake rate | < 1% (fewer than 1 false failure per 100 runs) | Quarantine flaky tests, fix within 48 hours |
> | Mean time to deploy (commit → production) | < 2 hours during business hours | Remove bottlenecks, reduce approval wait time |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q7: How will automated tests be structured and maintained?

**Why This Matters:**
A test suite is a codebase within a codebase. It needs the same care — naming conventions, organization, refactoring, and maintenance. Without structure, tests become a dumping ground of copy-pasted assertions that nobody understands, nobody maintains, and nobody trusts. When a test fails, developers should know within 30 seconds what it tests, why it failed, and whether it's a real bug or a flaky test. This question establishes the organizational structure and maintenance practices that keep the test suite valuable rather than burdensome.

**Expected Answer Format:**
A test suite organization plan covering: directory structure, naming conventions, test data management (fixtures, factories, seeds), shared utilities, maintenance practices, and anti-patterns to avoid.

**Example Answer:**

> **Directory Structure:**
>
> ```
> src/
> ├── modules/
> │   ├── leads/
> │   │   ├── leads.service.ts          ← business logic
> │   │   ├── leads.controller.ts       ← API routes
> │   │   ├── leads.repository.ts       ← database queries
> │   │   ├── __tests__/
> │   │   │   ├── leads.service.test.ts          ← unit tests
> │   │   │   ├── leads.controller.test.ts       ← integration tests
> │   │   │   └── leads.repository.test.ts       ← integration tests (with test DB)
> │   │   └── __fixtures__/
> │   │       ├── lead.fixture.ts        ← test data factories
> │   │       └── lead.mock.ts           ← mocked dependencies
> │   └── visits/
> │       └── ... (same structure)
> ├── __tests__/
> │   └── e2e/
> │       ├── log-visit.e2e.test.ts      ← end-to-end journey tests
> │       ├── check-pipeline.e2e.test.ts
> │       └── helpers/
> │           ├── test-app.ts            ← shared app setup for E2E
> │           └── seed-data.ts           ← database seeding for E2E
> └── test-utils/
>     ├── factories/                     ← shared data factories (using Fishery or custom)
>     │   ├── user.factory.ts
>     │   ├── lead.factory.ts
>     │   └── visit.factory.ts
>     ├── setup.ts                       ← global test setup (DB connection, cleanup)
>     └── matchers/                      ← custom Jest matchers
>         └── api-response.matcher.ts
> ```
>
> **Naming Conventions:**
> - Test files: `{module}.{type}.test.ts` (e.g., `leads.service.test.ts`, `leads.controller.test.ts`)
> - Test descriptions: `describe('LeadService')` → `it('should prevent duplicate leads based on phone number')`
> - Use "should" + expected behavior, not implementation details
> - Bad: `it('calls findByPhone and returns null')` — tests implementation
> - Good: `it('should reject a lead when a lead with the same phone number exists')` — tests behavior
>
> **Test Data Strategy:**
> - **Factories** (preferred): Generate realistic test data with sensible defaults and overrides (`LeadFactory.build({ phone: '+2348012345678' })`)
> - **Fixtures** (for integration tests): Pre-defined data sets loaded into test database before each suite
> - **No production data in tests** — all test data is synthetic
> - **Database cleanup:** Each test suite runs in a transaction that's rolled back after the suite completes (prevents test pollution)
>
> **Maintenance Practices:**
> - **Flaky test policy:** A test that fails intermittently is immediately quarantined (skipped with `TODO: fix flaky test` and a linked issue). Must be fixed or removed within 1 sprint
> - **Test review in PRs:** Reviewers check: does the test assert on behavior? Does it cover edge cases? Would it catch the bug it's designed to prevent?
> - **Quarterly test audit:** Review test suite health — remove obsolete tests, identify untested critical paths, refactor duplicated test setup
> - **No test duplication:** If the same behavior is tested by an integration test and a unit test, keep the integration test (higher confidence). Exception: complex algorithms justify dedicated unit tests

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q8: What deployment strategy will be used (blue-green, canary, rolling, feature flags)?

**Why This Matters:**
Deployment strategy determines how much risk each release carries. Deploying all servers at once ("big bang") means a bad release breaks everything simultaneously. Rolling deployments update servers one at a time but mix old and new versions temporarily. Blue-green deployments run two full environments and switch traffic instantly. Canary deployments send a small percentage of traffic to the new version first. The right choice depends on infrastructure budget, team operational skill, and how catastrophic a bad deployment would be. This question prevents the default strategy (usually "push and pray") from becoming the actual strategy.

**Expected Answer Format:**
A deployment strategy specification covering: the chosen strategy, why it's appropriate for this system, how traffic is managed during deployment, how the new version is validated before full rollout, and how rollback works.

**Example Answer:**

> **Chosen Strategy: Rolling Deployment with Automated Health Checks**
>
> | Strategy | Pros | Cons | Fit for Us |
> |----------|------|------|-----------|
> | Big bang (all at once) | Simplest, no mixed versions | Total outage if deployment fails, all users affected immediately | ❌ Too risky |
> | Blue-green | Instant rollback (switch traffic back), no mixed versions | Double infrastructure cost, complex database migration handling | ❌ Too expensive for our scale |
> | Canary | Gradual rollout, real-world testing before full deployment | Requires sophisticated traffic routing, monitoring to detect issues | ❌ Premature — team of 5 can't operationalize this yet |
> | **Rolling** | Zero-downtime, gradual replacement, moderate complexity | Brief period of mixed versions, requires backward-compatible changes | ✅ Best fit for ECS Fargate + small team |
>
> **How It Works:**
>
> 1. New Docker image is pushed to ECR
> 2. ECS service update is triggered with `maximumPercent: 200`, `minimumHealthyPercent: 100`
> 3. ECS launches new task(s) with the new image
> 4. Each new task must pass health check (`GET /health` returns 200 within 30 seconds)
> 5. If health check passes: old task is drained (stops receiving traffic over 30 seconds) and terminated
> 6. If health check fails: new task is terminated, old task remains active, deployment is marked as failed, alert sent to Slack
> 7. Process repeats for each task (with 2 tasks running, deployment replaces one at a time)
>
> **Backward Compatibility Requirement:**
> Because rolling deployments briefly run old and new versions simultaneously:
> - API changes must be backward compatible (add new fields, don't rename or remove)
> - Database migrations must be backward compatible (add columns, don't drop or rename in the same deployment)
> - Breaking changes require a two-phase deployment: Phase 1 deploys new code that supports both old and new schema, Phase 2 (next release) removes old schema support
>
> **Feature Flags (Complementary Strategy):**
> - Major new features deployed behind feature flags (environment variable-based)
> - Deployment deploys the code. Feature flag enables the feature. These are separate actions
> - This allows deploying code to production without exposing the feature to users until it's ready
> - Kill switch: feature flag can disable a feature in production without a deployment
>
> **Rollback Procedure:**
> 1. Detect issue (monitoring alert or manual report)
> 2. Revert ECS service to previous task definition (one CLI command: `aws ecs update-service --force-new-deployment` with previous task definition)
> 3. Previous Docker image is still in ECR — rollback deploys it using the same rolling strategy
> 4. Rollback time: < 5 minutes
> 5. If database migration was applied: run reverse migration (all migrations must have a `down` function)

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q9: How will database migrations be tested and deployed safely?

**Why This Matters:**
Database migrations are the highest-risk deployment activity. A bad code deployment can be rolled back in minutes. A bad migration that drops a column, corrupts data, or locks a table for 10 minutes can cause data loss, extended downtime, and hours of recovery work. Migrations also interact with rolling deployments — if the new code expects a column that doesn't exist yet (or the old code expects a column that was just dropped), the application breaks during the deployment window. This question ensures migrations are treated with the caution they demand.

**Expected Answer Format:**
A migration strategy covering: migration tool, naming and versioning conventions, testing approach, deployment sequence (migration vs code), rollback capability, and procedures for different migration types (additive, destructive, data transforms).

**Example Answer:**

> **Migration Tool:** node-pg-migrate (or Prisma Migrate if using Prisma ORM)
>
> **Migration File Convention:**
> ```
> migrations/
> ├── 001_create_users_table.ts
> ├── 002_create_leads_table.ts
> ├── 003_add_branch_id_to_leads.ts
> ├── 004_create_visits_table.ts
> └── ...
> ```
> - Sequential numbering (not timestamps) for clear ordering
> - Descriptive names that indicate what changes
> - Every migration has an `up` (apply) and `down` (reverse) function
>
> **Migration Safety Rules:**
>
> | Migration Type | Safety Level | Procedure | Example |
> |---------------|-------------|-----------|---------|
> | Add table | 🟢 Safe | Deploy migration, then deploy code that uses the table | `CREATE TABLE visits (...)` |
> | Add column (nullable) | 🟢 Safe | Deploy migration, then deploy code. Old code ignores new column | `ALTER TABLE leads ADD COLUMN notes TEXT` |
> | Add column (not null + default) | 🟡 Caution | Safe for small tables (< 1M rows). For large tables, add nullable first, backfill, then add constraint | `ALTER TABLE leads ADD COLUMN status TEXT NOT NULL DEFAULT 'new'` |
> | Add index | 🟡 Caution | Use `CREATE INDEX CONCURRENTLY` to avoid table lock. May take minutes on large tables | `CREATE INDEX CONCURRENTLY idx_leads_phone ON leads(phone)` |
> | Rename column | 🔴 Danger | Two-phase: (1) Add new column, copy data, deploy code that reads both. (2) Drop old column in next release | Never `ALTER TABLE ... RENAME COLUMN` directly |
> | Drop column | 🔴 Danger | Two-phase: (1) Deploy code that doesn't use the column. (2) Drop column in next release | Never drop before all code referencing it is removed |
> | Drop table | 🔴 Danger | Soft-delete first (rename to `_deprecated_tablename`), keep for 30 days, then drop | Archive data before drop |
> | Data transformation | 🔴 Danger | Run as a separate, idempotent script. Never in the migration itself. Test on production-size data copy first | `UPDATE leads SET status = 'active' WHERE status IS NULL` |
>
> **Testing Migrations:**
> 1. **CI test database:** Every migration runs forward and backward in CI against a clean database (catches syntax errors, missing `down` functions)
> 2. **Staging:** Migrations run against staging database (which has realistic data) before production deployment
> 3. **Production-size test:** For migrations on tables > 100K rows, test on a production-size copy first (measure lock time, execution time)
> 4. **Peer review:** All migrations require code review by someone who understands database locking behavior
>
> **Deployment Sequence:**
> ```
> 1. Run migration on production database (during low-traffic window if destructive)
> 2. Verify migration succeeded (check table structure, row counts)
> 3. Deploy new application code (rolling deployment)
> 4. Verify application works with new schema
> 5. If application fails: rollback application code first, then run migration `down` if needed
> ```

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q10: What is the rollback procedure if a deployment fails?

**Why This Matters:**
Every deployment is a bet that the new code works. Rollback is the insurance policy for when the bet loses. Without a tested rollback procedure, a failed deployment turns into a multi-hour emergency where the team improvises under pressure at 2 AM. A tested rollback procedure turns it into a 5-minute operation: detect, decide, execute, verify. The key word is "tested" — a rollback procedure that hasn't been practiced is a theoretical rollback procedure, and theories collapse under stress.

**Expected Answer Format:**
A rollback playbook covering: detection (how you know a deployment is bad), decision criteria (when to rollback vs hotfix), execution steps (how to rollback), verification (how to confirm rollback worked), communication plan, and testing schedule.

**Example Answer:**

> **Detection — How We Know a Deployment Is Bad:**
>
> | Signal | Source | Threshold | Auto-Rollback? |
> |--------|--------|-----------|----------------|
> | Health check failure | ECS health checks | 3 consecutive failures (90 seconds) | Yes — ECS stops the task automatically |
> | Error rate spike | Application logs + Datadog | 5xx error rate > 5% for 3 minutes post-deploy | No — alert to team, manual decision |
> | Post-deploy smoke test failure | Playwright (automated) | Any top-5 journey fails | No — alert to team, manual decision |
> | User reports | Support channel / Slack | 3+ reports of the same issue within 30 minutes | No — investigate, then decide |
> | Performance degradation | Datadog APM | p95 response time > 2x pre-deploy baseline for 5 minutes | No — alert to team, manual decision |
>
> **Decision Matrix — Rollback vs Hotfix:**
>
> | Situation | Action | Rationale |
> |-----------|--------|-----------|
> | Critical bug affecting all users | **Rollback immediately** | Restore service first, investigate later |
> | Performance degradation but functional | **Monitor + decide in 15 minutes** | May stabilize as caches warm up |
> | Bug affecting < 5% of users | **Hotfix** (if fix is < 30 min), else rollback | Small blast radius, known fix |
> | Data corruption detected | **Rollback immediately + freeze database writes** | Prevent further corruption |
> | Feature works but looks wrong (UI) | **Feature flag off** (if flagged), else rollback | Disable feature without rolling back all changes |
>
> **Rollback Execution Steps:**
>
> 1. **Announce:** Post in #incidents channel: "Rolling back deployment [version]. Reason: [1 sentence]"
> 2. **Execute:** `aws ecs update-service --cluster production --service api --task-definition api:PREVIOUS_VERSION --force-new-deployment`
> 3. **Verify health:** Watch ECS console — confirm old tasks are healthy, new tasks are draining
> 4. **Verify application:** Run smoke tests against production: `npx playwright test --config=playwright.smoke.config.ts`
> 5. **Verify database:** If migration was applied, run `down` migration: `npm run migrate:down -- --to PREVIOUS_MIGRATION`
> 6. **Confirm:** Post in #incidents: "Rollback complete. [version] reverted to [previous version]. All smoke tests passing. Investigating root cause."
>
> **Time Targets:**
> - Detection to decision: < 5 minutes
> - Decision to rollback complete: < 10 minutes
> - Total incident time (detection to verified rollback): < 15 minutes
>
> **Communication Plan:**
>
> | Audience | Channel | When | Message |
> |----------|---------|------|---------|
> | Engineering team | Slack #incidents | Immediately on detection | "Deployment issue detected. Investigating / Rolling back." |
> | Product Manager | Slack DM + phone if critical | Within 5 minutes | "We're rolling back today's release due to [issue]. No data loss. ETA to resolution: [time]." |
> | End users (if affected) | In-app notification | Only if user-facing impact lasted > 5 minutes | "We experienced a brief issue. Everything is working normally now." |
> | Stakeholders | Email | Post-incident (within 24 hours) | Post-incident summary: what happened, impact, root cause, prevention |
>
> **Rollback Testing:**
> - **Monthly:** Practice rollback on staging environment (full rehearsal: detect → decide → execute → verify)
> - **Quarterly:** Practice rollback on production during low-traffic window (Sunday midnight)
> - **After each rollback:** Post-incident review to identify improvements to detection, execution, and verification

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section C: Environments & Data Management (Q11–Q15)

*This section addresses the infrastructure that supports quality — the environments where testing happens, the data used for tests, and the specialized testing (performance, security) that catches problems invisible in functional testing. A test suite that runs in a perfect environment with perfect data catches only perfect-condition bugs. Real bugs live in the messy gaps between environments.*

---

### Q11: What environments are needed (dev, staging, QA, pre-prod, production)?

**Why This Matters:**
Environments define where code lives at each stage of its journey from development to production. Too few environments (development → production) means bugs are discovered by users. Too many environments (development → QA → staging → pre-prod → production) means deployments take days and environments drift out of sync. The right number depends on team size, regulatory requirements, and how much risk the organization can tolerate. Each environment costs money and maintenance effort — every one must justify its existence.

**Expected Answer Format:**
An environment inventory listing each environment, its purpose, who uses it, how it's provisioned, how it relates to production (data, infrastructure parity), and its cost.

**Example Answer:**

> | Environment | Purpose | Users | Infrastructure | Database | Data | Parity with Production | Cost |
> |------------|---------|-------|---------------|----------|------|----------------------|------|
> | **Local (Developer)** | Individual development and testing | Each developer | Docker Compose on laptop | PostgreSQL 15 in Docker | Seed data (small, synthetic) | Low — single machine, no load balancer, no CDN | Free |
> | **CI (GitHub Actions)** | Automated testing on every PR | Automated (no human access) | GitHub-hosted runners | PostgreSQL in Docker (spun up per run, destroyed after) | Fixtures and factories (generated per test) | Low — isolated, ephemeral, no external services | Free tier (2,000 min/month) |
> | **Staging** | Pre-production validation: E2E tests, UAT, performance tests, design QA | Developers, Product Manager, test users | AWS ECS Fargate (same config as production, smaller instance count) | PostgreSQL RDS (separate instance, same version as production) | Synthetic data resembling production (same volume, sanitized) | High — same AWS services, same Docker images, same config (except secrets) | ~$150/month |
> | **Production** | Live system serving real users | End users | AWS ECS Fargate (auto-scaling), ALB, RDS, S3, Redis, CloudFront | PostgreSQL RDS (Multi-AZ) | Real customer data | N/A (this IS production) | ~$500/month (scaling with usage) |
>
> **Why No Separate QA or Pre-Prod Environment:**
> - **QA environment:** Staging serves this purpose. With a team of 5 and no dedicated QA team, a separate QA environment adds cost and maintenance without proportional value. Automated tests in CI + staging validation provides sufficient quality gates.
> - **Pre-prod environment:** Justified when production has complex infrastructure (Kubernetes, service mesh, multi-region) that staging can't replicate. Our ECS Fargate setup is simple enough that staging is a faithful replica.
>
> **Environment Promotion Flow:**
> ```
> Local → CI → Staging → Production
>   ↑                       ↑
>   │                       │
>   Development             Manual approval gate
>   + automated tests       + smoke tests
> ```
>
> **Environment Refresh Policy:**
> - Staging database refreshed weekly from sanitized production backup (PII removed, passwords reset)
> - Staging infrastructure verified against production Terraform config monthly (drift detection)

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q12: How will test data be generated, managed, and refreshed?

**Why This Matters:**
Tests are only as good as the data they run against. Tests with 5 records pass happily while production with 50,000 records grinds to a halt. Tests with perfectly formatted data pass while real users enter phone numbers as "08012345678" one day and "+234 801 234 5678" the next. Test data strategy determines whether your tests catch real bugs or just confirm that the happy path works with perfect inputs. This question ensures test data is realistic, comprehensive, and doesn't create compliance risks (using real customer data in test environments).

**Expected Answer Format:**
A test data strategy covering: data generation approach (manual, factories, production copies), data sanitization rules (for production data), edge case data sets, data refresh cadence, and data cleanup procedures.

**Example Answer:**

> **Test Data Strategy by Environment:**
>
> | Environment | Data Source | Volume | Refresh Cadence | Compliance |
> |------------|-----------|--------|-----------------|------------|
> | Local / CI (Unit + Integration) | Factories (code-generated) | 10–100 records per test | Generated fresh per test run | No PII — all synthetic |
> | Staging (E2E + UAT) | Sanitized production copy + synthetic augmentation | Production-scale (10,000+ records) | Weekly (automated) | PII sanitized (see rules below) |
> | Performance testing | Synthetic data at 3x production scale | 50,000+ records | Before each performance test run | No PII — fully synthetic |
>
> **Factory Pattern (Unit + Integration Tests):**
> ```typescript
> // Using Fishery factory library
> const leadFactory = Factory.define<Lead>(({ sequence }) => ({
>   id: `lead-${sequence}`,
>   name: faker.person.fullName(),
>   phone: `+234801${sequence.toString().padStart(7, '0')}`,
>   status: 'new',
>   branchId: 'branch-lagos-1',
>   createdAt: new Date(),
>   // Override in tests: leadFactory.build({ status: 'won' })
> }));
> ```
>
> **PII Sanitization Rules (for staging):**
>
> | Field | Production Value | Sanitized Value | Method |
> |-------|-----------------|-----------------|--------|
> | Customer name | "Adebayo Okafor" | "Test Customer 4821" | Replace with sequential ID |
> | Phone number | "+2348012345678" | "+2340000004821" | Preserve format, replace digits |
> | Email | "adebayo@company.com" | "user4821@test.example.com" | Replace with sequential email |
> | Address | "15 Adeola Odeku, VI, Lagos" | "Test Address 4821, Test City" | Replace with generic |
> | GPS coordinates | 6.4281, 3.4219 | Randomized within Lagos bounding box | Jitter by ±0.01 degrees |
> | Visit notes | "Client interested in bulk order" | Preserved (no PII in notes by policy) | No change |
> | Financial amounts | ₦2,500,000 | Preserved | No change (amounts aren't PII) |
>
> **Edge Case Data Sets (pre-built for reuse):**
>
> | Data Set | Purpose | Contents |
> |----------|---------|----------|
> | `edge-names` | Test name handling | Unicode names (中文, العربية), very long names (50+ chars), names with apostrophes (O'Brien), single-character names |
> | `edge-phones` | Test phone validation | International formats, numbers with spaces/dashes, numbers without country code, landlines, invalid lengths |
> | `edge-dates` | Test date handling | Dates across time zones, midnight edge cases, February 29 (leap year), dates far in the past, dates in the future |
> | `edge-volume` | Test performance at scale | 50,000 leads, 200,000 visits, 500 agents — used for performance testing |
> | `edge-sync` | Test offline sync | Conflicting edits (same lead modified offline by two agents), large sync batches (1,000+ pending), corrupted sync payloads |
>
> **Data Cleanup:**
> - Tests clean up after themselves (transaction rollback for database, temp file deletion)
> - Staging database reset weekly (automated script: truncate tables → re-seed)
> - No test data leaks to production (production deployment pipeline has no access to staging database)

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q13: How will environment parity be maintained (infrastructure as code)?

**Why This Matters:**
"Works in staging, broken in production" is the rallying cry of teams without environment parity. Differences between environments — different OS versions, different database configurations, different network setups — create bugs that are invisible until production and impossible to reproduce after. Infrastructure as Code (IaC) eliminates drift by defining environments in version-controlled, reviewable, repeatable code rather than manual console clicks that nobody documents and everyone configures slightly differently.

**Expected Answer Format:**
An IaC strategy covering: the tool used, what's codified (infrastructure, configuration, secrets), how parity is verified, and the process for making infrastructure changes.

**Example Answer:**

> **Infrastructure as Code Tool: Terraform**
>
> **What's Codified:**
>
> | Component | IaC Tool | Repository Location | Environment Differences |
> |-----------|---------|---------------------|------------------------|
> | AWS VPC, subnets, security groups | Terraform | `/infrastructure/network/` | Same structure, different CIDR ranges |
> | ECS cluster, services, task definitions | Terraform | `/infrastructure/ecs/` | Same config, different instance count (staging: 1, prod: 2) |
> | RDS database instance | Terraform | `/infrastructure/database/` | Same version and config, different instance size (staging: db.t3.small, prod: db.t3.medium) |
> | S3 buckets | Terraform | `/infrastructure/storage/` | Same lifecycle rules, different bucket names |
> | IAM roles and policies | Terraform | `/infrastructure/iam/` | Identical |
> | CloudFront distribution | Terraform | `/infrastructure/cdn/` | Same config, different origins |
> | Application configuration | Environment variables (in ECS task definition) | `/infrastructure/config/` | Different values (DB connection strings, API keys) |
> | Secrets | AWS Secrets Manager (referenced by Terraform) | Not in repo (secret values stored in Secrets Manager) | Different secrets per environment |
>
> **How Parity Is Verified:**
>
> | Check | Method | Frequency |
> |-------|--------|-----------|
> | Terraform plan diff | `terraform plan` shows what would change if applied — any unintended drift is visible | Before every deployment |
> | Configuration drift detection | Monthly script that compares staging vs production Terraform state files | Monthly |
> | Version parity | Same Docker image tag deployed to staging and production | Every deployment (enforced by pipeline) |
> | Database version parity | Same PostgreSQL version, same extensions, same migration state | Verified by migration runner at deployment time |
>
> **Infrastructure Change Process:**
> 1. Developer creates infrastructure change in Terraform files
> 2. PR triggers `terraform plan` — output is posted as PR comment (reviewer sees exactly what changes)
> 3. PR review by at least one team member who understands the infrastructure component
> 4. Merge triggers automated `terraform apply` to staging
> 5. Staging verified (smoke tests pass)
> 6. Manual `terraform apply` to production (with approval)
>
> **Anti-Drift Rules:**
> - **No manual console changes** — all infrastructure changes go through Terraform PRs
> - **Exception:** Emergency fixes can be applied via console but must be codified in Terraform within 24 hours (tracked as "infrastructure debt")
> - **Quarterly parity audit:** Script compares every resource attribute between staging and production, flags unintended differences

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q14: What is the performance testing strategy (load, stress, soak testing)?

**Why This Matters:**
Functional tests tell you the system works. Performance tests tell you the system works at scale. A system that handles 10 concurrent users beautifully but falls over at 100 is a system that will embarrass you on launch day. Performance issues are especially dangerous because they're invisible during development (developers test with one user on fast hardware) and compound non-linearly (doubling users doesn't just double response time — it can 10x it when you hit a database connection limit or memory threshold). This question ensures the system is tested under realistic and extreme conditions before real users arrive.

**Expected Answer Format:**
A performance testing plan covering: types of performance tests (load, stress, soak, spike), test scenarios, target metrics, tools, environment, cadence, and what to do when tests fail.

**Example Answer:**

> **Performance Test Types:**
>
> | Test Type | Purpose | Load Profile | Duration | Success Criteria |
> |-----------|---------|-------------|----------|-----------------|
> | **Load test** | Verify system handles expected peak load | 200 concurrent users doing realistic actions (from Doc 2 Q5: velocity targets) | 15 minutes | p95 response time < 2s, error rate < 0.1%, CPU < 70% |
> | **Stress test** | Find the breaking point | Ramp from 200 to 1,000 concurrent users over 30 minutes | 30 minutes | Identify at what load response time exceeds 5s or errors exceed 5%. System must degrade gracefully (slow, not crash) |
> | **Soak test** | Detect memory leaks and resource exhaustion | 100 concurrent users (steady load) | 4 hours | No memory growth > 10% over the test duration, no increase in response time, no connection pool exhaustion |
> | **Spike test** | Verify system handles sudden traffic surges | Instant jump from 50 to 500 concurrent users, then back to 50 | 10 minutes | System recovers to normal performance within 2 minutes of spike ending, no errors during spike (degradation acceptable) |
>
> **Test Scenarios (Realistic User Behavior):**
>
> ```javascript
> // k6 test script outline
> export default function() {
>   // Simulate realistic user mix:
>   // 70% of traffic: field agents logging visits (mobile API)
>   // 20% of traffic: managers checking dashboards (web API)
>   // 10% of traffic: search queries
>
>   const actions = [
>     { weight: 0.30, fn: () => createVisitLog() },      // POST /api/visits
>     { weight: 0.20, fn: () => getLeadList() },          // GET /api/leads
>     { weight: 0.20, fn: () => getLeadDetail() },        // GET /api/leads/:id
>     { weight: 0.10, fn: () => searchClients() },        // GET /api/leads?search=...
>     { weight: 0.10, fn: () => getDashboardMetrics() },  // GET /api/reports/dashboard
>     { weight: 0.10, fn: () => syncOfflineData() },      // POST /api/sync
>   ];
>   // ... weighted random selection
> }
> ```
>
> **Target Metrics (from Document 2 Q2 NFRs):**
>
> | Metric | Target (Load Test) | Target (Stress at 2x) | Failure Threshold |
> |--------|-------------------|-----------------------|-------------------|
> | API p50 response time | < 200ms | < 500ms | > 2s |
> | API p95 response time | < 1s | < 3s | > 5s |
> | API p99 response time | < 2s | < 5s | > 10s |
> | Error rate | < 0.1% | < 1% | > 5% |
> | Throughput | ≥ 1,000 req/min | ≥ 2,000 req/min | Decreasing under load |
> | Database connection pool usage | < 60% | < 85% | > 95% |
>
> **When Performance Tests Fail:**
> 1. Test results saved as artifact in CI (including response time distributions and error details)
> 2. Issue created with label `performance` — includes test scenario, actual vs expected metrics, and suspected bottleneck
> 3. Database query analysis (EXPLAIN ANALYZE on slow queries)
> 4. APM trace review (Datadog) to identify hot spots
> 5. Fix and re-test before release
>
> **Cadence:**
> - Load test: before every release (automated in staging pipeline)
> - Stress test: monthly (manual trigger)
> - Soak test: before major releases and quarterly
> - Spike test: before launch and after major infrastructure changes

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q15: How will security testing be integrated (SAST, DAST, dependency scanning)?

**Why This Matters:**
Security testing is not a one-time activity before launch — it's a continuous practice embedded in the development lifecycle. New vulnerabilities are discovered daily in dependencies. Developers introduce injection vulnerabilities through rushed coding. Configuration changes expose unexpected attack surfaces. Security testing must be automated (so it runs every time, not just when someone remembers), layered (different tools catch different types of vulnerabilities), and actionable (findings must be triable, not a 500-page PDF that nobody reads).

**Expected Answer Format:**
A security testing integration plan covering: each type of security test, where it runs in the pipeline, how findings are triaged and remediated, SLAs for fixing vulnerabilities by severity, and the compliance standards being validated against.

**Example Answer:**

> **Security Testing Layers:**
>
> | Layer | Tool | What It Finds | Where It Runs | Block Merge? | Cadence |
> |-------|------|--------------|---------------|-------------|---------|
> | **SAST (Static)** | Semgrep (community + custom rules) | SQL injection, XSS, hardcoded secrets, insecure crypto, path traversal | CI — every PR | Block on High/Critical | Every PR |
> | **Dependency Scanning** | npm audit + Snyk | Known CVEs in npm packages (direct and transitive) | CI — every PR + daily scheduled scan | Block on Critical, Warn on High | Every PR + daily |
> | **Secret Detection** | Gitleaks (pre-commit hook) + TruffleHog (CI) | API keys, passwords, tokens committed to code | Pre-commit (local) + CI | Block | Every commit |
> | **DAST (Dynamic)** | OWASP ZAP (baseline scan) | Runtime vulnerabilities: CORS misconfigurations, missing headers, auth bypass, parameter injection | Staging — after deployment | No (report only) | Weekly + before release |
> | **Container Scanning** | Trivy | CVEs in Docker base images and installed packages | CI — on Docker image build | Block on Critical | Every Docker build |
> | **Infrastructure Scanning** | tfsec (Terraform) | Misconfigurations: public S3 buckets, overly permissive IAM, unencrypted resources | CI — on infrastructure PRs | Block on High/Critical | Every infra PR |
>
> **Vulnerability Triage Process:**
>
> | Severity | Definition | SLA to Fix | Action |
> |----------|-----------|------------|--------|
> | Critical | Exploitable vulnerability with data loss or system compromise risk | 24 hours | Emergency hotfix. Wake up on-call. |
> | High | Exploitable but requires specific conditions or authenticated access | 7 days | Priority fix in current sprint |
> | Medium | Theoretical vulnerability with limited impact or low exploitability | 30 days | Add to backlog, fix in next sprint |
> | Low | Best practice violation, defense-in-depth hardening | 90 days | Fix when touching related code |
>
> **Custom SAST Rules (specific to our codebase):**
> ```yaml
> # Prevent direct database queries without parameterization
> - id: no-raw-sql
>   pattern: pool.query($QUERY, ...)
>   message: "Use parameterized queries only. Never interpolate user input into SQL."
>   severity: ERROR
>
> # Prevent logging PII fields
> - id: no-pii-logging
>   pattern: |
>     console.log(..., $VAR.phone, ...)
>     console.log(..., $VAR.email, ...)
>   message: "Do not log PII fields. Use sanitized log format."
>   severity: WARNING
> ```
>
> **Compliance Validation:**
> - NDPR (Nigeria Data Protection Regulation): data encryption verified, consent handling tested, breach notification flow documented
> - OWASP Top 10 (2021): each category mapped to specific test coverage
> - Annual: external penetration test by third-party security firm (when budget allows, recommended at $5,000–$15,000)

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section D: Release Management & Compliance (Q16–Q20)

*This section governs how changes reach users — the cadence, the communication, the compliance, and the emergency procedures. A great CI/CD pipeline means nothing if releases are poorly communicated, compliance audits fail, or the team has no process for emergency patches. These questions ensure the "last mile" of delivery is as disciplined as the build and test phases.*

---

### Q16: What is the release cadence (continuous, weekly, sprints, milestones)?

**Why This Matters:**
Release cadence shapes the team's rhythm and the users' experience. Continuous deployment (every merged PR goes live) maximizes speed but requires robust automated testing and monitoring. Weekly releases are predictable but can create "big bang" releases with too many changes to debug if something goes wrong. Sprint-based releases align with project management ceremonies but may delay urgent fixes. The right cadence depends on the team's testing confidence, the users' tolerance for change, and the risk profile of the system.

**Expected Answer Format:**
A release cadence specification covering: planned frequency, what triggers a release, who approves, the release process, and how the cadence might evolve over time.

**Example Answer:**

> **Release Cadence: Continuous Delivery with Manual Production Gate**
>
> Every merge to `main` deploys automatically to staging. Production deployment is triggered manually (one-click) after staging verification. In practice, this means 2–5 production deployments per week during active development.
>
> **Why Not Full Continuous Deployment (CD):**
> The team of 5 is building confidence in their test suite and monitoring. Full CD (auto-deploy to production on every merge) is the target state after 3 months of production stability with zero rollbacks. Currently, the manual gate provides a psychological safety net and a natural point to coordinate timing with the business (avoid deploying during peak hours or important presentations).
>
> **Release Process:**
>
> | Step | Who | Action | Duration |
> |------|-----|--------|----------|
> | 1. Code merged to main | Developer | PR merged after CI passes + code review | — |
> | 2. Auto-deploy to staging | CI/CD (automated) | Docker image built, deployed to staging, smoke tests run | ~5 min |
> | 3. Staging verification | Developer | Review smoke test results, quick manual check of changed feature | ~5 min |
> | 4. Request production deploy | Developer | Click "Approve" in GitHub Actions deployment workflow | ~1 min |
> | 5. Production deploy | CI/CD (automated) | Rolling deployment to production, post-deploy smoke tests | ~5 min |
> | 6. Post-deploy verification | Developer | Monitor error rates and response times for 15 minutes | ~15 min |
>
> **Release Windows:**
> - **Preferred:** Monday–Thursday, 10 AM – 4 PM (WAT) — full team available for monitoring
> - **Avoid:** Fridays (nobody wants to debug over the weekend), after 5 PM, during client presentations
> - **Exception:** Critical hotfixes deploy anytime with CTO approval
>
> **Cadence Evolution Plan:**
>
> | Phase | Timeline | Cadence | Gate |
> |-------|----------|---------|------|
> | Launch (Month 1–3) | Current | 2–3 deploys/week, manual gate | Manual approval by developer |
> | Stabilization (Month 4–6) | After 3 months with zero rollbacks | Daily deploys, manual gate | Manual approval by any team member |
> | Mature (Month 7+) | After monitoring and alerting are proven reliable | Continuous deployment (auto on merge) | Automated (smoke tests only) |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q17: How will release notes, changelogs, and user communication be handled?

**Why This Matters:**
Users and stakeholders need to know what changed and why. Without release notes, users discover changes by surprise — and surprises in software are rarely pleasant. Changelogs provide accountability and traceability (essential for audits). Internal communication ensures the support team can answer questions about changes. External communication builds trust and demonstrates progress. This question establishes who writes what, when, and for whom.

**Expected Answer Format:**
A release communication plan covering: changelog format, release note generation (manual vs automated), audience-specific communication, and the content approval process.

**Example Answer:**

> **Communication Layers:**
>
> | Audience | Channel | Content | Frequency | Responsible |
> |----------|---------|---------|-----------|-------------|
> | **Developers** (internal) | CHANGELOG.md in repo | Technical: what changed, migration steps, breaking changes, PRs linked | Every release (automated generation + manual polish) | Developer who deploys |
> | **Support team** | Internal Slack #releases | Plain-language summary of user-facing changes + known issues | Every release with user-facing changes | Product Manager |
> | **Stakeholders** (managers, execs) | Email digest | High-level summary: new features, improvements, metrics impact | Bi-weekly (aligned with sprint reviews) | Product Manager |
> | **End users** (agents, managers) | In-app "What's New" modal + WhatsApp broadcast | User-friendly descriptions of new features with screenshots, no technical jargon | Monthly (bundled changes) or for major features | Product Manager + Designer |
>
> **CHANGELOG.md Format (Keep a Changelog standard):**
> ```markdown
> ## [1.3.0] - 2027-03-15
>
> ### Added
> - Lead duplicate detection: system warns when a phone number matches an existing lead (#142)
> - Export pipeline report to Excel from dashboard (#156)
>
> ### Changed
> - Visit log form now auto-fills GPS location (previously manual) (#148)
> - Dashboard loading time reduced from 4s to 1.2s (#151)
>
> ### Fixed
> - Offline visits not syncing when app is backgrounded on Android 13 (#147)
> - Manager report showing incorrect totals when filtered by date range (#153)
>
> ### Security
> - Updated express-validator to patch CVE-2027-XXXX (#155)
> ```
>
> **Automated Generation:**
> - PR titles follow conventional commits format: `feat:`, `fix:`, `chore:`, `docs:`, `security:`
> - CHANGELOG is auto-generated from merged PR titles using `standard-version` or `release-please`
> - Product Manager reviews and adds context before the release communication goes out
>
> **"What's New" In-App Modal:**
> - Triggered once per user per release (stored in user preferences, doesn't show again after dismissal)
> - Maximum 3 items per release (the most impactful user-facing changes)
> - Each item: 1-line title + 1-sentence description + optional screenshot
> - "Got it" button dismisses permanently

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q18: What compliance and audit requirements affect the release process?

**Why This Matters:**
In regulated industries or jurisdictions with strong data protection laws, the release process isn't just a technical workflow — it's an auditable chain of evidence. Regulators may ask: "Who approved this change? Was it tested? What data does it access? Is the previous version recoverable?" If the answer is "we deploy from a developer's laptop with no logs," the audit fails. This question ensures the release process produces the documentation and traceability that compliance requires, without turning every deployment into a bureaucratic exercise.

**Expected Answer Format:**
A compliance integration plan covering: applicable regulations, what evidence each requires, how the CI/CD pipeline generates that evidence, and how evidence is stored and made accessible for audits.

**Example Answer:**

> **Applicable Regulations and Audit Evidence:**
>
> | Regulation | Requirement | Evidence Generated by Release Process | Storage |
> |-----------|------------|--------------------------------------|---------|
> | **NDPR** (Nigeria Data Protection) | Demonstrate that personal data is processed securely, with consent, and access-controlled | Security scan results per release, access control configuration (IAM), encryption configuration (Terraform), consent flow test results | Archived in S3 with 7-year retention |
> | **SOC 2 Type II** (if pursuing) | Demonstrate change management controls, access controls, monitoring | Git log (who changed what), PR review records (who approved), CI/CD logs (what tests passed), deployment audit trail | GitHub (retained indefinitely) + archived logs in S3 |
> | **ISO 27001** (if pursuing) | Risk assessment for changes, rollback capability, incident response | Risk labels on PRs (high-risk changes flagged), rollback procedure documentation, incident log | Project wiki + S3 |
>
> **Audit Trail — What the Release Process Logs:**
>
> | Event | What's Logged | Where |
> |-------|--------------|-------|
> | Code change | Author, timestamp, diff, PR link, reviewers, approval | GitHub (Git log + PR history) |
> | Tests passed | Test names, pass/fail status, coverage report, timestamp | GitHub Actions logs (retained 90 days) + Codecov |
> | Security scan | Vulnerabilities found, severity, remediation status | Semgrep/Snyk reports (archived per release) |
> | Deployment approval | Who approved, timestamp, version deployed | GitHub Actions (deployment protection rules) |
> | Deployment execution | Version deployed, timestamp, success/failure, health check results | ECS deployment events (CloudTrail) |
> | Rollback | Reason, who initiated, timestamp, version rolled back to | #incidents channel log + CloudTrail |
>
> **Change Risk Classification:**
> PRs are labeled by risk level to satisfy change management requirements:
>
> | Risk Level | Criteria | Additional Gate |
> |-----------|---------|----------------|
> | Low | Documentation, tests, minor UI changes | Standard process (1 reviewer) |
> | Medium | New features, API changes, dependency updates | 2 reviewers, one must be Tech Lead |
> | High | Database migrations, security changes, infrastructure changes | 2 reviewers including CTO, staging verification mandatory, deploy during business hours only |
> | Critical | Changes to auth, encryption, data deletion, payment flow | CTO approval, full regression test suite, deploy with engineer monitoring for 30 minutes |
>
> **Audit Readiness:**
> - All evidence is generated automatically by the pipeline — no manual documentation required for standard releases
> - Quarterly self-audit: review 10 random deployments and verify audit trail is complete
> - Audit report template: pre-built document that pulls data from GitHub, CI/CD, and CloudTrail into a structured compliance report

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q19: How will hotfixes and emergency patches be expedited?

**Why This Matters:**
Normal release processes are designed for normal circumstances. Emergencies require a fast path that still maintains safety. When the system is down, the CEO is calling, and customers are complaining, you need a procedure that's fast (minutes, not hours), safe (doesn't make things worse), and documented (so the post-incident review knows what happened). Without a defined hotfix process, emergencies are handled by whoever is awake, using whatever method they can think of, with no consistency and maximum risk.

**Expected Answer Format:**
A hotfix playbook covering: what constitutes an emergency, who can trigger the hotfix process, the expedited pipeline (what gates are skipped, what gates are mandatory), review and documentation requirements after the fact, and escalation paths.

**Example Answer:**

> **What Qualifies as a Hotfix:**
>
> | Qualifies | Does NOT Qualify |
> |-----------|-----------------|
> | System is down or inaccessible for all users | Feature request marked "urgent" by stakeholder |
> | Active data corruption or data loss | Performance degradation that doesn't affect functionality |
> | Security vulnerability being actively exploited | Known bug with a workaround |
> | Regulatory compliance violation discovered (e.g., PII exposure) | UI bug that looks bad but doesn't block users |
> | Payment processing broken (if applicable) | Slow query on a rarely-used report |
>
> **Hotfix Process:**
>
> | Step | Normal Release | Hotfix | Notes |
> |------|---------------|--------|-------|
> | Branch | From `main` | From `main` (hotfix branch: `hotfix/description`) | Same |
> | Code review | 1+ reviewer, < 24h SLA | 1 reviewer (any team member), < 30 min SLA | Reviewer can be the CTO or any available engineer |
> | Unit + integration tests | Required (CI) | Required (CI) — **never skip** | Tests catch regressions, even in emergencies |
> | E2E tests | Required (CI) | Skipped — too slow for emergency | Replaced by manual verification |
> | Security scan | Required | Skipped (unless the hotfix IS a security fix) | Remediate in follow-up if needed |
> | Staging deployment | Required | Optional — deploy directly to production if staging adds > 10 min delay | Tech Lead / CTO judgment call |
> | Production approval | Any developer | Tech Lead or CTO | Higher authority for expedited process |
> | Post-deploy monitoring | 15 minutes | 30 minutes (elevated monitoring) | Longer monitoring because less testing was done |
> | Post-deploy documentation | Standard | Required within 24 hours: post-incident report, skipped gates documented | Compliance requires documentation even for emergency changes |
>
> **Hotfix Communication Template:**
> ```
> 🚨 HOTFIX DEPLOYED
> Version: [version]
> Issue: [1-sentence description]
> Impact: [who was affected, for how long]
> Fix: [1-sentence description of the fix]
> Gates skipped: [list of skipped gates]
> Follow-up: [what needs to happen next — full test suite, post-incident review]
> ```
>
> **Post-Hotfix Requirements (within 24 hours):**
> - [ ] Full test suite passes with the hotfix applied
> - [ ] Any skipped security scans are run retroactively
> - [ ] Post-incident review completed: root cause, timeline, what was missed, prevention plan
> - [ ] If the hotfix was a workaround: issue created for proper fix, prioritized in next sprint
> - [ ] CHANGELOG updated with hotfix entry

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q20: What post-deployment verification steps confirm a successful release?

**Why This Matters:**
"Deployment succeeded" and "the system works" are not the same thing. A container can start, pass a health check, and still serve broken responses to users — because the health check only verifies the process is running, not that it's producing correct results. Post-deployment verification closes this gap by actively testing the deployed system from a user's perspective. It's the final confirmation that the release is truly successful — not just technically deployed, but functionally correct and performing as expected.

**Expected Answer Format:**
A post-deployment verification plan covering: automated checks (what runs automatically), manual checks (what a human verifies), timing (how long to monitor), success criteria, and the decision point (when is the release confirmed as stable).

**Example Answer:**

> **Post-Deployment Verification Sequence:**
>
> | Order | Check | Type | Duration | Pass Criteria | Fail Action |
> |-------|-------|------|----------|--------------|-------------|
> | 1 | Health endpoint | Automated | Immediate | `GET /health` returns 200 with version matching deployed version | Auto-rollback (ECS handles this) |
> | 2 | Smoke tests (top 5 journeys) | Automated (Playwright) | 3 min | All 5 journeys complete successfully | Alert team, assess for rollback |
> | 3 | API contract validation | Automated | 1 min | OpenAPI schema validation passes, all documented endpoints respond | Alert team, investigate |
> | 4 | Error rate comparison | Automated (Datadog) | 15 min | Error rate within 1.5x pre-deployment baseline | Alert team, assess for rollback |
> | 5 | Response time comparison | Automated (Datadog) | 15 min | p95 response time within 2x pre-deployment baseline | Alert team, investigate (may be cache warming) |
> | 6 | Feature verification | Manual | 10 min | Deploy engineer manually tests the specific feature that changed | If fails: rollback |
> | 7 | User-facing spot check | Manual | 5 min | Quick check of key pages/flows on mobile and web | If significant issues: rollback |
>
> **Monitoring Window:**
>
> | Period | Monitoring Level | Who | Action |
> |--------|-----------------|-----|--------|
> | 0–15 min | Active (watching dashboards) | Deploy engineer | Respond immediately to anomalies |
> | 15 min – 1 hour | Attentive (checking periodically) | Deploy engineer | Respond to alerts |
> | 1–24 hours | Normal (rely on alerting) | On-call engineer | Respond to alerts via normal process |
> | 24+ hours | Normal | Standard monitoring | Release confirmed stable |
>
> **Release Stability Criteria:**
> A release is considered stable when ALL of the following are true for 24 hours:
> - [ ] Error rate ≤ pre-deployment baseline + 0.5%
> - [ ] No spike in support tickets related to the release
> - [ ] No data inconsistencies detected
> - [ ] Response times within acceptable range (Doc 2 Q2 targets)
> - [ ] Offline sync functioning normally (no increase in sync failures)
>
> **Verification Dashboard:**
> A dedicated post-deployment dashboard shows:
> - Current vs previous version comparison (response times, error rates, throughput)
> - Deployment timeline overlay on all metrics
> - Active user count comparison (are users dropping off?)
> - Recent error log entries (filtered to last 30 minutes)
>
> **Historical Record:**
> Each release's verification results are logged:
> ```json
> {
>   "version": "1.3.0",
>   "deployed_at": "2027-03-15T14:30:00Z",
>   "deployed_by": "developer@company.com",
>   "smoke_tests": "PASSED",
>   "error_rate_15min": "0.08%",
>   "p95_response_15min": "420ms",
>   "confirmed_stable_at": "2027-03-16T14:30:00Z",
>   "issues_detected": "none"
> }
> ```

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
| A: Testing Strategy & Standards | __ | __ | __ | __ | __ | __/15 |
| B: Automation & CI/CD Pipeline | __ | __ | __ | __ | __ | __/15 |
| C: Environments & Data Management | __ | __ | __ | __ | __ | __/15 |
| D: Release Management & Compliance | __ | __ | __ | __ | __ | __/15 |
| **TOTAL** | | | | | | **__/60** |

### Readiness Thresholds

| Score Range | Readiness Level | Recommended Action |
|-------------|----------------|--------------------|
| **48–60** | 🟢 **Ready to Proceed** | Move to Document 5 (Operations, Maintenance & Growth) |
| **36–47** | 🟡 **Conditionally Ready** | Address gaps in any question scored 0 or 1 before proceeding |
| **24–35** | 🟠 **Significant Gaps** | Schedule follow-up sessions with QA and DevOps specialists |
| **0–23** | 🔴 **Not Ready** | Fundamental quality infrastructure missing — invest in CI/CD and testing before building features |

---

## Decision Matrix

*Based on the answers gathered above, crystallize the key QA and deployment decisions:*

| Decision | Option A | Option B | Option C | Recommendation | Rationale |
|----------|----------|----------|----------|---------------|-----------|
| Testing Framework | Jest | Vitest | Mocha + Chai | | |
| E2E Testing Tool | Playwright | Cypress | Selenium | | |
| CI/CD Platform | GitHub Actions | GitLab CI | CircleCI | | |
| Deployment Strategy | Rolling (ECS) | Blue-Green | Canary | | |
| Environment Count | 2 (Staging + Prod) | 3 (Dev + Staging + Prod) | 4 (Dev + QA + Staging + Prod) | | |
| Performance Testing Tool | k6 | JMeter | Locust | | |
| Security Scanning | Semgrep + OWASP ZAP | SonarQube + Burp Suite | Snyk + custom scripts | | |

---

## Readiness Checklist

*All items must be checked before proceeding to Document 5: Operations, Maintenance & Growth.*

- [ ] Testing strategy (pyramid/trophy) is defined with target distribution (Q1)
- [ ] Quality gates are configured and enforced in CI/CD (Q2)
- [ ] All required test types are identified with ownership and tooling (Q3)
- [ ] Coverage thresholds are defined with enforcement mechanism (Q4)
- [ ] Testing toolchain is selected with team proficiency gaps addressed (Q5)
- [ ] CI/CD pipeline is designed with target build time < 15 minutes (Q6)
- [ ] Test suite is organized with naming conventions and maintenance practices (Q7)
- [ ] Deployment strategy is selected with rollback capability (Q8)
- [ ] Database migration safety rules are defined (Q9)
- [ ] Rollback procedure is documented and tested (Q10)
- [ ] All environments are provisioned and documented (Q11)
- [ ] Test data strategy covers factories, sanitization, and edge cases (Q12)
- [ ] Infrastructure as Code is implemented with parity checks (Q13)
- [ ] Performance testing plan covers load, stress, and soak scenarios (Q14)
- [ ] Security testing is integrated into CI/CD with severity-based SLAs (Q15)
- [ ] Release cadence is defined with approval process (Q16)
- [ ] Release communication plan covers all audiences (Q17)
- [ ] Compliance evidence is generated automatically by the pipeline (Q18)
- [ ] Hotfix process is documented with clear qualification criteria (Q19)
- [ ] Post-deployment verification is automated with stability criteria (Q20)
- [ ] No individual question scored 0
- [ ] CI/CD pipeline has been tested end-to-end at least once

---

## Appendix

### A. Testing Tool Evaluation Matrix

| Tool | Category | Evaluated By | Date | Verdict | Notes |
|------|----------|-------------|------|---------|-------|
| | | | | | |
| | | | | | |
| | | | | | |

### B. Pipeline Configuration Reference

| Pipeline | Config File | Platform | Last Updated |
|----------|------------|----------|-------------|
| CI (PR validation) | `.github/workflows/ci.yml` | GitHub Actions | |
| CD (Staging deploy) | `.github/workflows/deploy-staging.yml` | GitHub Actions | |
| CD (Production deploy) | `.github/workflows/deploy-production.yml` | GitHub Actions | |
| Nightly (E2E + performance) | `.github/workflows/nightly.yml` | GitHub Actions | |
| Security (weekly scan) | `.github/workflows/security.yml` | GitHub Actions | |

### C. Incident and Rollback Log

| Date | Version | Issue | Rollback? | Detection Time | Resolution Time | Root Cause |
|------|---------|-------|-----------|---------------|----------------|-----------|
| | | | | | | |
| | | | | | | |
| | | | | | | |

### D. Performance Test Baseline Results

| Test | Date | Concurrent Users | p95 Response Time | Error Rate | Throughput | Notes |
|------|------|-----------------|-------------------|------------|-----------|-------|
| | | | | | | |
| | | | | | | |
| | | | | | | |

---

*This document is part of the Universal Execution Framework. Proceed to **Document 5: Operations, Maintenance & Growth** when the Readiness Checklist is complete.*

---

**Document End — Quality Assurance, Testing & Deployment v1.0.0**
