# Epic 06: Gamification — Badges

**Related BRs**: BR-005
**Related SRs**: SR-FN-031, SR-FN-032

---

## US-021: Earn Achievement Badge

| Field | Value |
|-------|-------|
| **Persona** | Hoa (learner, experienced) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-012 (exercise completion), US-016 (streak tracking) |

### Acceptance Criteria

**AC 1 — "Bước Đầu Tiên" badge on first exercise**
> **Given** Hoa has never completed an exercise before
> **When** she completes her first exercise
> **Then** the system awards the "Bước Đầu Tiên" (First Step) badge

**AC 2 — "Kiên Trì 7 Ngày" badge on 7-day streak**
> **Given** Hoa has maintained a daily streak
> **When** her streak reaches 7 consecutive days
> **Then** the system awards the "Kiên Trì 7 Ngày" (7-Day Persistence) badge

**AC 3 — "Trăm Bài" badge on 100 exercises**
> **Given** Hoa has completed 99 exercises in total
> **When** she completes her 100th exercise
> **Then** the system awards the "Trăm Bài" (Hundred Exercises) badge

**AC 4 — Notification popup on badge earn**
> **Given** Hoa has just earned a new badge
> **When** the badge is awarded
> **Then** a popup notification appears showing the badge icon, badge name (e.g., "Bước Đầu Tiên"), and a congratulatory message "Bạn đã nhận được huy hiệu mới!"

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-031 | Badge triggers: first exercise, 7-day streak, 100 exercises |

---

## US-022: View Badge Collection

| Field | Value |
|-------|-------|
| **Persona** | Hoa (learner, experienced) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | US-021 |

### Acceptance Criteria

**AC 1 — Earned badges displayed in grid with date**
> **Given** Hoa navigates to the badge collection screen
> **When** the screen loads
> **Then** earned badges are displayed in a grid, each showing the badge icon, name, and the date earned (e.g., "15 tháng 3, 2026")

**AC 2 — Locked badges show Vietnamese unlock criteria**
> **Given** Hoa has not yet earned the "Trăm Bài" badge
> **When** she views the badge collection
> **Then** the "Trăm Bài" badge is displayed in a locked/grayed-out state with the unlock criteria "Hoàn thành 100 bài tập"

**AC 3 — Badge count matches profile display**
> **Given** Hoa has earned 2 out of 3 available badges
> **When** she views the badge collection
> **Then** the header shows "2/3 huy hiệu" and this count matches the badge count shown on her profile screen

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-032 | Badge collection: earned with date, locked with unlock criteria |

---

← Back to [INDEX.md](INDEX.md)
