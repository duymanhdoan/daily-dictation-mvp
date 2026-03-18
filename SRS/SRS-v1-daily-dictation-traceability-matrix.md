# Traceability Matrix: Daily Dictation

**Parent SRS**: [SRS-v1-daily-dictation-software-requirements.md](SRS-v1-daily-dictation-software-requirements.md)
**Version**: v1.0
**Created**: 2026-03-17

---

## Full Requirements Traceability Matrix

### Dictation Engine

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| FR-001, BR-001 | SR-FN-001 | Functional | Audio playback initiation | Essential | Test | US-008 | TC-008-01 |
| FR-001, RULE-012 | SR-FN-002 | Functional | Audio playback speed control | Essential | Test | US-008 | TC-008-04 |
| FR-001, BR-001 | SR-FN-003 | Functional | Audio replay unlimited | Essential | Test | US-008 | TC-008-03 |
| FR-002 | SR-FN-004 | Functional | Real-time character count | Essential | Test | US-009 | TC-009-02 |
| FR-003, NFR-003 | SR-FN-005 | Functional | Answer submission | Essential | Test | US-009 | TC-009-01 |
| FR-003, BR-009 | SR-FN-006 | Functional | Word-by-word diff display | Essential | Test | US-010 | TC-010-01 |
| FR-006, RULE-004 | SR-FN-007 | Functional | Accuracy calculation | Essential | Test | US-010 | TC-010-02 |
| FR-004, BR-002 | SR-FN-008 | Functional | Vietnamese error explanations | Essential | Test | US-011 | TC-011-01 |
| FR-005, BR-009 | SR-FN-009 | Functional | Read Aloud mode | Essential | Test | US-012 | TC-012-01 |
| FR-006, BR-001 | SR-FN-010 | Functional | Exercise completion | Essential | Test | US-007 | TC-007-01 |
| FR-003 | SR-FN-011 | Functional | Case-insensitive comparison | Essential | Test | US-010 | TC-010-05 |
| FR-003 | SR-FN-012 | Functional | Punctuation stripping | Essential | Test | US-010 | TC-010-06 |
| FR-006, BR-005 | SR-FN-013 | Functional | Exercise summary screen | Essential | Test | US-007 | TC-007-01 |
| FR-003, BR-009 | SR-FN-014 | Functional | Correct answer reveal | Essential | Test | US-010 | TC-010-01 |

### User Management

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| FR-007, BR-006 | SR-FN-015 | Functional | Email registration | Essential | Test | US-001 | TC-001-01 |
| FR-007, BR-006 | SR-FN-016 | Functional | Google OAuth registration | Essential | Test | US-002 | TC-002-01 |
| FR-008, RULE-005 | SR-FN-017 | Functional | Email verification gate | Essential | Test | US-003 | TC-003-01 |
| FR-009 | SR-FN-018 | Functional | Password reset | Essential | Test | US-004 | TC-004-01 |
| FR-010, BR-006 | SR-FN-019 | Functional | User profile display | Essential | Test | US-020 | TC-020-01 |
| FR-011, RULE-010 | SR-FN-020 | Functional | Session limit enforcement | Essential | Test | US-028 | TC-028-02 |
| FR-012-015, RULE-007 | SR-FN-021 | Functional | Placement test flow | Essential | Test | US-005 | TC-005-01 |
| FR-014, BR-008 | SR-FN-022 | Functional | Placement test skip | Essential | Test | US-006 | TC-006-01 |
| FR-014 | SR-FN-023 | Functional | Placement test retake | Conditional | Test | US-006 | TC-006-02 |
| FR-007 | SR-FN-024 | Functional | Logout | Essential | Test | US-001 | — |

