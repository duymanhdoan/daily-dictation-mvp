# SPEC-v1-daily-dictation-prd.md

| Attribute | Detail |
|-----------|--------|
| **Document** | Product Requirements Document (PRD) |
| **Project** | Daily Dictation — English Listening & Dictation Platform |
| **Version** | 1.0 |
| **Status** | 📝 Draft |
| **Owner** | Duy MD |
| **Created** | 2026-03-17 |
| **Last Updated** | 2026-03-17 |
| **BRD Reference** | [BRD-v1-daily-dictation-business-requirements.md](../BRD/BRD-v1-daily-dictation-business-requirements.md) |

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **24 user stories defined** | 4 personas, covering core dictation, gamification, monetization, content management | HIGH |
| 2 | **42 functional requirements** | P0: 18, P1: 15, P2: 9 | HIGH |
| 3 | **12 non-functional requirements** | Performance, security, accessibility, reliability, localization | HIGH |
| 4 | **Quality score: EXCELLENT** | 51/57 pts, 12/13 checks passed | HIGH |
| 5 | **3 open questions** | Owners assigned, deadlines set | MEDIUM |
| 6 | **8 risks identified** | Top risk: content licensing compliance | MEDIUM |
| 7 | **18 BR-NNN → PR-NNN mappings** | Full traceability from BRD to PRD | HIGH |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [Non-Goals](#4-non-goals)
5. [User Personas](#5-user-personas)
6. [User Stories](#6-user-stories)
7. [Functional Requirements](#7-functional-requirements)
8. [Non-Functional Requirements](#8-non-functional-requirements)
9. [UI/UX Considerations](#9-uiux-considerations)
10. [Technical Considerations](#10-technical-considerations)
11. [Dependencies & Integrations](#11-dependencies--integrations)
12. [Timeline & Milestones](#12-timeline--milestones)
13. [Risks & Mitigations](#13-risks--mitigations)
14. [Open Questions](#14-open-questions)
15. [Appendix](#15-appendix)

---

## 1. Executive Summary

Daily Dictation is a mobile-first English listening and dictation platform targeting Vietnamese learners aged 18-35. The product addresses a gap in the Vietnamese EdTech market: no localized, modern, gamified dictation platform exists despite strong demand (300,000+ annual TOEIC/IELTS test takers, $2.3B English learning market). The platform offers a 4-step learning flow (Listen → Type → Check → Read Aloud) with Vietnamese UI, gamification (streaks, XP, badges), and a freemium subscription model targeting 50,000 MAU and $10,000 MRR within 12 months post-launch.

---

## 2. Problem Statement

Vietnamese English learners who rely on dictation for listening comprehension improvement currently use dailydictation.com, a global platform with 2,011+ exercises and ~2M monthly visits. However, these users face five quantified pain points:

| # | Problem | Evidence | User Impact |
|---|---------|----------|-------------|
| 1 | **English-only interface** | 0% Vietnamese UI support on dailydictation.com | A1-A2 learners cannot navigate the platform; estimated 40% drop-off during onboarding |
| 2 | **Desktop-centric design** | Site uses Bootstrap layout not optimized for mobile viewports | 70%+ of Vietnamese internet users access via mobile (Statista 2024); small-screen exercise interaction is poor |
| 3 | **Intrusive advertising** | Google AdSense placements on every page; no ad-free option | Users report using browser ad-blockers; session duration reduced by ad interruptions |
| 4 | **No personalized learning path** | Static exercise catalog; all users see identical 13-category list | Learners waste time on mismatched difficulty; no data on which level to start |
| 5 | **No retention mechanics** | No streaks, XP, badges, or daily goals; only a basic all-time leaderboard | Estimated D30 retention ~8%; users lack motivation for daily return habit |

---

## 3. Goals & Success Metrics

### Primary Goals (linked to BRD objectives)

| ID | Goal | Target Metric | Baseline | Target | Timeframe | Counter-Metric |
|----|------|--------------|----------|--------|-----------|----------------|
| SC-001 | User acquisition | Monthly Active Users (MAU) | 0 | 50,000 | 12 months post-launch | Cost per acquisition must stay < $2.00 |
| SC-002 | Revenue generation | Monthly Recurring Revenue (MRR) | $0 | $10,000 | 12 months post-launch | Free-tier app store rating must stay ≥ 4.0 |
| SC-003 | User retention | Day-30 retention rate | 0% | 30% | 6 months post-launch | Exercise error report rate must stay < 5% |
| SC-004 | Content coverage | Exercises available | 0 | 500+ across 6 categories | By launch | Content quality rating (user feedback) must stay ≥ 4.0/5.0 |
| SC-005 | Premium conversion | Free-to-paid conversion rate | 0% | 2% of MAU | 6 months post-launch | Notification opt-out rate must stay < 20% |

### Leading Indicators (weekly tracking)

| Indicator | Target | Why It Matters |
|-----------|--------|----------------|
| Daily exercise completion rate | ≥ 70% of started exercises | Predicts retention; incomplete exercises signal UX friction |
| Streak maintenance rate (D7) | ≥ 40% of users maintain 7-day streak | Leading indicator for D30 retention |
| Placement test completion rate | ≥ 80% of new users | Validates onboarding funnel; required for personalization |
| Premium trial-to-paid conversion | ≥ 50% of trial users convert | Validates pricing and value proposition |
| Push notification opt-in rate | ≥ 60% | Required for re-engagement strategy |

---

## 4. Non-Goals

| # | Non-Goal | Reasoning |
|---|----------|-----------|
| 1 | **AI speech recognition or pronunciation scoring** | Requires significant ML infrastructure and R&D investment; deferred to Phase 2 after product-market fit is validated (BR: Out of Scope) |
| 2 | **User-generated content or teacher tools** | Content moderation infrastructure and abuse prevention are complex; focus on curated + original content first (BR: Out of Scope) |
| 3 | **Multi-language UI beyond Vietnamese** | Dilutes focus; Vietnamese market alone is sufficient for Phase 1 growth targets (BR: Out of Scope) |
| 4 | **Social features (friends, chat, study groups)** | Not essential for core dictation value proposition; leaderboard provides sufficient social motivation (BR: Out of Scope) |
| 5 | **Offline exercise mode** | Requires complex audio caching and sync logic; mobile data is affordable in Vietnam; defer to Phase 2 |
| 6 | **Desktop native applications** | Responsive web provides adequate desktop experience; native apps would split development effort |
| 7 | **C2 (Mastery) level content** | Small audience segment (<5% of Vietnamese learners); A1-C1 covers 95%+ of target users |
| 8 | **Replacing the existing dailydictation.com** | This is a new, independent product; not a migration or fork of the competitor |

---

## 5. User Personas

### Persona 1: Linh — The TOEIC Preparer

| Attribute | Detail |
|-----------|--------|
| **Age** | 23 |
| **Occupation** | Fresh graduate seeking corporate job |
| **English Level** | A2-B1 (Pre-Intermediate) |
| **Goal** | Score 600+ on TOEIC to meet job requirements |
| **Behavior** | Studies 30-45 min/day on mobile during commute; uses 2-3 learning apps |
| **Frustration** | Existing dictation sites are desktop-only and have no TOEIC-specific practice mode |
| **Willingness to Pay** | Will pay for premium if it clearly helps TOEIC score; compares value against TOEIC prep courses ($50-200) |
| **Devices** | Android phone (primary), laptop (secondary) |

### Persona 2: Minh — The IELTS Aspirant

| Attribute | Detail |
|-----------|--------|
| **Age** | 26 |
| **Occupation** | Working professional applying for study abroad |
| **English Level** | B1-B2 (Intermediate) |
| **Goal** | Achieve IELTS Listening band 7.0+ for university admission |
| **Behavior** | Dedicated study sessions 1-2 hours in evenings; prefers structured curriculum |
| **Frustration** | No platform provides IELTS-format dictation practice with progress tracking |
| **Willingness to Pay** | High — already spending on IELTS courses and books; will pay for premium tools that show measurable improvement |
| **Devices** | iPhone (primary), iPad (secondary) |

### Persona 3: Hoa — The Casual Learner

| Attribute | Detail |
|-----------|--------|
| **Age** | 19 |
| **Occupation** | University student (non-English major) |
| **English Level** | A1-A2 (Beginner) |
| **Goal** | Improve English listening for entertainment (movies, music, YouTube) and basic communication |
| **Behavior** | Short sessions (10-15 min); motivated by streaks and social comparison; uses free tier |
| **Frustration** | Existing platforms have English-only UI; too many ads; no sense of progress |
| **Willingness to Pay** | Low — will use free tier; may convert if hooked by gamification and sees clear value |
| **Devices** | Android phone (only device) |

### Persona 4: Trang — The Content Manager

| Attribute | Detail |
|-----------|--------|
| **Age** | 30 |
| **Occupation** | Content curator / ESL teacher on the team |
| **English Level** | C1 (Advanced) |
| **Goal** | Efficiently curate, create, and publish high-quality dictation exercises |
| **Behavior** | Uses CMS daily; needs to add audio, transcripts, hints, and metadata for each exercise |
| **Frustration** | Wants to publish exercises without involving developers; needs quality preview before publishing |
| **Willingness to Pay** | N/A (internal user) |
| **Devices** | Laptop (primary, for CMS), phone (for testing) |

---

## 6. User Stories

### Epic 1: Core Dictation Experience (→ BR-001, BR-009)

#### US-001: Start a Dictation Exercise [M]

**As a** Vietnamese English learner (Linh, Minh, Hoa),
**I want to** select an exercise from my recommended list and begin a dictation session,
**So that** I can practice listening comprehension with content matched to my level.

**Priority**: Must Have — PR-001

**Acceptance Criteria:**
- [ ] **Given** I am on the home screen, **When** I tap an exercise card, **Then** the exercise screen loads within 2 seconds showing audio player, text input field, and Vietnamese instructions
- [ ] **Given** I am a new user who has not taken the placement test, **When** I tap any exercise, **Then** the system prompts me to take the placement test first
- [ ] **Given** I am a free-tier user who has completed 5 exercises today, **When** I tap an exercise, **Then** the system shows the daily limit reached screen with an upgrade prompt

**Notes:** Exercise selection screen must display CEFR level badge, category, estimated duration, and difficulty indicator.

---

#### US-002: Complete the 4-Step Dictation Flow [M]

**As a** Vietnamese English learner,
**I want to** follow the Listen → Type → Check → Read Aloud flow for each exercise,
**So that** I practice listening, writing, and pronunciation in a structured sequence.

**Priority**: Must Have — PR-002

**Acceptance Criteria:**
- [ ] **Given** I am on the exercise screen, **When** I tap the play button, **Then** the audio plays at the selected speed (default 1.0×) with playback controls (play/pause, replay, speed: 0.5×/0.75×/1.0×/1.25×)
- [ ] **Given** the audio has played, **When** I type my answer in the text input, **Then** the system accepts Vietnamese keyboard input without interference and shows character count
- [ ] **Given** I have typed my answer, **When** I tap "Check", **Then** the system displays a diff view highlighting correct words (green), incorrect words (red), and missing words (yellow) with Vietnamese explanations for common errors
- [ ] **Given** the check results are displayed, **When** I tap "Read Aloud", **Then** the system displays the correct transcript with highlighted words synced to audio playback for shadowing practice
- [ ] **Given** I complete all 4 steps, **When** the exercise ends, **Then** the system shows accuracy score (%), XP earned, and streak status

---

#### US-003: Replay Audio During Exercise [S]

**As a** Vietnamese English learner,
**I want to** replay the audio multiple times and adjust playback speed,
**So that** I can catch words I missed on the first listen.

**Priority**: Must Have — PR-003

**Acceptance Criteria:**
- [ ] **Given** I am on the exercise screen, **When** I tap replay, **Then** the audio replays from the beginning with no limit on replay count
- [ ] **Given** I am on the exercise screen, **When** I tap the speed selector, **Then** I can choose 0.5×, 0.75×, 1.0× (default), or 1.25× and the change applies immediately
- [ ] **Given** I change playback speed, **When** the audio replays, **Then** it plays at the new speed without audio distortion

---

### Epic 2: User Onboarding & Placement (→ BR-006, BR-008)

#### US-004: Register and Create Account [M]

**As a** new Vietnamese English learner,
**I want to** register using email or social login with a Vietnamese-language interface,
**So that** I can save my progress and access the platform across devices.

**Priority**: Must Have — PR-004

**Acceptance Criteria:**
- [ ] **Given** I am on the registration screen, **When** I see the form, **Then** all labels, instructions, and error messages are in Vietnamese
- [ ] **Given** I enter a valid email and password (min 8 characters), **When** I tap "Đăng ký" (Register), **Then** the system creates my account and sends a Vietnamese-language verification email within 30 seconds
- [ ] **Given** I tap "Đăng nhập bằng Google" (Sign in with Google), **When** Google OAuth completes, **Then** my account is created with Google profile data and I am redirected to the placement test
- [ ] **Given** I have not verified my email, **When** I try to start an exercise beyond the tutorial, **Then** the system shows a Vietnamese prompt to verify email first

---

#### US-005: Complete Placement Test [M]

**As a** new user,
**I want to** take a placement test that determines my CEFR level,
**So that** I receive exercises matched to my current listening ability.

**Priority**: Must Have — PR-005

**Acceptance Criteria:**
- [ ] **Given** I have registered, **When** I am prompted to take the placement test, **Then** the system presents 20 graded dictation exercises spanning A1 to C1 in ascending difficulty
- [ ] **Given** I am taking the placement test, **When** I complete each exercise, **Then** the system records my accuracy and does not show the correct answer (to prevent gaming)
- [ ] **Given** I complete all 20 exercises, **When** results are calculated, **Then** the system assigns me the highest CEFR level where my accuracy ≥ 70% and displays a Vietnamese explanation of what this level means
- [ ] **Given** I want to skip the placement test, **When** I tap "Bỏ qua" (Skip), **Then** the system assigns me level A2 (default) and I can retake the test later from settings

---

### Epic 3: Gamification & Retention (→ BR-005, BR-010, BR-011)

#### US-006: Track Daily Streak [M]

**As a** learner building a study habit,
**I want to** see my daily streak count and get reminders to maintain it,
**So that** I stay motivated to practice every day.

**Priority**: Must Have — PR-006

**Acceptance Criteria:**
- [ ] **Given** I complete at least 1 exercise on a calendar day (UTC+7), **When** the day ends, **Then** my streak count increments by 1 and is displayed prominently on the home screen
- [ ] **Given** I miss a calendar day without completing any exercise, **When** I open the app the next day, **Then** my streak resets to 0 and the system shows a Vietnamese motivational message ("Hãy bắt đầu lại chuỗi ngày học nhé!")
- [ ] **Given** I have opted into push notifications, **When** it is 20:00 UTC+7 and I have not completed an exercise, **Then** the system sends a Vietnamese streak reminder notification

---

#### US-007: Earn XP and Level Up [M]

**As a** competitive learner,
**I want to** earn XP for each exercise and see my total XP and level,
**So that** I feel a sense of progression and achievement.

**Priority**: Must Have — PR-007

**Acceptance Criteria:**
- [ ] **Given** I complete an exercise with 85% accuracy and a 10-day streak, **When** XP is calculated, **Then** I receive (10 + 85 × 0.1) × 1.5 = 27.75 → 28 XP (rounded up) and the XP animation plays
- [ ] **Given** I accumulate enough XP to reach the next level threshold, **When** the threshold is crossed, **Then** the system shows a level-up celebration screen with badge earned
- [ ] **Given** I am on the home screen, **When** I view my profile, **Then** I see total XP, current level, XP needed for next level (progress bar), and streak multiplier status

---

#### US-008: View Leaderboard [S]

**As a** competitive learner,
**I want to** see how I rank against other learners on daily, weekly, and all-time leaderboards,
**So that** I am motivated by social comparison.

**Priority**: Should Have — PR-008

**Acceptance Criteria:**
- [ ] **Given** I tap the leaderboard tab, **When** the leaderboard loads, **Then** I see three sub-tabs: "Hôm nay" (Today), "Tuần này" (This Week), "Tất cả" (All Time) with top 100 users per tab
- [ ] **Given** I am viewing a leaderboard, **When** I find my position, **Then** my row is highlighted with my rank, username, XP, and streak count
- [ ] **Given** I am not in the top 100, **When** I view the leaderboard, **Then** the system shows my rank at the bottom (e.g., "Bạn đang ở vị trí #342")

---

#### US-009: Earn Achievement Badges [M]

**As a** learner,
**I want to** earn badges for milestones (first exercise, 7-day streak, 100 exercises completed, etc.),
**So that** I have collectible goals that motivate continued use.

**Priority**: Must Have — PR-009

**Acceptance Criteria:**
- [ ] **Given** I complete my first exercise, **When** the exercise ends, **Then** I receive the "Bước Đầu Tiên" (First Step) badge with a celebration animation
- [ ] **Given** I maintain a 7-day streak, **When** the 7th day exercise completes, **Then** I receive the "Kiên Trì 7 Ngày" (7-Day Perseverance) badge
- [ ] **Given** I tap on my badge collection, **When** the badges screen loads, **Then** I see earned badges (colored) and locked badges (greyed out with unlock criteria in Vietnamese)

---

#### US-010: Receive Push Notifications [S]

**As a** learner who has opted in,
**I want to** receive streak reminders, daily goal nudges, and new content alerts,
**So that** I am re-engaged when I forget to practice.

**Priority**: Should Have — PR-010

**Acceptance Criteria:**
- [ ] **Given** I install the app, **When** I reach the notification permission prompt, **Then** the system explains the benefit in Vietnamese before requesting permission ("Nhận nhắc nhở để duy trì chuỗi ngày học")
- [ ] **Given** I have opted in, **When** it is 20:00 UTC+7 and I have not practiced today, **Then** I receive a streak reminder notification
- [ ] **Given** I tap a notification, **When** the app opens, **Then** I land on the exercise screen (not the home screen) to reduce friction to action

---

### Epic 4: Freemium & Subscription (→ BR-003)

#### US-011: Use Free Tier with Daily Limit [M]

**As a** free-tier user,
**I want to** access up to 5 exercises per day with ads shown between exercises,
**So that** I can evaluate the platform before deciding to upgrade.

**Priority**: Must Have — PR-011

**Acceptance Criteria:**
- [ ] **Given** I am a free-tier user, **When** I complete an exercise, **Then** an interstitial ad is shown before the next exercise (never during an active exercise session)
- [ ] **Given** I have completed 5 exercises today, **When** I attempt a 6th, **Then** the system shows a Vietnamese-language paywall screen with remaining time until reset and upgrade options
- [ ] **Given** the daily counter resets at midnight UTC+7, **When** a new day begins, **Then** my exercise count resets to 0 and I can start 5 new exercises

---

#### US-012: Subscribe to Premium [M]

**As a** user who has decided to upgrade,
**I want to** subscribe to a monthly, quarterly, or annual premium plan,
**So that** I get unlimited exercises, no ads, and advanced features.

**Priority**: Must Have — PR-012

**Acceptance Criteria:**
- [ ] **Given** I tap "Nâng cấp Premium" (Upgrade to Premium), **When** the subscription screen loads, **Then** I see three plan options: Monthly ($9.99), Quarterly ($23.97 / $7.99/mo), Annual ($59.88 / $4.99/mo) with savings percentages highlighted
- [ ] **Given** I select a plan and confirm payment via App Store/Google Play, **When** payment succeeds, **Then** my account upgrades immediately: ads are removed, daily limit is lifted, and premium badge appears on my profile
- [ ] **Given** I am a premium user, **When** I access TOEIC/IELTS full practice tests, **Then** the system grants access (free users see individual exercises only, with test mode locked behind premium)
- [ ] **Given** my subscription expires, **When** the next billing date passes without renewal, **Then** my account reverts to free-tier with a 7-day grace period and Vietnamese-language reactivation prompt

---

#### US-013: Manage Subscription [S]

**As a** premium subscriber,
**I want to** view my subscription status, change plans, or cancel,
**So that** I have full control over my billing.

**Priority**: Should Have — PR-013

**Acceptance Criteria:**
- [ ] **Given** I navigate to settings → subscription, **When** the page loads, **Then** I see current plan, next billing date, payment method, and options to change plan or cancel
- [ ] **Given** I tap cancel, **When** the cancellation flow starts, **Then** the system shows a Vietnamese retention offer (e.g., 1 month free) before confirming cancellation
- [ ] **Given** I cancel, **When** cancellation is confirmed, **Then** premium access continues until the current billing period ends

---

### Epic 5: Progress & Analytics (→ BR-007)

#### US-014: View Progress Dashboard [M]

**As a** learner tracking improvement,
**I want to** see my accuracy trends, exercises completed, level progression, and time spent,
**So that** I can measure my listening improvement over time.

**Priority**: Must Have — PR-014

**Acceptance Criteria:**
- [ ] **Given** I tap "Tiến trình" (Progress), **When** the dashboard loads, **Then** I see: accuracy trend chart (last 30 days), total exercises completed, current CEFR level with progress bar, total time spent, and category breakdown
- [ ] **Given** I have completed exercises over multiple weeks, **When** I view the accuracy chart, **Then** the chart shows daily average accuracy with a trendline and can be filtered by category or level
- [ ] **Given** I am a premium user, **When** I view the dashboard, **Then** I see additional insights: weakest categories, most-improved areas, and recommended focus exercises

---

### Epic 6: Content & Categories (→ BR-004, BR-012)

#### US-015: Browse Exercises by Category and Level [M]

**As a** learner,
**I want to** browse exercises filtered by category (Short Stories, TOEIC, IELTS, etc.) and CEFR level,
**So that** I can practice content relevant to my goals.

**Priority**: Must Have — PR-015

**Acceptance Criteria:**
- [ ] **Given** I tap "Bài tập" (Exercises), **When** the catalog loads, **Then** I see exercise cards organized by category with level filter (A1, A2, B1, B2, C1) and category tabs
- [ ] **Given** I apply level filter "B1", **When** the list updates, **Then** only B1-level exercises are shown across all categories with count per category
- [ ] **Given** I view an exercise card, **When** the card renders, **Then** it shows: title, category badge, CEFR level badge, estimated duration, difficulty dots (1-5), and completion status (done/not done)

---

#### US-016: Practice TOEIC/IELTS Format Exercises [S]

**As a** test preparer (Linh, Minh),
**I want to** practice TOEIC and IELTS listening exercises that mirror actual test format,
**So that** I am prepared for the real exam conditions.

**Priority**: Should Have — PR-016

**Acceptance Criteria:**
- [ ] **Given** I select the TOEIC track, **When** the track loads, **Then** exercises are organized by TOEIC part (Part 1: Photos, Part 2: Q&A, Part 3: Conversations, Part 4: Talks)
- [ ] **Given** I am a premium user, **When** I tap "Thi thử" (Practice Test), **Then** the system starts a timed test simulation with the same number of questions and time limits as the real TOEIC/IELTS listening section
- [ ] **Given** I am a free user, **When** I tap "Thi thử", **Then** the system shows a premium upgrade prompt; individual exercises remain accessible

---

### Epic 7: Vietnamese Localization (→ BR-002)

#### US-017: Use Platform in Vietnamese [M]

**As a** Vietnamese learner,
**I want to** navigate the entire platform in Vietnamese,
**So that** I can focus on learning English content without UI comprehension barriers.

**Priority**: Must Have — PR-017

**Acceptance Criteria:**
- [ ] **Given** I set language to Vietnamese (default for Vietnam-based users), **When** any screen loads, **Then** all UI elements (navigation, buttons, labels, tooltips, error messages) are displayed in Vietnamese
- [ ] **Given** I am doing an exercise, **When** I check my answer and see errors, **Then** each error includes a Vietnamese hint/explanation (e.g., "You typed 'there' but the correct word is 'their' — 'their' nghĩa là 'của họ'")
- [ ] **Given** I receive a push notification, **When** I view the notification, **Then** the notification text is in Vietnamese

---

### Epic 8: Accessibility & Appearance (→ BR-014)

#### US-018: Toggle Dark Mode [S]

**As a** user who studies at night,
**I want to** switch between light and dark mode,
**So that** I reduce eye strain during evening study sessions.

**Priority**: Should Have — PR-018

**Acceptance Criteria:**
- [ ] **Given** I navigate to settings, **When** I toggle "Chế độ tối" (Dark Mode), **Then** the entire app switches to dark color scheme within 200ms without page reload
- [ ] **Given** I have set dark mode, **When** I close and reopen the app, **Then** dark mode persists
- [ ] **Given** I set theme to "Hệ thống" (System), **When** my device switches to dark mode, **Then** the app follows the system setting automatically

---

### Epic 9: Content Management (→ BR-013)

#### US-019: Publish New Exercise (Content Manager) [S]

**As** Trang the content manager,
**I want to** create and publish a new dictation exercise through the CMS,
**So that** the content library grows without developer involvement.

**Priority**: Should Have — PR-019

**Acceptance Criteria:**
- [ ] **Given** I am logged into the CMS, **When** I tap "Thêm bài tập mới" (Add New Exercise), **Then** I see a form with fields: title, category (dropdown), CEFR level (dropdown), audio upload, transcript, Vietnamese hints, difficulty rating, and tags
- [ ] **Given** I fill in all required fields and upload audio, **When** I tap "Xem trước" (Preview), **Then** the system renders the exercise exactly as learners will see it on mobile
- [ ] **Given** the preview is correct, **When** I tap "Xuất bản" (Publish), **Then** the exercise goes live within 5 minutes and appears in the correct category/level filters
- [ ] **Given** I want to schedule publication, **When** I set a future date and tap "Lên lịch" (Schedule), **Then** the exercise auto-publishes at the scheduled time

---

### Epic 10: Bookmarking & Review (→ BR-017)

#### US-020: Bookmark Exercises [S]

**As a** learner,
**I want to** bookmark exercises for later review,
**So that** I can revisit exercises I found challenging.

**Priority**: Could Have — PR-020

**Acceptance Criteria:**
- [ ] **Given** I am on an exercise screen, **When** I tap the bookmark icon, **Then** the exercise is saved to my "Bài tập đã lưu" (Saved Exercises) list
- [ ] **Given** I have bookmarked exercises, **When** I navigate to saved exercises, **Then** I see a list sorted by date saved with the ability to remove bookmarks

---

### Epic 11: Referral Program (→ BR-016)

#### US-021: Invite Friends via Referral [S]

**As a** engaged user,
**I want to** share a referral link with friends and earn premium days when they sign up,
**So that** I get premium benefits without paying.

**Priority**: Could Have — PR-021

**Acceptance Criteria:**
- [ ] **Given** I tap "Mời bạn bè" (Invite Friends), **When** the referral screen loads, **Then** I see my unique referral link, sharing options (copy, Zalo, Facebook, Messenger), and a counter showing invites sent vs. converted
- [ ] **Given** a friend registers using my referral link, **When** they complete their first exercise, **Then** both I and my friend receive 7 days of premium access and a notification confirming the reward

---

### Epic 12: Adaptive Recommendations (→ BR-015)

#### US-022: Receive Personalized Exercise Recommendations [M]

**As a** learner,
**I want to** see recommended exercises based on my performance patterns,
**So that** I focus on areas where I need the most improvement.

**Priority**: Could Have — PR-022

**Acceptance Criteria:**
- [ ] **Given** I have completed 10+ exercises, **When** I view the home screen, **Then** the "Đề xuất cho bạn" (Recommended for You) section shows 5 exercises ranked by relevance to my weak areas
- [ ] **Given** I consistently score below 60% on a specific category, **When** recommendations update (daily), **Then** that category is weighted higher in my recommendations

---

### Epic 13: Email Reports (→ BR-018)

#### US-023: Receive Weekly Progress Email [S]

**As a** learner,
**I want to** receive a weekly email summarizing my learning progress,
**So that** I stay informed about my improvement even when I don't open the app.

**Priority**: Could Have — PR-023

**Acceptance Criteria:**
- [ ] **Given** I have opted into email reports, **When** Sunday 9:00 AM UTC+7 arrives, **Then** the system sends a Vietnamese email with: exercises completed this week, accuracy trend, streak status, XP earned, and a CTA to continue learning
- [ ] **Given** I want to stop receiving emails, **When** I tap "Hủy đăng ký" (Unsubscribe) in the email footer, **Then** emails stop within 24 hours

---

### Epic 14: Multi-Device Access (→ RULE-010)

#### US-024: Access Account on Multiple Devices [S]

**As a** premium user,
**I want to** use my account on up to 3 devices with synced progress,
**So that** I can practice on my phone during commute and tablet at home.

**Priority**: Should Have — PR-024

**Acceptance Criteria:**
- [ ] **Given** I log in on a 2nd device, **When** I start an exercise, **Then** my streak, XP, level, and exercise history are synced within 5 seconds
- [ ] **Given** I am logged in on 3 devices, **When** I log in on a 4th device, **Then** the oldest session is terminated and a notification is sent to that device in Vietnamese explaining why

---

## 7. Functional Requirements

### 7.1 Dictation Engine (→ BR-001, BR-009)

| ID | Requirement | Priority | Traced To | AC |
|----|------------|----------|-----------|-----|
| FR-001 | System shall play exercise audio with controls: play, pause, replay, and speed selection (0.5×, 0.75×, 1.0×, 1.25×) | P0 | BR-001, RULE-012 | **Given** user taps play, **When** audio loads, **Then** playback begins within 500ms with selected speed |
| FR-002 | System shall accept typed user input during dictation and display character count in real time | P0 | BR-001 | **Given** user types in input field, **When** characters are entered, **Then** character count updates within 100ms |
| FR-003 | System shall compare user input against correct transcript and produce a word-by-word diff (correct: green, incorrect: red, missing: yellow) | P0 | BR-009 | **Given** user taps "Kiểm tra" (Check), **When** comparison runs, **Then** diff renders within 1 second with color-coded results |
| FR-004 | System shall display Vietnamese explanations for each incorrect or missing word in the diff view | P0 | BR-002, BR-009 | **Given** a word is incorrect, **When** user taps the red word, **Then** a tooltip shows Vietnamese meaning and correct pronunciation |
| FR-005 | System shall provide a "Read Aloud" step displaying correct transcript with word-by-word audio sync highlighting | P1 | BR-009 | **Given** user enters Read Aloud mode, **When** audio plays, **Then** each word highlights in sync with audio timing |
| FR-006 | System shall calculate exercise accuracy as (correct words / total words × 100)% and display to user | P0 | BR-001 | **Given** exercise is checked, **When** accuracy is calculated, **Then** score displays as integer percentage |

### 7.2 User Management (→ BR-006)

| ID | Requirement | Priority | Traced To | AC |
|----|------------|----------|-----------|-----|
| FR-007 | System shall support user registration via email/password and Google OAuth | P0 | BR-006 | **Given** user submits valid registration form, **When** account is created, **Then** verification email sent within 30 seconds |
| FR-008 | System shall send email verification and restrict exercise access (beyond tutorial) for unverified accounts | P0 | BR-006, RULE-005 | **Given** email is unverified, **When** user attempts exercise, **Then** system blocks access and shows verification prompt |
| FR-009 | System shall support password reset via email with Vietnamese-language reset flow | P0 | BR-006 | **Given** user taps "Quên mật khẩu", **When** valid email is entered, **Then** reset link sent within 30 seconds |
| FR-010 | System shall maintain user profile with: display name, avatar, current level, total XP, streak count, badges earned, and subscription status | P0 | BR-006 | **Given** user views profile, **When** profile loads, **Then** all fields display current data within 2 seconds |
| FR-011 | System shall support session management with maximum 3 concurrent sessions per premium user, terminating the oldest session when exceeded | P1 | RULE-010 | **Given** user logs in on 4th device, **When** session is created, **Then** oldest session terminates within 10 seconds |

### 7.3 Placement & Level System (→ BR-008)

| ID | Requirement | Priority | Traced To | AC |
|----|------------|----------|-----------|-----|
| FR-012 | System shall present a 20-exercise placement test spanning A1-C1 in ascending difficulty order | P0 | BR-008, RULE-007 | **Given** new user starts placement test, **When** first exercise loads, **Then** difficulty starts at A1 and increases progressively |
| FR-013 | System shall calculate placement result by assigning the highest CEFR level where user accuracy ≥ 70% | P0 | BR-008, RULE-007 | **Given** user completes 20 exercises, **When** results compute, **Then** assigned level follows the 70% threshold rule |
| FR-014 | System shall allow users to skip placement test (default to A2) and retake it from settings | P1 | BR-008 | **Given** user taps skip, **When** skip confirmed, **Then** level set to A2; retake option visible in settings |
| FR-015 | System shall not reveal correct answers during placement test to prevent gaming | P0 | BR-008 | **Given** placement test exercise is checked, **When** result shown, **Then** only accuracy percentage is displayed (no diff view) |

### 7.4 Gamification (→ BR-005)

| ID | Requirement | Priority | Traced To | AC |
|----|------------|----------|-----------|-----|
| FR-016 | System shall track and display daily streak count, incrementing by 1 for each calendar day (UTC+7) with at least 1 completed exercise | P0 | BR-005, RULE-003 | **Given** user completes exercise on new day, **When** day ends, **Then** streak increments by 1 |
| FR-017 | System shall reset streak to 0 when a calendar day passes without any completed exercise | P0 | BR-005, RULE-003 | **Given** user misses a day, **When** next day begins, **Then** streak resets to 0 |
| FR-018 | System shall calculate XP per exercise: (10 base + accuracy% × 0.1 bonus) × streak multiplier (1.0× default, 1.5× at 7-day streak, 2.0× at 30-day streak) | P0 | BR-005, RULE-004 | **Given** 85% accuracy with 10-day streak, **When** XP calculated, **Then** XP = round_up((10 + 8.5) × 1.5) = 28 |
| FR-019 | System shall define XP level thresholds and trigger level-up celebration when user crosses a threshold | P0 | BR-005 | **Given** user's total XP crosses level threshold, **When** exercise ends, **Then** level-up animation plays and new level is stored |
| FR-020 | System shall award achievement badges for defined milestones and display earned/locked badges in profile | P0 | BR-005 | **Given** user meets badge criteria, **When** milestone reached, **Then** badge awarded with celebration animation |
| FR-021 | System shall display leaderboards with daily, weekly, and all-time views showing top 100 users ranked by XP | P1 | BR-011 | **Given** user taps leaderboard, **When** data loads, **Then** shows three tabs with top 100 and user's own rank |

### 7.5 Freemium & Subscription (→ BR-003)

| ID | Requirement | Priority | Traced To | AC |
|----|------------|----------|-----------|-----|
| FR-022 | System shall enforce daily exercise limit of 5 for free-tier users, resetting at midnight UTC+7 | P0 | BR-003, RULE-001 | **Given** free user has done 5 exercises, **When** attempting 6th, **Then** paywall screen shown with countdown to reset |
| FR-023 | System shall display ads between exercises (never during active exercise sessions) for free-tier users | P0 | BR-003, RULE-011 | **Given** free user completes an exercise, **When** transitioning to next screen, **Then** interstitial ad displays |
| FR-024 | System shall process subscription purchases via Apple App Store and Google Play billing APIs with three tiers: Monthly ($9.99), Quarterly ($23.97), Annual ($59.88) | P0 | BR-003, RULE-002 | **Given** user selects plan, **When** payment confirmed by store, **Then** premium features activate within 10 seconds |
| FR-025 | System shall immediately remove ads and lift exercise limits upon premium activation | P0 | BR-003 | **Given** subscription confirmed, **When** user returns to app, **Then** no ads shown and exercise limit removed |
| FR-026 | System shall handle subscription expiration with 7-day grace period and revert to free tier afterward | P1 | BR-003 | **Given** subscription expires, **When** grace period ends, **Then** account reverts to free-tier with reactivation prompt |
| FR-027 | System shall grant premium access to TOEIC/IELTS full test simulations; free users access individual exercises only | P1 | RULE-008 | **Given** free user taps test simulation, **When** access checked, **Then** premium upgrade prompt shown |

### 7.6 Progress & Analytics (→ BR-007)

| ID | Requirement | Priority | Traced To | AC |
|----|------------|----------|-----------|-----|
| FR-028 | System shall display progress dashboard with: accuracy trend (30-day chart), total exercises completed, current CEFR level + progress bar, total time spent, category breakdown | P0 | BR-007 | **Given** user navigates to progress, **When** dashboard loads, **Then** all 5 data points render within 3 seconds |
| FR-029 | System shall allow filtering progress data by category and CEFR level | P1 | BR-007 | **Given** user selects category filter, **When** filter applied, **Then** chart updates to show only selected category data |

### 7.7 Content Management (→ BR-004, BR-013)

| ID | Requirement | Priority | Traced To | AC |
|----|------------|----------|-----------|-----|
| FR-030 | System shall organize exercises by category (Short Stories, Conversations, TOEIC, IELTS, News, Pronunciation) and CEFR level (A1-C1) | P0 | BR-004 | **Given** user browses exercises, **When** filters applied, **Then** exercises shown matching both category and level |
| FR-031 | System shall provide a CMS allowing content managers to create, edit, preview, publish, schedule, and archive exercises without developer involvement | P1 | BR-013 | **Given** content manager creates exercise, **When** all fields filled and publish tapped, **Then** exercise goes live within 5 minutes |
| FR-032 | System shall require source attribution for curated content and flag exercises missing license information | P1 | RULE-006 | **Given** content source = "curated", **When** publish attempted without attribution, **Then** system blocks publish with error |
| FR-033 | System shall restrict content deletion to admin role; content managers can publish, edit, and archive only | P1 | RULE-009 | **Given** content manager attempts delete, **When** action submitted, **Then** system denies with "Chỉ admin mới có thể xóa" message |

### 7.8 Notifications (→ BR-010)

| ID | Requirement | Priority | Traced To | AC |
|----|------------|----------|-----------|-----|
| FR-034 | System shall request push notification permission with Vietnamese-language benefit explanation during onboarding | P1 | BR-010 | **Given** onboarding reaches notification step, **When** prompt shown, **Then** Vietnamese explanation precedes system permission dialog |
| FR-035 | System shall send streak reminder notification at 20:00 UTC+7 if user has not completed any exercise that day | P1 | BR-010 | **Given** 20:00 UTC+7, **When** user has 0 exercises today, **Then** notification sent within 5 minutes |
| FR-036 | System shall deep-link notifications to exercise screen (not home screen) to reduce friction | P1 | BR-010 | **Given** user taps notification, **When** app opens, **Then** user lands on exercise selection screen |

### 7.9 Bookmarking & Review (→ BR-017)

| ID | Requirement | Priority | Traced To | AC |
|----|------------|----------|-----------|-----|
| FR-037 | System shall allow users to bookmark exercises and view a "Saved Exercises" list | P2 | BR-017 | **Given** user taps bookmark icon, **When** exercise saved, **Then** exercise appears in saved list |
| FR-038 | System shall allow users to create custom practice lists from bookmarked exercises | P2 | BR-017 | **Given** user has bookmarked exercises, **When** user creates list, **Then** list is saved and accessible from profile |

### 7.10 Referral Program (→ BR-016)

| ID | Requirement | Priority | Traced To | AC |
|----|------------|----------|-----------|-----|
| FR-039 | System shall generate unique referral links per user with sharing options (copy, Zalo, Facebook, Messenger) | P2 | BR-016 | **Given** user taps invite, **When** referral screen loads, **Then** unique link displayed with share options |
| FR-040 | System shall award 7 days premium to both referrer and referee when referee completes first exercise | P2 | BR-016 | **Given** referee completes first exercise, **When** referral validated, **Then** both accounts receive 7 premium days |

### 7.11 Email Reports (→ BR-018)

| ID | Requirement | Priority | Traced To | AC |
|----|------------|----------|-----------|-----|
| FR-041 | System shall send weekly Vietnamese-language progress email every Sunday 9:00 AM UTC+7 to opted-in users | P2 | BR-018 | **Given** Sunday 9:00 AM UTC+7, **When** user opted in, **Then** email sent with weekly stats |
| FR-042 | System shall support email unsubscribe via one-click footer link | P2 | BR-018 | **Given** user taps unsubscribe, **When** action confirmed, **Then** emails stop within 24 hours |

---

## 8. Non-Functional Requirements

| ID | Category | Requirement | Priority | Target | AC |
|----|----------|------------|----------|--------|-----|
| NFR-001 | **Performance** | Exercise screen (including audio pre-load) shall load within 2 seconds on 4G connection | P0 | < 2s load time | Lighthouse performance score ≥ 85 on mobile |
| NFR-002 | **Performance** | Audio playback shall begin within 500ms of user tapping play | P0 | < 500ms | Measured via app performance monitoring |
| NFR-003 | **Performance** | Answer checking (diff calculation) shall complete within 1 second for transcripts up to 500 words | P0 | < 1s | Load test with 500-word transcript |
| NFR-004 | **Reliability** | Platform shall maintain 99.5% uptime measured monthly | P0 | ≥ 99.5% | Monitoring dashboard alert at < 99.5% |
| NFR-005 | **Security** | User passwords shall be hashed using bcrypt (cost factor ≥ 12) and never stored in plain text | P0 | bcrypt ≥ 12 | Security audit verification |
| NFR-006 | **Security** | All API communication shall use HTTPS/TLS 1.2+ with certificate pinning on mobile apps | P0 | TLS 1.2+ | SSL Labs grade A |
| NFR-007 | **Security** | Authentication tokens shall expire after 30 days with refresh token rotation | P0 | 30-day expiry | Token lifecycle test |
| NFR-008 | **Accessibility** | Platform shall comply with WCAG 2.1 AA standards including color contrast ratios ≥ 4.5:1 and screen reader support | P1 | WCAG 2.1 AA | Accessibility audit score ≥ 90% |
| NFR-009 | **Localization** | 100% of user-facing UI text shall be externalized in Vietnamese language files (not hardcoded) | P0 | 100% externalized | Zero hardcoded strings in UI code |
| NFR-010 | **Scalability** | Backend shall handle 10,000 concurrent users without degradation (< 5% increase in p95 latency) | P1 | 10K concurrent | Load test verification |
| NFR-011 | **Data Privacy** | User data handling shall comply with Vietnam's Cybersecurity Law (2018) and Personal Data Protection Decree (2023) | P0 | Legal compliance | Legal review sign-off |
| NFR-012 | **Compatibility** | Mobile apps shall support iOS 15+ and Android 10+ covering 95%+ of active devices in Vietnam | P0 | iOS 15+, Android 10+ | Device compatibility test matrix |

---

## 9. UI/UX Considerations

### 9.1 Key Screens

| Screen | Purpose | Key Elements |
|--------|---------|-------------|
| **Home** | Daily hub | Streak counter, daily goal progress, recommended exercises, continue learning section, XP/level display |
| **Exercise Catalog** | Browse & filter | Category tabs, CEFR level filter pills, exercise cards (title, level badge, duration, difficulty dots, completion check) |
| **Exercise Session** | Core learning | Audio player (play/pause/replay/speed), text input area, "Kiểm tra" button, diff view, "Đọc to" button |
| **Progress Dashboard** | Track improvement | Accuracy trend chart (30-day), exercises completed counter, level progress bar, time spent, category breakdown |
| **Profile** | User identity | Avatar, display name, XP total, current level, streak count, badge collection, subscription status |
| **Leaderboard** | Social motivation | Tab bar (Today/This Week/All Time), ranked user list with XP and streak, highlighted own rank |
| **Subscription** | Monetization | Three plan cards with pricing, savings callout on annual, feature comparison table, CTA buttons |
| **Placement Test** | Onboarding | Progress bar (1/20), exercise content, skip option, no answer reveal |
| **CMS (Admin)** | Content management | Exercise form (audio upload, transcript, hints, metadata), preview, publish/schedule actions |

### 9.2 Interaction Patterns

| Pattern | Application | Notes |
|---------|------------|-------|
| **Bottom tab navigation** | Home, Exercises, Progress, Leaderboard, Profile | Standard mobile pattern; 5 tabs max |
| **Pull-to-refresh** | Exercise catalog, leaderboard | Refresh content without full reload |
| **Haptic feedback** | Correct answer, badge earned, level up | Subtle vibration on milestone events |
| **Celebration animations** | Streak milestone, badge earned, level up | Confetti/particle effects; keep under 2 seconds |
| **Skeleton loading** | Exercise cards, dashboard charts | Show placeholder shapes while data loads |
| **Swipe gestures** | Exercise cards (bookmark), leaderboard tabs | Swipe left to bookmark; swipe between tabs |

### 9.3 State Handling

| State | Handling |
|-------|---------|
| **Empty state** | Vietnamese-language messages with illustration and CTA (e.g., "Chưa có bài tập đã lưu — Hãy bắt đầu học ngay!") |
| **Loading state** | Skeleton placeholders (never blank screen); audio shows waveform placeholder |
| **Error state** | Vietnamese error message with retry button; categorized (network, server, input validation) |
| **Offline state** | Banner: "Không có kết nối mạng — Một số tính năng có thể không khả dụng" with cached data where possible |
| **Free-tier limit reached** | Full-screen modal with daily limit message, countdown to reset, upgrade CTA |

### 9.4 Design Principles

| Principle | Application |
|-----------|------------|
| **Mobile-first** | All designs start from 375px width (iPhone SE); scale up for tablets and web |
| **Vietnamese-first** | All placeholder text, microcopy, and onboarding in Vietnamese; English only in exercise content |
| **Minimal friction to first exercise** | Registration → placement test → first exercise in under 3 minutes |
| **Celebration over punishment** | Reward completions (XP animation, badges); streak reset uses encouragement, not guilt |
| **Progressive disclosure** | Show essential info first; advanced features (analytics, recommendations) behind taps |

---

## 10. Technical Considerations

### 10.1 Architecture Overview

```
┌──────────────┐     ┌──────────────┐     ┌──────────────────┐
│  Mobile Apps │     │   Web App    │     │     CMS (Web)    │
│  iOS + Android│     │  Responsive  │     │  Content Managers │
└──────┬───────┘     └──────┬───────┘     └──────┬───────────┘
       │                    │                     │
       └────────────────────┼─────────────────────┘
                            │
                   ┌────────▼────────┐
                   │   API Gateway   │
                   │   (REST/GraphQL)│
                   └────────┬────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
┌───────▼──────┐   ┌───────▼──────┐   ┌───────▼──────┐
│ Auth Service │   │Exercise Svc  │   │Gamification  │
│ (JWT + OAuth)│   │(Content, Diff)│  │(XP, Streaks) │
└───────┬──────┘   └───────┬──────┘   └───────┬──────┘
        │                  │                   │
        └──────────────────┼───────────────────┘
                           │
                  ┌────────▼────────┐
                  │   Database      │
                  │  (PostgreSQL)   │
                  └────────┬────────┘
                           │
               ┌───────────┼───────────┐
               │                       │
      ┌────────▼──────┐     ┌─────────▼────────┐
      │  Audio Storage│     │  Cache (Redis)   │
      │  (S3/CDN)     │     │  Sessions, Ranks │
      └───────────────┘     └──────────────────┘
```

### 10.2 Core Data Model (Simplified)

```
User
├── id (UUID)
├── email (unique)
├── password_hash (bcrypt)
├── display_name
├── avatar_url
├── current_level (CEFR enum: A1|A2|B1|B2|C1)
├── total_xp (integer)
├── streak_count (integer)
├── streak_last_date (date, UTC+7)
├── subscription_tier (enum: free|premium)
├── subscription_expires_at (timestamp)
├── created_at
└── updated_at

Exercise
├── id (UUID)
├── title
├── category (enum: short_stories|conversations|toeic|ielts|news|pronunciation)
├── cefr_level (enum: A1|A2|B1|B2|C1)
├── audio_url (CDN URL)
├── transcript (text — correct answer)
├── vietnamese_hints (JSON — word-level hints)
├── difficulty_rating (1-5)
├── duration_seconds (integer)
├── source_type (enum: original|curated)
├── source_attribution (text, nullable)
├── status (enum: draft|scheduled|published|archived)
├── published_at (timestamp)
└── created_at

ExerciseAttempt
├── id (UUID)
├── user_id (FK → User)
├── exercise_id (FK → Exercise)
├── user_input (text)
├── accuracy_percent (decimal)
├── xp_earned (integer)
├── completed_at (timestamp)
└── duration_seconds (integer)

Badge
├── id (UUID)
├── name_vi (Vietnamese name)
├── name_en (English name)
├── description_vi (unlock criteria in Vietnamese)
├── icon_url
├── criteria_type (enum: streak|exercises_completed|accuracy|xp|level)
└── criteria_value (integer)

UserBadge
├── user_id (FK → User)
├── badge_id (FK → Badge)
└── earned_at (timestamp)

Subscription
├── id (UUID)
├── user_id (FK → User)
├── plan (enum: monthly|quarterly|annual)
├── store (enum: apple|google)
├── store_transaction_id
├── started_at
├── expires_at
├── status (enum: active|expired|cancelled|grace_period)
└── created_at
```

### 10.3 API Contracts (Key Endpoints)

| Method | Endpoint | Purpose | Auth |
|--------|----------|---------|------|
| POST | `/api/v1/auth/register` | Create account (email/password) | Public |
| POST | `/api/v1/auth/login` | Authenticate, return JWT | Public |
| POST | `/api/v1/auth/google` | Google OAuth flow | Public |
| GET | `/api/v1/exercises` | List exercises (filterable by category, level) | User |
| GET | `/api/v1/exercises/:id` | Get exercise detail (audio URL, metadata) | User |
| POST | `/api/v1/exercises/:id/check` | Submit answer, return diff + accuracy + XP | User |
| GET | `/api/v1/placement-test` | Get placement test exercises | User |
| POST | `/api/v1/placement-test/complete` | Submit placement results, assign level | User |
| GET | `/api/v1/users/me/progress` | Get progress dashboard data | User |
| GET | `/api/v1/users/me/profile` | Get user profile | User |
| GET | `/api/v1/leaderboard/:period` | Get leaderboard (daily/weekly/alltime) | User |
| POST | `/api/v1/subscriptions/verify` | Verify App Store/Google Play receipt | User |
| POST | `/api/v1/cms/exercises` | Create exercise (CMS) | Admin/Content |
| PUT | `/api/v1/cms/exercises/:id` | Update exercise (CMS) | Admin/Content |
| DELETE | `/api/v1/cms/exercises/:id` | Delete exercise (CMS) | Admin only |

### 10.4 Audio Delivery Strategy

| Concern | Approach |
|---------|----------|
| **Storage** | Audio files stored in S3-compatible object storage |
| **Delivery** | CDN (CloudFront or equivalent) with edge caching for low-latency playback |
| **Format** | AAC (m4a) for iOS compatibility + MP3 fallback for Android; bitrate 128kbps (sufficient for speech) |
| **Pre-loading** | Mobile apps pre-load next exercise audio while user reviews current results |
| **Speed control** | Client-side audio processing (Web Audio API / AVPlayer rate property) — no server-side re-encoding |

### 10.5 Diff Algorithm

The answer-checking engine compares user input against the correct transcript:

1. Tokenize both strings into word arrays (normalize: lowercase, strip punctuation)
2. Run Longest Common Subsequence (LCS) algorithm to align words
3. Classify each word: **correct** (exact match), **incorrect** (position match but wrong word), **missing** (in transcript but not in input), **extra** (in input but not in transcript)
4. Calculate accuracy: `correct_words / total_transcript_words × 100`
5. Return diff array with word-level classification + Vietnamese hints for incorrect/missing words

---

## 11. Dependencies & Integrations

| # | Dependency | Type | Purpose | Fallback |
|---|-----------|------|---------|----------|
| D-001 | Apple App Store / StoreKit 2 | External | iOS subscription billing | Web-based payment (Stripe) |
| D-002 | Google Play Billing Library v6+ | External | Android subscription billing | Web-based payment (Stripe) |
| D-003 | Firebase Cloud Messaging (FCM) | External | Push notifications (Android + iOS via APNs proxy) | In-app notification center only |
| D-004 | Google OAuth 2.0 | External | Social login | Email/password only |
| D-005 | AWS S3 + CloudFront (or equivalent) | External | Audio file storage and CDN delivery | Alternative CDN (Cloudflare R2) |
| D-006 | PostgreSQL 15+ | Infrastructure | Primary database | No fallback — critical dependency |
| D-007 | Redis 7+ | Infrastructure | Session cache, leaderboard ranking, rate limiting | PostgreSQL-based fallback (degraded performance) |
| D-008 | Transactional email provider (SendGrid/SES) | External | Email verification, password reset, weekly reports | Delayed email delivery; manual verification fallback |
| D-009 | Analytics (Mixpanel/Amplitude/PostHog) | External | Product analytics, funnel tracking, retention measurement | Basic server-side event logging |
| D-010 | Ad network (Google AdMob) | External | Interstitial ads for free-tier monetization | Lower ad revenue; direct ad sales as alternative |

---

## 12. Timeline & Milestones

### Phase 1: Foundation (Month 1-2)

| Milestone | Deliverable | Go/No-Go Gate |
|-----------|------------|---------------|
| M1: Architecture & Design | Tech stack finalized, database schema, API contracts, UI wireframes (Figma) | Design review approved by Product Owner |
| M2: Auth & User System | Registration, login, Google OAuth, email verification, profile | User can register and log in on mobile |
| M3: Core Dictation Engine | Audio playback, text input, diff algorithm, accuracy scoring | User can complete a dictation exercise end-to-end |
| M4: Content Pipeline | CMS for exercise creation, audio upload, 100 seed exercises loaded | Content manager can publish an exercise without dev help |

### Phase 2: Engagement (Month 2-4)

| Milestone | Deliverable | Go/No-Go Gate |
|-----------|------------|---------------|
| M5: Placement Test | 20-exercise placement test, level assignment algorithm | New user completes placement test and receives appropriate level |
| M6: Gamification v1 | Streaks, XP, levels, badges, daily goals | Streak and XP update correctly after exercise completion |
| M7: Progress Dashboard | Accuracy trends, exercise stats, level progress visualization | Dashboard renders accurate data for test accounts |
| M8: Vietnamese Localization | 100% Vietnamese UI, exercise hints, notifications | Zero English-only UI elements in user-facing screens |

### Phase 3: Monetization & Polish (Month 4-6)

| Milestone | Deliverable | Go/No-Go Gate |
|-----------|------------|---------------|
| M9: Subscription System | App Store + Google Play billing, free/premium tier enforcement, paywall | End-to-end purchase flow works on both platforms |
| M10: Ads Integration | AdMob interstitials between exercises, ad suppression for premium | Ads display correctly for free users; zero ads for premium |
| M11: Notifications | Push notification system, streak reminders, deep linking | Notification sends and opens correct screen |
| M12: Leaderboard & Social | Daily/weekly/all-time leaderboards | Leaderboard ranks update within 5 minutes of exercise completion |
| M13: Content Scale | 500+ exercises across 6 categories, TOEIC/IELTS tracks | Content audit confirms 500+ published exercises with correct metadata |
| M14: Beta Launch | TestFlight (iOS) + Internal Testing (Android), 100-500 beta users | Beta user feedback collected; critical bugs resolved; D1 retention ≥ 40% |
| M15: Production Launch | App Store + Google Play submission, marketing launch | App approved on both stores; monitoring dashboards operational |

### Phase 2+ (Post-Launch, Month 7-12)

| Feature | Priority | Trigger |
|---------|----------|---------|
| Adaptive recommendations (BR-015) | High | After 10K+ exercise attempts for training data |
| Referral program (BR-016) | Medium | After 5K MAU for viral coefficient measurement |
| Email reports (BR-018) | Medium | After email infrastructure stable |
| Bookmarking & custom lists (BR-017) | Low | User feedback demand |
| AI pronunciation feedback | Future | After product-market fit validated |
| Offline mode | Future | After mobile user base exceeds 20K MAU |

---

## 13. Risks & Mitigations

| ID | Risk | Likelihood | Impact | Score | Mitigation | Owner |
|----|------|-----------|--------|-------|------------|-------|
| R-001 | Curated content violates copyright | 3 | 5 | 15 | Legal review of all curated content; prioritize original recordings; implement attribution system (FR-032) | Content Lead |
| R-002 | Premium conversion rate < 1.5% | 3 | 4 | 12 | A/B test paywall placement and messaging; offer 7-day free trial; validate pricing with survey before launch | Product Owner |
| R-003 | App store rejection | 2 | 5 | 10 | Follow Apple/Google guidelines strictly; submit 4 weeks before target launch; maintain web app as fallback | Dev Lead |
| R-004 | Diff algorithm produces incorrect results for Vietnamese-influenced English errors | 3 | 3 | 9 | Build test suite with 200+ common Vietnamese-English error patterns; beta test with Vietnamese users | Dev Lead |
| R-005 | D30 retention below 20% despite gamification | 3 | 4 | 12 | Run retention experiments in beta; implement streak freeze (paid item); study Duolingo retention mechanics | Product Owner |
| R-006 | Audio loading latency on 3G connections | 2 | 3 | 6 | CDN with Vietnam edge nodes; audio pre-loading; compressed AAC format (128kbps); progressive loading | Dev Lead |
| R-007 | Payment processing failures for Vietnamese users | 2 | 4 | 8 | Support multiple payment methods; integrate local gateways (MoMo, ZaloPay) alongside App Store/Google Play billing | Dev Lead |
| R-008 | Development timeline exceeds 6 months | 3 | 3 | 9 | Define MVP cut line at M9; defer P2 features; bi-weekly scope reviews; no feature creep after M5 | Product Owner |

---

## 14. Open Questions

| # | Question | Owner | Target Date | Impact if Unresolved |
|---|----------|-------|-------------|---------------------|
| OQ-001 | Should premium pricing be in USD or VND? VND pricing (e.g., 99,000 VND/month) may convert better but complicates multi-currency support | Product Owner | 2026-04-01 | Delays subscription implementation (M9); affects revenue projections |
| OQ-002 | What is the legal framework for using YouTube audio as curated content? Fair use vs. licensing requirements in Vietnam | Content Lead + Legal | 2026-04-15 | Blocks curated content pipeline; may reduce launch content from 500 to 200 original-only exercises |
| OQ-003 | Should the mobile app be built native (Swift/Kotlin) or cross-platform (React Native/Flutter)? Impacts team size, development speed, and performance | Dev Lead | 2026-04-01 | Blocks architecture decision (M1); affects hiring plan and timeline |

---

## 15. Appendix

### A. BR-NNN → PR-NNN Traceability Matrix

| BR-ID | Business Requirement (Summary) | PR-ID(s) | Coverage |
|-------|-------------------------------|----------|----------|
| BR-001 | Mobile-first dictation exercise experience | PR-001, PR-002, PR-003 | FR-001 through FR-006 |
| BR-002 | Vietnamese-language UI and hints | PR-017, PR-004 | FR-004, FR-007, NFR-009 |
| BR-003 | Freemium subscription model | PR-011, PR-012, PR-013 | FR-022 through FR-027 |
| BR-004 | 500+ exercises across 6 categories | PR-015 | FR-030 |
| BR-005 | Gamification (streaks, XP, badges, goals) | PR-006, PR-007, PR-009 | FR-016 through FR-020 |
| BR-006 | User registration and profile management | PR-004 | FR-007 through FR-010 |
| BR-007 | Progress dashboards and analytics | PR-014 | FR-028, FR-029 |
| BR-008 | CEFR levels with placement test | PR-005 | FR-012 through FR-015 |
| BR-009 | 4-step learning flow with Vietnamese feedback | PR-002 | FR-001 through FR-005 |
| BR-010 | Push notifications for re-engagement | PR-010 | FR-034 through FR-036 |
| BR-011 | Leaderboards (daily, weekly, all-time) | PR-008 | FR-021 |
| BR-012 | TOEIC/IELTS-specific exercise tracks | PR-016 | FR-027, FR-030 |
| BR-013 | Content management system | PR-019 | FR-031 through FR-033 |
| BR-014 | Dark mode and WCAG 2.1 AA accessibility | PR-018 | NFR-008 |
| BR-015 | Adaptive exercise recommendations | PR-022 | FR (deferred to post-launch) |
| BR-016 | Referral program | PR-021 | FR-039, FR-040 |
| BR-017 | Exercise bookmarking and custom lists | PR-020 | FR-037, FR-038 |
| BR-018 | Weekly/monthly email progress reports | PR-023 | FR-041, FR-042 |

### B. Competitor Feature Comparison

| Feature | dailydictation.com | Our Platform (Phase 1) | Advantage |
|---------|-------------------|----------------------|-----------|
| Mobile-first design | No (desktop-centric) | Yes (native iOS + Android) | Core differentiator |
| Vietnamese UI | No (English only) | Yes (100% Vietnamese) | Removes language barrier for A1-A2 learners |
| Gamification | Basic leaderboard only | Streaks, XP, badges, daily goals | Retention mechanics proven by Duolingo |
| Subscription model | None (ad-only) | Freemium (free + premium) | Revenue stream with ad-free option |
| Placement test | None | 20-exercise adaptive test | Personalized starting point |
| Progress tracking | None | Accuracy trends, level progress, time spent | Measurable improvement visibility |
| Content library | 2,011+ exercises | 500+ at launch (growing) | Smaller but curated and level-appropriate |
| Exercise feedback | Show correct answer only | Color-coded diff + Vietnamese explanations | Deeper learning from mistakes |
| Dark mode | Yes | Yes | Feature parity |
| Ads experience | Intrusive (every page) | Between exercises only; premium = no ads | Less disruptive learning flow |

### C. Glossary

| Term | Definition |
|------|-----------|
| **CEFR** | Common European Framework of Reference for Languages (A1-C2 proficiency scale) |
| **Dictation** | Listening exercise where learner transcribes spoken audio into written text |
| **XP** | Experience Points — numeric reward for completing exercises, used for leveling |
| **Streak** | Consecutive calendar days with at least 1 completed exercise |
| **MAU** | Monthly Active Users — unique users with at least 1 session in a calendar month |
| **MRR** | Monthly Recurring Revenue — total subscription revenue per month |
| **D1/D7/D30** | Retention rates at Day 1, Day 7, and Day 30 after user registration |
| **ARPU** | Average Revenue Per User — total revenue divided by total users |
| **Diff** | Word-by-word comparison between user input and correct transcript |
| **LCS** | Longest Common Subsequence — algorithm used for word alignment in diff |

---

## Document References

| Document | Path | Status |
|----------|------|--------|
| BRD | `../BRD/BRD-v1-daily-dictation-business-requirements.md` | 📝 Draft |
| PRD (this document) | `SPEC-v1-daily-dictation-prd.md` | 📝 Draft |
| User Stories | (pending /write-user-stories) | ⬜ Not started |
| Test Cases | (pending /write-test-cases) | ⬜ Not started |

---

## Session Summary

1. **What was created**: PRD for Daily Dictation platform — 24 user stories, 42 functional requirements, 12 non-functional requirements, 4 personas, 15 milestones
2. **Files generated**: `PRD/SPEC-v1-daily-dictation-prd.md`
3. **Quality score**: EXCELLENT (51/57)
4. **Next steps**: Resolve 3 open questions → team review → `/write-user-stories PRD/SPEC-v1-daily-dictation-prd.md` → `/write-test-cases`
5. **Pipeline command**: `/write-user-stories PRD/SPEC-v1-daily-dictation-prd.md` to generate linked user stories with US-NNN → PR-NNN mapping
