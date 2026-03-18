# Interface Requirements: Daily Dictation

**Parent SRS**: [SRS-v1-daily-dictation-software-requirements.md](SRS-v1-daily-dictation-software-requirements.md)
**Version**: v1.0
**Created**: 2026-03-17
**Category**: Interface
**SR Count**: 12 requirements
**Status**: Draft

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **12 interface requirements** | 6 UI, 3 external API, 3 communication | HIGH |
| 2 | **6 external system integrations** | Google OAuth, App Store, Play Store, APNS, FCM, SMTP | HIGH |
| 3 | **Mobile-first UI** | Bottom-tab navigation, thumb-friendly targets, 44pt minimum | HIGH |

---

## 1. User Interface Requirements

### SR-IF-001: Exercise Screen Layout

**Statement**: The system SHALL present the exercise screen with a fixed audio player at the top, scrollable text input area in the center, and action buttons (Check, Skip, Next) anchored at the bottom, ensuring all interactive elements are reachable with one-handed thumb operation (minimum touch target 44×44pt).

**Rationale**: Mobile-first dictation requires the audio player always visible while typing.

**Source**: FR-001, FR-002, FR-003, BR-001
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN exercise screen on iPhone SE (320pt width), WHEN layout renders, THEN audio player, input area, and action buttons are all visible without scrolling
2. GIVEN any interactive button, WHEN measured, THEN touch target is ≥44×44pt

**Verification Method**: Inspection
**Dependencies**: SR-MB-001

---

### SR-IF-002: Diff View Display