### Gamification

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| FR-016, RULE-003 | SR-FN-025 | Functional | Daily streak increment | Essential | Test | US-016 | TC-016-01 |
| FR-017, BR-005 | SR-FN-026 | Functional | Streak reset | Essential | Test | US-017 | TC-017-01 |
| FR-017, BR-005 | SR-FN-027 | Functional | Streak reset modal | Essential | Test | US-017 | TC-017-01 |
| FR-018, RULE-004 | SR-FN-028 | Functional | XP calculation | Essential | Test | US-018 | TC-018-01 |
| FR-018, BR-005 | SR-FN-029 | Functional | XP animation | Essential | Demonstration | US-018 | TC-018-04 |
| FR-019, BR-005 | SR-FN-030 | Functional | Level up | Essential | Test | US-019 | TC-019-01 |
| FR-020, BR-005 | SR-FN-031 | Functional | Achievement badges | Essential | Test | US-021 | TC-021-01 |
| FR-020, BR-005 | SR-FN-032 | Functional | Badge collection display | Essential | Test | US-022 | TC-022-01 |
| FR-021, BR-011 | SR-FN-033 | Functional | Daily leaderboard | Conditional | Test | US-023 | TC-023-01 |
| FR-021, BR-011 | SR-FN-034 | Functional | Weekly/all-time leaderboards | Conditional | Test | US-024 | TC-024-01 |
| FR-018, BR-005 | SR-FN-035 | Functional | Streak multiplier badge | Conditional | Test | US-020 | TC-020-02 |
| FR-018, BR-005 | SR-FN-036 | Functional | XP history | Conditional | Test | US-020 | TC-020-03 |

### Freemium & Subscription

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| FR-022, RULE-001 | SR-FN-037 | Functional | Daily exercise limit | Essential | Test | US-026 | TC-026-01 |
| FR-023, RULE-011 | SR-FN-038 | Functional | Ad display between exercises | Essential | Test | US-027 | TC-027-01 |
| FR-024, RULE-002 | SR-FN-039 | Functional | Subscription plan display | Essential | Test | US-028 | TC-028-01 |
| FR-024-025, BR-003 | SR-FN-040 | Functional | Subscription purchase | Essential | Test | US-028 | TC-028-02 |
| FR-026, BR-003 | SR-FN-041 | Functional | Subscription grace period | Essential | Test | US-032 | TC-032-02 |
| FR-026, BR-003 | SR-FN-042 | Functional | Subscription expiration warning | Essential | Test | US-032 | TC-032-01 |
| FR-027, RULE-008 | SR-FN-043 | Functional | Premium TOEIC/IELTS test mode | Essential | Test | US-030 | TC-030-01 |
| FR-025, BR-003 | SR-FN-044 | Functional | Ad removal on premium | Essential | Test | US-029 | TC-029-01 |

### Content & Browse

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| FR-030, BR-004 | SR-FN-045 | Functional | Exercise catalog by category | Essential | Test | US-013 | TC-013-01 |
| FR-030, BR-004 | SR-FN-046 | Functional | CEFR level filter | Essential | Test | US-014 | TC-014-01 |
| FR-030, BR-004 | SR-FN-047 | Functional | Exercise card details | Essential | Test | US-015 | TC-015-01 |
| FR-032, RULE-006 | SR-FN-048 | Functional | Source attribution display | Essential | Test | US-043 | TC-043-01 |
| FR-037, BR-017 | SR-FN-049 | Functional | Bookmark exercise | Optional | Test | US-045 | TC-045-01 |
| FR-038, BR-017 | SR-FN-050 | Functional | Custom practice list | Optional | Test | US-046 | TC-046-01 |

### CMS

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| FR-031, BR-013 | SR-FN-051 | Functional | Exercise creation | Conditional | Test | US-040 | TC-040-01 |
| FR-031, BR-013 | SR-FN-052 | Functional | Exercise preview | Conditional | Test | US-041 | TC-041-01 |
| FR-031, BR-013 | SR-FN-053 | Functional | Exercise publishing | Conditional | Test | US-042 | TC-042-01 |
| FR-031, BR-013 | SR-FN-054 | Functional | Exercise scheduling | Conditional | Test | US-042 | TC-042-02 |
| FR-031, BR-013 | SR-FN-055 | Functional | Exercise archiving | Conditional | Test | US-042 | TC-042-03 |
| FR-033, RULE-009 | SR-FN-056 | Functional | Admin-only deletion | Conditional | Test | US-042 | TC-042-04 |

