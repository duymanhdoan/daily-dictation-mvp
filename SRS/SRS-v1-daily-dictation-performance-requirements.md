# Performance Requirements: Daily Dictation

**Parent SRS**: [SRS-v1-daily-dictation-software-requirements.md](SRS-v1-daily-dictation-software-requirements.md)
**Version**: v1.0
**Created**: 2026-03-17
**Category**: Performance
**SR Count**: 10 requirements
**Status**: Draft

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **10 performance requirements** | 4 latency, 2 throughput, 2 capacity, 2 resource | HIGH |
| 2 | **Mobile-first targets** | Optimized for 4G Vietnam (≥5 Mbps), degraded on 3G | HIGH |
| 3 | **10K concurrent users** | System capacity target at launch | HIGH |

---

## Requirements

### SR-PF-001: Exercise Screen Load Time

**Statement**: WHEN user navigates to an exercise screen, the system SHALL render the fully interactive screen (audio player + input field + metadata) within 2 seconds on a 4G connection (≥5 Mbps).

**Rationale**: 2-second load time is the threshold for perceived responsiveness on mobile. (NFR-001)

**Source**: NFR-001, BR-001
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN 4G connection (5 Mbps), WHEN exercise screen is opened, THEN Time-to-Interactive (TTI) is <2 seconds (P95)
2. GIVEN 3G connection (1 Mbps), WHEN exercise screen is opened, THEN TTI is <5 seconds (P95)

**Verification Method**: Test
**Dependencies**: SR-IF-012

---

### SR-PF-002: Audio Playback Start Latency

**Statement**: WHEN user taps the play button, the system SHALL begin audio output within 500ms, using pre-buffered audio when available.

**Rationale**: Audio latency >500ms breaks the listening flow and frustrates learners. (NFR-002)

**Source**: NFR-002
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN audio is pre-buffered (CDN cached), WHEN user taps play, THEN audio begins within 200ms
2. GIVEN audio is not yet buffered, WHEN user taps play, THEN audio begins within 500ms on 4G

**Verification Method**: Test
**Dependencies**: SR-IF-012

---

### SR-PF-003: Answer Diff Processing Time

**Statement**: WHEN user submits an answer, the system SHALL compute and display the word-by-word diff within 1 second for transcripts up to 500 words.

**Rationale**: Sub-second feedback maintains learning flow. (NFR-003)

**Source**: NFR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN transcript of 200 words, WHEN diff is computed, THEN result displays within 500ms
2. GIVEN transcript of 500 words, WHEN diff is computed, THEN result displays within 1 second
3. GIVEN diff computation, WHEN processed, THEN computation occurs client-side (no server round-trip)

**Verification Method**: Test
**Dependencies**: SR-FN-006

---

### SR-PF-004: API Response Time

**Statement**: The system SHALL respond to all API requests within 300ms (P95) excluding audio file delivery.

**Rationale**: 300ms API latency ensures the app feels responsive for data operations.

**Source**: NFR-001
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN exercise catalog API call, WHEN processed, THEN response returned within 300ms (P95)
2. GIVEN user profile API call, WHEN processed, THEN response returned within 200ms (P95)
3. GIVEN leaderboard API call (top 100), WHEN processed, THEN response returned within 300ms (P95)

**Verification Method**: Test
**Dependencies**: None

---

### SR-PF-005: Concurrent User Capacity

**Statement**: The system SHALL handle 10,000 concurrent users without degradation of response times beyond defined SLAs.

**Rationale**: Target capacity based on 50K MAU goal with ~20% peak concurrent ratio. (NFR-010)

**Source**: NFR-010
**Priority**: Essential
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN 10,000 concurrent users, WHEN load test is executed, THEN P95 API response time remains <300ms
2. GIVEN 10,000 concurrent users, WHEN audio is being served, THEN CDN handles load without origin fallback

**Verification Method**: Test
**Dependencies**: SR-RA-001

---

### SR-PF-006: Exercise Catalog Pagination

**Statement**: WHEN user scrolls the exercise catalog, the system SHALL load the next page of 20 exercises via infinite scroll within 500ms.

**Rationale**: Smooth infinite scroll prevents content loading from interrupting browsing flow.

**Source**: FR-030
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user scrolls to bottom of current page, WHEN next 20 exercises are requested, THEN new items appear within 500ms
2. GIVEN user has scrolled through 200 exercises, WHEN memory is checked, THEN app memory usage remains <150MB

**Verification Method**: Test
**Dependencies**: SR-FN-045

---

### SR-PF-007: Email Delivery Time

**Statement**: The system SHALL deliver transactional emails (verification, password reset) within 30 seconds (P95) of trigger.

**Rationale**: Email verification and password reset are blocking flows; delays frustrate users.

**Source**: FR-007, FR-009
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN registration event, WHEN verification email is triggered, THEN email is delivered to provider within 30 seconds (P95)
2. GIVEN password reset request, WHEN reset email is triggered, THEN email is delivered within 30 seconds (P95)

**Verification Method**: Test
**Dependencies**: SR-IF-007

---

### SR-PF-008: Dark Mode Toggle Latency

**Statement**: WHEN user toggles dark mode, the system SHALL apply the theme change across all visible UI elements within 200ms.

**Rationale**: Theme switching should feel instantaneous.

**Source**: FR-014, BR-014
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN light mode is active, WHEN user toggles dark mode, THEN all visible elements update within 200ms without screen flash

**Verification Method**: Test
**Dependencies**: SR-CN-005

---

### SR-PF-009: Push Notification Delivery

**Statement**: The system SHALL deliver push notifications within 30 seconds of trigger time via APNS/FCM.

**Rationale**: Timely notifications are critical for streak reminders at 20:00 UTC+7.

**Source**: FR-035, BR-010
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN streak reminder triggered at 20:00 UTC+7, WHEN notification is sent, THEN device receives within 30 seconds

**Verification Method**: Test
**Dependencies**: SR-IF-011

---

### SR-PF-010: CMS Exercise Creation Time

**Statement**: WHEN content creator submits a new exercise (including audio upload up to 10MB), the system SHALL complete the save operation within 15 seconds.

**Rationale**: Efficient content creation workflow ensures content team productivity.

**Source**: FR-031, BR-013
**Priority**: Conditional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN 5MB audio file upload, WHEN creator saves exercise, THEN operation completes within 10 seconds on 10 Mbps connection
2. GIVEN 10MB audio file upload, WHEN creator saves exercise, THEN operation completes within 15 seconds on 10 Mbps connection

**Verification Method**: Test
**Dependencies**: SR-FN-051

---

## Document Lineage

| Version | Document | Focus | Status |
|---------|----------|-------|--------|
| v1 | SRS-v1-daily-dictation-performance-requirements.md | Performance SRs (10) | ✅ Current |

← Back to [Main SRS](SRS-v1-daily-dictation-software-requirements.md)
