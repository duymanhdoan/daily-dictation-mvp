# Epic 01: Registration & Onboarding

**Related BRs**: BR-006, BR-008
**Related SRs**: SR-FN-015 to SR-FN-024, SR-SC-001 to SR-SC-005, SR-DA-001, SR-DA-008

---

## US-001: Register with Email

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | None |

### Acceptance Criteria

**AC 1 — Successful registration with valid data**
> **Given** Linh is on the registration screen
> **When** she enters email "linh@example.com", password "SecurePass1", and taps "Đăng ký"
> **Then** the system creates an account and redirects her to the email verification pending screen

**AC 2 — Generic error on duplicate email (anti-enumeration)**
> **Given** an account with email "existing@example.com" already exists
> **When** Linh enters "existing@example.com" and a valid password and taps "Đăng ký"
> **Then** the system displays the generic message "Đã xảy ra lỗi. Vui lòng thử lại." and does NOT reveal that the email is already registered

- **CRITICAL**: Per SR-SC-001, the error message MUST be "Đã xảy ra lỗi. Vui lòng thử lại." — NEVER "Email này đã được sử dụng" or any message that confirms the email exists.

**AC 3 — Password validation rules**
> **Given** Linh is on the registration screen
> **When** she enters a password shorter than 8 characters, or missing an uppercase letter, or missing a number
> **Then** the system displays inline validation errors in Vietnamese:
> - Too short: "Mật khẩu phải có ít nhất 8 ký tự"
> - Missing uppercase: "Mật khẩu phải có ít nhất 1 chữ hoa"
> - Missing number: "Mật khẩu phải có ít nhất 1 chữ số"

**AC 4 — Verification email sent within 30 seconds**
> **Given** Linh has submitted a valid registration form
> **When** the account is created
> **Then** a verification email is sent to her address within 30 seconds

**AC 5 — Vietnamese UI throughout**
> **Given** Linh is on the registration screen
> **When** the screen renders
> **Then** all labels, placeholders, and buttons are displayed in Vietnamese (e.g., "Email", "Mật khẩu", "Đăng ký")

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-SC-001 | Generic error message for all auth failures — no email enumeration |
| SR-DA-008 | Password complexity: ≥8 characters, ≥1 uppercase, ≥1 number |
| SR-FN-015 | Email registration flow |

---

## US-002: Register with Google OAuth

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | US-001 |

### Acceptance Criteria

**AC 1 — Successful Google OAuth registration**
> **Given** Linh is on the registration screen
> **When** she taps "Đăng nhập bằng Google" and completes the Google consent flow
> **Then** the system creates an account using her Google profile (name, email, avatar) and redirects her to the placement test screen

**AC 2 — Existing account link**
> **Given** an account with email "linh@example.com" already exists (registered via email)
> **When** Linh signs in with Google using the same email
> **Then** the system links the Google identity to the existing account and logs her in

**AC 3 — Consent denied**
> **Given** Linh is on the Google consent screen
> **When** she denies consent or cancels the flow
> **Then** the system returns her to the registration screen with the message "Đã xảy ra lỗi. Vui lòng thử lại."

**AC 4 — OAuth state parameter validation**
> **Given** Linh initiates the Google OAuth flow
> **When** the callback is received
> **Then** the system validates the OAuth state parameter to prevent CSRF attacks; if the state is invalid, the request is rejected with a generic error

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-SC-002 | OAuth state parameter validation against CSRF |
| SR-FN-016 | Google OAuth registration flow |

---

## US-003: Verify Email Address

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | US-001 |

### Acceptance Criteria

**AC 1 — Successful email verification**
> **Given** Linh has received a verification email
> **When** she clicks the verification link within 24 hours
> **Then** her account is marked as verified and she is redirected to the placement test screen

**AC 2 — Blocked access without verification**
> **Given** Linh has registered but has NOT verified her email
> **When** she attempts to access any exercise
> **Then** the system displays the message "Vui lòng xác thực email trước khi tiếp tục." and blocks access

**AC 3 — Expired verification link**
> **Given** Linh received a verification email more than 24 hours ago
> **When** she clicks the verification link
> **Then** the system displays "Liên kết đã hết hạn. Vui lòng yêu cầu gửi lại." with a "Gửi lại" button

**AC 4 — Rate limit on resend**
> **Given** Linh has requested a new verification email
> **When** she taps "Gửi lại" again within 60 seconds
> **Then** the button is disabled and displays a countdown timer (e.g., "Gửi lại sau 45 giây")

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-017 | Email verification flow |
| SR-SC-003 | Verification token expiry: 24 hours |

---

## US-004: Reset Forgotten Password

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | US-001 |

### Acceptance Criteria

**AC 1 — Successful password reset**
> **Given** Linh is on the forgot password screen
> **When** she enters her registered email, receives the reset link, clicks it within 1 hour, and enters a new valid password
> **Then** her password is updated and she is redirected to the login screen with the message "Mật khẩu đã được đặt lại thành công."

