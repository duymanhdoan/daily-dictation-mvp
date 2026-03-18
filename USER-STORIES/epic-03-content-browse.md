# Epic 03: Content & Browse

**Related BRs**: BR-004
**Related SRs**: SR-FN-045 to SR-FN-048, SR-PF-006, SR-DA-003

---

## US-013: Browse Exercises by Category

| Field | Value |
|-------|-------|
| **Persona** | Hoa (learner, experienced) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-005 or US-006 (placement test completed or skipped) |

### Acceptance Criteria

**AC 1 — Category grid displayed**
> **Given** Hoa navigates to the exercise catalog
> **When** the catalog screen loads
> **Then** a grid of categories is displayed, each showing: category name, CEFR level range (e.g., "A1–B1"), exercise count, and a thumbnail image

**AC 2 — Tap category shows exercise list**
> **Given** Hoa is viewing the category grid
> **When** she taps on a category (e.g., "Tin tức")
> **Then** the system displays a list of exercises belonging to that category, ordered by difficulty

**AC 3 — Infinite scroll with 20 per page**
> **Given** Hoa is viewing an exercise list with more than 20 exercises
> **When** she scrolls to the bottom of the current page
> **Then** the next 20 exercises load automatically within 500 milliseconds

**AC 4 — Empty category message**
> **Given** Hoa taps on a category that has no exercises
> **When** the exercise list loads
> **Then** the screen displays "Không tìm thấy bài tập" with an illustration

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-045 | Category browsing: grid layout with metadata |
| SR-PF-006 | Infinite scroll pagination: 20 items per page, ≤500ms load |
| SR-DA-003 | Category data model: name, level range, count, thumbnail |

---

## US-014: Filter Exercises by CEFR Level

| Field | Value |
|-------|-------|
| **Persona** | Hoa (learner, experienced) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | US-013 |

### Acceptance Criteria

**AC 1 — Level filter options**
> **Given** Hoa is viewing the exercise catalog or a category list
> **When** she taps the level filter
> **Then** filter options are displayed: A1, A2, B1, B2, C1

**AC 2 — Combined category and level filter**
> **Given** Hoa is viewing the "Tin tức" category
> **When** she selects the "B1" level filter
> **Then** only B1-level exercises within the "Tin tức" category are displayed

**AC 3 — Zero results with Vietnamese empty state**
> **Given** Hoa has applied a category + level filter combination
> **When** no exercises match the filter
> **Then** the screen displays "Không tìm thấy bài tập phù hợp với bộ lọc." with a "Xóa bộ lọc" button

**AC 4 — Filter indicator visible**
> **Given** Hoa has applied a level filter
> **When** the exercise list is displayed
> **Then** the active filter is visually indicated (e.g., a badge showing "B1" on the filter button)

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-046 | CEFR level filter: A1, A2, B1, B2, C1 |
| SR-FN-047 | Combined category + level filtering |

---

## US-015: View Exercise Card Details

| Field | Value |
|-------|-------|
| **Persona** | Hoa (learner, experienced) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | US-013 |

### Acceptance Criteria

**AC 1 — Card displays metadata**
> **Given** Hoa is browsing the exercise list
> **When** she views an exercise card
> **Then** the card displays: title, category name, CEFR level badge (e.g., "B1"), and estimated duration (e.g., "2 phút")

**AC 2 — Completed exercise shows checkmark and accuracy**
> **Given** Hoa has previously completed an exercise with 85% accuracy
> **When** she views that exercise card in the list
> **Then** the card shows a green checkmark icon and "85%" accuracy label

**AC 3 — Premium-only exercise shows lock**
> **Given** Hoa is a free-tier user
> **When** she views an exercise card that is premium-only
> **Then** the card displays a lock icon and a "Premium" label

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-048 | Exercise card: title, category, level, duration, completion status |
| SR-DA-003 | Exercise metadata model |

---

← Back to [INDEX.md](INDEX.md)
