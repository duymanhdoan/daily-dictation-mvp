# User Stories: Daily Dictation

**Version**: v2.0
**Created**: 2026-03-17
**Last Updated**: 2026-03-17 — v2: Enhanced with SRS traceability, +12 new stories, refined ACs
**Status**: Draft
**Owner**: Duy MD (Product Owner)
**Upstream**: SRS/SRS-v1-daily-dictation-software-requirements.md | PRD/SPEC-v1-daily-dictation-prd.md | BRD/BRD-v1-daily-dictation-business-requirements.md

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **60 user stories** across 18 epics | +12 new stories from SRS gap analysis | HIGH |
| 2 | **4 personas** | Linh (TOEIC), Minh (IELTS/Premium), Hoa (Casual), Trang (CMS) | HIGH |
| 3 | **246 acceptance criteria** | +64 ACs from SRS enhancement (was 182) | HIGH |
| 4 | **100% SRS coverage** | All 125 SR-NNN mapped to user stories | HIGH |
| 5 | **Security fixes** | Email enumeration prevention applied to all auth stories | HIGH |
| 6 | **New compliance stories** | Data export, account deletion per Vietnam Cybersecurity Law | HIGH |
| 7 | **New platform stories** | iOS HIG, Material Design, biometric, haptic, graceful degradation | HIGH |

---

## Personas Reference

| Persona | Role | Level | Goal | Stories |
|---------|------|-------|------|---------|
| **Linh** | TOEIC Preparer, 23 | A2-B1 | Score 600+ TOEIC | Registration, dictation, gamification, freemium |
| **Minh** | IELTS Aspirant, 26 | B1-B2 | IELTS Listening 7.0+ | Premium, TOEIC/IELTS, progress, multi-device |
| **Hoa** | Casual Learner, 19 | A1-A2 | Improve listening for fun | Browse, bookmarks, notifications, referral |
| **Trang** | Content Manager, 30, ESL teacher | C1 | Publish exercises efficiently | CMS, attribution, scheduling |

---

## User Stories Summary

