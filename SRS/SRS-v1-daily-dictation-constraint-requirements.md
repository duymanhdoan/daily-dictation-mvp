# Constraint Requirements: Daily Dictation

**Parent SRS**: [SRS-v1-daily-dictation-software-requirements.md](SRS-v1-daily-dictation-software-requirements.md)
**Version**: v1.0
**Created**: 2026-03-17
**Category**: Constraints
**SR Count**: 6 requirements
**Status**: Draft

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **6 constraint requirements** | 2 platform, 1 localization, 1 accessibility, 1 timezone, 1 content | HIGH |
| 2 | **Dual platform** | iOS 15+ and Android 10+ minimum support | HIGH |
| 3 | **WCAG 2.1 AA** | Accessibility compliance required | HIGH |

---

## Requirements

### SR-CN-001: Minimum Platform Versions

**Statement**: The system SHALL support iOS 15.0+ and Android 10 (API level 29)+ as minimum deployment targets. Features requiring higher OS APIs SHALL gracefully degrade on minimum supported versions.

**Rationale**: iOS 15 and Android 10 cover >95% of active devices in Vietnam while enabling modern APIs. (NFR-012)

**Source**: NFR-012
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN iOS 15.0 device, WHEN app is installed, THEN all Essential and Conditional features function correctly
2. GIVEN Android 10 device, WHEN app is installed, THEN all Essential and Conditional features function correctly
3. GIVEN iOS 14 or Android 9 device, WHEN user attempts install, THEN app store shows "Không tương thích" (Incompatible)

**Verification Method**: Test
**Dependencies**: None

---

### SR-CN-002: Web Browser Compatibility

**Statement**: The web application SHALL support the last 2 major versions of Chrome, Safari, Firefox, and Edge. The system SHALL use progressive enhancement for features not supported on older browsers.

**Rationale**: Web companion must work across browsers for users accessing from desktops/laptops.

**Source**: NFR-012
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN Chrome 90+, WHEN web app loads, THEN all features function correctly
2. GIVEN Safari 15+, WHEN web app loads, THEN all features function correctly including audio playback
3. GIVEN unsupported browser, WHEN web app loads, THEN banner shows "Trình duyệt không được hỗ trợ. Vui lòng cập nhật." (Browser not supported)

**Verification Method**: Test
**Dependencies**: None

---

### SR-CN-003: Vietnamese Localization Completeness

**Statement**: The system SHALL externalize 100% of user-facing text strings into localization files. All UI text, error messages, system notifications, and in-app copy SHALL be in Vietnamese (vi-VN) as the default locale. Exercise content (audio, transcripts) SHALL remain in English.

**Rationale**: Vietnamese UI is core to the product's differentiation for the target market. (NFR-009, BR-002)

**Source**: NFR-009, BR-002
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN any screen in the app, WHEN all UI text is audited, THEN zero hardcoded English strings exist in UI layer
2. GIVEN error state, WHEN error message displays, THEN message is in Vietnamese
3. GIVEN exercise content, WHEN displayed, THEN audio/transcript remain in English while instructions are in Vietnamese

**Verification Method**: Inspection
**Dependencies**: None

---

### SR-CN-004: UTC+7 Timezone for Business Logic

**Statement**: The system SHALL use UTC+7 (Indochina Time) for all date-based business logic including: daily exercise limit reset, streak calculation, leaderboard periods, scheduled content publishing, and notification scheduling.

**Rationale**: Vietnam operates in UTC+7; using UTC would cause midnight calculations to be misaligned with user perception of "today". (RULE-001, RULE-003)

**Source**: RULE-001, RULE-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN free user's daily limit, WHEN 00:00 UTC+7 arrives, THEN counter resets to 0/5
2. GIVEN streak check, WHEN evaluating "today", THEN "today" is defined by UTC+7 calendar date
3. GIVEN scheduled content for "2026-03-20 09:00", WHEN stored, THEN time is interpreted as UTC+7

**Verification Method**: Test
**Dependencies**: None

---

### SR-CN-005: WCAG 2.1 Level AA Accessibility

**Statement**: The system SHALL comply with WCAG 2.1 Level AA for all user-facing screens, including: minimum contrast ratio 4.5:1 for normal text and 3:1 for large text, keyboard navigation support on web, screen reader compatibility, and focus indicators on interactive elements.

**Rationale**: Accessibility is both ethical and a competitive differentiator; many Vietnamese ed-tech apps lack accessibility. (NFR-008, BR-014)

**Source**: NFR-008, BR-014
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN any text element, WHEN contrast is measured against background, THEN ratio is ≥4.5:1 (normal) or ≥3:1 (large text/UI components)
2. GIVEN web application, WHEN user navigates with keyboard only, THEN all interactive elements are reachable
3. GIVEN screen reader (VoiceOver/TalkBack), WHEN navigating exercise screen, THEN all elements have meaningful labels in Vietnamese

**Verification Method**: Inspection (Lighthouse, axe-core)
**Dependencies**: None

---

### SR-CN-006: Content Attribution Requirement

**Statement**: WHERE exercise source_type is "curated", the system SHALL display source attribution on the exercise screen. The system SHALL NOT allow publishing curated content without a non-empty source_attribution field.

**Rationale**: Legal requirement for using curated public content. (RULE-006)

**Source**: RULE-006, FR-032
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN curated exercise in CMS, WHEN source_attribution is empty, THEN "Xuất bản" (Publish) button is disabled
2. GIVEN curated exercise with attribution "TED Talks", WHEN displayed to learner, THEN "Nguồn: TED Talks" is visible

**Verification Method**: Test
**Dependencies**: SR-FN-048, SR-FN-051

---

## Document Lineage

| Version | Document | Focus | Status |
|---------|----------|-------|--------|
| v1 | SRS-v1-daily-dictation-constraint-requirements.md | Constraint SRs (6) | ✅ Current |

← Back to [Main SRS](SRS-v1-daily-dictation-software-requirements.md)