### Notifications

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| FR-034, BR-010 | SR-FN-057 | Functional | Push notification permission | Conditional | Test | US-037 | TC-037-01 |
| FR-035, BR-010 | SR-FN-058 | Functional | Streak reminder notification | Conditional | Test | US-038 | TC-038-01 |
| FR-036, BR-010 | SR-FN-059 | Functional | Deep link from notification | Conditional | Test | US-039 | TC-039-01 |
| FR-024, BR-003 | SR-FN-060 | Functional | Subscription management nav | Conditional | Test | US-031 | TC-031-02 |

### Referral & Email

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| FR-039-040, BR-016 | SR-FN-061 | Functional | Referral link sharing | Optional | Test | US-047 | TC-047-01 |
| FR-041-042, BR-018 | SR-FN-062 | Functional | Weekly progress email | Optional | Test | US-048 | TC-048-01 |

### Interface Requirements

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| FR-001-003, BR-001 | SR-IF-001 | Interface | Exercise screen layout | Essential | Inspection | US-007 | TC-007-01 |
| FR-003, BR-009 | SR-IF-002 | Interface | Diff view display | Essential | Inspection | US-010 | TC-010-01 |
| FR-028-029, BR-007 | SR-IF-003 | Interface | Progress dashboard layout | Essential | Test | US-033 | TC-033-01 |
| FR-022-024, BR-003 | SR-IF-004 | Interface | Paywall screen | Essential | Test | US-026 | TC-026-02 |
| FR-004, BR-002 | SR-IF-005 | Interface | Vietnamese tooltip | Essential | Inspection | US-011 | TC-011-01 |
| FR-021, BR-011 | SR-IF-006 | Interface | Leaderboard tab navigation | Conditional | Inspection | US-023 | TC-023-01 |
| FR-007-009, RULE-005 | SR-IF-007 | Interface | SMTP service integration | Essential | Test | US-001 | TC-001-01 |
| FR-007 | SR-IF-008 | Interface | Google OAuth 2.0 integration | Essential | Test | US-002 | TC-002-01 |
| FR-024, BR-003 | SR-IF-009 | Interface | App Store/Play billing | Essential | Test | US-028 | TC-028-02 |
| FR-024 | SR-IF-010 | Interface | Receipt validation | Essential | Test | US-028 | TC-028-05 |
| FR-034-036, BR-010 | SR-IF-011 | Interface | Push notification service | Conditional | Test | US-037 | TC-037-01 |
| FR-001, NFR-001 | SR-IF-012 | Interface | CDN audio delivery | Essential | Test | US-008 | TC-008-01 |

### Data Requirements

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| FR-007-010, BR-006 | SR-DA-001 | Data | User data model | Essential | Test | US-001 | TC-001-01 |
| FR-006-028, BR-007 | SR-DA-002 | Data | Exercise completion record | Essential | Test | US-007 | TC-007-01 |
| FR-030-032, BR-004 | SR-DA-003 | Data | Exercise data model | Essential | Test | US-013 | TC-013-01 |
| FR-016-017, RULE-003 | SR-DA-004 | Data | Streak data model | Essential | Test | US-016 | TC-016-01 |
| FR-004, BR-002 | SR-DA-005 | Data | Vietnamese hints data | Essential | Test | US-011 | TC-011-01 |
| FR-037-038, BR-017 | SR-DA-006 | Data | Bookmark data model | Optional | Test | US-045 | TC-045-01 |
| FR-024-026, RULE-002 | SR-DA-007 | Data | Subscription data model | Essential | Test | US-028 | TC-028-02 |
| FR-007, NFR-005 | SR-DA-008 | Data | Password validation rules | Essential | Test | US-001 | TC-001-04 |
| NFR-011 | SR-DA-009 | Data | Data retention policy | Essential | Inspection | — | — |
| FR-039-040, BR-016 | SR-DA-010 | Data | Referral data model | Optional | Test | US-047 | TC-047-01 |