**Statement**: The system SHALL display the word-by-word diff using distinct visual treatments: correct words in green (#22C55E), incorrect words in red (#EF4444) with strikethrough of user's word, and missing words in gray (#9CA3AF) with underline placeholder.

**Rationale**: Clear visual differentiation helps learners quickly identify error types.

**Source**: FR-003, BR-009
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN a diff result, WHEN displayed, THEN correct words use green, incorrect use red with strikethrough, missing use gray with underline
2. GIVEN dark mode is active, WHEN diff displays, THEN colors adjust for accessibility contrast (WCAG AA: ≥4.5:1 ratio)

**Verification Method**: Inspection
**Dependencies**: SR-FN-006, SR-CN-005

---

### SR-IF-003: Progress Dashboard Layout

**Statement**: The system SHALL display the progress dashboard with 5 data sections: (1) accuracy trend chart (30 days), (2) exercises completed count, (3) current streak with multiplier, (4) category breakdown, and (5) CEFR level progress.

**Rationale**: Comprehensive progress view reinforces learner motivation. (BR-007)

**Source**: FR-028, FR-029, BR-007
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user with 30+ days of data, WHEN dashboard loads, THEN all 5 sections render with data
2. GIVEN new user with <3 exercises, WHEN dashboard loads, THEN empty state shows "Hoàn thành thêm bài tập để xem thống kê" (Complete more exercises to see stats)

**Verification Method**: Test
**Dependencies**: SR-FN-010

---

### SR-IF-004: Paywall Screen

**Statement**: WHEN free user hits the daily exercise limit, the system SHALL display a paywall screen with: premium benefits list in Vietnamese, 3 subscription tiers, a "Nâng cấp ngay" (Upgrade now) CTA button, and a "Quay lại" (Go back) link.

**Rationale**: Paywall is the primary conversion funnel for freemium model.

**Source**: FR-022, FR-024, BR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN free user at 5/5 limit, WHEN paywall displays, THEN all 3 tiers, benefits list, CTA, and back link are visible
2. GIVEN paywall is displayed, WHEN user taps "Quay lại", THEN user returns to previous screen

**Verification Method**: Test
**Dependencies**: SR-FN-037, SR-FN-039

---

### SR-IF-005: Vietnamese Tooltip for Error Explanations

**Statement**: WHEN user taps an incorrect/missing word in diff view, the system SHALL display a floating tooltip anchored to the tapped word, containing Vietnamese explanation text, with a maximum width of 280pt and auto-dismissing when tapping outside.

**Rationale**: Tooltip must be readable on small mobile screens without obscuring diff context.

**Source**: FR-004, BR-002
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user taps an incorrect word, WHEN tooltip appears, THEN it is anchored near the word with max width 280pt
2. GIVEN tooltip is open, WHEN user taps outside, THEN tooltip dismisses

**Verification Method**: Inspection
**Dependencies**: SR-FN-008

---

### SR-IF-006: Leaderboard Tab Navigation

**Statement**: The system SHALL display leaderboard with tab navigation for "Hôm nay" (Today), "Tuần" (Weekly), and "Tổng" (All-time), with the active tab visually highlighted.

**Rationale**: Tab navigation is the standard mobile pattern for switching data views.

**Source**: FR-021, BR-011
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN leaderboard screen, WHEN "Hôm nay" tab is active, THEN it is visually distinguished with an underline/highlight

**Verification Method**: Inspection
**Dependencies**: SR-FN-033

---

## 2. External Software Interfaces

### SR-IF-007: SMTP Service Integration

**Statement**: The system SHALL integrate with an SMTP/email delivery service to send transactional emails (verification, password reset, weekly reports) with delivery confirmation tracking.

**Rationale**: Email is required for account verification (RULE-005), password reset, and weekly reports.

**Source**: FR-007, FR-009, FR-041, RULE-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN a registration event, WHEN verification email is triggered, THEN email is delivered within 30 seconds (P95)
2. GIVEN email delivery, WHEN delivery status is tracked, THEN system logs delivery/bounce/complaint status

**Verification Method**: Test
**Dependencies**: SR-PF-007

---

### SR-IF-008: Google OAuth 2.0 Integration

**Statement**: The system SHALL integrate with Google OAuth 2.0 for social login, requesting only `email`, `profile`, and `openid` scopes.

**Rationale**: Google is the most common OAuth provider in Vietnam.

**Source**: FR-007
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN Google OAuth flow, WHEN consent is granted, THEN system receives email, name, and avatar URL
2. GIVEN OAuth state parameter, WHEN response is received, THEN state is validated to prevent CSRF

**Verification Method**: Test
**Dependencies**: SR-SC-002

---

### SR-IF-009: App Store / Play Store Billing Integration

**Statement**: The system SHALL integrate with Apple StoreKit 2 (iOS) and Google Play Billing Library v6+ (Android) for subscription purchase, receipt validation, and subscription status monitoring.

**Rationale**: Native billing is required by app store policies for in-app subscriptions.

**Source**: FR-024, BR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN iOS app, WHEN subscription is purchased, THEN receipt is validated server-side via App Store Server API
2. GIVEN Android app, WHEN subscription is purchased, THEN purchase token is validated via Google Play Developer API
3. GIVEN subscription status changes (renewal, cancellation, expiration), WHEN webhook/RTDN is received, THEN system updates subscription status within 60 seconds

**Verification Method**: Test
**Dependencies**: SR-FN-040

---

### SR-IF-010: App Store / Play Store Receipt Validation

**Statement**: The system SHALL validate all subscription receipts server-side before granting premium access, rejecting any receipt that fails cryptographic verification.

**Rationale**: Server-side validation prevents jailbreak/root receipt spoofing.

**Source**: FR-024
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN a valid receipt, WHEN server validates, THEN premium access is granted
2. GIVEN an invalid/tampered receipt, WHEN server validates, THEN access is denied and event is logged

**Verification Method**: Test
**Dependencies**: SR-SC-008

---

## 3. Communication Interfaces

### SR-IF-011: Push Notification Service Integration

**Statement**: The system SHALL integrate with APNS (Apple Push Notification Service) for iOS and FCM (Firebase Cloud Messaging) for Android to deliver push notifications.

**Rationale**: Push notifications are the delivery mechanism for streak reminders and content alerts.

**Source**: FR-034, FR-035, FR-036, BR-010
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN iOS user with push permission, WHEN notification is triggered, THEN APNS delivers within 30 seconds
2. GIVEN Android user with push permission, WHEN notification is triggered, THEN FCM delivers within 30 seconds
3. GIVEN notification with deep link payload, WHEN received, THEN correct deep link URL is included

**Verification Method**: Test
**Dependencies**: SR-FN-057

---

### SR-IF-012: CDN Audio Delivery

**Statement**: The system SHALL serve all exercise audio files via a CDN with HTTPS, supporting range requests for streaming and caching with a maximum TTL of 30 days.

**Rationale**: CDN ensures audio loads within performance requirements globally, especially in Vietnam.

**Source**: FR-001, NFR-001
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN exercise audio request, WHEN served via CDN, THEN response includes `Accept-Ranges: bytes` header for streaming
2. GIVEN audio file is cached, WHEN requested again, THEN CDN serves from cache (HTTP 304) within 100ms

**Verification Method**: Test
**Dependencies**: SR-PF-002

---

## Document Lineage

| Version | Document | Focus | Status |
|---------|----------|-------|--------|
| v1 | SRS-v1-daily-dictation-interface-requirements.md | Interface SRs (12) | ✅ Current |

← Back to [Main SRS](SRS-v1-daily-dictation-software-requirements.md)
