# Epic 09: Premium Subscription

**Related BRs**: BR-003, BR-012
**Related SRs**: SR-FN-039 to SR-FN-044, SR-FN-020, SR-FN-060, SR-IF-009, SR-IF-010, SR-SC-008, SR-MB-005, SR-MB-006

---

## US-028: Subscribe to Premium Plan

| Field | Value |
|-------|-------|
| **Persona** | Minh (IELTS aspirant, premium) |
| **Size** | L |
| **Priority** | Must Have |
| **Dependencies** | US-001 (registration) |

### Acceptance Criteria

**AC 1 — Three subscription plans displayed**
> **Given** Minh navigates to the Premium subscription screen
> **When** the screen renders
> **Then** 3 plans are displayed: Monthly at $9.99/month, Quarterly at $7.99/month (billed $23.97), and Annual at $4.99/month (billed $59.88) per RULE-002

**AC 2 — Annual plan has recommendation badge**
> **Given** Minh is viewing the subscription screen
> **When** the 3 plans are displayed
> **Then** the Annual plan has a prominent "Khuyến nghị" badge to indicate the recommended option

**AC 3 — Successful purchase activates premium within 10 seconds**
> **Given** Minh selects the Annual plan and completes the payment flow
> **When** the payment is confirmed by the store
> **Then** his account is upgraded to premium status within 10 seconds, and the app displays "Chúc mừng! Bạn đã là thành viên Premium." confirmation

**AC 4 — Payment failure shows error message**
> **Given** Minh selects a plan and initiates payment
> **When** the payment fails (declined card, insufficient funds, network error)
> **Then** the system displays "Thanh toán không thành công. Vui lòng thử lại." and returns him to the subscription screen

**AC 5 — Already premium shows current plan details**
> **Given** Minh is already a premium subscriber on the Annual plan
> **When** he navigates to the subscription screen
> **Then** the screen displays his current plan ("Gói Năm"), renewal date, and a "Quản lý đăng ký" button instead of purchase options

**AC 6 — Server-side receipt validation**
> **Given** Minh completes a purchase and the app sends the receipt to the server
> **When** the server validates the receipt with the respective store (Apple/Google)
> **Then** a tampered or invalid receipt is denied, the purchase is not activated, and the attempt is logged for fraud review per SR-SC-008

**AC 7 — iOS subscription terms shown before purchase**
> **Given** Minh is on an iOS device and viewing the subscription screen
> **When** the screen renders (before any purchase action)
> **Then** the screen displays subscription terms, auto-renewal disclosure, and links to Terms of Service and Privacy Policy in compliance with App Store guidelines per SR-MB-005

**AC 8 — Android uses Google Play Billing v6+ with RTDN**
> **Given** Minh is on an Android device and completes a subscription purchase
> **When** the transaction is processed
> **Then** the app uses Google Play Billing Library v6+ to handle the transaction, and Real-Time Developer Notifications (RTDN) are processed by the server within 60 seconds per SR-MB-006

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-039 | Premium subscription: 3 tiers (Monthly, Quarterly, Annual) |
| SR-FN-040 | Subscription pricing: $9.99 / $7.99 / $4.99 per month |
| SR-IF-009 | Subscription screen UI: plan comparison layout |
| SR-IF-010 | Payment confirmation and error UI |
| SR-SC-008 | Server-side receipt validation; fraud logging |
| SR-MB-005 | iOS: subscription terms, auto-renewal, ToS/Privacy links |
| SR-MB-006 | Android: Google Play Billing v6+, RTDN within 60s |
| RULE-002 | Pricing must match approved tier structure |

---

## US-029: Enjoy Ad-Free Premium Experience

| Field | Value |
|-------|-------|
| **Persona** | Minh (IELTS aspirant, premium) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | US-028 |

### Acceptance Criteria

**AC 1 — No ads displayed anywhere**
> **Given** Minh is a premium subscriber
> **When** he uses any screen in the application (catalog, exercise, leaderboard, settings, etc.)
> **Then** no ads of any kind (interstitial, banner, or overlay) are displayed

**AC 2 — Ads removed without app restart**
> **Given** Minh was a free-tier user viewing interstitial ads between exercises
> **When** he completes his premium subscription purchase
> **Then** all ads are immediately removed from the app without requiring a restart or re-login per SR-FN-044

**AC 3 — No banner ads on any screen**
> **Given** Minh is a premium subscriber
> **When** he navigates to any screen in the app
> **Then** no banner ad slots are rendered, and the screen layout uses the full available space

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-044 | Premium: ad-free experience, immediate activation |

---

## US-030: Access Premium TOEIC/IELTS Test Mode

| Field | Value |
|-------|-------|
| **Persona** | Minh (IELTS aspirant, premium) |
| **Size** | M |
| **Priority** | Should Have |
| **Dependencies** | US-028 |

### Acceptance Criteria

**AC 1 — Premium user starts timed test simulation**
> **Given** Minh is a premium subscriber and navigates to "Luyện thi" (Test Mode)
> **When** he selects a TOEIC or IELTS listening test simulation
> **Then** the system starts a timed test with a countdown timer, structured sections matching the real exam format, and sequential exercise delivery per SR-FN-043

