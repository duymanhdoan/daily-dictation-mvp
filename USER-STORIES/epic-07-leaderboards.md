# Epic 07: Leaderboards

**Related BRs**: BR-011
**Related SRs**: SR-FN-033, SR-FN-034, SR-IF-006

---

## US-023: View Daily Leaderboard

| Field | Value |
|-------|-------|
| **Persona** | Minh (IELTS aspirant, premium) |
| **Size** | M |
| **Priority** | Should Have |
| **Dependencies** | US-018 (XP earning) |

### Acceptance Criteria

**AC 1 — Top 100 users ranked by daily XP**
> **Given** Minh navigates to the Leaderboard screen
> **When** the "Hôm nay" tab is active
> **Then** the system displays the top 100 users ranked by daily XP earned, each row showing rank number, display name, avatar, and XP value (e.g., "#1 — Anh Tuấn — 450 XP")

**AC 2 — Current user highlighted**
> **Given** Minh is ranked #37 on the daily leaderboard
> **When** the list renders
> **Then** Minh's row is visually highlighted with a distinct background color distinguishing it from other rows

**AC 3 — Rank beyond 100 shown in sticky footer**
> **Given** Minh's daily XP places him at rank #142
> **When** the daily leaderboard loads
> **Then** a sticky footer bar displays "Hạng của bạn: #142" with his avatar and XP, and this bar remains visible while scrolling the top 100 list

**AC 4 — "Hôm nay" tab visually active**
> **Given** Minh opens the Leaderboard screen for the first time
> **When** the screen renders
> **Then** the "Hôm nay" tab is selected by default with an active visual indicator (underline or filled background) per SR-IF-006

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-033 | Leaderboard: top 100 by XP, current user rank |
| SR-IF-006 | Leaderboard UI: tab-based navigation with active indicator |

---

## US-024: View Weekly and All-Time Leaderboards

| Field | Value |
|-------|-------|
| **Persona** | Minh (IELTS aspirant, premium) |
| **Size** | S |
| **Priority** | Should Have |
| **Dependencies** | US-023 |

### Acceptance Criteria

**AC 1 — Weekly leaderboard shows 7-day XP rankings**
> **Given** Minh is on the Leaderboard screen
> **When** he taps the "Tuần" tab
> **Then** the system displays the top 100 users ranked by XP earned in the current calendar week (Monday 00:00 to Sunday 23:59, UTC+7)

**AC 2 — All-time leaderboard shows lifetime XP rankings**
> **Given** Minh is on the Leaderboard screen
> **When** he taps the "Tổng" tab
> **Then** the system displays the top 100 users ranked by total lifetime XP

**AC 3 — Consistent layout across all tabs**
> **Given** Minh switches between "Hôm nay", "Tuần", and "Tổng" tabs
> **When** each tab renders
> **Then** the layout is identical to the daily leaderboard (rank, name, avatar, XP per row; highlighted current user; sticky footer if rank > 100)

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-034 | Leaderboard tabs: daily, weekly, all-time |

---

## US-025: Find My Rank

| Field | Value |
|-------|-------|
| **Persona** | Minh (IELTS aspirant, premium) |
| **Size** | S |
| **Priority** | Should Have |
| **Dependencies** | US-023 |

### Acceptance Criteria

**AC 1 — Sticky footer shows own rank on all tabs**
> **Given** Minh is viewing any leaderboard tab ("Hôm nay", "Tuần", or "Tổng")
> **When** the leaderboard renders
> **Then** a sticky footer displays his current rank, avatar, display name, and XP for that time period

**AC 2 — Tap rank scrolls to position**
> **Given** Minh is ranked #37 on the daily leaderboard and the sticky footer shows "Hạng của bạn: #37"
> **When** he taps the sticky footer bar
> **Then** the list scrolls smoothly to position #37 and highlights his row

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-033 | Leaderboard: current user rank visibility |

---

← Back to [INDEX.md](INDEX.md)
