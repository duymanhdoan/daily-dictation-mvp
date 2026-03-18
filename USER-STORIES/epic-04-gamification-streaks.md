# Epic 04: Gamification — Streaks

**Related BRs**: BR-005
**Related SRs**: SR-FN-025 to SR-FN-027, SR-DA-004, SR-CN-004

---

## US-016: Earn Daily Streak

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-012 (exercise completion) |

### Acceptance Criteria

**AC 1 — Streak increments on first exercise of the calendar day**
> **Given** Linh has a current streak of 5 days and has not completed any exercise today (UTC+7)
> **When** she completes her first exercise of the day
> **Then** her streak increments to 6 days

**AC 2 — Multiple exercises same day count as one**
> **Given** Linh has completed 1 exercise today and her streak is 6 days
> **When** she completes a second exercise on the same calendar day (UTC+7)
> **Then** her streak remains at 6 days (no additional increment)

**AC 3 — Late-night exercise counts for today**
> **Given** Linh completes an exercise at 23:50 UTC+7
> **When** the system evaluates the streak
> **Then** the exercise counts for today's calendar date (not the next day)

**AC 4 — Streak multiplier updates**
> **Given** Linh has an active streak
> **When** the streak value changes
> **Then** the streak multiplier is calculated as:
> - Days 0–6: 1.0x multiplier
> - Days 7–29: 1.5x multiplier
> - Days 30+: 2.0x multiplier

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-025 | Daily streak: increments on first exercise per calendar day |
| SR-DA-004 | Streak data: current streak, longest streak, last activity date |
| SR-CN-004 | Timezone: all streak calculations use UTC+7 (Vietnam time) |

---

## US-017: Receive Streak Reset Notification

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | US-016 |

### Acceptance Criteria

**AC 1 — Missed day resets streak to 0**
> **Given** Linh had a streak of 12 days and did not complete any exercise yesterday (UTC+7)
> **When** she opens the app today
> **Then** her streak is reset to 0

**AC 2 — Modal shows streak ended message**
> **Given** Linh's streak has been reset from 12 to 0
> **When** she opens the app for the first time after the reset
> **Then** a modal displays "Chuỗi 12 ngày đã kết thúc" along with her record streak (e.g., "Kỷ lục: 12 ngày") and a "Bắt đầu lại" button

**AC 3 — Record streak updates**
> **Given** Linh's broken streak of 12 days was her longest streak ever
> **When** the streak resets
> **Then** her record (longest) streak is updated to 12 days; if the broken streak was shorter than the existing record, the record remains unchanged

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-026 | Streak reset: missed calendar day resets to 0 |
| SR-FN-027 | Streak reset notification with modal message |

---

← Back to [INDEX.md](INDEX.md)
