# Epic 10: Progress Analytics

**Related BRs**: BR-007
**Related SRs**: SR-IF-003, SR-FN-010

---

## US-033: View Progress Dashboard

| Field | Value |
|-------|-------|
| **Persona** | Linh (TOEIC preparer, free tier) |
| **Size** | L |
| **Priority** | Must Have |
| **Dependencies** | US-010 (exercise completion with scoring) |

### Acceptance Criteria

**AC 1 — Dashboard displays 5 data sections**
> **Given** Linh has completed 15 exercises over the past 30 days
> **When** she navigates to the "Tiến trình" (Progress) screen
> **Then** the dashboard displays 5 sections: (1) accuracy trend line chart for the last 30 days, (2) total exercises completed count, (3) current streak with multiplier value, (4) category breakdown pie chart (e.g., TOEIC 60%, IELTS 25%, General 15%), and (5) CEFR level progress bar per SR-IF-003

**AC 2 — Tap day shows exercise detail**
> **Given** Linh is viewing the 30-day accuracy trend chart
> **When** she taps on a specific day (e.g., March 10)
> **Then** a tooltip or detail panel shows the exercises completed that day with individual accuracy scores (e.g., "3 bài — 85%, 72%, 90%")

**AC 3 — Premium user sees advanced insights**
> **Given** Minh is a premium subscriber viewing the Progress screen
> **When** the dashboard renders
> **Then** additional advanced insights are displayed: weakest category recommendation, estimated TOEIC/IELTS score projection, and weekly improvement percentage

**AC 4 — New user with insufficient data sees placeholder**
> **Given** Hoa has completed fewer than 3 exercises total
> **When** she navigates to the Progress screen
> **Then** the dashboard displays the message "Hoàn thành thêm bài tập để xem thống kê" with an illustration and a "Bắt đầu luyện tập" button linking to the exercise catalog

**AC 5 — Dashboard loads within 2 seconds**
> **Given** Linh navigates to the Progress screen
> **When** the dashboard data is requested
> **Then** all 5 sections render completely within 2 seconds on a 4G connection (≥5 Mbps)

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-IF-003 | Progress dashboard UI: 5-section layout with charts |
| SR-FN-010 | Exercise scoring data feeds progress analytics |

---

## US-034: Filter Progress by Category

| Field | Value |
|-------|-------|
| **Persona** | Linh (TOEIC preparer, free tier) |
| **Size** | S |
| **Priority** | Should Have |
| **Dependencies** | US-033 |

### Acceptance Criteria

**AC 1 — Filter by specific category**
> **Given** Linh is viewing the Progress dashboard showing all categories
> **When** she taps the category filter and selects "IELTS"
> **Then** all 5 dashboard sections update to show only IELTS-related data (accuracy trend, exercise count, category breakdown shows IELTS sub-categories only, CEFR progress for IELTS exercises)

**AC 2 — Clear filter returns all data**
> **Given** Linh has the "IELTS" category filter active on the Progress dashboard
> **When** she taps "Tất cả" or the clear filter button
> **Then** the dashboard reverts to showing aggregated data across all categories

**AC 3 — Filter indicator visible when active**
> **Given** Linh has applied the "TOEIC" category filter
> **When** the filtered dashboard is displayed
> **Then** a visible filter indicator (e.g., chip or badge reading "TOEIC") is shown near the top of the screen, and the filter can be cleared by tapping the "×" on the indicator

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-IF-003 | Progress dashboard: supports category filtering |

---

← Back to [INDEX.md](INDEX.md)