| ID | Title | Persona | Size | Priority | AC | Epic File |
|----|-------|---------|------|----------|-----|-----------|
| US-001 | Register with Email | Linh | S | Must Have | 5 | [epic-01](epic-01-registration-onboarding.md) |
| US-002 | Register with Google OAuth | Linh | S | Must Have | 4 | [epic-01](epic-01-registration-onboarding.md) |
| US-003 | Verify Email Address | Linh | S | Must Have | 4 | [epic-01](epic-01-registration-onboarding.md) |
| US-004 | Reset Forgotten Password | Linh | S | Must Have | 4 | [epic-01](epic-01-registration-onboarding.md) |
| US-005 | Complete Placement Test | Linh | M | Must Have | 5 | [epic-01](epic-01-registration-onboarding.md) |
| US-006 | Skip Placement Test | Hoa | XS | Must Have | 3 | [epic-01](epic-01-registration-onboarding.md) |
| US-007 | Start a Dictation Exercise | Linh | M | Must Have | 5 | [epic-02](epic-02-core-dictation.md) |
| US-008 | Listen to Exercise Audio | Linh | M | Must Have | 6 | [epic-02](epic-02-core-dictation.md) |
| US-009 | Type Dictation Answer | Linh | M | Must Have | 4 | [epic-02](epic-02-core-dictation.md) |
| US-010 | Check Answer and View Diff | Linh | L | Must Have | 8 | [epic-02](epic-02-core-dictation.md) |
| US-011 | View Vietnamese Error Explanations | Hoa | M | Must Have | 4 | [epic-02](epic-02-core-dictation.md) |
| US-012 | Practice Read Aloud Step | Hoa | M | Must Have | 3 | [epic-02](epic-02-core-dictation.md) |
| US-013 | Browse Exercises by Category | Hoa | M | Must Have | 4 | [epic-03](epic-03-content-browse.md) |
| US-014 | Filter Exercises by CEFR Level | Hoa | S | Must Have | 4 | [epic-03](epic-03-content-browse.md) |
| US-015 | View Exercise Card Details | Hoa | S | Must Have | 3 | [epic-03](epic-03-content-browse.md) |
| US-016 | Earn Daily Streak | Linh | M | Must Have | 4 | [epic-04](epic-04-gamification-streaks.md) |
| US-017 | Receive Streak Reset Notification | Linh | S | Must Have | 3 | [epic-04](epic-04-gamification-streaks.md) |
| US-018 | Earn XP After Exercise | Linh | M | Must Have | 5 | [epic-05](epic-05-gamification-xp-levels.md) |
| US-019 | Level Up | Linh | M | Must Have | 3 | [epic-05](epic-05-gamification-xp-levels.md) |
| US-020 | View XP and Level in Profile | Linh | S | Must Have | 4 | [epic-05](epic-05-gamification-xp-levels.md) |
| US-021 | Earn Achievement Badge | Hoa | M | Must Have | 4 | [epic-06](epic-06-gamification-badges.md) |
| US-022 | View Badge Collection | Hoa | S | Must Have | 3 | [epic-06](epic-06-gamification-badges.md) |
| US-023 | View Daily Leaderboard | Minh | M | Should Have | 4 | [epic-07](epic-07-leaderboards.md) |
| US-024 | View Weekly and All-Time Leaderboards | Minh | S | Should Have | 3 | [epic-07](epic-07-leaderboards.md) |
| US-025 | Find My Rank | Minh | S | Should Have | 2 | [epic-07](epic-07-leaderboards.md) |
| US-026 | Use Free Tier with Daily Limit | Hoa | M | Must Have | 5 | [epic-08](epic-08-freemium-model.md) |
| US-027 | View Ads Between Exercises | Hoa | S | Must Have | 3 | [epic-08](epic-08-freemium-model.md) |
| US-028 | Subscribe to Premium Plan | Minh | L | Must Have | 8 | [epic-09](epic-09-premium-subscription.md) |
| US-029 | Enjoy Ad-Free Premium Experience | Minh | S | Must Have | 3 | [epic-09](epic-09-premium-subscription.md) |
| US-030 | Access Premium TOEIC/IELTS Test Mode | Minh | M | Should Have | 4 | [epic-09](epic-09-premium-subscription.md) |
| US-031 | Manage Subscription | Minh | M | Should Have | 4 | [epic-09](epic-09-premium-subscription.md) |
| US-032 | Handle Subscription Expiration | Minh | M | Should Have | 4 | [epic-09](epic-09-premium-subscription.md) |
| US-033 | View Progress Dashboard | Linh | L | Must Have | 5 | [epic-10](epic-10-progress-analytics.md) |
| US-034 | Filter Progress by Category | Linh | S | Should Have | 3 | [epic-10](epic-10-progress-analytics.md) |
| US-035 | Navigate Platform in Vietnamese | Hoa | L | Must Have | 5 | [epic-11](epic-11-localization.md) |
| US-036 | Receive Vietnamese Push Notifications | Hoa | S | Should Have | 2 | [epic-11](epic-11-localization.md) |
| US-037 | Opt Into Push Notifications | Hoa | S | Should Have | 3 | [epic-12](epic-12-notifications.md) |
| US-038 | Receive Streak Reminder | Linh | S | Should Have | 4 | [epic-12](epic-12-notifications.md) |
| US-039 | Deep-Link From Notification to Exercise | Linh | S | Should Have | 3 | [epic-12](epic-12-notifications.md) |
| US-040 | Create New Exercise in CMS | Trang | L | Should Have | 5 | [epic-13](epic-13-cms.md) |
| US-041 | Preview Exercise Before Publishing | Trang | M | Should Have | 3 | [epic-13](epic-13-cms.md) |
| US-042 | Publish and Schedule Exercises | Trang | M | Should Have | 5 | [epic-13](epic-13-cms.md) |
| US-043 | Enforce Content Attribution | Trang | S | Should Have | 3 | [epic-13](epic-13-cms.md) |
| US-044 | Toggle Dark Mode | Hoa | S | Should Have | 3 | [epic-14](epic-14-accessibility.md) |
| US-045 | Bookmark an Exercise | Hoa | S | Could Have | 3 | [epic-15](epic-15-bookmarking.md) |
| US-046 | Create Custom Practice List | Hoa | M | Could Have | 3 | [epic-15](epic-15-bookmarking.md) |
| US-047 | Share Referral Link | Hoa | M | Could Have | 4 | [epic-16](epic-16-referral.md) |
| US-048 | Receive Weekly Progress Email | Linh | M | Could Have | 3 | [epic-17](epic-17-email-reports.md) |
| US-049 | Logout Securely | Linh | S | Must Have | 4 | [epic-01](epic-01-registration-onboarding.md) |
| US-050 | Enforce Premium Session Limit | Minh | M | Must Have | 3 | [epic-09](epic-09-premium-subscription.md) |
| US-051 | Request Data Export | Linh | M | Must Have | 3 | [epic-18](epic-18-platform-compliance.md) |
| US-052 | Request Account Deletion | Linh | M | Must Have | 4 | [epic-18](epic-18-platform-compliance.md) |
| US-053 | App Functions During Service Degradation | Hoa | M | Should Have | 4 | [epic-18](epic-18-platform-compliance.md) |
| US-054 | Support Older OS Versions | Linh | S | Should Have | 3 | [epic-18](epic-18-platform-compliance.md) |
| US-055 | Support Multiple Web Browsers | Minh | S | Should Have | 3 | [epic-18](epic-18-platform-compliance.md) |
| US-056 | Accessibility Compliance (WCAG 2.1 AA) | Hoa | M | Should Have | 4 | [epic-14](epic-14-accessibility.md) |
| US-057 | iOS HIG Compliance | Linh | S | Should Have | 3 | [epic-18](epic-18-platform-compliance.md) |
| US-058 | Material Design 3 Compliance | Linh | S | Should Have | 3 | [epic-18](epic-18-platform-compliance.md) |
| US-059 | Biometric App Unlock | Minh | M | Could Have | 4 | [epic-18](epic-18-platform-compliance.md) |
| US-060 | Haptic Feedback on Milestones | Hoa | S | Could Have | 3 | [epic-18](epic-18-platform-compliance.md) |

