# Security Requirements: Daily Dictation

**Parent SRS**: [SRS-v1-daily-dictation-software-requirements.md](SRS-v1-daily-dictation-software-requirements.md)
**Version**: v1.0
**Created**: 2026-03-17
**Category**: Security
**SR Count**: 11 requirements
**Status**: Draft

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **11 security requirements** | 3 auth, 3 data protection, 2 session, 2 access control, 1 anti-fraud | HIGH |
| 2 | **Vietnam compliance** | Cybersecurity Law 2018 + Personal Data Protection Decree | HIGH |
| 3 | **Payment security** | Server-side receipt validation for App Store / Play Store | HIGH |

---

## Requirements

### SR-SC-001: Email Enumeration Prevention

**Statement**: IF user attempts registration or password reset with any email address, THEN the system SHALL return the same generic success message regardless of whether the email is already registered.

**Rationale**: Prevents attackers from discovering valid email addresses through error message differences.

**Source**: FR-007, FR-009
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN unregistered email on registration, WHEN submitted, THEN error message is "Đã xảy ra lỗi. Vui lòng thử lại."
2. GIVEN registered email on registration, WHEN submitted, THEN same error message is shown (no difference)
3. GIVEN any email on password reset, WHEN submitted, THEN message is "Nếu email tồn tại, bạn sẽ nhận được liên kết đặt lại."

**Verification Method**: Test
**Dependencies**: SR-FN-015, SR-FN-018

---

### SR-SC-002: OAuth State Parameter Validation

**Statement**: WHEN initiating Google OAuth flow, the system SHALL generate a cryptographically random state parameter and validate it upon callback to prevent CSRF attacks.

**Rationale**: OAuth state parameter prevents cross-site request forgery on the callback endpoint.

**Source**: FR-007
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN OAuth initiation, WHEN state is generated, THEN it is ≥128-bit cryptographically random
2. GIVEN OAuth callback, WHEN state does not match, THEN authentication is rejected with error log

**Verification Method**: Test
**Dependencies**: SR-IF-008

---

### SR-SC-003: Email Verification Token Security

**Statement**: The system SHALL generate email verification tokens as cryptographically random strings (≥256-bit), valid for 24 hours, and single-use. The system SHALL enforce a rate limit of 1 verification email per 60 seconds per user.

**Rationale**: Prevents brute-force token guessing and email flooding.

**Source**: FR-008, RULE-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN verification token, WHEN generated, THEN token is ≥256-bit cryptographically random
2. GIVEN token is used once, WHEN same token is used again, THEN system rejects with "Liên kết đã được sử dụng"
3. GIVEN token is >24 hours old, WHEN used, THEN system rejects with "Liên kết đã hết hạn"
4. GIVEN resend request within 60 seconds of last send, WHEN submitted, THEN system returns rate limit error with countdown

**Verification Method**: Test
**Dependencies**: SR-FN-017

---

### SR-SC-004: Password Reset Token Security

**Statement**: The system SHALL generate password reset tokens as cryptographically random strings (≥256-bit), valid for 1 hour, and single-use.

**Rationale**: Shorter expiry (vs. verification) reduces window for token interception.

**Source**: FR-009
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN reset token, WHEN generated, THEN token is ≥256-bit cryptographically random and single-use
2. GIVEN token is >1 hour old, WHEN used, THEN system rejects with "Liên kết đã hết hạn" and offers new link

**Verification Method**: Test
**Dependencies**: SR-FN-018

---

### SR-SC-005: Password Storage

**Statement**: The system SHALL store passwords using bcrypt with a cost factor of ≥12. The system SHALL NOT store passwords in plaintext, reversible encryption, or weaker hash algorithms (MD5, SHA-1, SHA-256 without salt).

**Rationale**: bcrypt with cost factor 12 provides ~250ms hash time, balancing security and performance. (NFR-005)

**Source**: NFR-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN password "MyP@ssw0rd", WHEN stored, THEN stored value is bcrypt hash with cost factor ≥12
2. GIVEN a data breach, WHEN password hashes are exposed, THEN brute force of a single 8-char password takes >1 year on commodity hardware

**Verification Method**: Inspection
**Dependencies**: SR-DA-008

---

### SR-SC-006: HTTPS/TLS Enforcement

**Statement**: The system SHALL enforce HTTPS with TLS 1.2 or higher for all client-server communication. The mobile app SHALL implement certificate pinning for the primary API domain.

