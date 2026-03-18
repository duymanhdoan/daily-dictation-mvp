# Epic 08: Freemium Model

**Related BRs**: BR-003
**Related SRs**: SR-FN-037, SR-FN-038, SR-IF-004, SR-CN-004

---

## US-026: Use Free Tier with Daily Limit

| Field | Value |
|-------|-------|
| **Persona** | Hoa (casual learner, free tier) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-007 (exercise start) |

### Acceptance Criteria

**AC 1 — Daily exercise counter visible**
> **Given** Hoa is a free-tier user and has completed 3 exercises today
> **When** she views the exercise catalog or starts an exercise
> **Then** a counter displays "3/5 bài hôm nay" indicating her remaining daily allowance per SR-FN-037

**AC 2 — Paywall shown on 6th exercise attempt**
> **Given** Hoa has completed 5 exercises today (the daily free limit)
> **When** she attempts to start a 6th exercise
> **Then** the system displays a paywall screen per SR-IF-004 showing 3 subscription tiers with benefits comparison and a "Nâng cấp ngay" call-to-action button

**AC 3 — Counter resets at midnight Vietnam time**
> **Given** Hoa used all 5 free exercises on March 15 (UTC+7)
> **When** the clock reaches 00:00 UTC+7 on March 16
> **Then** her daily counter resets to "0/5 bài hôm nay" and she can start exercises again per SR-CN-004

**AC 4 — Paywall displays subscription tiers and benefits**
> **Given** Hoa is viewing the paywall screen
> **When** the screen renders
> **Then** it displays 3 subscription tiers (Monthly, Quarterly, Annual) with their prices, a benefit comparison list, and a prominent "Nâng cấp ngay" CTA button

**AC 5 — "Quay lại" link returns to previous screen**
> **Given** Hoa is viewing the paywall screen
> **When** she taps "Quay lại"
> **Then** she is returned to the previous screen (exercise catalog or exercise detail) without any state change

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-037 | Free tier: 5 exercises per calendar day |
| SR-IF-004 | Paywall UI: tier comparison, CTA, and dismiss |
| SR-CN-004 | Timezone: all daily resets use UTC+7 (Vietnam time) |

---

## US-027: View Ads Between Exercises

| Field | Value |
|-------|-------|
| **Persona** | Hoa (casual learner, free tier) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | US-007 (exercise start) |

### Acceptance Criteria

**AC 1 — Interstitial ad shown between exercises for free users**
> **Given** Hoa is a free-tier user and has just completed an exercise
> **When** she navigates to the next exercise or returns to the catalog
> **Then** an interstitial ad is displayed for a maximum of 5 seconds with a visible "Bỏ qua" (skip) button after 3 seconds per SR-FN-038

**AC 2 — Zero ads during active exercise**
> **Given** Hoa is actively completing a dictation exercise (listening, typing, or reviewing answers)
> **When** the exercise is in progress
> **Then** no ads of any kind (interstitial, banner, or overlay) are displayed per RULE-011

**AC 3 — Premium users see zero ads**
> **Given** Minh is a premium subscriber
> **When** he navigates between exercises or uses any screen in the app
> **Then** no ads of any kind are displayed anywhere in the application

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-038 | Interstitial ads between exercises for free-tier users |
| RULE-011 | No ads during active exercise sessions |

---

← Back to [INDEX.md](INDEX.md)
