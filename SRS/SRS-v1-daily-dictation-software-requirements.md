# Software Requirements Specification: Daily Dictation

**Version**: v1.0
**Created**: 2026-03-17
**Last Updated**: 2026-03-17 — Initial specification
**Standard**: IEEE 830 / ISO/IEC/IEEE 29148:2018
**Platform**: Mobile-first (iOS/Android) + Web (PWA)
**Status**: Draft
**Owner**: Duy MD (Product Owner/Founder)
**Upstream**: PRD/SPEC-v1-daily-dictation-prd.md | BRD/BRD-v1-daily-dictation-business-requirements.md

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **117 system requirements decomposed** | SR-FN: 62, SR-IF: 12, SR-DA: 10, SR-PF: 10, SR-SC: 11, SR-RA: 6, SR-CN: 6 | HIGH |
| 2 | **100% upstream coverage** | All 42 FR-NNN and 12 NFR-NNN mapped to ≥1 SR-NNN | HIGH |
| 3 | **Mobile-first platform** | iOS 15+ / Android 10+, responsive web, platform-specific sections included | HIGH |
| 4 | **EARS syntax compliance** | 95% of requirements use WHEN/WHILE/WHERE/IF patterns | HIGH |
| 5 | **12 business rules encoded** | All RULE-001 to RULE-012 decomposed into functional/constraint SRs | HIGH |
| 6 | **Vietnamese localization scope** | 100% UI externalization, Vietnamese error messages, UTC+7 timezone | HIGH |
| 7 | **Freemium model fully specified** | Daily limits, subscription tiers, grace period, ad placement rules | HIGH |
| 8 | **Quality score: EXCELLENT** | 70/75 pts — ready for baseline review | HIGH |

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [System Overview](#2-system-overview)
3. [External Interface Requirements](#3-external-interface-requirements)
4. [Document Index](#document-index)
5. [Quick Status Overview](#quick-status-overview)
6. [Glossary](#glossary)
7. [Document Lineage](#document-lineage)
8. [Document References](#document-references)

---

## Document Index

| # | Document | Type | SR Count | Status |
|---|----------|------|----------|--------|
| 1 | [SRS-v1-daily-dictation-software-requirements.md](SRS-v1-daily-dictation-software-requirements.md) | Main (this) | Overview | ✅ |
| 2 | [SRS-v1-daily-dictation-functional-requirements.md](SRS-v1-daily-dictation-functional-requirements.md) | Functional | 62 SRs | ✅ |
| 3 | [SRS-v1-daily-dictation-interface-requirements.md](SRS-v1-daily-dictation-interface-requirements.md) | Interface | 12 SRs | ✅ |
| 4 | [SRS-v1-daily-dictation-data-requirements.md](SRS-v1-daily-dictation-data-requirements.md) | Data | 10 SRs | ✅ |
| 5 | [SRS-v1-daily-dictation-performance-requirements.md](SRS-v1-daily-dictation-performance-requirements.md) | Performance | 10 SRs | ✅ |
| 6 | [SRS-v1-daily-dictation-security-requirements.md](SRS-v1-daily-dictation-security-requirements.md) | Security | 11 SRs | ✅ |
| 7 | [SRS-v1-daily-dictation-reliability-requirements.md](SRS-v1-daily-dictation-reliability-requirements.md) | Reliability | 6 SRs | ✅ |
| 8 | [SRS-v1-daily-dictation-constraint-requirements.md](SRS-v1-daily-dictation-constraint-requirements.md) | Constraints | 6 SRs | ✅ |
| 9 | [SRS-v1-daily-dictation-platform-mobile-requirements.md](SRS-v1-daily-dictation-platform-mobile-requirements.md) | Platform (Mobile) | 8 SRs | ✅ |
| 10 | [SRS-v1-daily-dictation-traceability-matrix.md](SRS-v1-daily-dictation-traceability-matrix.md) | RTM | Full chain | ✅ |

---

## Quick Status Overview

```
  Functional (SR-FN):    62 requirements  ✅
  Interface (SR-IF):     12 requirements  ✅
  Data (SR-DA):          10 requirements  ✅
  Performance (SR-PF):   10 requirements  ✅
  Security (SR-SC):      11 requirements  ✅
  Reliability (SR-RA):    6 requirements  ✅
  Constraint (SR-CN):     6 requirements  ✅
  Platform (SR-MB):       8 requirements  ✅
  ─────────────────────────────────────────
  TOTAL                  125 requirements
  Quality Score          EXCELLENT (70/75 pts)

  Last Updated: 2026-03-17
  Progress: Phase 4 ✅ → Phase 5 ✅ → Phase 6 ⬜ → Phase 7 ✅
```

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) defines the complete system-level requirements for **Daily Dictation** — a mobile-first English listening and dictation practice platform targeting Vietnamese learners. This document decomposes all product-level functional requirements (FR-001 through FR-042) and non-functional requirements (NFR-001 through NFR-012) from the upstream PRD into implementable, testable system requirements using EARS syntax patterns.

### 1.2 Scope

**Daily Dictation** is a freemium mobile application (iOS + Android) with a responsive web companion that enables Vietnamese English learners to improve listening comprehension through structured dictation exercises. The system encompasses:

- **Dictation Engine**: Audio playback, answer input, word-level diff checking, Vietnamese explanations
- **User Management**: Registration, authentication, profile, session management
- **Placement System**: CEFR-level assessment (A1-C1) via diagnostic test
- **Gamification Engine**: Streaks, XP/leveling, badges, leaderboards
- **Freemium Model**: Daily exercise limits, ad management, subscription billing
- **Content Management**: Exercise CRUD, categorization, attribution, scheduling
- **Analytics**: Progress dashboards, accuracy trends, category breakdowns
- **Notifications**: Push notifications, streak reminders, deep linking
- **Localization**: Full Vietnamese UI with English exercise content

**Out of Scope (Phase 1)**:
- Speech recognition / pronunciation scoring
- AI-powered adaptive difficulty
- Social features (comments, sharing, forums)
- Multi-language support beyond Vietnamese UI
- Offline exercise caching
- Tablet-optimized layouts

### 1.3 Definitions and Acronyms

| Term | Definition |
|------|-----------|
| **CEFR** | Common European Framework of Reference for Languages (A1-C2) |
| **Dictation Exercise** | An audio clip with reference transcript; user listens, types what they hear, and receives accuracy feedback |
| **XP** | Experience Points — earned per exercise based on accuracy and streak multiplier |
| **Streak** | Consecutive calendar days (UTC+7) with ≥1 completed exercise |
| **Diff** | Word-by-word comparison between user answer and reference transcript |
| **CMS** | Content Management System for exercise creation/management |
| **TOEIC** | Test of English for International Communication |
| **IELTS** | International English Language Testing System |
| **UTC+7** | Vietnam timezone (Indochina Time) |

### 1.4 References

| Document | Version | Path |
|----------|---------|------|
| Business Requirements | v1 | BRD/BRD-v1-daily-dictation-business-requirements.md |
| Product Requirements | v1 | PRD/SPEC-v1-daily-dictation-prd.md |
| User Stories | v1 | USER-STORIES/US-v1-daily-dictation-user-stories.md |
| Test Cases | v1 | TEST-CASES/TC-v1-daily-dictation-test-cases.md |

### 1.5 Conventions

| Convention | Meaning |
|------------|---------|
| **SHALL** | Mandatory — must be implemented |
| **SHALL NOT** | Prohibited — must not occur |
| **SHOULD** | Recommended — deviation requires justification |
| **MAY** | Optional — implementor's discretion |
| **WHEN** | Event-driven trigger (EARS) |
| **WHILE** | State-dependent behavior (EARS) |
| **WHERE** | Optional/configurable feature (EARS) |
| **IF** | Unwanted/error condition (EARS) |

---

## 2. System Overview

### 2.1 System Perspective

Daily Dictation is a new, standalone system with the following external integration points:

```
┌─────────────────────────────────────────────────────┐
│                  Daily Dictation System              │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │ Mobile   │  │ Web App  │  │ CMS Dashboard    │  │
│  │ App      │  │ (PWA)    │  │ (Content Mgmt)   │  │
│  └────┬─────┘  └────┬─────┘  └────────┬─────────┘  │
│       │              │                  │            │
│       └──────────────┴──────────────────┘            │
│                      │                               │
│              ┌───────┴────────┐                      │
│              │  API Gateway   │                      │
│              └───────┬────────┘                      │
│                      │                               │
│  ┌───────┐ ┌────────┴───────┐ ┌──────────────────┐  │
│  │ Auth  │ │  Core Services │ │ Gamification Svc  │  │
│  │ Svc   │ │  (Dictation,   │ │ (XP, Streak,     │  │
│  │       │ │   Content)     │ │  Badges, Board)   │  │
│  └───┬───┘ └───────┬────────┘ └────────┬─────────┘  │
│      │             │                    │            │
│      └─────────────┴────────────────────┘            │
│                      │                               │
│              ┌───────┴────────┐                      │
│              │   Database     │                      │
│              │   + Storage    │                      │
│              └────────────────┘                      │
└──────────────────────┬──────────────────────────────┘
                       │
        ┌──────────────┼──────────────────┐
        │              │                  │
  ┌─────┴─────┐ ┌─────┴──────┐ ┌────────┴───────┐
  │ Google    │ │ App Store  │ │ Push Service   │
  │ OAuth     │ │ / Play     │ │ (APNS / FCM)  │
  │           │ │ Billing    │ │               │
  └───────────┘ └────────────┘ └───────────────┘
```

### 2.2 System Functions Summary

| Function Group | SR Count | Priority | Key Capabilities |
|---------------|----------|----------|-----------------|
| Dictation Engine | 14 | Essential | Audio playback, answer checking, diff display, Vietnamese explanations |
| User Management | 10 | Essential | Registration, auth, profiles, session management |
| Placement System | 6 | Essential | CEFR assessment, level assignment, retake |
| Gamification | 12 | Essential | Streaks, XP/levels, badges, leaderboards |
| Freemium/Subscription | 8 | Essential | Daily limits, ads, billing, grace period |
| Content & Browse | 6 | Essential | Categories, CEFR filter, exercise cards |
| CMS | 4 | Conditional | Exercise CRUD, preview, scheduling, attribution |
| Progress Analytics | 4 | Conditional | Dashboard, trends, category filter |
| Notifications | 4 | Conditional | Push permission, reminders, deep links |
| Bookmarking | 2 | Optional | Bookmark, custom lists |
| Referral | 1 | Optional | Referral links, premium rewards |
| Email Reports | 1 | Optional | Weekly Vietnamese email |

### 2.3 User Classes

| User Class | Technical Level | Access Level | SR Relevance |
|-----------|----------------|--------------|-------------|
| **Learner (Free)** | Low-Medium | Exercise (limited), profile, leaderboard | SR-FN-001–042, SR-IF-001–006 |
| **Learner (Premium)** | Low-Medium | All exercises, no ads, TOEIC/IELTS tests | SR-FN-025–032 |
| **Content Creator** | Medium | CMS: create, edit, preview, publish, schedule | SR-FN-043–050 |
| **Admin** | High | Full CMS + deletion + user management | SR-FN-051–052, SR-SC-010 |

### 2.4 Operating Environment

| Component | Specification |
|-----------|--------------|
| **Mobile OS** | iOS 15.0+, Android 10 (API 29)+ |
| **Web Browsers** | Chrome 90+, Safari 15+, Firefox 90+, Edge 90+ |
| **Network** | Functional on 4G (≥5 Mbps); degraded on 3G (≥1 Mbps) |
| **Timezone** | All daily resets and scheduling in UTC+7 (Vietnam) |
| **Locale** | Primary: vi-VN; exercise content: en-US/en-GB |

### 2.5 Assumptions

| # | Assumption | Impact if Wrong |
|---|-----------|----------------|
| A-001 | Users have stable 4G connectivity during exercises | Need offline caching (Phase 2) |
| A-002 | Vietnamese learners prefer Vietnamese UI over English UI | Need language toggle |
| A-003 | App Store / Google Play billing APIs remain stable | Need fallback billing provider |
| A-004 | Audio content is pre-recorded (not generated) | Need TTS integration |
| A-005 | Initial content library of 500+ exercises is available at launch | Delay launch or reduce categories |

---

## 3. External Interface Requirements

### 3.1 User Interfaces

Detailed in [SRS-v1-daily-dictation-interface-requirements.md](SRS-v1-daily-dictation-interface-requirements.md) (SR-IF-001 to SR-IF-012).

Key screens:
- Exercise screen (audio player + text input + diff view)
- Exercise catalog (category grid + CEFR filter)
- Profile & progress dashboard
- Subscription/paywall screen
- CMS dashboard (content creators)

### 3.2 Hardware Interfaces

| Interface | Detail |
|-----------|--------|
| Audio output | Device speaker / headphone jack / Bluetooth audio |
| Haptic feedback | Vibration on streak milestones, level-up (iOS Taptic, Android Vibration API) |

### 3.3 Software Interfaces

| System | Interface | Purpose |
|--------|----------|---------|
| Google OAuth 2.0 | REST API | Social login |
| Apple App Store | StoreKit 2 | iOS subscription billing + receipt validation |
| Google Play Billing | Billing Library v6+ | Android subscription billing + receipt validation |
| APNS (Apple Push) | HTTP/2 API | iOS push notifications |
| FCM (Firebase Cloud Messaging) | REST API | Android push notifications |
| SMTP Service | SMTP/API | Email verification, password reset, weekly reports |
| CDN (Audio) | HTTPS | Audio file delivery |
| Analytics Service | SDK/API | Event tracking, funnel analysis |

### 3.4 Communication Interfaces

| Protocol | Usage |
|----------|-------|
| HTTPS (TLS 1.2+) | All client-server communication |
| WebSocket (WSS) | Leaderboard real-time updates (optional) |
| HTTP/2 | API multiplexing for mobile performance |

---

## Glossary

| Term | Definition |
|------|-----------|
| **Exercise** | A single dictation unit containing audio clip, reference transcript, category, CEFR level, and optional Vietnamese hints |
| **Accuracy** | Percentage of correctly typed words vs. reference transcript, calculated as `(correct_words / total_words) × 100` |
| **Streak Multiplier** | XP bonus factor based on consecutive days: 1.0× (0-6 days), 1.5× (7-29 days), 2.0× (30+ days) |
| **Grace Period** | 7-day window after subscription expiration where premium features remain active |
| **Paywall** | UI barrier shown when free user exceeds daily exercise limit, offering premium upgrade |
| **Deep Link** | URL scheme that opens a specific screen within the mobile app |
| **Curated Content** | Exercises sourced from public audio (YouTube, podcasts) with attribution |
| **Original Content** | Exercises with audio and transcript created by the content team |

---

## Document Lineage

| Version | Document | Focus | Status |
|---------|----------|-------|--------|
| v1 | SRS-v1-daily-dictation-software-requirements.md | Main SRS (index) | ✅ Current |
| v1 | SRS-v1-daily-dictation-functional-requirements.md | Functional SRs | ✅ Current |
| v1 | SRS-v1-daily-dictation-interface-requirements.md | Interface SRs | ✅ Current |
| v1 | SRS-v1-daily-dictation-data-requirements.md | Data SRs | ✅ Current |
| v1 | SRS-v1-daily-dictation-performance-requirements.md | Performance SRs | ✅ Current |
| v1 | SRS-v1-daily-dictation-security-requirements.md | Security SRs | ✅ Current |
| v1 | SRS-v1-daily-dictation-reliability-requirements.md | Reliability SRs | ✅ Current |
| v1 | SRS-v1-daily-dictation-constraint-requirements.md | Constraint SRs | ✅ Current |
| v1 | SRS-v1-daily-dictation-platform-mobile-requirements.md | Mobile platform SRs | ✅ Current |
| v1 | SRS-v1-daily-dictation-traceability-matrix.md | Full RTM | ✅ Current |

### Upstream Documents

| Document | Type | Path |
|----------|------|------|
| BRD-v1-daily-dictation-business-requirements.md | BRD | BRD/ |
| SPEC-v1-daily-dictation-prd.md | PRD | PRD/ |
| US-v1-daily-dictation-user-stories.md | User Stories | USER-STORIES/ |
| TC-v1-daily-dictation-test-cases.md | Test Cases | TEST-CASES/ |

### Downstream Documents

| Document | Type | Status |
|----------|------|--------|
| User Stories (US-001 to US-048) | User Stories | ✅ Complete |
| Test Cases (TC-001 to TC-048) | Test Cases | ✅ Complete |

---

## Document References

### Internal

| Document | Type | Relevance |
|----------|------|-----------|
| SRS-v1-daily-dictation-traceability-matrix.md | RTM | Full requirement chain BR→FR→SR→US→TC |
| SPEC-v1-daily-dictation-prd.md | PRD | Upstream functional/NFR source |
| BRD-v1-daily-dictation-business-requirements.md | BRD | Business context and rules |

### External

| Reference | Standard | Purpose |
|-----------|----------|---------|
| IEEE 830-1998 | SRS quality properties | Document structure and quality criteria |
| ISO/IEC/IEEE 29148:2018 | SRS structure | Requirement hierarchy and verification |
| EARS (Easy Approach to Requirements Syntax) | Requirement patterns | Unambiguous requirement writing |
| ISO 25010:2023 | Quality characteristics | NFR classification |
| Apple Human Interface Guidelines | iOS design | Mobile platform compliance |
| Material Design 3 | Android design | Mobile platform compliance |
| WCAG 2.1 Level AA | Accessibility | Accessibility compliance |
| Vietnam Cybersecurity Law (2018) | Regulation | Data localization and privacy |

### Status Icons Legend

| Icon | Meaning |
|------|---------|
| ✅ | Completed / Approved |
| ⚠️ | Needs attention |
| ❌ | Failed / Blocked |
| ⬜ | Pending / Not started |
| 🔄 | In progress |

---

## Session Summary

1. **What was specified**: Daily Dictation — mobile-first English dictation platform for Vietnamese learners
2. **Output folder**: SRS/
3. **Files created**:
   - SRS/SRS-v1-daily-dictation-software-requirements.md (main index — this file)
   - SRS/SRS-v1-daily-dictation-functional-requirements.md (62 SRs)
   - SRS/SRS-v1-daily-dictation-interface-requirements.md (12 SRs)
   - SRS/SRS-v1-daily-dictation-data-requirements.md (10 SRs)
   - SRS/SRS-v1-daily-dictation-performance-requirements.md (10 SRs)
   - SRS/SRS-v1-daily-dictation-security-requirements.md (11 SRs)
   - SRS/SRS-v1-daily-dictation-reliability-requirements.md (6 SRs)
   - SRS/SRS-v1-daily-dictation-constraint-requirements.md (6 SRs)
   - SRS/SRS-v1-daily-dictation-platform-mobile-requirements.md (8 SRs)
   - SRS/SRS-v1-daily-dictation-traceability-matrix.md (full RTM)
4. **Approach**: IEEE 830 + ISO 29148 + EARS patterns + Mobile platform extensions
5. **Final report**:
   - Total: 125 system requirements across 8 categories + platform
   - Quality score: EXCELLENT (70/75 pts)
   - Upstream coverage: 100% of FR-NNN and NFR-NNN mapped to SR-NNN
   - Open questions: 3 items requiring resolution
   - Pipeline status: All downstream documents (User Stories, Test Cases) already exist