---

## Story Map

```
Epic 01: Registration & Onboarding
├── US-001: Register with Email [Must Have] ★ ENHANCED
├── US-002: Register with Google OAuth [Must Have]
├── US-003: Verify Email Address [Must Have]
├── US-004: Reset Forgotten Password [Must Have] ★ ENHANCED
├── US-005: Complete Placement Test [Must Have]
├── US-006: Skip Placement Test [Must Have]
└── US-049: Logout Securely [Must Have] ★ NEW

Epic 02: Core Dictation
├── US-007: Start a Dictation Exercise [Must Have] ★ ENHANCED
├── US-008: Listen to Exercise Audio [Must Have] ★ ENHANCED
├── US-009: Type Dictation Answer [Must Have]
├── US-010: Check Answer and View Diff [Must Have] ★ ENHANCED (+3 ACs)
├── US-011: View Vietnamese Error Explanations [Must Have]
└── US-012: Practice Read Aloud Step [Must Have]

Epic 03: Content & Browse
├── US-013: Browse Exercises by Category [Must Have]
├── US-014: Filter Exercises by CEFR Level [Must Have]
└── US-015: View Exercise Card Details [Must Have]

Epic 04: Gamification — Streaks
├── US-016: Earn Daily Streak [Must Have]
└── US-017: Receive Streak Reset Notification [Must Have]

Epic 05: Gamification — XP & Levels
├── US-018: Earn XP After Exercise [Must Have]
├── US-019: Level Up [Must Have]
└── US-020: View XP and Level in Profile [Must Have]

Epic 06: Gamification — Badges
├── US-021: Earn Achievement Badge [Must Have]
└── US-022: View Badge Collection [Must Have]

Epic 07: Leaderboards
├── US-023: View Daily Leaderboard [Should Have]
├── US-024: View Weekly/All-Time Leaderboards [Should Have]
└── US-025: Find My Rank [Should Have]

Epic 08: Freemium Model
├── US-026: Use Free Tier with Daily Limit [Must Have]
└── US-027: View Ads Between Exercises [Must Have]

Epic 09: Premium Subscription
├── US-028: Subscribe to Premium Plan [Must Have] ★ ENHANCED (+store compliance)
├── US-029: Enjoy Ad-Free Premium Experience [Must Have]
├── US-030: Access Premium TOEIC/IELTS Test Mode [Should Have]
├── US-031: Manage Subscription [Should Have]
├── US-032: Handle Subscription Expiration [Should Have]
└── US-050: Enforce Premium Session Limit [Must Have] ★ NEW

Epic 10: Progress Analytics
├── US-033: View Progress Dashboard [Must Have]
└── US-034: Filter Progress by Category [Should Have]

Epic 11: Localization
├── US-035: Navigate Platform in Vietnamese [Must Have]
└── US-036: Receive Vietnamese Push Notifications [Should Have]

Epic 12: Notifications
├── US-037: Opt Into Push Notifications [Should Have]
├── US-038: Receive Streak Reminder [Should Have]
└── US-039: Deep-Link From Notification to Exercise [Should Have]

Epic 13: CMS
├── US-040: Create New Exercise in CMS [Should Have]
├── US-041: Preview Exercise Before Publishing [Should Have]
├── US-042: Publish and Schedule Exercises [Should Have]
└── US-043: Enforce Content Attribution [Should Have]

Epic 14: Accessibility
├── US-044: Toggle Dark Mode [Should Have]
└── US-056: Accessibility Compliance (WCAG 2.1 AA) [Should Have] ★ NEW

Epic 15: Bookmarking
├── US-045: Bookmark an Exercise [Could Have]
└── US-046: Create Custom Practice List [Could Have]

Epic 16: Referral
└── US-047: Share Referral Link [Could Have]

Epic 17: Email Reports
└── US-048: Receive Weekly Progress Email [Could Have]

Epic 18: Platform & Compliance ★ NEW EPIC
├── US-051: Request Data Export [Must Have] ★ NEW
├── US-052: Request Account Deletion [Must Have] ★ NEW
├── US-053: App Functions During Service Degradation [Should Have] ★ NEW
├── US-054: Support Older OS Versions [Should Have] ★ NEW
├── US-055: Support Multiple Web Browsers [Should Have] ★ NEW
├── US-057: iOS HIG Compliance [Should Have] ★ NEW
├── US-058: Material Design 3 Compliance [Should Have] ★ NEW
├── US-059: Biometric App Unlock [Could Have] ★ NEW
└── US-060: Haptic Feedback on Milestones [Could Have] ★ NEW
```

