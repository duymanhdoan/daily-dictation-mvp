# BRD-v1-daily-dictation-business-requirements.md

| Attribute | Detail |
|-----------|--------|
| **Document** | Business Requirements Document (BRD) |
| **Project** | Daily Dictation — English Listening & Dictation Platform |
| **Version** | 1.0 |
| **Status** | 📝 Draft |
| **Owner** | Duy MD |
| **Created** | 2026-03-17 |
| **Last Updated** | 2026-03-17 |

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **18 business requirements defined** | Must: 8, Should: 6, Could: 4 | HIGH |
| 2 | **4 stakeholders identified** | Sponsor: Product Owner, 3 decision makers | HIGH |
| 3 | **Business impact quantified** | Target: 50,000 MAU and $10,000 MRR within 12 months post-launch | MEDIUM |
| 4 | **Quality score: GOOD** | 46/58 pts, 12/14 checks passed | HIGH |
| 5 | **8 risks identified** | Top risk: Content sourcing legal compliance | MEDIUM |
| 6 | **12 business rules defined** | 4 policy, 3 calculation, 3 authorization, 2 constraint | HIGH |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Business Problem/Opportunity](#2-business-problemopportunity)
3. [Business Objectives (SMART)](#3-business-objectives-smart)
4. [Project Scope](#4-project-scope)
5. [Stakeholder Analysis](#5-stakeholder-analysis)
6. [Current State (As-Is)](#6-current-state-as-is)
7. [Future State (To-Be)](#7-future-state-to-be)
8. [Business Requirements](#8-business-requirements)
9. [Business Rules](#9-business-rules)
10. [Assumptions & Constraints](#10-assumptions--constraints)
11. [Dependencies](#11-dependencies)
12. [Cost-Benefit Analysis](#12-cost-benefit-analysis)
13. [Risk Assessment](#13-risk-assessment)
14. [Approval & Sign-off](#14-approval--sign-off)

---

## 1. Executive Summary

The English language learning market in Vietnam is valued at approximately $2.3 billion (2024) with strong growth driven by globalization, TOEIC/IELTS demand, and increasing smartphone penetration (75%+ among 18-35 year olds). The current market leader for dictation-based learning, dailydictation.com, serves a global audience with a dated UI, no mobile-first experience, limited gamification, and ad-heavy monetization that degrades user experience.

This initiative proposes building an improved, mobile-first English dictation platform targeting Vietnamese learners with modern UX, gamification mechanics (streaks, XP, badges), a freemium subscription model, and curated + original content. The platform aims to achieve 50,000 monthly active users and $10,000 monthly recurring revenue within 12 months of launch, with a 3-6 month development timeline and a small team of 2-5 people.

---

## 2. Business Problem/Opportunity

### Problem Statement

Vietnamese English learners who want to improve listening comprehension through dictation exercises face the following challenges with existing solutions:

| Problem | Evidence | Impact |
|---------|----------|--------|
| **No Vietnamese-localized dictation platform** | dailydictation.com is English-only UI; no Vietnamese instructions or translations | Vietnamese beginners (A1-A2) struggle to understand how to use the platform, causing early drop-off |
| **Outdated, desktop-centric UX** | dailydictation.com uses a traditional web layout not optimized for mobile | 70%+ of Vietnamese internet users access via mobile; poor mobile experience limits engagement |
| **Ad-heavy free model degrades experience** | Google AdSense banners and interstitials on every page | Users report frustration; no option to pay for ad-free experience |
| **No personalized learning path** | All users see the same static exercise list regardless of level | Learners waste time on too-easy or too-hard exercises; no progress-based recommendations |
| **No gamification or retention mechanics** | No streaks, XP, badges, or social competition beyond a basic leaderboard | Low daily retention; users lack motivation to return consistently |

### Opportunity

| Factor | Data Point |
|--------|-----------|
| Vietnam English learning market size | ~$2.3B (2024), growing 12-15% annually |
| Smartphone penetration (18-35) | 75%+ with strong mobile-first behavior |
| TOEIC/IELTS test takers from Vietnam | 300,000+ annually and growing |
| dailydictation.com monthly traffic | ~2M visits/month (SimilarWeb estimate), indicating strong demand for dictation-based learning |
| Willingness to pay for education apps | Vietnamese users increasingly adopt subscription models (Duolingo, ELSA Speak precedent) |

---

## 3. Business Objectives (SMART)

| ID | Objective | Specific | Measurable | Achievable | Relevant | Time-bound |
|----|-----------|----------|------------|------------|----------|------------|
| G-001 | Acquire Vietnamese English learners | Build mobile-first dictation platform with Vietnamese UI | 50,000 MAU | Based on competitor traffic and Vietnam market size | Core business goal | Within 12 months post-launch |
| G-002 | Generate recurring revenue | Implement freemium subscription model | $10,000 MRR | 2% conversion rate × 50K MAU × $10/month | Validated by ELSA Speak, Duolingo Vietnam | Within 12 months post-launch |
| G-003 | Achieve strong user retention | Implement gamification and personalized learning | 30% Day-30 retention rate | Benchmark: Duolingo ~28% D30 | Retention drives LTV and revenue | Within 6 months post-launch |
| G-004 | Build content library | Curate and create dictation exercises | 500+ exercises across 6+ categories | Start curated, add original progressively | Content is core product value | By launch date (Month 3-6) |

---

## 4. Project Scope

### In Scope (Phase 1 — Launch)

| Area | Scope |
|------|-------|
| **Platform** | Mobile-first (native iOS + Android), responsive web as secondary |
| **Content** | Curated public content (YouTube, podcasts) + original recordings; 500+ exercises minimum |
| **Levels** | A1 through C1 (Beginner to Upper-Intermediate), covering TOEIC & IELTS prep |
| **Core Features** | Dictation exercises (listen → type → check → read aloud), progress tracking, streaks, XP, badges |
| **Localization** | Vietnamese UI/instructions, English exercise content |
| **Monetization** | Free tier (limited daily exercises + ads) and Premium tier (unlimited + ad-free + advanced features) |
| **User Accounts** | Registration, login, profile, learning history, achievement tracking |

### Out of Scope (Phase 2+)

| Area | Reason |
|------|--------|
| **AI speech recognition / pronunciation feedback** | Requires significant R&D investment; deferred to Phase 2 |
| **User-generated content (teacher tools)** | Requires content moderation infrastructure; deferred to Phase 2 |
| **Multi-language support beyond Vietnamese** | Focus on Vietnamese market first; expand after product-market fit |
| **Social features (friends, chat, groups)** | Nice-to-have but not essential for MVP; deferred to Phase 2 |
| **Offline mode** | Technical complexity; deferred to Phase 2 |
| **Desktop native apps** | Responsive web covers desktop; native desktop not needed |
| **C2 (Mastery) level content** | Small audience segment; focus on A1-C1 first |

---

## 5. Stakeholder Analysis

### 5.1 Stakeholder Profiles

#### Stakeholder: Product Owner / Founder (Duy MD)

| Attribute | Detail |
|-----------|--------|
| **Role** | Sponsor / Decision Maker |
| **Interest** | Revenue generation, product-market fit, user growth |
| **Influence** | High — final decision authority on all aspects |
| **Impact** | High — owns budget, timeline, and product direction |
| **Communication** | Daily stand-up, direct involvement in all phases |

#### Stakeholder: Development Team Lead

| Attribute | Detail |
|-----------|--------|
| **Role** | Technical Decision Maker |
| **Interest** | Technical feasibility, code quality, architecture scalability |
| **Influence** | High — determines technical approach and timeline estimates |
| **Impact** | High — responsible for building the product |
| **Communication** | Daily stand-up, sprint reviews, technical design reviews |

#### Stakeholder: Content Creator / Curator

| Attribute | Detail |
|-----------|--------|
| **Role** | Content Provider |
| **Interest** | Content quality, pedagogical effectiveness, licensing compliance |
| **Influence** | Medium — content quality directly affects user satisfaction |
| **Impact** | High — responsible for the 500+ exercise library |
| **Communication** | Weekly content review meetings |

#### Stakeholder: End Users (Vietnamese English Learners)

| Attribute | Detail |
|-----------|--------|
| **Role** | End User |
| **Interest** | Effective English listening improvement, engaging experience, affordable pricing |
| **Influence** | Low — indirect influence through usage metrics and feedback |
| **Impact** | High — their adoption determines business success |
| **Communication** | In-app feedback, app store reviews, user interviews |

### 5.2 RACI Matrix

| Activity | Product Owner | Dev Lead | Content Creator | End Users |
|----------|--------------|----------|-----------------|-----------|
| Approve BRD | **A** | C | I | I |
| Define business requirements | **A**, R | C | C | I |
| Approve budget & timeline | **A** | C | I | I |
| Design UX/UI | **A** | R | C | I |
| Build platform | C | **A**, R | I | I |
| Create/curate content | **A** | I | R | I |
| Launch & marketing | **A**, R | C | C | I |
| Validate product-market fit | **A** | C | C | R (via usage) |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## 6. Current State (As-Is)

### Current Market Landscape

The primary competitor, **dailydictation.com**, operates as follows:

| Aspect | Current State |
|--------|---------------|
| **Platform** | Desktop-centric web application; mobile apps (iOS/Android) exist but are secondary |
| **Content Library** | 2,011+ exercises across 13 categories (Short Stories, Conversations, TOEIC, IELTS, TOEFL, TED, News, Medical English, IPA, Numbers, Spelling) |
| **Levels** | A1 through C2, with exercises tagged by CEFR level |
| **Core Mechanic** | Listen to audio → type what you hear → check answer |
| **Monetization** | 100% free, ad-supported (Google AdSense) |
| **UX/Design** | Functional but dated; basic navigation, no gamification, minimal personalization |
| **Localization** | English-only interface |
| **Engagement** | Basic leaderboard, comments section; no streaks, XP, or retention mechanics |
| **Traffic** | ~2M monthly visits (estimated), indicating strong organic demand |

### Pain Points (User Perspective)

1. **Mobile experience is poor** — layout not optimized for small screens, touch interactions clunky
2. **Ad overload** — multiple ad placements per page disrupt learning flow
3. **No learning path** — users must manually browse 13 categories and pick exercises
4. **No progress visualization** — no way to see improvement over time
5. **No motivation mechanics** — nothing to encourage daily return behavior
6. **English-only UI** — barrier for beginners who need native language support

### Workarounds Users Employ Today

- Bookmark individual exercises for later reference
- Use external apps (Anki, Quizlet) to review vocabulary from exercises
- Join Facebook groups for Vietnamese learners to share tips and recommendations on which exercises to do
- Use browser extensions to block ads for a better experience

---

## 7. Future State (To-Be)

### Desired Experience

| Aspect | Future State |
|--------|-------------|
| **Platform** | Mobile-first native apps (iOS + Android) as primary, responsive web as secondary |
| **Content** | 500+ curated + original exercises at launch, growing to 2,000+ within 12 months |
| **Levels** | A1-C1 with automated placement test to assign starting level |
| **Core Mechanic** | Listen → Type → Check → Read Aloud + instant feedback with Vietnamese explanations |
| **Monetization** | Freemium: Free tier (5 exercises/day + ads) → Premium ($4.99-9.99/month: unlimited + ad-free + analytics) |
| **UX/Design** | Modern, mobile-first UI with gamification (streaks, XP, badges, daily goals) |
| **Localization** | Vietnamese UI, instructions, and hint translations |
| **Engagement** | Daily streaks, leaderboards, achievement badges, progress charts, push notifications |
| **Personalization** | Adaptive exercise recommendations based on user level and error patterns |

### Gap Analysis

| Gap | As-Is | To-Be | Effort |
|-----|-------|-------|--------|
| Platform | Desktop-centric web | Mobile-first native apps | High — requires mobile development |
| Localization | English only | Vietnamese UI + hints | Medium — translation and UI adaptation |
| Monetization | Ad-only, no revenue control | Freemium subscription | Medium — payment integration, tier logic |
| Gamification | Basic leaderboard only | Streaks, XP, badges, daily goals | Medium — game mechanics design and implementation |
| Personalization | None | Placement test + adaptive recommendations | Medium — algorithm development |
| Content pipeline | Static, manually added | Curated + original with structured pipeline | Medium — content management system |
| Progress tracking | None | Detailed analytics and progress visualization | Low-Medium — data tracking and visualization |

### Expected Improvements

| Metric | Current (Competitor) | Target | Improvement |
|--------|---------------------|--------|-------------|
| Mobile user satisfaction | Low (desktop-centric) | 4.5+ app store rating | Measured via app store reviews |
| Daily active user retention (D1) | ~20% (estimated) | 50%+ | 2.5× improvement via gamification |
| Day-30 retention | ~8% (estimated) | 30%+ | 3.75× improvement via streaks and personalization |
| Revenue per user | $0 (ad only) | $0.20 ARPU (blended) | New revenue stream |
| Exercise completion rate | Unknown | 70%+ | Measured via analytics |

---

## 8. Business Requirements

| ID | Business Requirement | Priority | Stakeholder | Success Criteria | Linked |
|----|---------------------|----------|-------------|-----------------|--------|
| BR-001 | The platform must provide a mobile-first dictation exercise experience where users listen to English audio and type what they hear | Must Have | Product Owner | 70% of exercise sessions started on mobile; 4.0+ app store rating within 3 months | → PR-___ |
| BR-002 | The platform must support Vietnamese-language UI, instructions, and hint translations for all exercise content | Must Have | Product Owner, End Users | 100% of UI elements available in Vietnamese; Vietnamese user onboarding completion rate ≥ 80% | → PR-___ |
| BR-003 | The platform must offer a freemium subscription model with a free tier (limited daily exercises + ads) and a premium tier (unlimited + ad-free) | Must Have | Product Owner | Premium conversion rate ≥ 2% of MAU within 6 months; $10,000 MRR within 12 months | → PR-___ |
| BR-004 | The platform must launch with a minimum of 500 curated and original dictation exercises across at least 6 content categories covering levels A1-C1 | Must Have | Content Creator | 500+ exercises available at launch; categories include Short Stories, Conversations, TOEIC, IELTS, News, and Pronunciation | → PR-___ |
| BR-005 | The platform must implement gamification mechanics including daily streaks, experience points (XP), achievement badges, and daily exercise goals | Must Have | Product Owner | Day-30 retention rate ≥ 30%; daily active users complete ≥ 3 exercises on average | → PR-___ |
| BR-006 | The platform must provide user registration, authentication, and profile management with learning history and achievement tracking | Must Have | Dev Lead | User registration-to-first-exercise completion rate ≥ 60%; profile load time < 2 seconds | → PR-___ |
| BR-007 | The platform must display user progress through visual dashboards showing accuracy trends, exercises completed, level progression, and time spent | Must Have | Product Owner, End Users | 40% of active users view progress dashboard at least once per week | → PR-___ |
| BR-008 | The platform must support exercise content organized by CEFR levels (A1-C1) with a placement test to determine starting level | Must Have | Content Creator | 90% of users who complete placement test are assigned an appropriate level (validated by subsequent exercise performance) | → PR-___ |
| BR-009 | The platform should provide a 4-step learning flow: Listen → Type → Check → Read Aloud, with immediate feedback showing correct answers and Vietnamese explanations for errors | Should Have | End Users | Exercise completion rate ≥ 70%; users who use "Read Aloud" step show 15% higher retention | → PR-___ |
| BR-010 | The platform should implement push notifications for streak reminders, daily goals, and new content to drive re-engagement | Should Have | Product Owner | Push notification opt-in rate ≥ 60%; users with notifications enabled show 2× higher D7 retention | → PR-___ |
| BR-011 | The platform should provide leaderboards (daily, weekly, all-time) with social comparison features to motivate competitive learners | Should Have | End Users | 25% of active users engage with leaderboard at least once per week | → PR-___ |
| BR-012 | The platform should support TOEIC and IELTS-specific exercise tracks with exam-format practice that mirrors real test conditions | Should Have | End Users | TOEIC/IELTS tracks account for ≥ 30% of total exercise sessions | → PR-___ |
| BR-013 | The platform should provide a content management system enabling the content team to add, categorize, and schedule new exercises without developer involvement | Should Have | Content Creator | Content team can publish a new exercise within 15 minutes; zero developer intervention needed for routine content updates | → PR-___ |
| BR-014 | The platform should support dark mode and accessibility features compliant with WCAG 2.1 AA standards | Should Have | End Users | Accessibility audit score ≥ 90%; dark mode adoption ≥ 30% of users | → PR-___ |
| BR-015 | The platform could provide adaptive exercise recommendations based on user performance patterns and error analysis | Could Have | Product Owner | Users following recommendations show 20% higher accuracy improvement over 30 days compared to self-selected exercises | → PR-___ |
| BR-016 | The platform could offer a referral program where users earn premium days by inviting friends | Could Have | Product Owner | 15% of new user acquisitions come through referrals within 6 months | → PR-___ |
| BR-017 | The platform could support exercise bookmarking and custom practice lists for review sessions | Could Have | End Users | 20% of active users create at least one custom list | → PR-___ |
| BR-018 | The platform could provide weekly/monthly email reports summarizing learning progress and achievements | Could Have | Product Owner | Email open rate ≥ 35%; users receiving reports show 10% higher monthly retention | → PR-___ |

---

## 9. Business Rules

| ID | Rule | Category | Format |
|----|------|----------|--------|
| RULE-001 | Free-tier users are limited to 5 dictation exercises per calendar day (resets at midnight Vietnam time, UTC+7) | Policy | IF user.tier = "free" AND user.daily_exercises_completed ≥ 5 THEN block_exercise AND show_upgrade_prompt |
| RULE-002 | Premium subscription pricing follows tiered structure: Monthly $9.99, Quarterly $7.99/month, Annual $4.99/month | Calculation | premium_price = {monthly: 9.99, quarterly: 7.99 × 3, annual: 4.99 × 12} |
| RULE-003 | Streak count increments by 1 for each calendar day (UTC+7) where user completes at least 1 exercise; resets to 0 if a day is missed | Calculation | IF exercises_today ≥ 1 THEN streak += 1 ELSE streak = 0 |
| RULE-004 | XP is awarded per exercise: 10 XP base + (accuracy% × 0.1) bonus XP; streak multiplier applies (1.5× after 7-day streak, 2× after 30-day streak) | Calculation | xp = (10 + accuracy × 0.1) × streak_multiplier |
| RULE-005 | Users must complete email verification before accessing exercises beyond the onboarding tutorial | Policy | IF user.email_verified = false THEN restrict_to_tutorial_only |
| RULE-006 | Content marked as "curated" from external sources must include source attribution and comply with fair use or licensing terms | Policy | IF content.source = "curated" THEN require_attribution AND require_license_check |
| RULE-007 | Placement test consists of 20 graded exercises across A1-C1; user is assigned the highest level where accuracy ≥ 70% | Policy | IF placement_test.accuracy[level] ≥ 0.70 THEN assign_level = highest_passing_level |
| RULE-008 | Only premium users can access TOEIC and IELTS full practice test simulations; individual TOEIC/IELTS exercises are available to free users | Authorization | IF user.tier = "free" THEN allow_individual_exercises AND block_full_tests |
| RULE-009 | Content creators can publish, edit, and archive exercises; only admins can delete exercises permanently | Authorization | IF role = "content_creator" THEN allow(publish, edit, archive) AND deny(delete); IF role = "admin" THEN allow(all) |
| RULE-010 | Premium users can access exercises on up to 3 devices simultaneously; exceeding this limit logs out the oldest session | Authorization | IF user.active_sessions > 3 THEN terminate_oldest_session |
| RULE-011 | Free-tier advertisements must not interrupt an active exercise session; ads are displayed only between exercises or on non-exercise screens | Constraint | IF user.in_exercise_session = true THEN suppress_ads |
| RULE-012 | Exercise audio playback speed options: 0.5×, 0.75×, 1.0× (default), 1.25×; speed control is available to all users | Constraint | playback_speeds = [0.5, 0.75, 1.0, 1.25]; available_to = "all_tiers" |

---

## 10. Assumptions & Constraints

### Assumptions

| # | Assumption | Risk if Wrong |
|---|-----------|---------------|
| A-001 | Vietnamese English learners aged 18-35 are willing to pay $4.99-9.99/month for a premium dictation app | Revenue model fails; pivot to ad-only or different pricing |
| A-002 | Curated content from YouTube and podcasts can be used under fair use or with minimal licensing cost | Content library at launch is smaller than planned; legal risk |
| A-003 | A team of 2-5 people can deliver MVP within 3-6 months | Launch delay; scope reduction needed |
| A-004 | Mobile app stores (Apple App Store, Google Play) will approve the app without significant issues | Launch delay; platform restrictions |
| A-005 | Gamification mechanics (streaks, XP) will drive retention comparable to Duolingo's results in the Vietnamese market | Retention targets not met; need alternative engagement strategies |

### Constraints

| # | Constraint | Type | Impact |
|---|-----------|------|--------|
| C-001 | Budget is moderate (small team of 2-5 people) | Financial | Limits parallel development; must prioritize features carefully |
| C-002 | Timeline is 3-6 months for full product launch | Schedule | Aggressive for mobile-first + web; may require scope cuts |
| C-003 | Must comply with Vietnam's data privacy regulations and Apple/Google app store policies | Regulatory | Requires legal review of data handling, content policies, and payment processing |
| C-004 | Content must respect copyright and licensing for curated materials | Legal | Requires content review process; may limit available content |
| C-005 | App store commission (15-30%) on in-app subscriptions | Financial | Reduces effective revenue per subscriber; factor into pricing model |

---

## 11. Dependencies

| # | Dependency | Type | Owner | Impact if Unavailable |
|---|-----------|------|-------|-----------------------|
| D-001 | Apple App Store developer account and approval process | External | Product Owner | Cannot launch iOS app; web-only launch as fallback |
| D-002 | Google Play developer account and approval process | External | Product Owner | Cannot launch Android app; web-only launch as fallback |
| D-003 | Payment gateway integration (Stripe, or local Vietnam gateway) | External | Dev Lead | Cannot process subscriptions; launch as free-only initially |
| D-004 | Audio content sourcing and licensing agreements | External | Content Creator | Reduced content library at launch |
| D-005 | Push notification service (Firebase Cloud Messaging / APNs) | External | Dev Lead | Cannot send re-engagement notifications; lower retention |
| D-006 | Cloud hosting infrastructure (AWS, GCP, or equivalent) | External | Dev Lead | Cannot deploy platform |
| D-007 | Vietnamese translation/localization resources | Internal | Content Creator | Launch with partial Vietnamese UI; complete post-launch |

---

## 12. Cost-Benefit Analysis

### Costs (Estimated — 12 Month Period)

| Category | Monthly Cost | Annual Cost | Notes |
|----------|-------------|-------------|-------|
| Development team (2-5 people) | $5,000-15,000 | $60,000-180,000 | Depends on team size and location |
| Cloud infrastructure | $500-2,000 | $6,000-24,000 | Scales with user base |
| Content creation/curation | $500-2,000 | $6,000-24,000 | Audio recording, licensing fees |
| App store fees | $100 | $1,200 | Apple ($99/yr) + Google ($25 one-time) |
| Marketing & user acquisition | $1,000-5,000 | $12,000-60,000 | Social media, SEO, paid ads |
| **Total (Conservative)** | **$7,100** | **$85,200** | Lean team, minimal marketing |
| **Total (Moderate)** | **$24,100** | **$289,200** | Full team, active marketing |

### Benefits (Estimated — 12 Month Post-Launch)

| Benefit | Conservative | Moderate | Optimistic |
|---------|-------------|----------|------------|
| MAU by Month 12 | 20,000 | 50,000 | 100,000 |
| Premium conversion rate | 1.5% | 2.5% | 4% |
| Average subscription price | $6/month | $7/month | $8/month |
| **MRR by Month 12** | **$1,800** | **$8,750** | **$32,000** |
| **ARR by Month 12** | **$21,600** | **$105,000** | **$384,000** |
| Ad revenue (free tier) | $500/month | $2,000/month | $5,000/month |
| **Total Annual Revenue** | **$27,600** | **$129,000** | **$444,000** |

### ROI Analysis

| Scenario | Investment | Revenue (Y1) | ROI | Payback Period |
|----------|-----------|--------------|-----|----------------|
| Conservative | $85,200 | $27,600 | -68% | >24 months |
| Moderate | $289,200 | $129,000 | -55% | ~27 months |
| Optimistic | $289,200 | $444,000 | +54% | ~8 months |

> **Note**: Education apps typically reach profitability in Year 2-3. The moderate scenario projects break-even at ~27 months with accelerating revenue growth as the user base compounds.

### Counter-Metrics (Must Not Degrade)

| Success KPI | Counter-Metric | Threshold |
|-------------|---------------|-----------|
| Premium conversion rate | Free-tier user satisfaction | App store rating must stay ≥ 4.0 |
| Daily exercises completed | Exercise quality/accuracy | Exercise error report rate must stay < 5% |
| Push notification engagement | User annoyance | Notification opt-out rate must stay < 20% |
| Ad revenue (free tier) | User experience | Average session duration must not drop > 10% when ads are shown |

---

## 13. Risk Assessment

### Risk Matrix (Likelihood × Impact: 1-5 scale)

| ID | Risk | Likelihood | Impact | Score | Mitigation |
|----|------|-----------|--------|-------|------------|
| R-001 | Content sourcing violates copyright or licensing terms | 3 | 5 | 15 | Establish content review process; prioritize original content; consult legal counsel on fair use |
| R-002 | Premium conversion rate below 1.5% target | 3 | 4 | 12 | A/B test pricing and paywall placement; offer extended free trials; validate willingness-to-pay early |
| R-003 | App store rejection delays launch | 2 | 5 | 10 | Follow Apple/Google guidelines strictly; submit early for review; have web fallback ready |
| R-004 | Development timeline exceeds 6 months | 3 | 3 | 9 | Ruthless scope prioritization; define MVP cut line; use agile sprints with bi-weekly demos |
| R-005 | Low user retention despite gamification | 3 | 4 | 12 | Run retention experiments early in beta; study Duolingo/ELSA retention mechanics; iterate on notification strategy |
| R-006 | Competitor launches Vietnamese-localized version | 2 | 4 | 8 | Move quickly to establish brand; build community moat; differentiate on UX and content quality |
| R-007 | Payment processing issues in Vietnam market | 2 | 3 | 6 | Support multiple payment methods (credit card, MoMo, ZaloPay); integrate local payment gateway |
| R-008 | Audio content quality inconsistent | 3 | 3 | 9 | Establish content quality standards; implement review workflow; collect user ratings per exercise |

### Risk Heat Map

```
Impact  5 |        R-003    R-001
        4 |   R-006   R-005,R-002
        3 |   R-007   R-008,R-004
        2 |
        1 |
          +---+---+---+---+---+
            1   2   3   4   5  → Likelihood
```

---

## 14. Approval & Sign-off

### Decision Log

| Date | Decision | Decided By | Rationale |
|------|----------|------------|-----------|
| 2026-03-17 | Mobile-first platform approach | Product Owner | 70%+ of target users are mobile-primary; mobile-first maximizes reach |
| 2026-03-17 | Freemium + subscription monetization model | Product Owner | Balances user acquisition (free) with revenue generation (premium); proven in EdTech |
| 2026-03-17 | Vietnamese learners as primary target | Product Owner | Underserved market with strong demand; localization creates competitive moat |
| 2026-03-17 | Curated + original content mix | Product Owner | Enables faster launch with curated content while building original library |
| 2026-03-17 | 3-6 month timeline with 2-5 person team | Product Owner | Balances speed-to-market with product quality |

### Sign-off Table

| Role | Name | Status | Date |
|------|------|--------|------|
| Product Owner / Sponsor | Duy MD | ⬜ Pending | — |
| Development Lead | TBD | ⬜ Pending | — |
| Content Lead | TBD | ⬜ Pending | — |

---

## Traceability Matrix

| BR-ID | Objective | PR-ID | US-ID | TC-ID | Status |
|-------|-----------|-------|-------|-------|--------|
| BR-001 | G-001 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-002 | G-001 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-003 | G-002 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-004 | G-001, G-004 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-005 | G-003 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-006 | G-001 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-007 | G-003 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-008 | G-001, G-004 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-009 | G-003 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-010 | G-003 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-011 | G-003 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-012 | G-001 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-013 | G-004 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-014 | G-001 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-015 | G-003 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-016 | G-001, G-002 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-017 | G-003 | (pending /write-prd) | — | — | ⬜ BRD Complete |
| BR-018 | G-003 | (pending /write-prd) | — | — | ⬜ BRD Complete |

---

## Document References

| Document | Path | Status |
|----------|------|--------|
| BRD (this document) | `BRD-v1-daily-dictation-business-requirements.md` | 📝 Draft |
| PRD | (pending /write-prd) | ⬜ Not started |
| User Stories | (pending /write-user-stories) | ⬜ Not started |
| Test Cases | (pending /write-test-cases) | ⬜ Not started |

---

## Session Summary

1. **What was created**: BRD for Daily Dictation English learning platform — 18 business requirements (8 Must, 6 Should, 4 Could), 12 business rules, 8 risks assessed
2. **Files generated**: `BRD-v1-daily-dictation-business-requirements.md` at `/home/duymd/src/dailydictation/`
3. **Quality score**: GOOD (46/58)
4. **Next steps**: Stakeholder review → `/write-prd BRD-v1-daily-dictation-business-requirements.md` → `/write-user-stories` → `/write-test-cases`
5. **Pipeline command**: `/write-prd BRD-v1-daily-dictation-business-requirements.md` to generate linked PRD
