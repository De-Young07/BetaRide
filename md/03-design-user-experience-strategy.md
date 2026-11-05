---
title: "Design & User Experience Strategy"
subtitle: "Master Document 3 of 5 — The Universal Execution Framework"
version: "1.0.0"
date: "October 2026"
author: "System Discovery Team"
status: "Template — Ready for Use"
---

<div style="text-align: center; page-break-after: always; padding-top: 200px;">

# DESIGN & USER EXPERIENCE STRATEGY

## Master Document 3 of 5

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
2. [Section A: User Research & Personas (Q1–Q5)](#section-a-user-research--personas-q1q5)
3. [Section B: Design System & Visual Identity (Q6–Q10)](#section-b-design-system--visual-identity-q6q10)
4. [Section C: Prototyping & Validation (Q11–Q15)](#section-c-prototyping--validation-q11q15)
5. [Section D: Design Governance & Evolution (Q16–Q20)](#section-d-design-governance--evolution-q16q20)
6. [Scoring Summary](#scoring-summary)
7. [Decision Matrix](#decision-matrix)
8. [Readiness Checklist](#readiness-checklist)
9. [Appendix](#appendix)

---

## How to Use This Document

This document is **Document 3 of 5** in the Universal Execution Framework. It focuses on shaping the **user experience** — the FEEL of the system you're building.

### Prerequisites

Before starting this document, ensure that:
- **Document 1: Business Discovery & Strategic Alignment** is complete (stakeholders, users, and success metrics are defined)
- **Document 2: System Architecture & Technical Specification** is complete (technical constraints and capabilities are understood)

Design decisions made here must align with the architectural constraints established in Document 2 and serve the business objectives defined in Document 1.

### Instructions

1. **Involve users early** — This document is not for engineers to fill out in a meeting room. At least 3 questions (Q1, Q2, Q12) require direct input from or observation of real end-users.
2. **Design is iterative** — Unlike the architecture document, answers here will evolve as prototypes are tested and refined. Revisit scoring after each user testing round.
3. **Score each answer** using the 0–3 rubric provided. Questions scored 0 or 1 signal UX risks that will surface as user complaints, support tickets, or abandonment after launch.
4. **Complete the Decision Matrix** at the end to lock down design tool and methodology choices.
5. **Use the Readiness Checklist** to determine if you have enough design clarity to proceed to Document 4 (Quality Assurance, Testing & Deployment).

### Scoring Guide

| Score | Label | Meaning |
|-------|-------|---------|
| 0 | Not Addressed | The question was not answered or is unknown |
| 1 | Partially Addressed | A vague or incomplete answer was given |
| 2 | Fully Addressed | A clear, actionable answer was provided |
| 3 | Exceptional | Answer includes evidence from user research, testing, or industry benchmarks |

### When to Use

- **New product design** — Shape the experience before development begins
- **Redesign/refresh** — Audit the existing experience and plan improvements
- **Feature additions** — Ensure new features fit the existing design language
- **Accessibility audits** — Use relevant sections to identify and fix compliance gaps

---

## Section A: User Research & Personas (Q1–Q5)

*This section ensures the design is built for real people, not imagined ones. Every design decision that follows should trace back to a specific persona, a specific journey, or a specific pain point identified here. Design without research is decoration.*

---

### Q1: Who are the primary, secondary, and tertiary user personas?

**Why This Matters:**
Designing for "everyone" means designing for no one. Personas force the team to prioritize — when the needs of a field agent conflict with the needs of a C-suite executive, who wins? Clear personas with defined priority levels (primary, secondary, tertiary) make that decision before it becomes a debate. Personas also prevent the loudest stakeholder in the room from hijacking the design for their personal preferences instead of the actual users' needs.

**Expected Answer Format:**
2–4 persona profiles, each containing: name, photo description, role, demographics (age range, tech literacy, device), goals (what they need from the system), frustrations (what makes their current experience painful), context of use (where, when, how they'll use the system), and a quote that captures their mindset. Personas should be prioritized as Primary (design for them first), Secondary (accommodate), or Tertiary (don't hinder).

**Example Answer:**

> **Primary Persona: Ngozi — Field Sales Agent**
> - **Demographics:** Female, 26, university graduate, tech literacy 2/5
> - **Device:** Samsung Galaxy A14, Android 13, 4G (intermittent in rural areas)
> - **Goals:** Log client visits quickly, check if a lead is already taken, hit weekly visit targets
> - **Frustrations:** "I hate typing long notes on my phone." "Sometimes I drive 2 hours to a client, and another agent already visited them yesterday." "My manager asks for reports I already sent him."
> - **Context:** Uses the app 10–15 times per day, outdoors (bright sunlight glare), often with one hand while holding a bag. Connectivity drops frequently between client locations. Uses WhatsApp fluently but unfamiliar with enterprise software.
> - **Quote:** *"Just let me tap, tap, done. Don't make me think."*
>
> **Secondary Persona: Tunde — Regional Sales Manager**
> - **Demographics:** Male, 38, MBA, tech literacy 3/5
> - **Device:** iPhone 14, also uses a laptop (HP EliteBook) in office
> - **Goals:** See real-time pipeline for his 25-agent team, identify underperforming agents, forecast monthly revenue, generate weekly reports for HQ
> - **Frustrations:** "I spend 2 days every week compiling reports from agent WhatsApp messages." "I have no idea which leads are hot until an agent tells me." "I can't tell if agents are actually visiting clients or just saying they did."
> - **Context:** Uses the admin dashboard on laptop 2–3 hours per day (morning reviews, end-of-day check). Checks mobile app intermittently for alerts and quick metrics. Tech-savvy enough to learn new tools but impatient with complexity.
> - **Quote:** *"Give me the numbers. Don't make me hunt for them."*
>
> **Tertiary Persona: Chidi — IT Administrator**
> - **Demographics:** Male, 31, computer science degree, tech literacy 5/5
> - **Device:** Desktop (Windows 11), accesses admin panel only
> - **Goals:** Manage user accounts, monitor system health, configure settings, handle support escalations
> - **Frustrations:** "Every new system is another thing to babysit." "If it's not well-documented, I'll spend more time figuring it out than actually managing it."
> - **Context:** Uses the system admin panel a few times per week. Not a daily user. Evaluates the system by how little attention it demands.
> - **Quote:** *"The best system is the one I forget exists because it just works."*

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q2: What are the top 5 user journeys that define the system's value?

**Why This Matters:**
A system with 50 features but 5 broken journeys is a failed system. User journeys map the end-to-end paths that users take to accomplish their goals — from opening the app to getting the outcome they need. Designing and optimizing these journeys first ensures the most important workflows are frictionless. Everything else is secondary. If the "log a visit" journey takes more than 3 taps, the field agents won't use it. If the "check pipeline" journey takes more than 10 seconds to load, the managers will go back to Excel.

**Expected Answer Format:**
5 journey maps, each covering: journey name, persona, trigger (what starts the journey), steps (numbered sequence of actions), happy path outcome, potential failure points, and success metric (how you know the journey works).

**Example Answer:**

> **Journey 1: Log a Client Visit (Persona: Ngozi — Primary)**
>
> | Step | Action | Screen/Component | Notes |
> |------|--------|-----------------|-------|
> | Trigger | Agent arrives at client location | — | GPS auto-detected |
> | 1 | Open app | Home screen | Last-used client shown as suggestion |
> | 2 | Select or search client | Client search (type-ahead) | Search by name, phone, or company. Max 3 characters before results appear |
> | 3 | Tap "Log Visit" | Client detail screen | Single prominent button, no scrolling needed |
> | 4 | Select visit outcome | Quick-select chips | Pre-defined options: "Interested," "Follow-up needed," "Not interested," "Closed deal" |
> | 5 | Add optional note | Text field (collapsed by default) | Voice-to-text button available. Field is optional — not a blocker |
> | 6 | Tap "Save" | Confirmation animation | GPS coordinates and timestamp auto-attached. "Saved ✓" haptic feedback |
>
> **Happy Path Outcome:** Visit logged in under 30 seconds, 4 taps maximum
> **Failure Points:** No connectivity (→ save offline, sync later), GPS unavailable (→ allow manual location tag), client not in system (→ quick-add inline)
> **Success Metric:** 90% of visits logged within 60 seconds of arriving at client location
>
> **Journey 2: Check Team Pipeline (Persona: Tunde — Secondary)**
>
> | Step | Action | Screen/Component | Notes |
> |------|--------|-----------------|-------|
> | Trigger | Manager opens dashboard (Monday morning) | — | Auto-loads current week data |
> | 1 | View pipeline summary | Dashboard home | Kanban-style view: New → Contacted → Qualified → Proposal → Won/Lost |
> | 2 | Filter by agent or region | Filter bar (sticky top) | Multi-select dropdown, remembers last filter |
> | 3 | Drill into a specific lead | Click on lead card | Slide-over panel showing full lead history, visits, notes |
> | 4 | Take action (reassign, flag, comment) | Action buttons in panel | Reassign to dropdown of agents, flag for follow-up, add manager note |
> | 5 | Export weekly report | Export button | Auto-generates PDF/Excel with current filters applied |
>
> **Happy Path Outcome:** Pipeline reviewed and actions taken within 15 minutes
> **Failure Points:** Dashboard slow with large datasets (→ pagination + caching), too many leads to scan visually (→ sorting + priority highlighting)
> **Success Metric:** Manager completes weekly review in < 20 minutes (down from 2 days manually)
>
> **Journey 3: First-Time Agent Onboarding (Persona: Ngozi — Primary)**
> **Journey 4: Resolve Duplicate Lead Conflict (Persona: Tunde — Secondary)**
> **Journey 5: System Configuration Change (Persona: Chidi — Tertiary)**
>
> *(Journeys 3–5 follow the same format — fill in during discovery sessions)*

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q3: What accessibility requirements must be met (WCAG level, assistive tech)?

**Why This Matters:**
Accessibility isn't a nice-to-have — it's a legal requirement in many jurisdictions and an ethical imperative everywhere. More practically, accessibility improvements benefit everyone: high contrast helps users in bright sunlight, large touch targets help users with shaky hands or rough fingers, clear labels help users who are in a hurry. In contexts where users have low tech literacy, many accessibility principles (simple language, predictable navigation, error prevention) are identical to usability principles. Ignoring accessibility locks out users and exposes the organization to legal risk.

**Expected Answer Format:**
An accessibility requirements table specifying: target WCAG conformance level, specific requirements by disability category (visual, motor, cognitive, auditory), assistive technologies to support, and any local or industry-specific accessibility regulations.

**Example Answer:**

> **Target Conformance:** WCAG 2.1 Level AA
>
> | Category | Requirement | Implementation | Priority |
> |----------|------------|----------------|----------|
> | Visual — Low vision | Minimum contrast ratio 4.5:1 for normal text, 3:1 for large text | Color palette validated with contrast checker, all colors tested against both light and dark backgrounds | Must |
> | Visual — Color blindness | Never use color alone to convey information | Pair colors with icons, labels, or patterns (e.g., red error → red + ✕ icon + "Error" text) | Must |
> | Visual — Screen magnification | UI remains functional at 200% zoom | Responsive layout, no horizontal scrolling at 200%, text reflows properly | Must |
> | Motor — Limited dexterity | Touch targets minimum 44×44 pixels | All buttons, links, and interactive elements meet minimum size. Spacing between targets ≥ 8px | Must |
> | Motor — One-handed use | Critical actions reachable with one thumb | Primary actions in bottom half of screen (mobile), floating action buttons within thumb zone | Should |
> | Cognitive — Low literacy | Simple language, visual cues | Maximum reading level: Grade 8 (Flesch-Kincaid). Icons accompany all labels. Error messages explain what to do, not what went wrong | Must |
> | Cognitive — Attention | Minimize cognitive load | Progressive disclosure (show details on demand), no more than 5 options per screen, clear visual hierarchy | Should |
> | Auditory — Deaf users | No audio-only content | All notifications have visual+haptic equivalents, no reliance on sound for alerts | Must |
>
> **Assistive Technology Support:**
> - Screen readers: TalkBack (Android), VoiceOver (iOS) — tested with both, ARIA labels on all interactive elements
> - Voice control: Basic voice commands for navigation (leverage OS-level voice control, not custom implementation)
> - Note: Full screen reader support for admin dashboard is "Should" priority — admin users are tech-literate and can request accommodations
>
> **Regulatory:** NDPR does not currently mandate accessibility, but the organization's inclusion policy requires WCAG AA compliance for all public-facing digital products.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q4: What devices, platforms, and contexts will users access the system from?

**Why This Matters:**
A beautiful desktop design is worthless if 90% of your users are on a 5.5-inch phone screen in direct sunlight with a 3G connection. Device and context constraints drive every visual and interaction decision — font sizes, button sizes, layout patterns, animation budgets, image optimization, and offline capability. This question maps the real-world conditions under which the system will be used, so the design is tested against reality, not against a designer's 27-inch Retina display.

**Expected Answer Format:**
A device and context matrix listing each user group, their primary device(s), screen size, OS, browser, network conditions, physical context (office, field, transit), and design implications for each.

**Example Answer:**

> **Device Matrix:**
>
> | User Group | Primary Device | Screen Size | OS | Browser/App | Network | Design Implications |
> |-----------|---------------|-------------|-----|-------------|---------|-------------------|
> | Field Agents (200) | Samsung Galaxy A14, Tecno Spark 10 | 5.5"–6.6" | Android 11–14 | Native app (React Native) | 3G/4G, frequently drops to EDGE or offline | Large touch targets, offline-first, minimal data usage, works in sunlight (high contrast) |
> | Field Agents (travel) | Same as above | Same | Same | Same | Completely offline for up to 72 hours | Full offline CRUD, background sync queue, no features that require connectivity |
> | Managers (15) | iPhone 14, Samsung Galaxy S23 | 6.1"–6.7" | iOS 16+, Android 13+ | Native app (quick checks) + Web dashboard (deep work) | 4G/WiFi, generally reliable | Dual interface: mobile for glances, web for analysis. Dashboard optimized for laptop screens |
> | Managers (office) | HP EliteBook, MacBook Air | 13"–15" | Windows 11, macOS | Chrome, Safari | Office WiFi (50 Mbps+) | Full dashboard experience, keyboard shortcuts, dense data tables acceptable |
> | Admins (5) | Desktop/Laptop | 13"–24" | Windows 11 | Chrome | Office WiFi | Admin panel is desktop-only — no mobile optimization needed, complex forms acceptable |
>
> **Context Constraints:**
>
> | Context | Conditions | Design Response |
> |---------|-----------|-----------------|
> | Outdoor field visits (sunny) | Bright sunlight, screen glare | High contrast mode, dark text on light backgrounds, avoid subtle color differences |
> | Moving vehicle | Bumpy, one-handed | Extra-large touch targets (56px minimum), no precision interactions (no drag-and-drop) |
> | Quick check between meetings | 15-second interactions | Key info visible without scrolling, one-tap actions for common tasks |
> | Deep analysis (office) | 30+ minute sessions | Complex data tables, filtering, keyboard navigation, customizable dashboard layouts |
> | Low bandwidth areas | 200 kbps–1 Mbps | Compress all images < 50KB, lazy-load non-critical content, skeleton screens instead of spinners |
>
> **Data Budget:**
> - Mobile app total initial download: < 15 MB APK
> - Average session data usage: < 500 KB (excluding file uploads)
> - Dashboard page load: < 1 MB total (HTML + CSS + JS + API data)

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q5: What existing user behaviors and mental models must the design respect?

**Why This Matters:**
Users don't arrive at your system as blank slates. They bring years of habits, expectations, and workflows from the tools they already use — WhatsApp, Excel, Instagram, their banking app. Fighting these ingrained behaviors is a losing battle. A CRM that uses "swipe left to delete" when users expect "swipe left to archive" (like Gmail) will generate accidental deletions and angry support tickets. This question identifies the existing mental models your design must respect, leverage, or carefully retrain — and helps predict where users will struggle.

**Expected Answer Format:**
A mental model inventory listing each existing tool/behavior the target users rely on, the mental model it creates (how users expect things to work), how the new system aligns with or departs from it, and the retraining strategy if the design must differ.

**Example Answer:**

> | Existing Tool/Behavior | Mental Model It Creates | System Alignment | Retraining Strategy |
> |----------------------|------------------------|-----------------|-------------------|
> | WhatsApp | Conversations are ephemeral, unstructured, real-time | **Depart** — structured data entry, not chat | Use WhatsApp-like UI patterns (chat bubbles for visit timeline), but enforce structured fields. Notifications delivered VIA WhatsApp to leverage existing habit |
> | Phone contact list | Search by name, tap to call | **Align** — client search works exactly like phone contacts, with tap-to-call from client detail | No retraining needed — leverage existing behavior |
> | Excel spreadsheets | Freeform data entry, columns can be anything, manual filtering | **Depart** — structured fields, predefined categories, automated reports | Progressive disclosure: allow free-text notes alongside structured fields. Don't force-fit users into rigid forms |
> | Instagram/TikTok | Scroll to consume, double-tap to react, swipe between views | **Leverage** — feed-style visit history, swipe between clients, tap to expand details | Use familiar gesture vocabulary for navigation. Avoid desktop-style menus and dropdowns on mobile |
> | Banking app (Kuda, OPay) | Transactions show amount + date + status, pull-to-refresh | **Align** — visit logs show outcome + date + status in same format, pull-to-refresh syncs data | Direct mapping — users already understand transaction-style logs |
> | Paper notebook | Linear chronological notes, flip through pages | **Partially align** — visit timeline is chronological (like notebook pages), but with search and filters the notebook doesn't have | Position the digital version as "your notebook that never gets lost and you can search" |
>
> **Key Design Principle:** Don't make users learn "how our system works." Make the system work "how users already think."
>
> **Highest Retraining Risk:** Moving from freeform WhatsApp messages to structured data entry. Mitigation: minimize required fields (3 maximum per visit log), offer voice-to-text for notes, make the structured data feel like a natural extension of what they already do — not a replacement.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section B: Design System & Visual Identity (Q6–Q10)

*This section builds the visual and interaction vocabulary of the system — the reusable building blocks that ensure every screen, every component, and every interaction feels like it belongs to the same product. A design system isn't just about making things pretty — it's about consistency, efficiency, and reducing decision fatigue for both designers and developers.*

---

### Q6: What brand guidelines, color palettes, and typography rules must be followed?

**Why This Matters:**
Inconsistent visual design erodes trust. If the login screen uses one shade of blue and the dashboard uses another, if buttons are rounded on one page and square on another, users subconsciously perceive the product as unfinished and unreliable. Brand guidelines ensure every screen tells the same visual story. For systems without existing brand guidelines, this question forces the creation of a visual identity from scratch — a decision that should be intentional, not accidental (one developer picking blue because they like blue).

**Expected Answer Format:**
A visual identity specification covering: color palette (primary, secondary, accent, neutral, semantic colors with hex codes), typography (font families, sizes, weights, line heights for each text role), brand assets (logo usage rules, iconography style), and any existing brand guidelines that must be followed.

**Example Answer:**

> **Color Palette:**
>
> | Role | Color | Hex | Usage |
> |------|-------|-----|-------|
> | Primary | Deep Teal | `#0D7377` | Primary buttons, active states, headers, links |
> | Primary Light | Light Teal | `#14A3A8` | Hover states, secondary actions |
> | Primary Dark | Dark Teal | `#095B5E` | Pressed states, selected items |
> | Secondary | Warm Orange | `#E8742A` | Call-to-action highlights, badges, notifications |
> | Success | Forest Green | `#2D8B41` | Positive states, completed actions, "won deal" |
> | Warning | Amber | `#D4950A` | Caution states, approaching limits, "follow-up needed" |
> | Error | Crimson | `#C93B3B` | Error states, destructive actions, "lost deal" |
> | Neutral 900 | Near Black | `#1A1D23` | Primary text |
> | Neutral 600 | Dark Grey | `#5C6370` | Secondary text, labels |
> | Neutral 300 | Light Grey | `#C8CDD3` | Borders, dividers |
> | Neutral 100 | Off White | `#F4F5F7` | Backgrounds, cards |
> | White | Pure White | `#FFFFFF` | Card backgrounds, input fields |
>
> **Typography:**
>
> | Role | Font | Size | Weight | Line Height | Usage |
> |------|------|------|--------|------------|-------|
> | Display | Inter | 28px / 1.75rem | 700 (Bold) | 1.2 | Page titles, hero text |
> | Heading 1 | Inter | 22px / 1.375rem | 600 (SemiBold) | 1.3 | Section headings |
> | Heading 2 | Inter | 18px / 1.125rem | 600 (SemiBold) | 1.3 | Card titles, subsections |
> | Body | Inter | 16px / 1rem | 400 (Regular) | 1.5 | Paragraphs, descriptions |
> | Body Small | Inter | 14px / 0.875rem | 400 (Regular) | 1.5 | Secondary info, captions, table cells |
> | Caption | Inter | 12px / 0.75rem | 400 (Regular) | 1.4 | Timestamps, metadata, fine print |
> | Button | Inter | 16px / 1rem | 500 (Medium) | 1.0 | Button labels |
> | Input | Inter | 16px / 1rem | 400 (Regular) | 1.5 | Form inputs (16px minimum to prevent iOS zoom) |
>
> **Brand Assets:**
> - Logo: Minimum size 32px height, clear space equal to logo height on all sides
> - Icons: Phosphor Icons (regular weight) — consistent with Inter's clean aesthetic
> - Illustration style: Flat, geometric, using brand palette — no stock photography for UI illustrations
>
> **Existing Guidelines:** Client has no formal brand guidelines — the above was created based on competitor analysis and the "trustworthy but modern" positioning established in Document 1.

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q7: What design system will be used (existing, new, or framework-based)?

**Why This Matters:**
A design system is a library of reusable components, patterns, and guidelines that ensures consistency and accelerates development. Building every component from scratch for every screen is wasteful and inconsistent. Using an off-the-shelf system (Material UI, Ant Design) is fast but may not match the brand. Building a custom system is flexible but expensive. This question forces a pragmatic decision — what level of customization is justified given the team size, timeline, and brand requirements?

**Expected Answer Format:**
A design system strategy specifying: whether the system is custom, framework-based, or hybrid; the component library that will be used or built; the documentation approach; and how the design system connects design tools to code.

**Example Answer:**

> **Strategy: Framework-Based with Custom Theme**
>
> Base the design system on **React Native Paper** (mobile) and **Radix UI + custom styling** (web admin), both customized to match the brand identity defined in Q6.
>
> **Rationale:**
>
> | Approach | Pros | Cons | Verdict |
> |----------|------|------|---------|
> | Fully custom | Perfect brand match, no framework constraints | 3–4 weeks to build, maintenance burden, likely inconsistencies | ❌ Too expensive for team of 5 |
> | Material UI / Ant Design | Fast, well-documented, accessible out of the box | Looks generic ("yet another Material app"), fighting the framework for brand customization | ❌ Brand matters in crowded market |
> | Framework + custom theme | Fast foundation (1 week), brand-aligned through theming, accessible components for free | Some constraints from the framework, need to override styles in places | ✅ Best balance |
>
> **Component Inventory (Phase 1):**
>
> | Component | Mobile (React Native Paper) | Web (Radix UI) | Custom Build |
> |-----------|---------------------------|----------------|-------------|
> | Buttons (primary, secondary, ghost) | Themed | Themed | — |
> | Text inputs (text, search, phone) | Themed | Themed | — |
> | Cards (lead card, visit card) | — | — | ✅ Custom |
> | Pipeline kanban board | — | — | ✅ Custom |
> | Client search with type-ahead | — | — | ✅ Custom |
> | Quick-select chips (visit outcome) | Themed | Themed | — |
> | Data tables (sortable, filterable) | N/A (mobile doesn't use tables) | Themed | — |
> | Charts (pipeline, performance) | — | — | ✅ Recharts with brand colors |
> | Navigation (bottom tab, sidebar) | Themed | Themed | — |
> | Modals and dialogs | Themed | Themed | — |
>
> **Design-to-Code Bridge:**
> - Design files: Figma (one source of truth)
> - Token export: Figma → Style Dictionary → CSS variables / React Native theme object
> - Component documentation: Storybook (web) — each component documented with props, variants, and usage guidelines

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q8: What is the information architecture — how is content organized and navigated?

**Why This Matters:**
Information architecture (IA) is the skeleton of the user experience. It determines where things live, how users find them, and how they move between sections. A poorly organized IA means users can't find features they need, duplicate work because they didn't know a feature existed, and require constant training because navigation isn't intuitive. Good IA is invisible — users find what they need without thinking about the structure. Bad IA is a daily frustration that accumulates into system rejection.

**Expected Answer Format:**
A navigation structure map showing the top-level sections, sub-pages, and the navigational paths between them — for each platform (mobile and web). Include the navigation pattern used (tab bar, sidebar, hamburger) and the rationale for the hierarchy.

**Example Answer:**

> **Mobile App Navigation (Bottom Tab Bar — 4 tabs max for thumb reach):**
>
> ```
> ┌────────────────────────────────────────────┐
> │ [Home]    [Clients]    [Activity]    [Me]  │
> └────────────────────────────────────────────┘
>
> Home
> ├── Today's schedule (visits due)
> ├── Quick actions (Log Visit, Add Lead)
> ├── Recent activity feed
> └── Sync status indicator
>
> Clients
> ├── Search / filter bar
> ├── Client list (alphabetical, filterable by status)
> └── Client detail
>     ├── Contact info + map location
>     ├── Visit timeline
>     ├── Notes
>     └── Actions (Call, WhatsApp, Log Visit)
>
> Activity
> ├── My visits this week (calendar view)
> ├── My pipeline (personal kanban)
> └── Notifications
>
> Me
> ├── My profile
> ├── My stats (visits, conversions)
> ├── Settings
> └── Help / Support
> ```
>
> **Web Admin Dashboard Navigation (Left Sidebar — collapsible):**
>
> ```
> ┌──────────┬──────────────────────────────────┐
> │ 📊 Dash  │                                  │
> │ 👥 Leads │    [Main Content Area]            │
> │ 📍 Visits│                                  │
> │ 📈 Reports│                                 │
> │ 👤 Team  │                                  │
> │ ⚙️ Admin │                                  │
> └──────────┴──────────────────────────────────┘
>
> Dashboard → Pipeline overview, KPIs, alerts
> Leads → List view, kanban view, lead detail, bulk actions
> Visits → Map view, list view, visit detail
> Reports → Pipeline reports, agent performance, export center
> Team → Agent list, performance comparison, territory assignments
> Admin → User management, system config, audit log
> ```
>
> **Navigation Principles:**
> 1. **Flat over deep** — No more than 2 levels of navigation depth on mobile
> 2. **Task-first** — Most common actions (Log Visit) always one tap away
> 3. **Context-preserving** — Drilling into a lead and coming back retains list position and filters
> 4. **Progressive disclosure** — Admin features hidden behind role-based access, never shown to agents

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q9: What micro-interactions and animations will enhance the experience?

**Why This Matters:**
Micro-interactions are the difference between a system that feels alive and one that feels dead. A button that bounces when tapped, a card that slides away when dismissed, a progress bar that fills as data syncs — these small details communicate system state, provide feedback, and create an emotional connection. But animation is a scalpel, not a sledgehammer: too much feels like a children's toy, too slow feels like it's wasting time, too clever confuses users who just want to get their job done. This question ensures animations serve a purpose (feedback, orientation, delight) and don't degrade performance on low-end devices.

**Expected Answer Format:**
A micro-interaction inventory listing each interaction, its trigger, the animation/feedback, its purpose, duration, and performance consideration. Categorized by type: feedback, state transition, orientation, delight.

**Example Answer:**

> **Feedback Interactions (Confirm user actions):**
>
> | Trigger | Animation/Feedback | Purpose | Duration | Performance |
> |---------|-------------------|---------|----------|-------------|
> | Visit saved successfully | ✓ checkmark morphs from button, light haptic vibration | Confirm action completed without needing a separate screen | 400ms | Native animation, no GPU impact |
> | Pull-to-refresh | Elastic overscroll + custom refresh spinner using brand icon | Show data is updating, match platform convention | Until load completes | Standard platform pattern |
> | Form validation error | Shake animation on invalid field + red border fade-in | Draw attention to the error without modal interruption | 300ms | CSS-only, performant |
> | Offline data queued | Subtle cloud icon with dotted outline, "Saved offline" toast | Reassure user their data isn't lost | Toast: 2 seconds | Text-only toast, minimal |
>
> **State Transition Interactions (Orient users during navigation):**
>
> | Trigger | Animation/Feedback | Purpose | Duration | Performance |
> |---------|-------------------|---------|----------|-------------|
> | Navigate to client detail | Shared element transition (client card expands into detail view) | Maintain spatial context — user knows where they "are" | 250ms | React Native shared element transition — test on Samsung A14 |
> | Tab switch (bottom bar) | Crossfade between tab content, active icon fills with color | Smooth transition, reinforces current location | 200ms | Lightweight opacity animation |
> | Pipeline stage change (drag) | Card lifts with shadow on grab, snaps to new column with spring animation | Make drag-and-drop feel physical and satisfying | 300ms | Web only — canvas rendering for 100+ cards |
> | Loading dashboard data | Skeleton screens (pulsing grey rectangles matching content layout) | Show layout immediately, perceived load time feels shorter than spinner | Until data arrives | CSS animation, no JS needed |
>
> **Delight Interactions (Occasional, non-blocking):**
>
> | Trigger | Animation/Feedback | Purpose | Duration | Performance |
> |---------|-------------------|---------|----------|-------------|
> | Agent hits weekly visit target | Confetti burst + congratulatory message | Positive reinforcement, gamification | 1.5 seconds | Canvas-based, disable on low-end devices (detect via `navigator.hardwareConcurrency < 4`) |
> | First deal closed | Trophy animation on pipeline card | Celebrate milestone, build emotional connection | 1 second | Lottie animation (< 50KB file) |
>
> **Animation Budget:**
> - Maximum animation duration for any interaction: 400ms (except delight, max 1.5s)
> - No animation blocks user input — all interactions are interruptible
> - Animations disabled when: user has "Reduce Motion" OS setting enabled, device is in battery saver mode, or detected hardware is below performance threshold
> - All animations run on compositor thread (transforms and opacity only) — never animate layout properties (width, height, top, left)

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q10: How will the system handle empty states, error states, and edge cases visually?

**Why This Matters:**
Most design work focuses on the "happy path" — what the system looks like when everything works perfectly and data is plentiful. But users spend significant time in states that designers forget: empty dashboards on day one (no data yet), error screens when the network fails, loading states that take longer than expected, and edge cases like a lead with no phone number or a name in a script the designer didn't consider. These "empty" moments are high-anxiety moments for users — they need reassurance, clear guidance, and a path forward. A blank screen with no explanation is a trust-destroying experience.

**Expected Answer Format:**
A state design catalog listing each component/page, its empty state (no data), loading state, error state, and edge cases, with the content/message shown and the action available to the user.

**Example Answer:**

> **State Design Catalog:**
>
> | Component/Page | Empty State | Loading State | Error State | Edge Cases |
> |---------------|------------|--------------|------------|------------|
> | **Client list** | Illustration of a friendly person waving. "No clients yet — add your first client to get started." [+ Add Client] button | Skeleton list (5 shimmering rows matching client card layout) | "Couldn't load clients. Check your connection." [Retry] button. If offline: "You're offline — showing cached clients" with last-synced timestamp | 1,000+ clients: show search bar prominently, disable full-list loading, require search |
> | **Visit timeline (client detail)** | Timeline icon with dotted line. "No visits recorded yet. Your next visit will appear here." | Skeleton cards (3 cards matching visit card layout) | "Couldn't load visits." [Retry] button | Agent deleted but visits remain: show visits with "Former Agent" attribution |
> | **Dashboard pipeline** | Pipeline columns with friendly illustration. "Your pipeline is empty. As agents add leads, they'll appear here." Link to: [Import Leads] or [Add Lead Manually] | Skeleton kanban board (column headers load first, cards shimmer in) | "Dashboard data unavailable." [Retry]. If partial failure: show available columns, grey out unavailable ones with "Data updating..." | Zero deals won in period: show "No closed deals this period" in Won column, not empty column |
> | **Search results** | "No results for '[query]'. Try a different name, phone number, or company." Suggestions: "Did you mean...?" (fuzzy match alternatives) | Type-ahead results appear after 300ms debounce, spinner in search field | "Search unavailable — try again in a moment." [Retry] | Special characters in search: sanitize input, don't crash. Unicode names (Chinese, Arabic): render correctly |
> | **File upload** | Dropzone with dashed border, upload icon. "Drag a file here or tap to browse." Accepted formats listed below | Progress bar inside the dropzone with file name and percentage | "Upload failed. [file name] couldn't be uploaded." [Try Again]. If file too large: "File exceeds 10 MB limit. Compress or choose a smaller file." | Corrupt file: "This file couldn't be processed. Please check the file and try again." No tech jargon. |
> | **Offline mode (global)** | N/A — app always has cached data | N/A | N/A | Banner at top: "You're offline — changes will sync when you reconnect" with pulsing cloud icon. Banner persists but doesn't block content. When reconnected: "Back online — syncing 4 changes..." then "All changes synced ✓" (auto-dismiss after 3 seconds) |
>
> **Design Principles for Non-Happy-Path States:**
> 1. **Never show a blank screen** — every state has content that explains what's happening and what to do next
> 2. **Never show technical errors** — "500 Internal Server Error" → "Something went wrong on our end. We're looking into it."
> 3. **Always provide an action** — empty states have a CTA, error states have a Retry button, loading states have a cancel option (for long operations)
> 4. **Use illustrations sparingly** — one custom illustration per empty state type, not stock clipart
> 5. **Test edge cases with real data** — names that are 50 characters long, phone numbers with country codes, addresses with special characters

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section C: Prototyping & Validation (Q11–Q15)

*This section bridges the gap between design concepts and proven designs. A beautiful prototype that nobody tested with real users is an expensive guess. These questions ensure the design is validated with evidence before development begins — because rewriting Figma screens is free, rewriting code is not.*

---

### Q11: What fidelity of prototypes are needed before development (wireframes, mockups, interactive)?

**Why This Matters:**
Prototype fidelity determines how much design is "good enough" before writing code. Too little fidelity (jumping straight from napkin sketch to code) means developers make design decisions that should have been made by designers. Too much fidelity (pixel-perfect interactive prototypes of every screen) wastes time on design polish that might change after user testing. The right fidelity level depends on the team's design maturity, the project's risk tolerance, and how familiar the problem space is.

**Expected Answer Format:**
A prototyping plan specifying: fidelity levels for each project phase, tools used, what each fidelity level includes and excludes, approval gates (who signs off before moving to the next fidelity), and a rough timeline.

**Example Answer:**

> **Prototyping Phases:**
>
> | Phase | Fidelity Level | What It Includes | What It Excludes | Tool | Duration | Approver |
> |-------|---------------|-----------------|-----------------|------|----------|----------|
> | 1. Wireframes | Low | Layout structure, content hierarchy, navigation flow, annotation of functionality | Color, typography, imagery, animations, real content | Figma (wireframe kit) | 1 week | Product Manager |
> | 2. Mockups | High | Full visual design, brand colors, typography, real or realistic content, all states (empty, loading, error) | Interactions, transitions, animations, responsive breakpoints | Figma | 2 weeks | Product Manager + Business Stakeholder |
> | 3. Interactive Prototype (core flows) | High + Interactive | Clickable prototype of top 5 user journeys (from Q2), transitions, tap targets that respond | Backend logic, real data, edge case flows beyond top 5, admin panel | Figma Prototype | 1 week | Usability test participants (Q12) |
> | 4. Developer Handoff | Final | Annotated designs with specs, assets exported, component inventory, responsive behavior documented | No further design exploration — specs are locked | Figma + Notion spec docs | Ongoing (delivered per sprint) | Tech Lead |
>
> **Fidelity Decision Rationale:**
> - **Why not just wireframes?** The field agents have low tech literacy — they need to see something that looks real to give useful feedback. Abstract wireframes confuse them.
> - **Why not a fully coded prototype?** Team is small (5 developers). Building a throwaway coded prototype is expensive. Figma interactive prototypes provide 80% of the testing value at 20% of the cost.
> - **Admin panel:** Wireframes only — the IT admin (tertiary persona) is tech-literate and can provide feedback on structure without visual polish.
>
> **Approval Gate Rules:**
> - No development begins until Phase 2 (Mockups) is approved for that module
> - Top 5 user journeys must complete Phase 3 (Interactive Prototype) and usability testing (Q12) before development
> - Phase 4 (Handoff) is delivered incrementally — one module at a time, ahead of the sprint that builds it

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q12: How will design decisions be validated with real users (usability testing, A/B)?

**Why This Matters:**
The best designers in the world are still wrong about users 50% of the time. The only way to know if a design works is to put it in front of real users and watch what happens — not ask them what they think (users say one thing and do another), but observe what they actually do. Usability testing before development catches design flaws that would cost 10x more to fix in code. This question ensures validation is a planned activity with real users, real tasks, and measurable outcomes — not a checkbox exercise where three colleagues nod along in a meeting room.

**Expected Answer Format:**
A testing plan covering: testing method(s), participant recruitment strategy, test script structure, success metrics, timeline, and how findings will be incorporated into the design.

**Example Answer:**

> **Testing Methods:**
>
> | Method | When | Participants | What It Tests | Output |
> |--------|------|-------------|---------------|--------|
> | Moderated usability testing (in-person) | After interactive prototype (Phase 3) | 5–8 field agents (Ngozi persona), recruited from actual sales team | Can users complete top 5 journeys? Where do they hesitate, tap wrong, or get confused? | Prioritized list of usability issues with severity ratings |
> | Unmoderated task completion (remote) | After first development sprint | 10–15 agents using real app (beta) | Task completion rates, time on task, error rates in real conditions | Quantitative baseline metrics for iteration |
> | A/B testing (in production) | After launch, for specific design decisions | All users (split 50/50) | Which design variant performs better for specific metrics (e.g., visit log completion time) | Data-driven design decisions with statistical significance |
> | Stakeholder design review | After each design phase | Managers (Tunde persona), 2–3 per session | Does the dashboard answer their questions? Is the data they need accessible? | Feedback on information hierarchy and report usefulness |
>
> **Usability Test Script Structure (30-minute session):**
> 1. **Introduction (3 min):** Explain the purpose, reassure that we're testing the app not them, ask permission to record
> 2. **Warm-up (2 min):** "Tell me about your typical workday and how you currently track client visits"
> 3. **Task 1 (5 min):** "You just arrived at a client's office. Show me how you would log this visit."
> 4. **Task 2 (5 min):** "Your manager asked you to find the lead for 'Adebayo Construction.' Find that client."
> 5. **Task 3 (5 min):** "You want to check how many visits you've made this week. Find that information."
> 6. **Task 4 (5 min):** "A new lead just came in and you need to check if someone has already contacted them."
> 7. **Debrief (5 min):** "What was easy? What was confusing? If you could change one thing, what would it be?"
>
> **Participant Recruitment:**
> - Source: Client's actual sales team (not proxies — real users with real context)
> - Incentive: ₦5,000 airtime voucher per session
> - Selection criteria: Mix of tech-savvy (2/5) and tech-averse (1/5), mix of urban and semi-urban agents
> - Exclusion: Anyone involved in the project (they know too much to represent real users)
>
> **Success Metrics:**
> | Metric | Target | Failure Threshold |
> |--------|--------|-------------------|
> | Task completion rate (unassisted) | ≥ 85% | < 60% triggers redesign |
> | Time to log a visit | < 30 seconds | > 60 seconds triggers redesign |
> | System Usability Scale (SUS) score | ≥ 72 (above average) | < 50 triggers comprehensive review |
> | Error rate per task | < 10% | > 25% triggers redesign of that flow |
>
> **Incorporating Findings:**
> - Issues categorized: Critical (blocks task) → fix before development. Major (causes confusion) → fix in next design iteration. Minor (noticeable but not blocking) → log for future improvement
> - Design changes from testing documented with before/after screenshots and the specific finding that drove the change
> - Re-test critical issues after redesign to confirm the fix worked

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q13: What is the design handoff process between designers and developers?

**Why This Matters:**
The gap between "what the designer intended" and "what the developer built" is where design quality goes to die. A pixel-perfect Figma file is meaningless if the developer interprets spacing by eyeballing, picks approximate colors, and skips states the designer specified. A clear handoff process bridges this gap — it defines what information developers need, in what format, and how questions and discrepancies are resolved. Without it, every sprint includes a mini-conflict between "that's not what I designed" and "the spec didn't say that."

**Expected Answer Format:**
A handoff workflow covering: what the designer delivers (artifacts and format), what the developer expects (specs and assets), how design questions during development are handled, quality checkpoints (design review of implemented screens), and tools used for handoff.

**Example Answer:**

> **Handoff Workflow:**
>
> | Step | Responsibility | Action | Deliverable | Tool |
> |------|---------------|--------|------------|------|
> | 1. Design complete | Designer | Mark Figma frame as "Ready for Dev," move card to "Handoff" column | Figma link with annotation layer visible | Figma |
> | 2. Handoff meeting | Designer + Developer | 15-minute walkthrough per feature: designer explains interactions, states, edge cases | Recorded session + written notes | Zoom/Loom + Notion |
> | 3. Developer inspection | Developer | Inspect Figma for specs: sizes, spacing, colors, font sizes, component structure | Questions documented in Notion | Figma Dev Mode |
> | 4. Build | Developer | Implement using design system components, reference Figma for layout | Working implementation | Code |
> | 5. Design QA | Designer | Compare implementation against Figma on target device(s), log discrepancies | Bug list with screenshots (expected vs actual) | Device + Figma overlay |
> | 6. Iteration | Developer | Fix discrepancies, designer re-reviews | Final approved screen | Code |
>
> **What Designers Deliver Per Feature:**
> - [ ] Figma frame with all states: default, hover (web), pressed, disabled, loading, empty, error
> - [ ] Component variations: all variants and sizes used in this feature
> - [ ] Spacing and layout annotations (auto-layout with consistent spacing tokens)
> - [ ] Color and typography using design system tokens (not hardcoded hex values)
> - [ ] Assets exported: icons (SVG), images (WebP at 1x, 2x, 3x)
> - [ ] Interaction notes: transitions, animations (reference Q9 interaction catalog)
> - [ ] Responsive behavior notes (mobile only / web only / both, breakpoint behavior)
> - [ ] Copy/text finalized (no "Lorem ipsum" — real copy reviewed by stakeholder)
>
> **How Design Questions Are Resolved:**
> - Developer asks in shared Slack channel: #design-dev (response SLA: 4 hours during business hours)
> - If ambiguous: "Match the closest design system component" — never invent a new pattern without designer input
> - If a design decision is needed mid-sprint: designer has a 30-minute daily "office hours" slot
> - If designer is unavailable: developer implements their best interpretation, flags it for design QA

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q14: How will responsive design be handled across breakpoints?

**Why This Matters:**
Responsive design isn't about making things shrink — it's about ensuring the experience is appropriate for each device context. A data table that's perfect on a 15-inch laptop is unusable on a 5.5-inch phone. Rather than shrinking the same layout, the design should adapt: tables become cards, sidebars become bottom sheets, multi-column layouts become single columns. This question ensures the team defines clear breakpoints, assigns design patterns to each, and tests the transitions between them.

**Expected Answer Format:**
A responsive design specification covering: breakpoint definitions, layout strategy per breakpoint, component adaptations (what changes between screen sizes), and testing approach.

**Example Answer:**

> **Breakpoints:**
>
> | Breakpoint | Width Range | Target | Layout Pattern | Primary Input |
> |-----------|------------|--------|---------------|---------------|
> | Mobile (Small) | 320px – 374px | Older/smaller Android devices | Single column, stacked elements | Touch (thumb) |
> | Mobile (Standard) | 375px – 767px | Most smartphones (primary target) | Single column, full-width cards | Touch (thumb) |
> | Tablet | 768px – 1023px | Tablets, small laptops | Two-column (sidebar + content) or cards in grid | Touch + keyboard |
> | Desktop | 1024px – 1439px | Standard laptops | Sidebar navigation + main content + optional right panel | Keyboard + mouse |
> | Desktop (Wide) | 1440px+ | External monitors, wide screens | Sidebar + main content with max-width container (1280px), centered | Keyboard + mouse |
>
> **Component Adaptations:**
>
> | Component | Mobile | Tablet | Desktop |
> |-----------|--------|--------|---------|
> | Navigation | Bottom tab bar (4 items) | Bottom tab bar or sidebar (collapsed) | Left sidebar (expanded with labels) |
> | Data tables | Card list (one record per card, key fields only) | Compact table (5 columns max) | Full table with sorting, filtering, column selection |
> | Pipeline/Kanban | Horizontal scroll, one column visible at a time | 3 columns visible, horizontal scroll | All columns visible (up to 6) |
> | Filters | Bottom sheet with filter options | Inline filter bar (collapsible) | Persistent filter sidebar or inline bar |
> | Forms | Full-screen, one field group per view | Single-column form within card | Two-column form (label left, input right) |
> | Modals/Dialogs | Full-screen overlay | Centered modal (60% width) | Centered modal (40% width, max 600px) |
> | Charts | Simplified (bar chart instead of complex viz) | Standard charts | Full interactive charts with hover details |
>
> **Mobile-First Implementation:**
> - CSS written mobile-first: base styles for smallest screen, `min-width` media queries add complexity for larger screens
> - Touch targets: minimum 44px on all breakpoints (48px on mobile)
> - No content hidden by breakpoint — responsive adaptation, not content removal
> - Exception: Admin-only features are desktop-only by design decision (not responsive limitation)
>
> **Testing:**
> - BrowserStack for real device testing across top 10 device/OS combinations
> - Chrome DevTools responsive mode for quick iteration
> - Physical device testing on Samsung A14 (primary agent device) and iPhone 14 (manager device) before each release

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q15: What is the content strategy — who creates, reviews, and maintains content?

**Why This Matters:**
Design is not just layout and color — a significant portion of the user experience is text. Button labels, error messages, empty state copy, onboarding instructions, help text, and notification messages all shape how users perceive and interact with the system. "Submit" vs "Save Visit" vs "Done" are three different user experiences. Content that's jargon-filled, inconsistent, or written as an afterthought undermines even the most beautiful visual design. This question establishes who writes the words, what voice they write in, and how content stays consistent as the system grows.

**Expected Answer Format:**
A content strategy covering: voice and tone guidelines, content ownership (who writes what), approval process, localization strategy, and content maintenance plan.

**Example Answer:**

> **Voice and Tone:**
>
> | Attribute | Our Voice | Not Our Voice |
> |-----------|-----------|---------------|
> | Personality | Helpful colleague | Robotic assistant |
> | Language level | Plain English, Grade 8 reading level | Technical jargon, corporate speak |
> | Sentence length | Short, 15 words max for UI text | Run-on sentences with multiple clauses |
> | Error messages | "We couldn't save this visit. Check your connection and try again." | "Error 500: Internal Server Error. Contact system administrator." |
> | Success messages | "Visit saved ✓" | "Your visit has been successfully recorded in the system database." |
> | Empty states | "No visits this week yet. Your next visit will show up here." | "No records found matching your query parameters." |
> | Tone modulation | Celebratory for wins ("Great week — 15 visits!"), calm for errors ("Something went wrong. Let's try again."), neutral for routine actions | Same flat tone everywhere |
>
> **Content Ownership:**
>
> | Content Type | Creator | Reviewer | Approval |
> |-------------|---------|----------|----------|
> | UI labels and microcopy | Designer | Product Manager | Designer has final call |
> | Error messages | Developer (first draft) → Designer (polish) | Product Manager | Designer has final call |
> | Onboarding text | Product Manager | Designer + 1 field agent (readability check) | Product Manager |
> | Help documentation | Technical writer (or Product Manager if no writer) | Developer (accuracy) | Product Manager |
> | Notification messages (WhatsApp) | Product Manager | Legal (NDPR consent language) | Product Manager + Legal |
> | Marketing/landing page | External (client's marketing team) | Designer (brand consistency) | Client |
>
> **Localization Strategy:**
> - **Phase 1 (Launch):** English only, but all strings externalized (never hardcoded in components)
> - **Phase 2 (6 months):** Add Pidgin English for agent-facing notifications (based on Document 1 user research — agents read Pidgin faster than formal English)
> - **Phase 3 (12+ months):** French (for West African expansion), Swahili (for East African expansion) — if business grows as projected
> - **Implementation:** i18n framework (react-i18next), translation keys in JSON files, professional translation (not Google Translate)
>
> **Content Maintenance:**
> - All UI text stored in centralized string files (not scattered across components)
> - Content audit every 6 months: review all strings for accuracy, tone consistency, and relevance
> - New feature content goes through the same Creator → Reviewer → Approval pipeline before merge

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

## Section D: Design Governance & Evolution (Q16–Q20)

*This section ensures the design doesn't rot after launch. Without governance, every new developer adds their own button style, every new feature uses a slightly different layout, and within a year the system looks like a collage of 12 different designers' work (none of whom are designers). Design governance is the discipline that keeps the system coherent as it grows.*

---

### Q16: How will design consistency be enforced across teams and features?

**Why This Matters:**
Design consistency doesn't happen by default — it degrades by default. Every new developer, every tight deadline, every "quick fix" introduces a slight deviation from the design system. Blue #0D7377 becomes blue #0D7479. Padding of 16px becomes 15px. The secondary button style gets reinvented because someone forgot the design system had one. Over time, these micro-inconsistencies accumulate into a Frankenstein product. This question establishes the enforcement mechanisms — automated and human — that keep the system visually coherent.

**Expected Answer Format:**
An enforcement strategy covering: automated checks (linting, CI/CD), human review processes (design QA), documentation standards, and escalation for design system violations.

**Example Answer:**

> **Automated Enforcement:**
>
> | Check | Tool | What It Enforces | Where It Runs |
> |-------|------|-----------------|---------------|
> | CSS/style linting | Stylelint with custom rules | No hardcoded colors (must use design tokens), no arbitrary spacing values (must use spacing scale), no non-system fonts | CI/CD — blocks merge if violations found |
> | Component usage audit | Custom ESLint plugin | No raw `<button>` or `<input>` elements — must use design system components | CI/CD — warning (not blocking, to avoid friction) |
> | Accessibility scan | axe-core (automated) | WCAG AA compliance: contrast ratios, ARIA labels, keyboard navigation | CI/CD — blocks merge for A-level violations |
> | Visual regression testing | Chromatic (Storybook integration) | Screenshot comparison of all design system components against baseline | CI/CD — flags visual changes for review |
>
> **Human Review:**
>
> | Checkpoint | Who | What They Check | Frequency |
> |-----------|-----|----------------|-----------|
> | PR review (design-touching changes) | At least 1 developer who's read the design system docs | Correct component usage, spacing, color tokens | Every PR |
> | Design QA sprint | Designer | Side-by-side comparison of Figma vs implementation on target devices | End of every sprint |
> | Design system audit | Designer + Tech Lead | Identify rogue components, inconsistent patterns, opportunities to consolidate | Quarterly |
>
> **Escalation for Violations:**
> 1. CI/CD catches automated violations → developer fixes before merge
> 2. Design QA catches visual inconsistencies → bug filed with "design-debt" label, fixed in current sprint if critical, next sprint otherwise
> 3. Quarterly audit identifies systemic drift → design system workshop (2 hours) to realign team

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q17: What design review and approval process will be used?

**Why This Matters:**
Without a design review process, design quality depends entirely on the individual designer's judgment — which varies by skill, energy level, and how rushed they are. A structured review process catches issues before they become code: inconsistent patterns, accessibility gaps, edge cases the designer forgot, and experiences that conflict with other parts of the system. It also builds shared ownership of design quality across the team, rather than making the designer a single point of design failure.

**Expected Answer Format:**
A design review process covering: review stages (when reviews happen), reviewers (who is involved), review criteria (what they look for), decision process (how disagreements are resolved), and documentation of decisions.

**Example Answer:**

> **Design Review Stages:**
>
> | Stage | When | Reviewers | Duration | Output |
> |-------|------|-----------|----------|--------|
> | Concept review | After wireframes (Phase 1) | Product Manager + 1 Developer | 30 min | Approved direction or pivot feedback |
> | Design review | After high-fidelity mockups (Phase 2) | Product Manager + Tech Lead + 1 Agent (user proxy) | 45 min | Approved designs or change requests |
> | Pre-handoff review | Before dev handoff (Phase 4) | Designer self-check using review checklist | 20 min | Checklist completed, all items addressed |
> | Implementation review | After development, before release | Designer on target device | 30 min per feature | Bug list with expected vs actual screenshots |
>
> **Review Criteria Checklist:**
>
> - [ ] **Consistency:** Uses design system components and tokens (no custom styles without documented justification)
> - [ ] **Completeness:** All states designed (default, loading, empty, error, disabled, hover, focus)
> - [ ] **Accessibility:** Contrast ratios pass, touch targets ≥ 44px, keyboard navigable (web), screen reader labels present
> - [ ] **Content:** No placeholder text, copy reviewed for clarity and tone, no jargon
> - [ ] **Edge cases:** Long names, empty lists, single item lists, maximum data scenarios designed
> - [ ] **Responsive:** Behavior at each breakpoint specified (or explicitly noted as single-platform)
> - [ ] **Performance:** No unnecessarily large images, animations within budget (Q9), lazy loading specified for below-fold content
> - [ ] **User journey:** This design fits seamlessly within the user journey it belongs to (Q2)
>
> **Disagreement Resolution:**
> 1. Designer and reviewer discuss, referencing design principles (Q5 mental models, Q6 brand guidelines)
> 2. If unresolved: Product Manager makes the call based on user impact
> 3. If disagreement is about taste (equally valid approaches): A/B test it with real users (Q12)
> 4. Decision documented in design file with rationale

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q18: How will the design system evolve as the product grows?

**Why This Matters:**
A design system is a living product, not a finished artifact. As the system grows — new features, new user types, new platforms — the design system must grow with it. But uncontrolled growth is as dangerous as no growth: adding components for every edge case creates bloat, inconsistency, and maintenance burden. This question establishes the process for evolving the design system intentionally — adding new patterns when justified, deprecating old ones when appropriate, and keeping the system lean enough to be useful.

**Expected Answer Format:**
A design system evolution plan covering: governance model (who decides what gets added), contribution process (how new components are proposed and reviewed), versioning strategy, deprecation process, and growth triggers.

**Example Answer:**

> **Governance Model:**
>
> | Decision | Authority | Process |
> |----------|----------|---------|
> | Add a new component | Designer + Tech Lead approval | Proposal → review → prototype → document → merge |
> | Modify an existing component | Designer approval | Impact analysis (where is it used?) → update → visual regression test |
> | Deprecate a component | Designer + Tech Lead | Mark as deprecated in docs → migrate all usages → remove after 1 sprint buffer |
> | Change design tokens (colors, spacing) | Designer + Product Manager | Brand impact review → update tokens → cascade through all components → visual regression |
>
> **New Component Proposal Template:**
> 1. **What:** Name and description of the proposed component
> 2. **Why:** Business justification (which feature needs it, why existing components don't work)
> 3. **Where:** List of screens/features that will use it (minimum 3 — if only used once, it's a feature-specific element, not a system component)
> 4. **Variants:** All variants needed (sizes, states, themes)
> 5. **Alternatives:** Why existing components can't be extended to cover this use case
>
> **Versioning Strategy:**
> - Design system follows semantic versioning: `MAJOR.MINOR.PATCH`
> - **PATCH:** Bug fixes, typo corrections, minor visual tweaks (no consumer changes needed)
> - **MINOR:** New components, new variants of existing components (backward compatible)
> - **MAJOR:** Breaking changes to existing components (API changes, removed variants, token restructure) — requires migration guide
> - Current version tracked in design system package and Figma library
>
> **Design System Health Metrics:**
>
> | Metric | Target | Measured How |
> |--------|--------|-------------|
> | Component coverage | > 90% of UI built with system components | Quarterly audit: count custom vs system components in codebase |
> | Adoption rate | 100% of new features use system components | PR review enforcement |
> | Stale component ratio | < 10% of components unused | Usage analytics from codebase search |
> | Time to add new component | < 3 days from approval to documented and coded | Track in project management tool |

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q19: What metrics will measure design effectiveness (task completion, satisfaction, NPS)?

**Why This Matters:**
Design without measurement is art — subjective, debatable, and impossible to improve systematically. Design with measurement is engineering — testable, comparable, and improvable. This question establishes the metrics that will prove whether the design is actually working: not whether it looks good (subjective), but whether users can accomplish their goals efficiently (objective). These metrics also provide ammunition for design decisions — "we should redesign the visit logging flow because task completion dropped from 92% to 78% after the last update" is more persuasive than "I think it could be better."

**Expected Answer Format:**
A design metrics framework covering: behavioral metrics (what users do), attitudinal metrics (how users feel), business impact metrics (what the design achieves for the organization), measurement tools, and reporting cadence.

**Example Answer:**

> **Behavioral Metrics (What Users Do):**
>
> | Metric | Definition | Target | Measurement Tool | Cadence |
> |--------|-----------|--------|-----------------|---------|
> | Task completion rate | % of users who complete a journey without abandoning | ≥ 90% for top 5 journeys | Analytics (PostHog / Mixpanel) | Weekly dashboard |
> | Time on task | Average seconds to complete key actions | Visit log: < 30s. Client search: < 10s. Report generation: < 60s | Analytics + session recording | Monthly review |
> | Error rate | % of interactions that result in an error or undo | < 5% for primary flows | Error logging + analytics | Weekly dashboard |
> | Feature discovery rate | % of users who find and use a feature within their first week | ≥ 70% for core features, ≥ 40% for secondary features | Analytics (feature usage events) | Monthly review |
> | Drop-off rate | % of users who start but don't complete onboarding | < 20% | Funnel analytics | Weekly during launch, monthly after |
>
> **Attitudinal Metrics (How Users Feel):**
>
> | Metric | Definition | Target | Measurement Tool | Cadence |
> |--------|-----------|--------|-----------------|---------|
> | System Usability Scale (SUS) | Standardized 10-question usability questionnaire | ≥ 72 (above average) | In-app survey (quarterly) | Quarterly |
> | Net Promoter Score (NPS) | "How likely are you to recommend this tool to a colleague?" (0–10) | ≥ 30 (good for enterprise tools) | In-app survey (quarterly) | Quarterly |
> | Customer Effort Score (CES) | "How easy was it to [complete task]?" (1–7) | ≥ 5.5 | Post-task survey (triggered after key actions) | Continuous |
> | Support ticket volume (UX-related) | Number of tickets categorized as "how do I..." or "can't find..." | Decreasing trend month-over-month | Support system tags | Monthly |
>
> **Business Impact Metrics (What Design Achieves):**
>
> | Metric | Connection to Design | Target | Source |
> |--------|---------------------|--------|--------|
> | Agent daily visit count | Faster visit logging → more visits per day | +20% within 3 months of launch | System data |
> | Manager reporting time | Dashboard replaces manual report compilation | 2 days/week → 30 min/week | Manager survey |
> | User onboarding time | Intuitive UI → faster proficiency | 3 weeks → 1 week | HR tracking |
> | Support ticket volume | Better UX → fewer "how do I" questions | < 5 UX tickets/week after month 3 | Support system |
>
> **Reporting:**
> - Weekly: automated dashboard with behavioral metrics (task completion, error rates, drop-offs)
> - Monthly: design team review with full metric set + commentary on trends
> - Quarterly: design effectiveness report to stakeholders with SUS, NPS, business impact correlation

**Scoring:** ☐ Not Addressed (0) · ☐ Partially Addressed (1) · ☐ Fully Addressed (2) · ☐ Exceptional (3)

**Notes:**
_______________________________________________________________________________
_______________________________________________________________________________

---

### Q20: How will dark mode, theming, and personalization be supported?

**Why This Matters:**
Theming is no longer a luxury — it's an expectation. Dark mode reduces eye strain for users working at night or in low-light environments, and extends battery life on OLED screens (which describes most modern Android phones). Beyond dark mode, theming allows the system to be white-labeled for different clients or departments, and personalization (custom dashboards, preferred layouts) increases user satisfaction and efficiency. This question ensures theming is designed into the architecture from the start — retrofitting dark mode into a system built with hardcoded colors is painful and bug-prone.

**Expected Answer Format:**
A theming strategy covering: theme types supported (light, dark, custom), implementation approach (CSS variables, theme provider, etc.), personalization options available to users, timeline for theme support, and testing strategy.

**Example Answer:**

> **Theme Support:**
>
> | Theme | Timeline | Scope | Notes |
> |-------|----------|-------|-------|
> | Light mode (default) | Launch | All platforms | Primary theme, fully designed and tested |
> | Dark mode | Launch + 2 months | Mobile app first, admin dashboard second | High demand from field agents using app at night |
> | High contrast mode | Launch + 3 months | All platforms | Accessibility requirement for outdoor use in bright sunlight |
> | Custom brand themes | Phase 2 (if white-labeling is needed) | Admin dashboard only | Allow partner organizations to apply their brand colors |
>
> **Implementation Approach:**
>
> ```
> Design Tokens (Source of Truth)
>     ↓
> Light Theme Token Set      Dark Theme Token Set
> --bg-primary: #FFFFFF      --bg-primary: #1A1D23
> --text-primary: #1A1D23    --text-primary: #E8E9EC
> --border: #C8CDD3          --border: #3A3F47
>     ↓                          ↓
> CSS Variables / React Native Theme Provider
>     ↓
> Components consume tokens (never hardcoded values)
> ```
>
> - **Web:** CSS custom properties (variables) with `prefers-color-scheme` media query for auto-detection
> - **Mobile:** React Native Paper's `ThemeProvider` with dynamic theme switching
> - **All colors, shadows, and borders** reference semantic tokens (e.g., `--color-surface`, `--color-text-primary`), never raw hex values
> - **Images and illustrations:** separate sets for light and dark modes, or use SVGs with `currentColor`
>
> **Personalization Options (for users):**
>
> | Option | Available To | Implementation | Timeline |
> |--------|-------------|----------------|----------|
> | Theme selection (Light / Dark / System default) | All users | Settings page toggle, preference stored in user profile | Launch + 2 months |
> | Dashboard widget arrangement | Managers | Drag-and-drop widget reordering, layout saved per user | Launch + 4 months |
> | Default list view (Cards vs Table) | Managers | Toggle in list header, preference saved per user | Launch |
> | Notification preferences | All users | Settings page: which notifications via WhatsApp vs in-app only | Launch |
>
> **Testing Strategy:**
> - Visual regression tests run against both light and dark mode snapshots
> - Every new component must be reviewed in both themes before merge
> - Quarterly dark mode audit: spot-check 20 screens for contrast issues, unthemed elements, hardcoded colors
> - Test on OLED devices to verify true black backgrounds and battery savings

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
| A: User Research & Personas | __ | __ | __ | __ | __ | __/15 |
| B: Design System & Visual Identity | __ | __ | __ | __ | __ | __/15 |
| C: Prototyping & Validation | __ | __ | __ | __ | __ | __/15 |
| D: Design Governance & Evolution | __ | __ | __ | __ | __ | __/15 |
| **TOTAL** | | | | | | **__/60** |

### Readiness Thresholds

| Score Range | Readiness Level | Recommended Action |
|-------------|----------------|--------------------|
| **48–60** | 🟢 **Ready to Proceed** | Move to Document 4 (Quality Assurance, Testing & Deployment) |
| **36–47** | 🟡 **Conditionally Ready** | Address gaps in any question scored 0 or 1 before proceeding |
| **24–35** | 🟠 **Significant Gaps** | Schedule follow-up design workshops for weak sections |
| **0–23** | 🔴 **Not Ready** | Fundamental UX research gaps — conduct user research (Q1, Q2, Q5) before proceeding |

---

## Decision Matrix

*Based on the answers gathered above, crystallize the key design decisions:*

| Decision | Option A | Option B | Option C | Recommendation | Rationale |
|----------|----------|----------|----------|---------------|-----------|
| Design Tool | Figma | Sketch | Adobe XD | | |
| Component Library | Custom from scratch | React Native Paper + Radix (themed) | Material UI / Ant Design (themed) | | |
| User Testing Method | In-person moderated | Remote unmoderated | A/B testing in production | | |
| Accessibility Level | WCAG 2.1 AA | WCAG 2.1 AAA | Custom (role-based) | | |
| Prototyping Fidelity | Wireframes → Code | Wireframes → Mockup → Code | Wireframes → Mockup → Interactive → Code | | |
| Dark Mode Timeline | Launch | Launch + 2 months | Not planned | | |

---

## Readiness Checklist

*All items must be checked before proceeding to Document 4: Quality Assurance, Testing & Deployment.*

- [ ] User personas are defined with priorities and validated with real users (Q1)
- [ ] Top 5 user journeys are mapped with success metrics (Q2)
- [ ] Accessibility requirements are specified with WCAG conformance level (Q3)
- [ ] Device and context matrix is documented (Q4)
- [ ] Existing user mental models are identified with retraining strategies (Q5)
- [ ] Brand guidelines and color palette are finalized (Q6)
- [ ] Design system strategy is defined (custom, framework, or hybrid) (Q7)
- [ ] Information architecture is mapped for all platforms (Q8)
- [ ] Micro-interactions are inventoried with performance budgets (Q9)
- [ ] Empty, error, and loading states are designed for all key components (Q10)
- [ ] Prototype fidelity levels are defined with approval gates (Q11)
- [ ] Usability testing plan is in place with participant recruitment strategy (Q12)
- [ ] Design handoff process is agreed between design and development teams (Q13)
- [ ] Responsive breakpoints and component adaptations are specified (Q14)
- [ ] Content strategy and voice guidelines are documented (Q15)
- [ ] Design consistency enforcement mechanisms are in place (Q16)
- [ ] Design review process and criteria are agreed (Q17)
- [ ] No individual question scored 0
- [ ] At least one round of usability testing has been conducted (Q12)

---

## Appendix

### A. User Research Artifacts

| Artifact | Type | Date Created | Stored At |
|----------|------|-------------|-----------|
| | | | |
| | | | |
| | | | |

### B. Design Session Log

| Session # | Date | Attendees | Topics Covered | Decisions Made |
|-----------|------|-----------|---------------|----------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

### C. Usability Test Results

| Test # | Date | Participants | Key Findings | Design Changes Made |
|--------|------|-------------|-------------|-------------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

### D. Design Inspiration & References

| Reference | URL/Source | What We Took From It | Applied To |
|-----------|----------|--------------------:|-----------|
| | | | |
| | | | |
| | | | |

---

*This document is part of the Universal Execution Framework. Proceed to **Document 4: Quality Assurance, Testing & Deployment** when the Readiness Checklist is complete.*

---

**Document End — Design & User Experience Strategy v1.0.0**