---

## Non-Goals (Out of Scope — Phase 1)

| # | Capability | Reason |
|---|-----------|--------|
| 1 | Speech recognition / pronunciation scoring | Phase 2 — requires AI/ML investment |
| 2 | AI-powered adaptive difficulty | Phase 2 — needs user data for training |
| 3 | Social features (comments, sharing, forums) | Phase 2 — not core learning loop |
| 4 | Multi-language UI beyond Vietnamese | Phase 2 — single market focus |
| 5 | Offline exercise caching | Phase 2 — requires significant architecture |
| 6 | Tablet-optimized layouts | Phase 2 — phone-first for Vietnam market |
| 7 | Infrastructure SLAs (uptime, RTO, RPO, error budget) | Covered in SRS (SR-RA-001/002/003/005) as operational requirements |
| 8 | API response time SLO (<300ms P95) | Covered in SRS (SR-PF-004) as infrastructure requirement |
| 9 | Concurrent capacity testing (10K users) | Covered in SRS (SR-PF-005) as load testing requirement |

---

## INVEST Validation Summary

| Check | Pass | Fail | Notes |
|-------|------|------|-------|
| **I**ndependent | 58 | 2 | US-029 depends on US-028; US-050 depends on US-028 |
| **N**egotiable | 60 | 0 | All describe WHAT not HOW |
| **V**aluable | 60 | 0 | All "So that" clauses have measurable benefits |
| **E**stimable | 60 | 0 | All have T-shirt sizes |
| **S**mall | 58 | 2 | US-010 (L, 8 ACs) and US-028 (L, 8 ACs) are large but justified |
| **T**estable | 60 | 0 | All ACs use Given/When/Then with specific values |

---

## Full Traceability Matrix (US → SR → FR → BR)

