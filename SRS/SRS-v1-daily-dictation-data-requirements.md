# Data Requirements: Daily Dictation

**Parent SRS**: [SRS-v1-daily-dictation-software-requirements.md](SRS-v1-daily-dictation-software-requirements.md)
**Version**: v1.0
**Created**: 2026-03-17
**Category**: Data
**SR Count**: 10 requirements
**Status**: Draft

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **10 data requirements** | 6 data models, 2 validation, 2 retention/migration | HIGH |
| 2 | **7 core data entities** | User, Exercise, Completion, Streak, Badge, Subscription, Referral | HIGH |
| 3 | **UTC+7 timezone** | All date-based calculations use Vietnam timezone | HIGH |

---

## Requirements

### SR-DA-001: User Data Model

**Statement**: The system SHALL maintain a User entity containing: user_id (UUID), email, display_name, avatar_url, password_hash, auth_provider (email|google), cefr_level (A1|A2|B1|B2|C1), total_xp (integer), current_level (integer), current_streak (integer), record_streak (integer), subscription_status (free|premium|grace), locale (default: vi-VN), email_verified (boolean), created_at (UTC), updated_at (UTC).

**Rationale**: User entity is the central data model referenced by all functional features.

**Source**: FR-007, FR-010, BR-006
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN a new registration, WHEN user is created, THEN all required fields are populated with defaults (cefr_level: null until placement, total_xp: 0, current_streak: 0, subscription_status: free)
2. GIVEN user data is queried, WHEN profile loads, THEN all fields are retrievable within 200ms

**Verification Method**: Test
**Dependencies**: None

---

### SR-DA-002: Exercise Completion Record

**Statement**: The system SHALL persist an ExerciseCompletion record for each completed exercise containing: completion_id, user_id, exercise_id, accuracy_score (0-100 integer), xp_earned (integer), duration_seconds (integer), completed_at (UTC+7 timestamp).

**Rationale**: Completion records are the primary data source for progress analytics, XP calculation, and streak tracking.

**Source**: FR-006, FR-028, BR-007
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user completes exercise with 85% accuracy, WHEN record is persisted, THEN all fields are stored within 500ms
2. GIVEN completion records, WHEN queried by user_id and date range, THEN records are returned sorted by completed_at descending

**Verification Method**: Test
**Dependencies**: SR-FN-010

---

### SR-DA-003: Exercise Data Model

**Statement**: The system SHALL maintain an Exercise entity containing: exercise_id (UUID), title, category (enum), cefr_level (A1-C1), audio_url, audio_duration_seconds, transcript_text, vietnamese_hints (JSON map of word→explanation), source_type (original|curated), source_attribution (nullable string), source_url (nullable URL), status (draft|published|scheduled|archived), created_by (user_id), created_at, published_at, scheduled_at.

**Rationale**: Exercise entity contains all content and metadata needed for the dictation experience and CMS management.

**Source**: FR-030, FR-031, FR-032, BR-004
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN a published exercise, WHEN loaded for learner, THEN title, audio_url, category, cefr_level, and transcript are available
2. GIVEN curated exercise, WHEN source_type is "curated", THEN source_attribution and source_url are non-null

**Verification Method**: Test
**Dependencies**: None

---

### SR-DA-004: Streak Data Model

**Statement**: The system SHALL track streak data per user as: user_id, current_streak (integer ≥0), record_streak (integer ≥0), last_exercise_date (date in UTC+7), streak_start_date (date in UTC+7).

**Rationale**: Streak calculation requires knowing the last exercise date to determine if a calendar day was missed.

**Source**: FR-016, FR-017, RULE-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user completed exercise on 2026-03-17 UTC+7, WHEN last_exercise_date is updated, THEN value is 2026-03-17
2. GIVEN current date is 2026-03-19 and last_exercise_date is 2026-03-17, WHEN streak check runs, THEN current_streak resets to 0

**Verification Method**: Test
**Dependencies**: SR-FN-025

---

### SR-DA-005: Vietnamese Hints Data

**Statement**: The system SHALL store Vietnamese explanations as a JSON map within each exercise, keyed by English word/phrase, with values containing: vietnamese_meaning, phonetic_ipa, and example_sentence (optional).

**Rationale**: Vietnamese hints are displayed per-word when learners tap incorrect/missing words in diff view.

