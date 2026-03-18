# Epic 05: Gamification — XP & Levels

**Related BRs**: BR-005
**Related SRs**: SR-FN-028 to SR-FN-030, SR-FN-035, SR-FN-036

---

## US-018: Earn XP After Exercise

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-012 (exercise completion), US-016 (streak multiplier) |

### Acceptance Criteria

**AC 1 — XP formula applied correctly**
> **Given** Linh completes an exercise
> **When** XP is calculated
> **Then** the formula is: XP = (10 + accuracy% x 0.1) x streak_multiplier, rounded to the nearest integer

**AC 2 — Example: 85% accuracy with 10-day streak**
> **Given** Linh scores 85% accuracy and has a 10-day streak (1.5x multiplier)
> **When** XP is calculated
> **Then** XP = (10 + 85 x 0.1) x 1.5 = (10 + 8.5) x 1.5 = 18.5 x 1.5 = 27.75 → **28 XP**

**AC 3 — Example: 100% accuracy with 30-day streak**
> **Given** Linh scores 100% accuracy and has a 30-day streak (2.0x multiplier)
> **When** XP is calculated
> **Then** XP = (10 + 100 x 0.1) x 2.0 = (10 + 10) x 2.0 = 20 x 2.0 = **40 XP**

**AC 4 — Example: 50% accuracy with 0-day streak**
> **Given** Linh scores 50% accuracy and has a 0-day streak (1.0x multiplier)
> **When** XP is calculated
> **Then** XP = (10 + 50 x 0.1) x 1.0 = (10 + 5) x 1.0 = **15 XP**

**AC 5 — XP animation**
> **Given** Linh has earned 28 XP
> **When** the exercise completion screen is displayed
> **Then** the XP counter animates from 0 to 28 over approximately 1 second

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-028 | XP formula: (10 + accuracy% x 0.1) x streak_multiplier |
| RULE-004 | XP calculation rule with streak multiplier tiers |

---

## US-019: Level Up

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-018 |

### Acceptance Criteria

**AC 1 — Celebration screen on level up**
> **Given** Linh's total XP crosses the threshold for the next level (e.g., 500 XP for Level 3)
> **When** the XP from the latest exercise pushes her past the threshold
> **Then** a celebration screen is displayed with an animation and the message "Chúc mừng! Bạn đã đạt Cấp độ 3!"

**AC 2 — New level shown**
> **Given** the celebration screen is displayed
> **When** Linh views it
> **Then** her new level number and the XP required for the next level are shown (e.g., "Cấp độ 3 — Cần 1000 XP để lên Cấp độ 4")

**AC 3 — Profile updates after dismissal**
> **Given** the celebration screen is displayed
> **When** Linh taps "Tiếp tục" to dismiss it
> **Then** her profile is updated to reflect the new level

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-029 | Level-up trigger: XP crosses level threshold |
| SR-FN-030 | Level-up celebration screen |

---

## US-020: View XP and Level in Profile

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | US-018, US-019 |

### Acceptance Criteria

**AC 1 — Profile displays XP, level, progress bar, and streak**
> **Given** Linh navigates to her profile screen
> **When** the screen loads
> **Then** it displays: total XP (e.g., "750 XP"), current level (e.g., "Cấp độ 3"), a progress bar showing XP toward the next level (e.g., 750/1000), and current streak (e.g., "12 ngày liên tiếp")

**AC 2 — Streak multiplier badge for ≥7 days**
> **Given** Linh has a streak of 15 days (1.5x multiplier tier)
> **When** she views her profile
> **Then** a badge is displayed showing "1.5x" next to the streak counter

**AC 3 — No badge for streak less than 7 days**
> **Given** Linh has a streak of 4 days (1.0x multiplier tier)
> **When** she views her profile
> **Then** no multiplier badge is displayed next to the streak counter

**AC 4 — XP history for last 30 days**
> **Given** Linh navigates to the XP section of her profile
> **When** she taps "Lịch sử XP"
> **Then** a list or chart displays her XP earned per day for the last 30 days

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-035 | Streak multiplier badge: 1.5x (7–29 days), 2.0x (30+ days) |
| SR-FN-036 | XP history: last 30 days |

---

← Back to [INDEX.md](INDEX.md)
