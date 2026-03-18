# Reliability & Availability Requirements: Daily Dictation

**Parent SRS**: [SRS-v1-daily-dictation-software-requirements.md](SRS-v1-daily-dictation-software-requirements.md)
**Version**: v1.0
**Created**: 2026-03-17
**Category**: Reliability & Availability
**SR Count**: 6 requirements
**Status**: Draft

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **6 reliability requirements** | 2 uptime, 2 recovery, 1 error budget, 1 graceful degradation | HIGH |
| 2 | **99.5% uptime SLA** | ~43.8 hours allowed downtime per year | HIGH |
| 3 | **Recovery targets** | RTO <1 hour, RPO <15 minutes | HIGH |

---

## Requirements

### SR-RA-001: System Uptime

**Statement**: The system SHALL maintain 99.5% uptime measured on a rolling 30-day window, excluding scheduled maintenance windows (announced ≥48 hours in advance, maximum 4 hours per month).

**Rationale**: 99.5% uptime supports daily learning habits; downtime during Vietnamese evening hours (18:00-22:00 UTC+7) disproportionately impacts engagement. (NFR-004)

**Source**: NFR-004
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN rolling 30-day window, WHEN uptime is calculated, THEN result is ≥99.5% (allowing ~3.6 hours unplanned downtime)
2. GIVEN scheduled maintenance, WHEN planned, THEN announcement is published ≥48 hours before in Vietnamese
3. GIVEN maintenance window, WHEN duration exceeds 4 hours, THEN incident is escalated

**Verification Method**: Analysis
**Dependencies**: None

---

### SR-RA-002: Recovery Time Objective (RTO)

**Statement**: IF a system-wide outage occurs, THEN the system SHALL restore full service within 1 hour (RTO = 60 minutes).

**Rationale**: 1-hour RTO limits impact on daily learners during peak evening hours.

**Source**: NFR-004
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN simulated system outage, WHEN recovery procedures are executed, THEN full service restoration completes within 60 minutes

**Verification Method**: Test (disaster recovery drill)
**Dependencies**: SR-RA-001

---

### SR-RA-003: Recovery Point Objective (RPO)

**Statement**: IF data loss occurs due to system failure, THEN the maximum data loss SHALL NOT exceed 15 minutes of transactions (RPO = 15 minutes).

**Rationale**: 15-minute RPO ensures minimal loss of exercise completion records and XP data.

**Source**: NFR-004
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN database backup strategy, WHEN backups are configured, THEN transaction logs/WAL are replicated at ≤15-minute intervals
2. GIVEN point-in-time recovery, WHEN executed, THEN data is restored to within 15 minutes of failure point

**Verification Method**: Test (restore drill)
**Dependencies**: None

---

### SR-RA-004: Graceful Degradation

**Statement**: IF a non-critical subsystem fails (leaderboard, notifications, analytics), THEN the system SHALL continue serving core dictation functionality (exercise browsing, audio playback, answer checking, XP/streak recording) without interruption.

**Rationale**: Core learning experience must be protected from auxiliary feature failures.

**Source**: NFR-004, BR-001
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN leaderboard service is down, WHEN user starts an exercise, THEN exercise functions normally
2. GIVEN notification service is down, WHEN user completes exercise, THEN completion, XP, and streak are recorded
3. GIVEN a subsystem is degraded, WHEN user accesses the failed feature, THEN system shows "Tính năng tạm ngưng. Vui lòng thử lại sau." (Feature temporarily unavailable)

**Verification Method**: Test (chaos engineering)
**Dependencies**: None

---

### SR-RA-005: Error Budget

**Statement**: The system SHALL track monthly error budget defined as: `error_budget = 1 - uptime_target = 0.5%` (~3.6 hours/month). WHEN error budget is 50% consumed, the system SHALL alert the engineering team. WHEN error budget is 80% consumed, the system SHALL freeze non-critical deployments.

**Rationale**: Error budget governance prevents reliability debt from accumulating.

**Source**: NFR-004
**Priority**: Conditional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN 1.8 hours of unplanned downtime in a month, WHEN error budget is checked, THEN alert fires (50% consumed)
2. GIVEN 2.9 hours of downtime, WHEN error budget is checked, THEN deployment freeze is triggered (80% consumed)

**Verification Method**: Analysis
**Dependencies**: SR-RA-001

---

### SR-RA-006: Database Failover

**Statement**: IF the primary database becomes unavailable, THEN the system SHALL automatically failover to a standby replica within 30 seconds, with zero data loss for committed transactions.

**Rationale**: Automatic failover prevents manual intervention during peak hours.

**Source**: NFR-004
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN primary database failure, WHEN failover triggers, THEN standby replica promotes within 30 seconds
2. GIVEN failover occurs, WHEN data integrity is checked, THEN zero committed transactions are lost

**Verification Method**: Test (failover drill)
**Dependencies**: SR-RA-003

---

## Document Lineage

| Version | Document | Focus | Status |
|---------|----------|-------|--------|
| v1 | SRS-v1-daily-dictation-reliability-requirements.md | Reliability SRs (6) | ✅ Current |

← Back to [Main SRS](SRS-v1-daily-dictation-software-requirements.md)