### Performance Requirements

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| NFR-001, BR-001 | SR-PF-001 | Performance | Exercise screen load time | Essential | Test | US-007 | TC-007-01 |
| NFR-002 | SR-PF-002 | Performance | Audio playback start latency | Essential | Test | US-008 | TC-008-01 |
| NFR-003 | SR-PF-003 | Performance | Answer diff processing time | Essential | Test | US-010 | TC-010-07 |
| NFR-001 | SR-PF-004 | Performance | API response time | Essential | Test | — | — |
| NFR-010 | SR-PF-005 | Performance | Concurrent user capacity | Essential | Test | — | — |
| FR-030 | SR-PF-006 | Performance | Exercise catalog pagination | Essential | Test | US-013 | TC-013-02 |
| FR-007-009 | SR-PF-007 | Performance | Email delivery time | Essential | Test | US-001 | TC-001-01 |
| FR-014, BR-014 | SR-PF-008 | Performance | Dark mode toggle latency | Conditional | Test | US-044 | TC-044-01 |
| FR-035, BR-010 | SR-PF-009 | Performance | Push notification delivery | Conditional | Test | US-038 | TC-038-01 |
| FR-031, BR-013 | SR-PF-010 | Performance | CMS exercise creation time | Conditional | Test | US-040 | TC-040-05 |

### Security Requirements

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| FR-007-009 | SR-SC-001 | Security | Email enumeration prevention | Essential | Test | US-001 | TC-001-07 |
| FR-007 | SR-SC-002 | Security | OAuth state parameter validation | Essential | Test | US-002 | TC-002-04 |
| FR-008, RULE-005 | SR-SC-003 | Security | Email verification token security | Essential | Test | US-003 | TC-003-05 |
| FR-009 | SR-SC-004 | Security | Password reset token security | Essential | Test | US-004 | TC-004-03 |
| NFR-005 | SR-SC-005 | Security | Password storage (bcrypt) | Essential | Inspection | US-001 | TC-001-04 |
| NFR-006 | SR-SC-006 | Security | HTTPS/TLS enforcement | Essential | Test | — | — |
| NFR-007 | SR-SC-007 | Security | Authentication token management | Essential | Test | US-001 | — |
| FR-024 | SR-SC-008 | Security | Receipt validation anti-tampering | Essential | Test | US-028 | TC-028-05 |
| NFR-011 | SR-SC-009 | Security | Vietnam data protection compliance | Essential | Inspection | — | — |
| FR-033, RULE-009 | SR-SC-010 | Security | Role-based access control | Essential | Test | US-042 | TC-042-04 |
| FR-039, BR-016 | SR-SC-011 | Security | Self-referral prevention | Optional | Test | US-047 | TC-047-03 |

### Reliability Requirements

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| NFR-004 | SR-RA-001 | Reliability | System uptime 99.5% | Essential | Analysis | — | — |
| NFR-004 | SR-RA-002 | Reliability | RTO <1 hour | Essential | Test | — | — |
| NFR-004 | SR-RA-003 | Reliability | RPO <15 minutes | Essential | Test | — | — |
| NFR-004, BR-001 | SR-RA-004 | Reliability | Graceful degradation | Essential | Test | — | — |
| NFR-004 | SR-RA-005 | Reliability | Error budget | Conditional | Analysis | — | — |
| NFR-004 | SR-RA-006 | Reliability | Database failover | Essential | Test | — | — |

### Constraint Requirements

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| NFR-012 | SR-CN-001 | Constraint | Minimum platform versions | Essential | Test | — | — |
| NFR-012 | SR-CN-002 | Constraint | Web browser compatibility | Essential | Test | — | — |
| NFR-009, BR-002 | SR-CN-003 | Constraint | Vietnamese localization completeness | Essential | Inspection | US-035 | TC-035-01 |
| RULE-001, RULE-003 | SR-CN-004 | Constraint | UTC+7 timezone | Essential | Test | US-026 | TC-026-03 |
| NFR-008, BR-014 | SR-CN-005 | Constraint | WCAG 2.1 AA accessibility | Essential | Inspection | US-044 | TC-044-01 |
| RULE-006, FR-032 | SR-CN-006 | Constraint | Content attribution requirement | Essential | Test | US-043 | TC-043-01 |