**AC 2 — Free user sees paywall for test mode**
> **Given** Hoa is a free-tier user
> **When** she taps on "Luyện thi" (Test Mode)
> **Then** the system displays a paywall with the message "Nâng cấp Premium" and a description of test mode benefits

**AC 3 — Test results show score and platform comparison**
> **Given** Minh has completed a TOEIC listening test simulation
> **When** the results screen is displayed
> **Then** it shows his score (e.g., "Estimated TOEIC Listening: 420/495"), accuracy percentage, and a comparison against the platform average (e.g., "Trung bình nền tảng: 380/495")

**AC 4 — Individual exercises remain free**
> **Given** Hoa is a free-tier user
> **When** she browses the exercise catalog
> **Then** individual exercises are accessible within her daily free limit (5/day) regardless of whether they belong to a TOEIC or IELTS category per RULE-008

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-043 | Premium test mode: timed TOEIC/IELTS simulation |
| RULE-008 | Individual exercises always accessible under free tier limits |

---

## US-031: Manage Subscription

| Field | Value |
|-------|-------|
| **Persona** | Minh (IELTS aspirant, premium) |
| **Size** | M |
| **Priority** | Should Have |
| **Dependencies** | US-028 |

### Acceptance Criteria

**AC 1 — Subscription status visible in settings**
> **Given** Minh is a premium subscriber on the Quarterly plan
> **When** he navigates to Settings → "Tài khoản"
> **Then** the screen displays his subscription tier ("Gói Quý"), next renewal date, and payment method summary

**AC 2 — "Quản lý đăng ký" opens native store management**
> **Given** Minh is viewing his subscription status in settings
> **When** he taps "Quản lý đăng ký"
> **Then** the system opens the native subscription management screen (App Store on iOS, Google Play on Android) per SR-FN-060

**AC 3 — Retention offer on cancel intent**
> **Given** Minh taps "Hủy đăng ký" (Cancel Subscription) within the app
> **When** the cancellation intent is detected
> **Then** the system displays a retention offer (e.g., "Giảm 30% cho tháng tiếp theo") before redirecting to the native store cancellation flow

**AC 4 — Cancel confirmation shows expiry date**
> **Given** Minh has confirmed cancellation through the native store
> **When** he returns to the app's subscription settings
> **Then** the screen displays "Đăng ký sẽ hết hạn vào [date]" and confirms he retains premium access until the expiry date

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-060 | Subscription management: open native store screen |

---

## US-032: Handle Subscription Expiration

| Field | Value |
|-------|-------|
| **Persona** | Minh (IELTS aspirant, premium) |
| **Size** | M |
| **Priority** | Should Have |
| **Dependencies** | US-028 |

### Acceptance Criteria

**AC 1 — Warning banner 3 days before expiry**
> **Given** Minh's premium subscription expires on March 20
> **When** he opens the app on March 17, March 18, or March 19
> **Then** a dismissible warning banner displays "Đăng ký Premium hết hạn trong X ngày. Gia hạn ngay?" with a "Gia hạn" button per SR-FN-042

**AC 2 — 7-day grace period maintains premium**
> **Given** Minh's subscription expired on March 20 due to a failed renewal payment
> **When** he uses the app on March 21 through March 27
> **Then** he retains full premium access during this 7-day grace period per SR-FN-041

**AC 3 — Grace period banner shows days remaining**
> **Given** Minh is in the 7-day grace period (subscription expired March 20, currently March 23)
> **When** he opens the app
> **Then** a persistent banner displays "Thanh toán chưa thành công. Còn 4 ngày để gia hạn." with a "Cập nhật thanh toán" button

**AC 4 — After grace period, revert to free tier**
> **Given** Minh's grace period has ended (subscription expired March 20, grace period ended March 27)
> **When** he opens the app on March 28
> **Then** his account reverts to free tier: daily exercise limit of 5 is enforced, ads are displayed, and test mode is locked behind the paywall

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-041 | Grace period: 7 days after failed renewal |
| SR-FN-042 | Expiry warning: banner shown 3 days before subscription end |

---

## US-050: Enforce Premium Session Limit

| Field | Value |
|-------|-------|
| **Persona** | Minh (IELTS aspirant, premium) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-028 |

### Acceptance Criteria

**AC 1 — 4th device login terminates oldest session**
> **Given** Minh is a premium subscriber logged in on 3 devices (phone, tablet, laptop)
> **When** he logs in on a 4th device (desktop)
> **Then** the oldest session (phone) is automatically terminated and that device shows "Phiên đã hết hạn. Vui lòng đăng nhập lại." per SR-FN-020 and RULE-010

**AC 2 — Free user has no session limit**
> **Given** Hoa is a free-tier user
> **When** she logs in on any number of devices simultaneously
> **Then** the system does not enforce any session limit and all sessions remain active

**AC 3 — Oldest session terminated within 5 seconds**
> **Given** Minh logs in on a 4th device, triggering session enforcement
> **When** the system processes the new login
> **Then** the oldest session is terminated within 5 seconds of the 4th device login

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-020 | Premium session limit: maximum 3 concurrent devices |
| RULE-010 | Session enforcement: terminate oldest session on limit breach |

---

← Back to [INDEX.md](INDEX.md)