**Rationale**: TLS protects data in transit; cert pinning prevents MITM attacks on mobile. (NFR-006)

**Source**: NFR-006
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN any API request, WHEN connection is established, THEN TLS 1.2+ is used (TLS 1.0/1.1 rejected)
2. GIVEN mobile app, WHEN connecting to API, THEN certificate is pinned to expected public key
3. IF certificate mismatch occurs, THEN connection is refused and user sees "Kết nối không an toàn" error

**Verification Method**: Test
**Dependencies**: None

---

### SR-SC-007: Authentication Token Management

**Statement**: The system SHALL issue JWT access tokens with 30-day expiration. WHEN a user logs out, the system SHALL invalidate the token immediately. The system SHALL support token refresh without re-authentication.

**Rationale**: 30-day tokens reduce login friction for daily-use mobile app. (NFR-007)

**Source**: NFR-007
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN successful login, WHEN token is issued, THEN expiration is set to 30 days from issuance
2. GIVEN user taps logout, WHEN token is invalidated, THEN any API call with that token returns 401 within 1 second
3. GIVEN token is within 7 days of expiration, WHEN app detects, THEN silent token refresh occurs

**Verification Method**: Test
**Dependencies**: SR-FN-024

---

### SR-SC-008: Receipt Validation Anti-Tampering

**Statement**: The system SHALL validate all subscription receipts server-side against Apple App Store Server API / Google Play Developer API. IF receipt validation fails, THEN premium access SHALL NOT be granted and the event SHALL be logged with device fingerprint.

**Rationale**: Client-side receipt validation is trivially bypassable on jailbroken/rooted devices.

**Source**: FR-024
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN valid receipt from App Store, WHEN server validates, THEN premium is granted
2. GIVEN tampered receipt, WHEN server validates, THEN access is denied and event logged with device_id, user_id, timestamp

**Verification Method**: Test
**Dependencies**: SR-IF-010

---

### SR-SC-009: Vietnam Data Protection Compliance

**Statement**: The system SHALL comply with Vietnam Cybersecurity Law (2018) and Personal Data Protection Decree: (1) store Vietnamese user data on servers located in Vietnam or with data localization provisions, (2) provide data export upon user request within 30 days, (3) delete PII within 30 days of account deletion request.

**Rationale**: Legal compliance is mandatory for operating in Vietnam. (NFR-011)

**Source**: NFR-011
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user requests data export, WHEN request is processed, THEN complete user data is provided within 30 days in machine-readable format
2. GIVEN user requests account deletion, WHEN 30 days pass, THEN all PII is permanently removed from all storage systems
3. GIVEN system audit, WHEN data residency is checked, THEN Vietnamese user data is stored in compliance with localization requirements

**Verification Method**: Inspection
**Dependencies**: SR-DA-009

---

### SR-SC-010: Role-Based Access Control

**Statement**: The system SHALL enforce role-based access control with 4 roles: Learner (free), Learner (premium), Content Creator, Admin. Each role SHALL have defined permissions. Content Creators SHALL NOT have delete permissions.

**Rationale**: RBAC prevents unauthorized actions, especially irreversible content deletion. (RULE-009)

**Source**: FR-033, RULE-009
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN Content Creator role, WHEN attempting to delete an exercise, THEN action is denied with 403 response
2. GIVEN Admin role, WHEN attempting to delete an exercise, THEN action is permitted
3. GIVEN Learner role, WHEN attempting to access CMS endpoints, THEN action is denied with 403 response

**Verification Method**: Test
**Dependencies**: SR-FN-056

---

### SR-SC-011: Self-Referral Prevention

**Statement**: IF the system detects a self-referral attempt (same device fingerprint, same email domain pattern, or same IP address within 24 hours), THEN the referral SHALL be denied and no premium days awarded.

**Rationale**: Prevents abuse of the referral premium reward system. (BR-016)

**Source**: FR-039, BR-016
**Priority**: Optional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN user A creates referral code, WHEN user A registers new account and uses own code, THEN referral is denied
2. GIVEN same device fingerprint, WHEN referral is attempted, THEN referral is denied with status "denied"

**Verification Method**: Test
**Dependencies**: SR-FN-061

---

## Document Lineage

| Version | Document | Focus | Status |
|---------|----------|-------|--------|
| v1 | SRS-v1-daily-dictation-security-requirements.md | Security SRs (11) | ✅ Current |

← Back to [Main SRS](SRS-v1-daily-dictation-software-requirements.md)
