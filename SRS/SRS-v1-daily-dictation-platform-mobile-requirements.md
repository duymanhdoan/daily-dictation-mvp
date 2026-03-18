# Platform-Specific Requirements (Mobile): Daily Dictation

**Parent SRS**: [SRS-v1-daily-dictation-software-requirements.md](SRS-v1-daily-dictation-software-requirements.md)
**Version**: v1.0
**Created**: 2026-03-17
**Category**: Platform (Mobile)
**SR Count**: 8 requirements
**Status**: Draft

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **8 mobile-specific requirements** | 2 platform guidelines, 2 device, 2 app store, 1 biometric, 1 deep link | HIGH |
| 2 | **iOS + Android** | Both platforms with native billing and push | HIGH |
| 3 | **App store compliance** | Apple App Store Review Guidelines + Google Play Developer Policies | HIGH |

---

## Requirements

### SR-MB-001: iOS Human Interface Guidelines Compliance

**Statement**: The iOS application SHALL comply with Apple Human Interface Guidelines (HIG) for: navigation patterns (tab bar, navigation controller), system fonts (SF Pro), safe area insets, and Dynamic Type support.

**Rationale**: HIG compliance is required for App Store approval and ensures native iOS feel.

**Source**: NFR-012, Apple HIG
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN iOS app, WHEN reviewed against HIG checklist, THEN all navigation, typography, and layout patterns comply
2. GIVEN user enables Dynamic Type (large text), WHEN app renders, THEN all text scales appropriately without truncation
3. GIVEN iPhone with notch/Dynamic Island, WHEN layout renders, THEN content respects safe area insets

**Verification Method**: Inspection
**Dependencies**: SR-CN-001

---

### SR-MB-002: Material Design 3 Compliance (Android)

**Statement**: The Android application SHALL comply with Material Design 3 guidelines for: navigation (bottom navigation bar, top app bar), theming (Material You dynamic color on Android 12+), and elevation/shadow system.

**Rationale**: Material Design compliance ensures consistent Android UX and Play Store approval.

**Source**: NFR-012, Material Design 3
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN Android 12+ device, WHEN user has dynamic color enabled, THEN app theme adapts to wallpaper-derived colors
2. GIVEN Android 10 device, WHEN app renders, THEN default Material theme is applied (no dynamic color crash)

**Verification Method**: Inspection
**Dependencies**: SR-CN-001

---

### SR-MB-003: Device Compatibility Matrix

**Statement**: The system SHALL be tested and functional on the following minimum device configurations: (iOS) iPhone SE 2nd gen (4.7" screen, 3GB RAM), (Android) device with 720p display, 3GB RAM, and 16GB storage.

**Rationale**: These represent the lowest-spec devices common in the Vietnamese market.

**Source**: NFR-012
**Priority**: Essential
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN iPhone SE 2nd gen, WHEN all core features are tested, THEN zero critical bugs
2. GIVEN Android device with 3GB RAM, WHEN app is running with audio playback, THEN memory usage stays <150MB

**Verification Method**: Test
**Dependencies**: None

---

### SR-MB-004: Biometric Authentication Support

**Statement**: WHERE device supports biometric authentication (Face ID, Touch ID, Android Biometric API), WHEN user enables biometric login in settings, the system SHALL allow app unlock via biometric verification instead of email/password.

**Rationale**: Biometric login reduces friction for daily-use mobile app.

**Source**: FR-007
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN iPhone with Face ID and biometric enabled, WHEN user opens app, THEN Face ID prompt appears instead of login screen
2. IF biometric fails 3 times, THEN system falls back to email/password login

**Verification Method**: Test
**Dependencies**: SR-SC-007

---

### SR-MB-005: App Store Subscription Compliance (iOS)

**Statement**: The iOS application SHALL comply with Apple App Store Review Guidelines for subscription apps: (1) clearly display subscription terms before purchase, (2) link to Terms of Service and Privacy Policy, (3) provide subscription management via StoreKit, (4) honor App Store refund decisions.

**Rationale**: Non-compliance risks App Store rejection (Risk R-003 in BRD).

**Source**: FR-024, Apple App Store Guidelines
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN subscription screen, WHEN displayed, THEN pricing, billing frequency, and auto-renewal terms are clearly shown in Vietnamese
2. GIVEN settings screen, WHEN "Quản lý đăng ký" is tapped, THEN iOS subscription management opens
3. GIVEN app submission, WHEN reviewed by Apple, THEN all subscription guidelines are met

**Verification Method**: Inspection
**Dependencies**: SR-IF-009

---

### SR-MB-006: Google Play Subscription Compliance (Android)

**Statement**: The Android application SHALL comply with Google Play Developer Policies for subscriptions: (1) use Google Play Billing Library v6+, (2) display pricing in local currency, (3) provide clear cancellation instructions, (4) support Google Play's real-time developer notifications (RTDN).

**Rationale**: Non-compliance risks Play Store removal.

**Source**: FR-024, Google Play Policies
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN subscription purchase, WHEN processed, THEN Google Play Billing Library v6+ handles the transaction
2. GIVEN RTDN webhook, WHEN subscription status changes, THEN system processes within 60 seconds

**Verification Method**: Test
**Dependencies**: SR-IF-009

---

### SR-MB-007: Deep Link / Universal Link Handling

**Statement**: The system SHALL register URL schemes and Universal Links (iOS) / App Links (Android) to handle deep links for: exercise launch (`/exercise/{id}`), catalog (`/catalog`), profile (`/profile`), and subscription (`/subscribe`).

**Rationale**: Deep links enable push notification navigation and marketing campaign attribution.

**Source**: FR-036, BR-010
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN notification with deep link `/exercise/abc123`, WHEN user taps, THEN app opens directly to exercise abc123
2. GIVEN app is not installed, WHEN deep link is opened, THEN user is redirected to app store listing
3. GIVEN web browser, WHEN universal link is opened, THEN app opens (if installed) or web fallback is shown

**Verification Method**: Test
**Dependencies**: SR-FN-059

---

### SR-MB-008: Haptic Feedback

**Statement**: WHERE device supports haptic feedback, WHEN user achieves a milestone (streak increment, level up, badge earned, 100% accuracy), the system SHALL trigger a brief haptic vibration (iOS: UIImpactFeedbackGenerator.medium, Android: VibrationEffect.createOneShot(50ms)).

**Rationale**: Haptic feedback enhances reward moments in gamification.

**Source**: BR-005
**Priority**: Optional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN iPhone with Taptic Engine, WHEN user earns a badge, THEN medium impact haptic fires
2. GIVEN Android device, WHEN user levels up, THEN 50ms vibration occurs
3. GIVEN device without haptic support, WHEN milestone occurs, THEN no error occurs (graceful skip)

**Verification Method**: Demonstration
**Dependencies**: SR-FN-030, SR-FN-031

---

## Document Lineage

| Version | Document | Focus | Status |
|---------|----------|-------|--------|
| v1 | SRS-v1-daily-dictation-platform-mobile-requirements.md | Mobile platform SRs (8) | ✅ Current |

← Back to [Main SRS](SRS-v1-daily-dictation-software-requirements.md)