### Platform (Mobile) Requirements

| Upstream (FR/BR) | SR-ID | Category | Title | Priority | Verification | US-ID | TC-ID |
|-------------------|-------|----------|-------|----------|-------------|-------|-------|
| NFR-012, Apple HIG | SR-MB-001 | Platform | iOS HIG compliance | Essential | Inspection | — | — |
| NFR-012, Material Design | SR-MB-002 | Platform | Material Design 3 compliance | Essential | Inspection | — | — |
| NFR-012 | SR-MB-003 | Platform | Device compatibility matrix | Essential | Test | — | — |
| FR-007 | SR-MB-004 | Platform | Biometric authentication | Conditional | Test | — | — |
| FR-024, Apple Guidelines | SR-MB-005 | Platform | App Store subscription compliance | Essential | Inspection | US-028 | TC-028-05 |
| FR-024, Google Policies | SR-MB-006 | Platform | Play Store subscription compliance | Essential | Test | US-028 | TC-028-05 |
| FR-036, BR-010 | SR-MB-007 | Platform | Deep link / Universal link | Conditional | Test | US-039 | TC-039-01 |
| BR-005 | SR-MB-008 | Platform | Haptic feedback | Optional | Demonstration | — | — |

---

## Coverage Summary

### Upstream Coverage (FR/NFR → SR)

| Category | Total Upstream | Mapped to SR | Coverage |
|----------|---------------|-------------|----------|
| Functional Requirements (FR-001 to FR-042) | 42 | 42 | **100%** |
| Non-Functional Requirements (NFR-001 to NFR-012) | 12 | 12 | **100%** |
| Business Rules (RULE-001 to RULE-012) | 12 | 12 | **100%** |
| **TOTAL** | **66** | **66** | **100%** |

### SR Distribution by Category

| Category | Prefix | Count | Essential | Conditional | Optional |
|----------|--------|-------|-----------|-------------|----------|
| Functional | SR-FN | 62 | 46 | 12 | 4 |
| Interface | SR-IF | 12 | 9 | 3 | 0 |
| Data | SR-DA | 10 | 8 | 0 | 2 |
| Performance | SR-PF | 10 | 7 | 3 | 0 |
| Security | SR-SC | 11 | 10 | 0 | 1 |
| Reliability | SR-RA | 6 | 5 | 1 | 0 |
| Constraint | SR-CN | 6 | 6 | 0 | 0 |
| Platform | SR-MB | 8 | 5 | 2 | 1 |
| **TOTAL** | | **125** | **96** | **21** | **8** |

### Verification Method Distribution

| Method | Count | Percentage |
|--------|-------|-----------|
| Test | 104 | 83.2% |
| Inspection | 15 | 12.0% |
| Analysis | 3 | 2.4% |
| Demonstration | 3 | 2.4% |
| **TOTAL** | **125** | **100%** |

---

## Gaps (Unmapped Upstream Requirements)

| Upstream ID | Title | Reason Not Mapped |
|-------------|-------|-------------------|
| — | — | No gaps — 100% upstream coverage |

---

## Open Questions

| # | Question | Owner | Target Date | Impact |
|---|----------|-------|-------------|--------|
| 1 | Exact XP level thresholds (Level 1 at 100 XP, Level 2 at 250 XP, etc.) — not defined in PRD | Product Owner | 2026-03-24 | SR-FN-030 |
| 2 | Vietnam data localization: which hosting region satisfies Cybersecurity Law? | Engineering Lead | 2026-03-24 | SR-SC-009 |
| 3 | Audio file format standardization (MP3 vs. AAC vs. OGG) for cross-platform compatibility | Engineering Lead | 2026-03-21 | SR-IF-012 |

---

## Document Lineage

| Version | Document | Focus | Status |
|---------|----------|-------|--------|
| v1 | SRS-v1-daily-dictation-traceability-matrix.md | Full RTM | ✅ Current |

← Back to [Main SRS](SRS-v1-daily-dictation-software-requirements.md)