**Source**: FR-004, BR-002
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN exercise with hint for "cat", WHEN hint is stored, THEN JSON contains: `{"cat": {"vietnamese_meaning": "con mèo", "phonetic_ipa": "/kæt/", "example_sentence": null}}`
2. GIVEN a word not in hints map, WHEN learner taps that word, THEN system falls back to IPA-only display

**Verification Method**: Test
**Dependencies**: None

---

### SR-DA-006: Bookmark Data Model

**Statement**: The system SHALL maintain a Bookmark entity containing: bookmark_id, user_id, exercise_id, created_at. The system SHALL maintain a PracticeList entity containing: list_id, user_id, list_name, exercise_ids (ordered array), created_at, updated_at.

**Rationale**: Bookmarks and practice lists enable personalized study. (BR-017)

**Source**: FR-037, FR-038, BR-017
**Priority**: Optional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user bookmarks an exercise, WHEN bookmark is created, THEN exercise appears in saved exercises list
2. GIVEN user creates a practice list, WHEN exercises are added, THEN ordering is preserved

**Verification Method**: Test
**Dependencies**: None

---

### SR-DA-007: Subscription Data Model

**Statement**: The system SHALL maintain a Subscription entity containing: subscription_id, user_id, plan_type (monthly|quarterly|annual), store (apple|google), store_transaction_id, status (active|expired|grace|cancelled), started_at, expires_at, grace_period_ends_at (expires_at + 7 days).

**Rationale**: Subscription data drives premium feature gating, grace period logic, and billing reconciliation.

**Source**: FR-024, FR-026, RULE-002
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN subscription purchase, WHEN record is created, THEN grace_period_ends_at is set to expires_at + 7 days
2. GIVEN subscription status query, WHEN current date is between expires_at and grace_period_ends_at, THEN status returns "grace"

**Verification Method**: Test
**Dependencies**: SR-FN-040

---

### SR-DA-008: Password Validation Rules

**Statement**: The system SHALL enforce password requirements: minimum 8 characters, at least 1 uppercase letter, at least 1 numeric digit. Passwords SHALL be stored using bcrypt with cost factor ≥12.

**Rationale**: Password policy balances security with usability for Vietnamese learners. (NFR-005)

**Source**: FR-007, NFR-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN password "Ab12345678", WHEN validated, THEN passes (≥8 chars, uppercase, digit)
2. GIVEN password "abcdefgh", WHEN validated, THEN fails (no uppercase, no digit)
3. GIVEN password stored, WHEN bcrypt is applied, THEN cost factor is ≥12

**Verification Method**: Test
**Dependencies**: SR-SC-005

---

### SR-DA-009: Data Retention Policy

**Statement**: The system SHALL retain exercise completion records indefinitely for active users. WHEN a user account is deleted, the system SHALL remove all personally identifiable data within 30 days while retaining anonymized aggregate statistics.

**Rationale**: Vietnam Personal Data Protection Decree requires data deletion upon user request. (NFR-011)

**Source**: NFR-011
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user requests account deletion, WHEN 30 days pass, THEN all PII (email, name, avatar) is permanently removed
2. GIVEN deleted user, WHEN aggregate stats are calculated, THEN anonymized completion records are included

**Verification Method**: Inspection
**Dependencies**: SR-SC-009

---

### SR-DA-010: Referral Data Model

**Statement**: The system SHALL maintain a Referral entity containing: referral_id, referrer_user_id, referee_user_id, referral_code (unique string), status (pending|completed|denied), premium_days_awarded (integer, default 7), created_at, completed_at.

**Rationale**: Referral tracking ensures correct premium reward distribution. (BR-016)

**Source**: FR-039, FR-040, BR-016
**Priority**: Optional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN referral code is created, WHEN code is generated, THEN it is unique across all users
2. GIVEN same device/email attempts self-referral, WHEN detected, THEN status is set to "denied"

**Verification Method**: Test
**Dependencies**: SR-FN-061

---

## Document Lineage

| Version | Document | Focus | Status |
|---------|----------|-------|--------|
| v1 | SRS-v1-daily-dictation-data-requirements.md | Data SRs (10) | ✅ Current |

← Back to [Main SRS](SRS-v1-daily-dictation-software-requirements.md)