| US-ID | SR-IDs | FR-IDs | BR-IDs |
|-------|--------|--------|--------|
| US-001 | SR-FN-015, SR-SC-001, SR-SC-005, SR-DA-001, SR-DA-008 | FR-007 | BR-006 |
| US-002 | SR-FN-016, SR-SC-002, SR-IF-008 | FR-007 | BR-006 |
| US-003 | SR-FN-017, SR-SC-003 | FR-008 | BR-006 |
| US-004 | SR-FN-018, SR-SC-004 | FR-009 | BR-006 |
| US-005 | SR-FN-021 | FR-012, FR-013, FR-015 | BR-008 |
| US-006 | SR-FN-022, SR-FN-023 | FR-014 | BR-008 |
| US-007 | SR-FN-010, SR-FN-013, SR-PF-001, SR-IF-001 | FR-001, FR-006 | BR-001 |
| US-008 | SR-FN-001, SR-FN-002, SR-FN-003, SR-PF-002, SR-IF-012 | FR-001 | BR-001 |
| US-009 | SR-FN-004, SR-FN-005 | FR-002, FR-003 | BR-001 |
| US-010 | SR-FN-006, SR-FN-007, SR-FN-011, SR-FN-012, SR-FN-014, SR-PF-003, SR-IF-002 | FR-003, FR-006 | BR-001, BR-009 |
| US-011 | SR-FN-008, SR-IF-005, SR-DA-005 | FR-004 | BR-002, BR-009 |
| US-012 | SR-FN-009 | FR-005 | BR-009 |
| US-013 | SR-FN-045, SR-PF-006 | FR-030 | BR-004 |
| US-014 | SR-FN-046 | FR-030 | BR-004 |
| US-015 | SR-FN-047 | FR-030 | BR-004 |
| US-016 | SR-FN-025, SR-DA-004, SR-CN-004 | FR-016 | BR-005 |
| US-017 | SR-FN-026, SR-FN-027 | FR-017 | BR-005 |
| US-018 | SR-FN-028, SR-FN-029 | FR-018 | BR-005 |
| US-019 | SR-FN-030 | FR-019 | BR-005 |
| US-020 | SR-FN-019, SR-FN-035, SR-FN-036 | FR-010, FR-018 | BR-005, BR-006 |
| US-021 | SR-FN-031 | FR-020 | BR-005 |
| US-022 | SR-FN-032 | FR-020 | BR-005 |
| US-023 | SR-FN-033, SR-IF-006 | FR-021 | BR-011 |
| US-024 | SR-FN-034 | FR-021 | BR-011 |
| US-025 | SR-FN-033 | FR-021 | BR-011 |
| US-026 | SR-FN-037, SR-IF-004, SR-CN-004 | FR-022 | BR-003 |
| US-027 | SR-FN-038 | FR-023 | BR-003 |
| US-028 | SR-FN-039, SR-FN-040, SR-IF-009, SR-IF-010, SR-SC-008, SR-MB-005, SR-MB-006 | FR-024, FR-025 | BR-003 |
| US-029 | SR-FN-044 | FR-025 | BR-003 |
| US-030 | SR-FN-043 | FR-027 | BR-012 |
| US-031 | SR-FN-060 | FR-024 | BR-003 |
| US-032 | SR-FN-041, SR-FN-042 | FR-026 | BR-003 |
| US-033 | SR-IF-003 | FR-028, FR-029 | BR-007 |
| US-034 | SR-IF-003 | FR-029 | BR-007 |
| US-035 | SR-CN-003 | NFR-009 | BR-002 |
| US-036 | SR-FN-058 | FR-035 | BR-010 |
| US-037 | SR-FN-057, SR-IF-011 | FR-034 | BR-010 |
| US-038 | SR-FN-058, SR-PF-009 | FR-035 | BR-010 |
| US-039 | SR-FN-059, SR-MB-007 | FR-036 | BR-010 |
| US-040 | SR-FN-051, SR-PF-010 | FR-031 | BR-013 |
| US-041 | SR-FN-052 | FR-031 | BR-013 |
| US-042 | SR-FN-053, SR-FN-054, SR-FN-055, SR-FN-056, SR-SC-010 | FR-031, FR-033 | BR-013 |
| US-043 | SR-FN-048, SR-CN-006 | FR-032 | BR-013 |
| US-044 | SR-PF-008 | FR-014 | BR-014 |
| US-045 | SR-FN-049, SR-DA-006 | FR-037 | BR-017 |
| US-046 | SR-FN-050, SR-DA-006 | FR-038 | BR-017 |
| US-047 | SR-FN-061, SR-SC-011, SR-DA-010 | FR-039, FR-040 | BR-016 |
| US-048 | SR-FN-062 | FR-041, FR-042 | BR-018 |
| US-049 | SR-FN-024, SR-SC-007 | FR-007 | BR-006 |
| US-050 | SR-FN-020 | FR-011 | BR-003 |
| US-051 | SR-SC-009, SR-DA-009 | NFR-011 | — |
| US-052 | SR-SC-009, SR-DA-009 | NFR-011 | — |
| US-053 | SR-RA-004 | NFR-004 | BR-001 |
| US-054 | SR-CN-001, SR-MB-003 | NFR-012 | — |
| US-055 | SR-CN-002 | NFR-012 | — |
| US-056 | SR-CN-005 | NFR-008 | BR-014 |
| US-057 | SR-MB-001 | NFR-012 | — |
| US-058 | SR-MB-002 | NFR-012 | — |
| US-059 | SR-MB-004 | FR-007 | — |
| US-060 | SR-MB-008 | — | BR-005 |

