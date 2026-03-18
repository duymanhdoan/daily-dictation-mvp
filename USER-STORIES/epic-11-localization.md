# Epic 11: Localization

**Related BRs**: BR-002
**Related SRs**: SR-CN-003, SR-FN-058

---

## US-035: Navigate Platform in Vietnamese

| Field | Value |
|-------|-------|
| **Persona** | Hoa (casual learner, free tier) |
| **Size** | L |
| **Priority** | Must Have |
| **Dependencies** | None |

### Acceptance Criteria

**AC 1 — Vietnamese default for vi-VN locale**
> **Given** Hoa's device locale is set to "vi-VN"
> **When** she opens the app for the first time
> **Then** the entire UI (navigation, labels, buttons, tooltips) is displayed in Vietnamese without any manual language selection per SR-CN-003

**AC 2 — 100% Vietnamese on all screens**
> **Given** Hoa is using the app with Vietnamese locale
> **When** she navigates to any screen (registration, catalog, exercise, settings, leaderboard, progress, paywall, notifications settings)
> **Then** all UI text is in Vietnamese with proper diacritics — zero hardcoded English strings remain in any user-facing element

**AC 3 — Exercise content remains in English**
> **Given** Hoa is completing a dictation exercise with Vietnamese UI
> **When** the exercise audio plays and the transcript is displayed
> **Then** the exercise content (audio transcript, correct answers, vocabulary) remains in English, while all surrounding UI elements (buttons, instructions, labels) are in Vietnamese

**AC 4 — Error messages displayed in Vietnamese**
> **Given** Hoa encounters an error (network failure, server error, validation failure)
> **When** the error message is displayed
> **Then** the message is in Vietnamese (e.g., "Không thể kết nối. Vui lòng kiểm tra mạng và thử lại." for network errors, not "Connection failed")

**AC 5 — System notifications in Vietnamese**
> **Given** Hoa has enabled push notifications and her device locale is vi-VN
> **When** the system sends a push notification (streak reminder, new content, subscription expiry)
> **Then** the notification title and body are in Vietnamese with proper diacritics

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-CN-003 | Default language: Vietnamese for vi-VN locale |

---

## US-036: Receive Vietnamese Push Notifications

| Field | Value |
|-------|-------|
| **Persona** | Hoa (casual learner, free tier) |
| **Size** | S |
| **Priority** | Should Have |
| **Dependencies** | US-037 (notification opt-in) |

### Acceptance Criteria

**AC 1 — Streak reminder in Vietnamese**
> **Given** Hoa has opted into push notifications and has not completed an exercise today
> **When** the streak reminder is triggered at the configured time
> **Then** the notification is delivered in Vietnamese (e.g., "Đừng quên luyện tập hôm nay! Chuỗi 5 ngày đang chờ bạn.") per SR-FN-058

**AC 2 — New content notification in Vietnamese**
> **Given** Hoa has opted into push notifications and new exercises have been published
> **When** the new content notification is sent
> **Then** the notification is delivered in Vietnamese (e.g., "10 bài tập mới vừa được thêm! Khám phá ngay.") per SR-FN-058

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-058 | Push notifications: Vietnamese content for vi-VN users |

---

← Back to [INDEX.md](INDEX.md)
