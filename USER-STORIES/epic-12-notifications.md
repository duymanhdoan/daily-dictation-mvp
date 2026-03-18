# Epic 12: Notifications

**Related BRs**: BR-010
**Related SRs**: SR-FN-057 to SR-FN-059, SR-IF-011, SR-PF-009, SR-MB-007

---

## US-037: Opt Into Push Notifications

| Field | Value |
|-------|-------|
| **Persona** | Hoa (casual learner, free tier) |
| **Size** | S |
| **Priority** | Should Have |
| **Dependencies** | US-001 (registration) |

### Acceptance Criteria

**AC 1 — Vietnamese pre-prompt shown before OS dialog**
> **Given** Hoa has completed onboarding and has not yet been asked about notifications
> **When** the notification opt-in prompt is triggered
> **Then** the app displays a custom Vietnamese pre-prompt with the message "Nhận nhắc nhở luyện tập hàng ngày" and two buttons: "Cho phép" and "Để sau" per SR-FN-057

**AC 2 — "Để sau" skips without triggering OS dialog**
> **Given** Hoa is viewing the custom notification pre-prompt
> **When** she taps "Để sau"
> **Then** the pre-prompt is dismissed, the native OS permission dialog is NOT triggered, and the app proceeds to the next screen per SR-IF-011

**AC 3 — Enable notifications later from settings**
> **Given** Hoa previously tapped "Để sau" on the notification pre-prompt
> **When** she navigates to Settings → "Thông báo" and toggles "Nhắc nhở luyện tập" on
> **Then** the native OS permission dialog is presented, and upon granting permission, push notifications are enabled

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-057 | Pre-prompt: Vietnamese custom dialog before OS notification permission |
| SR-IF-011 | Pre-prompt UI: "Cho phép" / "Để sau" buttons |

---

## US-038: Receive Streak Reminder

| Field | Value |
|-------|-------|
| **Persona** | Linh (TOEIC preparer, free tier) |
| **Size** | S |
| **Priority** | Should Have |
| **Dependencies** | US-037, US-016 (streak system) |

### Acceptance Criteria

**AC 1 — Reminder sent at 20:00 UTC+7**
> **Given** Linh has opted into push notifications and has a current streak of 14 days
> **When** the clock reaches 20:00 UTC+7 and she has not completed any exercise today
> **Then** she receives a push notification: "Đừng quên luyện tập hôm nay! Chuỗi 14 ngày đang chờ bạn." per SR-FN-058

**AC 2 — No reminder if exercise completed today**
> **Given** Linh has opted into push notifications and completed 2 exercises today before 20:00 UTC+7
> **When** the clock reaches 20:00 UTC+7
> **Then** no streak reminder notification is sent

**AC 3 — No notification if opted out**
> **Given** Linh has disabled push notifications in Settings → "Thông báo"
> **When** the clock reaches 20:00 UTC+7 regardless of whether she exercised today
> **Then** no push notification of any kind is sent to her device

**AC 4 — Notification delivered within 30 seconds**
> **Given** Linh is eligible for a streak reminder at 20:00 UTC+7
> **When** the scheduled time arrives
> **Then** the push notification is delivered to her device within 30 seconds of the scheduled time per SR-PF-009

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-058 | Streak reminder: daily at 20:00 UTC+7, Vietnamese text |
| SR-PF-009 | Notification delivery: within 30 seconds of scheduled time |

---

## US-039: Deep-Link From Notification to Exercise

| Field | Value |
|-------|-------|
| **Persona** | Linh (TOEIC preparer, free tier) |
| **Size** | S |
| **Priority** | Should Have |
| **Dependencies** | US-037, US-038 |

### Acceptance Criteria

**AC 1 — Streak reminder deep-links to exercise catalog**
> **Given** Linh receives a streak reminder notification
> **When** she taps the notification
> **Then** the app opens and navigates directly to the exercise catalog screen, filtered to her current CEFR level per SR-FN-059

**AC 2 — Content notification deep-links to specific exercise**
> **Given** Linh receives a new content notification referencing a specific exercise (e.g., "Bài tập mới: IELTS Listening — Cambridge 18")
> **When** she taps the notification
> **Then** the app opens and navigates directly to that specific exercise detail screen per SR-FN-059

**AC 3 — App not installed redirects to app store**
> **Given** a user without the app installed taps a shared deep link or notification link
> **When** the link is processed
> **Then** the system redirects to the appropriate app store (App Store for iOS, Google Play for Android) per SR-MB-007

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-059 | Deep-link: notification tap navigates to relevant screen |
| SR-MB-007 | Fallback: redirect to app store if app not installed |

---

← Back to [INDEX.md](INDEX.md)