**AC 2 — Generic message for any email (anti-enumeration)**
> **Given** Linh is on the forgot password screen
> **When** she enters ANY email address (registered or not) and taps "Gửi liên kết"
> **Then** the system ALWAYS displays "Nếu email tồn tại trong hệ thống, bạn sẽ nhận được liên kết đặt lại mật khẩu." regardless of whether the email exists

- **CRITICAL**: Per SR-SC-001, the response MUST be identical for existing and non-existing emails to prevent email enumeration.

**AC 3 — Expired reset link**
> **Given** Linh received a reset email more than 1 hour ago
> **When** she clicks the reset link
> **Then** the system displays "Liên kết đã hết hạn. Vui lòng yêu cầu gửi lại."

**AC 4 — Single-use token**
> **Given** Linh has already used a reset link to change her password
> **When** she clicks the same reset link again
> **Then** the system displays "Liên kết đã hết hạn. Vui lòng yêu cầu gửi lại." and does not allow a second reset

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-SC-001 | Generic error message — no email enumeration on password reset |
| SR-FN-018 | Password reset flow |
| SR-SC-004 | Reset token expiry: 1 hour, single-use |

---

## US-005: Complete Placement Test

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-003 |

### Acceptance Criteria

**AC 1 — 20 exercises with ascending difficulty**
> **Given** Linh has verified her email and starts the placement test
> **When** the test loads
> **Then** it presents 20 dictation exercises ordered from A1 to C1 difficulty

**AC 2 — Level assignment at ≥70% accuracy**
> **Given** Linh completes all 20 exercises
> **When** the system evaluates her results
> **Then** she is assigned the highest CEFR level where she scored ≥70% accuracy (e.g., if she scores 80% on A2 exercises and 60% on B1, she is placed at A2)

**AC 3 — Correct answers hidden during test**
> **Given** Linh is taking the placement test
> **When** she submits an answer for any exercise
> **Then** the system does NOT show the correct transcript or diff; only a "Tiếp tục" button is shown (per RULE-007)

**AC 4 — Results screen shows assigned level**
> **Given** Linh has completed all 20 placement test exercises
> **When** the results screen is displayed
> **Then** it shows her assigned level (e.g., "Trình độ của bạn: B1"), overall accuracy percentage, and a "Bắt đầu học" button

**AC 5 — Test duration approximately 15 minutes**
> **Given** Linh starts the placement test
> **When** she progresses through the exercises at a normal pace
> **Then** the test takes approximately 15 minutes to complete (no hard time limit enforced)

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-019 | Placement test: 20 exercises, ascending difficulty |
| SR-FN-020 | Level assignment algorithm: ≥70% threshold |
| RULE-007 | Correct answers hidden during placement test |

---

## US-006: Skip Placement Test

| Field | Value |
|-------|-------|
| **Persona** | Hoa (learner, experienced) |
| **Size** | XS |
| **Priority** | Must Have |
| **Dependencies** | US-003 |

### Acceptance Criteria

**AC 1 — Skip defaults to A2**
> **Given** Hoa is on the placement test intro screen
> **When** she taps "Bỏ qua"
> **Then** the system assigns her the default level A2

**AC 2 — Proceeds to catalog**
> **Given** Hoa has skipped the placement test
> **When** the level is assigned
> **Then** she is redirected to the exercise catalog filtered to A2-level content

**AC 3 — Retake available in settings**
> **Given** Hoa previously skipped the placement test
> **When** she navigates to Settings → "Làm lại bài kiểm tra xếp lớp"
> **Then** she can retake the full 20-exercise placement test and her level is updated based on the new results

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-021 | Skip placement test defaults to A2 |
| SR-FN-022 | Retake placement test from settings |

---

## US-049: Logout Securely

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | S |
| **Priority** | Must Have |
| **Dependencies** | US-001 |

### Acceptance Criteria

**AC 1 — Token invalidated on logout**
> **Given** Linh is logged in
> **When** she taps "Đăng xuất"
> **Then** the system invalidates her access token and refresh token on the server side

**AC 2 — Redirect to login screen**
> **Given** Linh has tapped "Đăng xuất"
> **When** the logout completes
> **Then** she is redirected to the login screen

**AC 3 — Deep link after logout redirects to login**
> **Given** Linh has logged out
> **When** she opens a deep link to any authenticated screen (e.g., /exercises/123)
> **Then** the system redirects her to the login screen instead

**AC 4 — Session data cleared**
> **Given** Linh has tapped "Đăng xuất"
> **When** the logout completes
> **Then** all local session data (tokens, cached user profile, preferences) is cleared from the device

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-024 | Secure logout: token invalidation |
| SR-SC-007 | Session data cleared on logout |

---

← Back to [INDEX.md](INDEX.md)