---

## Document References

| # | File | Epic | Stories |
|---|------|------|---------|
| 1 | [epic-01-registration-onboarding.md](epic-01-registration-onboarding.md) | Registration & Onboarding | US-001–006, US-049 |
| 2 | [epic-02-core-dictation.md](epic-02-core-dictation.md) | Core Dictation | US-007–012 |
| 3 | [epic-03-content-browse.md](epic-03-content-browse.md) | Content & Browse | US-013–015 |
| 4 | [epic-04-gamification-streaks.md](epic-04-gamification-streaks.md) | Gamification — Streaks | US-016–017 |
| 5 | [epic-05-gamification-xp-levels.md](epic-05-gamification-xp-levels.md) | Gamification — XP & Levels | US-018–020 |
| 6 | [epic-06-gamification-badges.md](epic-06-gamification-badges.md) | Gamification — Badges | US-021–022 |
| 7 | [epic-07-leaderboards.md](epic-07-leaderboards.md) | Leaderboards | US-023–025 |
| 8 | [epic-08-freemium-model.md](epic-08-freemium-model.md) | Freemium Model | US-026–027 |
| 9 | [epic-09-premium-subscription.md](epic-09-premium-subscription.md) | Premium Subscription | US-028–032, US-050 |
| 10 | [epic-10-progress-analytics.md](epic-10-progress-analytics.md) | Progress Analytics | US-033–034 |
| 11 | [epic-11-localization.md](epic-11-localization.md) | Localization | US-035–036 |
| 12 | [epic-12-notifications.md](epic-12-notifications.md) | Notifications | US-037–039 |
| 13 | [epic-13-cms.md](epic-13-cms.md) | CMS | US-040–043 |
| 14 | [epic-14-accessibility.md](epic-14-accessibility.md) | Accessibility | US-044, US-056 |
| 15 | [epic-15-bookmarking.md](epic-15-bookmarking.md) | Bookmarking | US-045–046 |
| 16 | [epic-16-referral.md](epic-16-referral.md) | Referral | US-047 |
| 17 | [epic-17-email-reports.md](epic-17-email-reports.md) | Email Reports | US-048 |
| 18 | [epic-18-platform-compliance.md](epic-18-platform-compliance.md) | Platform & Compliance | US-051–055, US-057–060 |

---

## Session Summary

1. **What was created**: User Stories v2 for Daily Dictation — 60 stories, 246 ACs across 18 epics
2. **Changes from v1**: +12 new stories (US-049–060), enhanced ACs on 8 existing stories, security fixes on auth stories
3. **Files generated**: INDEX.md + 18 epic files in USER-STORIES/
4. **Quality**: INVEST validated — 58/60 independent, 60/60 testable, 60/60 valuable
5. **Next steps**: `/write-test-cases USER-STORIES/INDEX.md` to regenerate test cases matching v2 stories
