# Functional Requirements: Daily Dictation

**Parent SRS**: [SRS-v1-daily-dictation-software-requirements.md](SRS-v1-daily-dictation-software-requirements.md)
**Version**: v1.0
**Created**: 2026-03-17
**Category**: Functional
**SR Count**: 62 requirements
**Status**: Draft

---

## Key Findings

| # | Finding | Detail | Confidence |
|---|---------|--------|------------|
| 1 | **62 functional requirements** | Decomposed from 42 upstream FR-NNN | HIGH |
| 2 | **10 feature groups** | Dictation, Auth, Placement, Gamification, Freemium, Content, CMS, Notifications, Bookmarks, Referral/Email | HIGH |
| 3 | **100% EARS compliance** | All requirements use WHEN/WHILE/WHERE/IF patterns | HIGH |
| 4 | **12 business rules encoded** | RULE-001 to RULE-012 mapped to specific SRs | HIGH |

---

## 1. Dictation Engine (SR-FN-001 to SR-FN-014)

### SR-FN-001: Audio Playback Initiation

**Statement**: WHEN user taps the play button on an exercise screen, the system SHALL begin audio playback within 500ms using the device's default audio output.

**Rationale**: Core dictation experience requires immediate audio feedback to maintain user engagement.

**Source**: FR-001, BR-001
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN an exercise screen is loaded with audio buffered, WHEN user taps play, THEN audio begins within 500ms
2. GIVEN audio is playing, WHEN user taps pause, THEN audio stops at current position within 100ms

**Verification Method**: Test
**Dependencies**: SR-PF-002

---

### SR-FN-002: Audio Playback Speed Control

**Statement**: WHEN user selects a playback speed option, the system SHALL adjust audio playback to the selected speed (0.5×, 0.75×, 1.0×, 1.25×) without restarting the audio stream.

**Rationale**: Learners at different levels need speed control; beginners use slower speeds, advanced learners use normal/faster. (RULE-012)

**Source**: FR-001, RULE-012
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN audio is playing at 1.0×, WHEN user selects 0.75×, THEN playback speed changes to 0.75× within 200ms without interruption
2. GIVEN speed selector is displayed, WHEN user views options, THEN exactly 4 speed options are shown: 0.5×, 0.75×, 1.0× (default), 1.25×

**Verification Method**: Test
**Dependencies**: SR-FN-001

---

### SR-FN-003: Audio Replay

**Statement**: The system SHALL allow unlimited audio replays for each exercise without any counter or restriction.

**Rationale**: Repeated listening is fundamental to dictation learning methodology.

**Source**: FR-001, BR-001
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN an exercise is active, WHEN user taps replay, THEN audio restarts from the beginning
2. GIVEN user has replayed audio 50 times, WHEN user taps replay again, THEN audio replays without error or warning

**Verification Method**: Test
**Dependencies**: SR-FN-001

---

### SR-FN-004: Real-Time Character Count

**Statement**: WHILE user is typing in the answer input field, the system SHALL display a real-time character count that updates on each keystroke.

**Rationale**: Helps learners gauge their answer length relative to the expected transcript.

**Source**: FR-002
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN the answer input field is active, WHEN user types a character, THEN character count increments by 1 within 50ms
2. GIVEN character count is displayed, WHEN user deletes a character, THEN count decrements by 1

**Verification Method**: Test
**Dependencies**: None

---

### SR-FN-005: Answer Submission

**Statement**: WHEN user taps the "Check" button after typing their answer, the system SHALL process the answer and display results within 1 second for transcripts up to 500 words.

**Rationale**: Quick feedback loop is critical for learning effectiveness.

**Source**: FR-003, NFR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user has typed an answer, WHEN user taps "Check", THEN diff result displays within 1 second
2. GIVEN user has typed nothing, WHEN user taps "Check", THEN system displays "Vui lòng nhập câu trả lời" (Please enter your answer)

**Verification Method**: Test
**Dependencies**: SR-FN-006, SR-PF-003

---

### SR-FN-006: Word-by-Word Diff Display

**Statement**: WHEN answer is submitted, the system SHALL display a word-by-word comparison using color-coded formatting: green for correct words, red for incorrect words, and gray with underline for missing words.

**Rationale**: Visual diff enables learners to identify exactly where they made errors.

**Source**: FR-003, BR-009
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user typed "The cat sat on mat", WHEN reference is "The cat sat on the mat", THEN "the" before "mat" is shown in gray with underline (missing)
2. GIVEN user typed "The dog sat", WHEN reference is "The cat sat", THEN "dog" is shown in red (incorrect), "The" and "sat" in green (correct)
3. GIVEN user typed extra words not in reference, WHEN diff is displayed, THEN extra words are shown with strikethrough

**Verification Method**: Test
**Dependencies**: None

---

### SR-FN-007: Accuracy Calculation

**Statement**: WHEN diff is calculated, the system SHALL compute accuracy as `(correct_words / total_reference_words) × 100`, rounded to the nearest integer, and display it as a percentage.

**Rationale**: Accuracy is the primary success metric for each exercise and feeds into XP calculation. (RULE-004)

**Source**: FR-006, RULE-004
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user correctly typed 17 of 20 reference words, WHEN accuracy is calculated, THEN result is 85%
2. GIVEN user typed 0 correct words out of 10, WHEN accuracy is calculated, THEN result is 0%

**Verification Method**: Test
**Dependencies**: SR-FN-006

---

### SR-FN-008: Vietnamese Error Explanations

**Statement**: WHEN user taps an incorrect or missing word in the diff view, the system SHALL display a tooltip containing the Vietnamese explanation for that word/phrase.

**Rationale**: Vietnamese context helps learners understand why they misheard specific words. (BR-002, BR-009)

**Source**: FR-004, BR-002, BR-009
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN diff shows "cat" as incorrect (user typed "cut"), WHEN user taps "cat", THEN tooltip shows Vietnamese explanation (e.g., "cat /kæt/ — con mèo")
2. GIVEN a word has no pre-authored Vietnamese hint, WHEN user taps that word, THEN system displays the word's phonetic transcription (IPA) only
3. GIVEN tooltip is displayed, WHEN user taps outside the tooltip, THEN tooltip dismisses

**Verification Method**: Test
**Dependencies**: SR-DA-005

---

### SR-FN-009: Read Aloud Mode

**Statement**: WHEN user enters the Read Aloud step (Step 4), the system SHALL play the reference audio with word-by-word highlighting synchronized to the audio timeline.

**Rationale**: Read Aloud is the final step of the 4-step learning flow, reinforcing pronunciation through active reading. (BR-009)

**Source**: FR-005, BR-009
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN exercise is in Read Aloud mode, WHEN audio plays, THEN each word highlights in sequence synchronized with the audio
2. GIVEN Read Aloud mode is active, WHEN user taps "Skip", THEN mode exits and exercise is marked complete

**Verification Method**: Test
**Dependencies**: SR-FN-001

---

### SR-FN-010: Exercise Completion

**Statement**: WHEN user completes all steps of an exercise (Listen → Type → Check → Read Aloud or Skip), the system SHALL record the exercise as completed with accuracy score, timestamp, and duration.

**Rationale**: Completion records drive progress analytics, streak counting, and XP calculation.

**Source**: FR-006, BR-001
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user has checked answer and completed/skipped Read Aloud, WHEN exercise completes, THEN system persists: exercise_id, user_id, accuracy_score, completion_timestamp (UTC+7), duration_seconds
2. GIVEN an exercise is completed, WHEN user navigates to exercise catalog, THEN completed exercise shows checkmark and accuracy score

**Verification Method**: Test
**Dependencies**: SR-FN-007, SR-DA-002

---

### SR-FN-011: Case-Insensitive Comparison

**Statement**: The system SHALL perform case-insensitive word matching when computing the diff between user answer and reference transcript.

**Rationale**: Learners should be evaluated on listening comprehension, not capitalization rules.

**Source**: FR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN reference is "The Cat", WHEN user types "the cat", THEN both words are marked correct (green)

**Verification Method**: Test
**Dependencies**: SR-FN-006

---

### SR-FN-012: Punctuation Stripping

**Statement**: The system SHALL strip punctuation from both user answer and reference transcript before performing word-by-word comparison.

**Rationale**: Punctuation is not audible; evaluating it penalizes learners unfairly.

**Source**: FR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN reference is "Hello, world!", WHEN user types "Hello world", THEN both words are marked correct

**Verification Method**: Test
**Dependencies**: SR-FN-006

---

### SR-FN-013: Exercise Summary Screen

**Statement**: WHEN exercise is completed, the system SHALL display a summary screen showing: accuracy percentage, XP earned, streak status, and a "Next Exercise" button.

**Rationale**: Summary reinforces learning outcomes and encourages continued practice.

**Source**: FR-006, BR-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN exercise completed with 85% accuracy, WHEN summary displays, THEN it shows: accuracy 85%, XP earned (calculated per RULE-004), current streak, and next exercise button
2. GIVEN user has reached daily limit (5/5), WHEN summary displays, THEN "Next Exercise" is replaced with premium upgrade CTA

**Verification Method**: Test
**Dependencies**: SR-FN-007, SR-FN-018

---

### SR-FN-014: Correct Answer Reveal

**Statement**: WHEN user completes the Check step, the system SHALL display the full reference transcript below the diff view.

**Rationale**: Full transcript allows learners to study the complete text after checking.

**Source**: FR-003, BR-009
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN answer has been checked, WHEN diff is displayed, THEN full reference transcript is shown below the diff
2. GIVEN placement test is in progress, WHEN answer is checked, THEN reference transcript is NOT shown (RULE-007)

**Verification Method**: Test
**Dependencies**: SR-FN-006, SR-FN-023

---

## 2. User Management (SR-FN-015 to SR-FN-024)

### SR-FN-015: Email Registration

**Statement**: WHEN user submits the registration form with email and password, the system SHALL create an account and send a verification email within 30 seconds.

**Rationale**: Email registration is the primary onboarding path for Vietnamese users.

**Source**: FR-007, BR-006
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN valid email (not already registered) and password (≥8 chars, 1 uppercase, 1 number), WHEN form is submitted, THEN account is created and verification email sent within 30 seconds
2. GIVEN email is already registered, WHEN form is submitted, THEN system displays generic error "Đã xảy ra lỗi. Vui lòng thử lại." (no email enumeration)

**Verification Method**: Test
**Dependencies**: SR-IF-007, SR-SC-001

---

### SR-FN-016: Google OAuth Registration

**Statement**: WHEN user taps "Đăng nhập bằng Google" (Sign in with Google), the system SHALL initiate Google OAuth 2.0 flow and create/link an account upon successful consent.

**Rationale**: Social login reduces friction for users who prefer not to create a new password.

**Source**: FR-007, BR-006
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user taps Google sign-in, WHEN Google consent is granted, THEN account is created with Google profile (name, email, avatar)
2. GIVEN a Google account already linked to an existing user, WHEN OAuth completes, THEN user is logged into the existing account
3. GIVEN user denies Google consent, WHEN OAuth returns, THEN system shows "Đăng nhập bị hủy" and returns to registration screen

**Verification Method**: Test
**Dependencies**: SR-IF-008

---

### SR-FN-017: Email Verification Gate

**Statement**: IF user's email is not verified, THEN the system SHALL block access to exercise screens and display "Vui lòng xác minh email để tiếp tục" (Please verify email to continue) with a resend link.

**Rationale**: Email verification ensures valid contact for password reset and notifications. (RULE-005)

**Source**: FR-008, RULE-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user's email is unverified, WHEN user attempts to start an exercise, THEN system blocks access and shows verification prompt in Vietnamese
2. GIVEN user taps "Gửi lại email", WHEN last verification email was sent >60 seconds ago, THEN new verification email is sent
3. GIVEN user taps "Gửi lại email", WHEN last email was sent <60 seconds ago, THEN system displays rate limit message with countdown

**Verification Method**: Test
**Dependencies**: SR-SC-003

---

### SR-FN-018: Password Reset

**Statement**: WHEN user submits password reset request with a registered email, the system SHALL send a reset link valid for 1 hour.

**Rationale**: Self-service password recovery reduces support burden.

**Source**: FR-009
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN a registered email, WHEN reset is requested, THEN reset email is sent within 30 seconds with a 1-hour expiry link
2. IF reset link is clicked after 1 hour, THEN system displays "Liên kết đã hết hạn" and offers a new link
3. GIVEN an unregistered email, WHEN reset is requested, THEN system shows the same success message (no enumeration)

**Verification Method**: Test
**Dependencies**: SR-SC-004

---

### SR-FN-019: User Profile Display

**Statement**: WHEN user navigates to profile screen, the system SHALL display: display name, CEFR level, total XP, current level, current streak, badge count, and subscription status.

**Rationale**: Profile is the hub for learner identity and progress overview.

**Source**: FR-010, BR-006
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN a user with level B1, 2500 XP, 15-day streak, 5 badges, free tier, WHEN profile loads, THEN all 7 fields are displayed with correct values

**Verification Method**: Test
**Dependencies**: SR-DA-001

---

### SR-FN-020: Session Limit Enforcement

**Statement**: WHILE a premium user has 3 active sessions, WHEN a 4th login attempt occurs, the system SHALL terminate the oldest session and allow the new login.

**Rationale**: Prevents account sharing while allowing legitimate multi-device usage. (RULE-010)

**Source**: FR-011, RULE-010
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN premium user logged in on 3 devices, WHEN login from 4th device, THEN oldest session is terminated and new session is active
2. GIVEN free user (no session limit), WHEN logged in on any number of devices, THEN all sessions remain active

**Verification Method**: Test
**Dependencies**: SR-SC-007

---

### SR-FN-021: Placement Test Flow

**Statement**: WHEN new user starts the placement test, the system SHALL present exactly 20 exercises of increasing difficulty spanning A1 to C1, assign the highest CEFR level where accuracy ≥70%, and hide correct answers during the test.

**Rationale**: Placement ensures learners are matched to appropriate content difficulty. (RULE-007)

**Source**: FR-012, FR-013, FR-015, RULE-007, BR-008
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN new user starts placement, WHEN test begins, THEN exactly 20 exercises are presented in ascending difficulty
2. GIVEN user achieved 90% on A1, 75% on A2, 72% on B1, 60% on B2, WHEN test completes, THEN assigned level is B1 (highest ≥70%)
3. GIVEN placement test is active, WHEN user checks an answer, THEN correct transcript is NOT revealed

**Verification Method**: Test
**Dependencies**: SR-FN-006, SR-FN-007

---

### SR-FN-022: Placement Test Skip

**Statement**: WHEN user taps "Bỏ qua" (Skip) on the placement test screen, the system SHALL assign default level A2 and allow the user to proceed to the exercise catalog.

**Rationale**: Some users prefer to start immediately without assessment. (FR-014)

**Source**: FR-014, BR-008
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN placement test screen, WHEN user taps "Bỏ qua", THEN level is set to A2 and user is redirected to exercise catalog
2. GIVEN user has skipped placement, WHEN user navigates to settings, THEN "Làm lại bài kiểm tra" (Retake test) option is available

**Verification Method**: Test
**Dependencies**: None

---

### SR-FN-023: Placement Test Retake

**Statement**: WHERE user has previously completed or skipped the placement test, WHEN user taps "Làm lại bài kiểm tra" in settings, the system SHALL present a new placement test and update the user's CEFR level upon completion.

**Rationale**: Learners improve over time and should be able to reassess their level.

**Source**: FR-014
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user previously assigned B1, WHEN retake placement yields B2 (≥70% at B2), THEN level is updated to B2

**Verification Method**: Test
**Dependencies**: SR-FN-021

---

### SR-FN-024: Logout

**Statement**: WHEN user taps "Đăng xuất" (Logout), the system SHALL invalidate the current session token and redirect to the login screen.

**Rationale**: Standard security practice for session management.

**Source**: FR-007
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user is logged in, WHEN user taps logout, THEN session token is invalidated and login screen is shown
2. GIVEN user has logged out, WHEN user attempts to access a protected screen via deep link, THEN system redirects to login

**Verification Method**: Test
**Dependencies**: SR-SC-007

---

## 3. Gamification (SR-FN-025 to SR-FN-036)

### SR-FN-025: Daily Streak Increment

**Statement**: WHEN user completes ≥1 exercise on a calendar day (UTC+7), the system SHALL increment the streak counter by 1.

**Rationale**: Streaks drive daily habit formation, the core retention mechanic. (RULE-003)

**Source**: FR-016, RULE-003, BR-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user has a 5-day streak, WHEN user completes an exercise on day 6, THEN streak becomes 6
2. GIVEN user completes 3 exercises on the same day, WHEN streak is checked, THEN streak increments only once for that day
3. GIVEN exercise completed at 23:50 UTC+7, WHEN day boundary is checked, THEN exercise counts for today (not tomorrow)

**Verification Method**: Test
**Dependencies**: SR-FN-010

---

### SR-FN-026: Streak Reset

**Statement**: IF a calendar day (UTC+7) passes with zero completed exercises, THEN the system SHALL reset the streak counter to 0 and persist the previous streak as "record streak" if it exceeds the current record.

**Rationale**: Streak reset creates urgency and motivates daily return. (FR-017)

**Source**: FR-017, BR-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user has a 15-day streak, WHEN midnight UTC+7 passes with no exercise, THEN streak resets to 0
2. GIVEN previous record was 10 and current streak was 15, WHEN streak resets, THEN record streak updates to 15

**Verification Method**: Test
**Dependencies**: SR-FN-025

---

### SR-FN-027: Streak Reset Modal

**Statement**: WHEN user opens the app after a streak reset, the system SHALL display an encouragement modal showing the broken streak value, record streak, and a "Bắt đầu lại" (Start again) button.

**Rationale**: Empathetic reset messaging reduces churn from streak loss frustration.

**Source**: FR-017, BR-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN streak was reset from 15, WHEN user opens app, THEN modal shows "Chuỗi 15 ngày đã kết thúc" with record and restart button

**Verification Method**: Test
**Dependencies**: SR-FN-026

---

### SR-FN-028: XP Calculation

**Statement**: WHEN an exercise is completed, the system SHALL calculate XP using the formula: `XP = (10 + accuracy_percent × 0.1) × streak_multiplier`, where streak_multiplier is 1.0× for 0-6 days, 1.5× for 7-29 days, and 2.0× for 30+ days.

**Rationale**: XP rewards both accuracy and consistency; multiplier incentivizes longer streaks. (RULE-004)

**Source**: FR-018, RULE-004, BR-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN 85% accuracy and 10-day streak (1.5× multiplier), WHEN XP is calculated, THEN XP = (10 + 85 × 0.1) × 1.5 = (10 + 8.5) × 1.5 = 27.75, rounded to 28 XP
2. GIVEN 100% accuracy and 30-day streak (2.0× multiplier), WHEN XP is calculated, THEN XP = (10 + 10) × 2.0 = 40 XP
3. GIVEN 50% accuracy and 0-day streak (1.0× multiplier), WHEN XP is calculated, THEN XP = (10 + 5) × 1.0 = 15 XP

**Verification Method**: Test
**Dependencies**: SR-FN-007, SR-FN-025

---

### SR-FN-029: XP Animation

**Statement**: WHEN XP is awarded after exercise completion, the system SHALL display an animated XP counter incrementing to the earned amount on the summary screen.

**Rationale**: Animation creates a reward dopamine moment that reinforces the habit loop.

**Source**: FR-018, BR-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user earned 28 XP, WHEN summary screen loads, THEN XP counter animates from 0 to 28 over approximately 1 second

**Verification Method**: Demonstration
**Dependencies**: SR-FN-028

---

### SR-FN-030: Level Up

**Statement**: WHEN user's total XP crosses a level threshold, the system SHALL display a celebration screen showing the new level number, and update the profile.

**Rationale**: Level progression provides long-term goals beyond daily streaks.

**Source**: FR-019, BR-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user has 990 XP and level threshold at 1000, WHEN user earns 28 XP (total 1018), THEN level-up celebration screen displays
2. GIVEN level-up screen is dismissed, WHEN user navigates to profile, THEN new level is reflected

**Verification Method**: Test
**Dependencies**: SR-FN-028

---

### SR-FN-031: Achievement Badges

**Statement**: WHEN user meets a badge criteria, the system SHALL award the badge, display a notification, and persist it in the user's badge collection.

**Rationale**: Badges reward milestone achievements and provide collectible motivation. (BR-005)

**Source**: FR-020, BR-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user completes first exercise, WHEN badge criteria "Bước Đầu Tiên" (First Step) is met, THEN badge is awarded and notification shows
2. GIVEN user reaches 7-day streak, WHEN criteria "Kiên Trì 7 Ngày" is met, THEN badge is awarded
3. GIVEN user completes 100 exercises, WHEN criteria "Trăm Bài" is met, THEN badge is awarded

**Verification Method**: Test
**Dependencies**: SR-FN-010, SR-FN-025

---

### SR-FN-032: Badge Collection Display

**Statement**: WHEN user navigates to the badge collection screen, the system SHALL display earned badges with date earned and locked badges with unlock criteria in Vietnamese.

**Rationale**: Badge gallery provides visibility into available achievements and progress toward them.

**Source**: FR-020, BR-005
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user has earned 5 of 15 total badges, WHEN badge screen loads, THEN 5 badges show with earned date, 10 show as locked with Vietnamese unlock criteria

**Verification Method**: Test
**Dependencies**: SR-FN-031

---

### SR-FN-033: Daily Leaderboard

**Statement**: WHEN user navigates to the leaderboard screen, the system SHALL display the top 100 users ranked by daily XP earned, with the current user's rank highlighted.

**Rationale**: Social competition drives engagement and daily return. (BR-011)

**Source**: FR-021, BR-011
**Priority**: Conditional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN leaderboard screen, WHEN data loads, THEN top 100 users are displayed with rank, name, avatar, and daily XP
2. GIVEN current user is rank #45, WHEN leaderboard loads, THEN row #45 is visually highlighted
3. GIVEN current user is rank #150, WHEN leaderboard loads, THEN a sticky footer shows "Hạng của bạn: #150"

**Verification Method**: Test
**Dependencies**: SR-FN-028

---

### SR-FN-034: Weekly and All-Time Leaderboards

**Statement**: WHEN user switches leaderboard tab, the system SHALL display weekly or all-time rankings using the same layout as the daily leaderboard.

**Rationale**: Multiple timeframes allow different competition styles.

**Source**: FR-021, BR-011
**Priority**: Conditional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN user is on daily tab, WHEN user taps "Tuần" (Weekly), THEN leaderboard refreshes with weekly XP rankings
2. GIVEN user switches to "Tổng" (All-time), THEN leaderboard shows lifetime XP rankings

**Verification Method**: Test
**Dependencies**: SR-FN-033

---

### SR-FN-035: Streak Multiplier Badge in Profile

**Statement**: WHILE user has an active streak multiplier (≥7 days), the system SHALL display the current multiplier badge (1.5× or 2.0×) on the profile screen.

**Rationale**: Visual multiplier badge reinforces the value of maintaining streaks.

**Source**: FR-018, BR-005
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user has a 10-day streak, WHEN profile loads, THEN "1.5×" multiplier badge is displayed
2. GIVEN user has a 35-day streak, WHEN profile loads, THEN "2.0×" multiplier badge is displayed
3. GIVEN user has a 3-day streak, WHEN profile loads, THEN no multiplier badge is shown

**Verification Method**: Test
**Dependencies**: SR-FN-025

---

### SR-FN-036: XP History

**Statement**: WHEN user navigates to XP history section in profile, the system SHALL display the last 30 days of XP earnings with date, exercise count, and XP per day.

**Rationale**: History provides context for XP accumulation and motivates consistency.

**Source**: FR-018, BR-005
**Priority**: Conditional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN user earned XP on 20 of last 30 days, WHEN history loads, THEN 30 rows shown with XP values (0 for missed days)

**Verification Method**: Test
**Dependencies**: SR-FN-028

---

## 4. Freemium & Subscription (SR-FN-037 to SR-FN-044)

### SR-FN-037: Daily Exercise Limit (Free Tier)

**Statement**: WHILE user is on free tier, the system SHALL enforce a maximum of 5 exercises per calendar day (UTC+7), displaying remaining count as "X/5 bài hôm nay" (X/5 exercises today).

**Rationale**: Daily limit creates upgrade pressure while providing enough value for habit formation. (RULE-001)

**Source**: FR-022, RULE-001, BR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN free user has completed 4 exercises today, WHEN counter is shown, THEN displays "4/5 bài hôm nay"
2. GIVEN free user has completed 5 exercises today, WHEN user taps a 6th exercise, THEN paywall screen appears
3. GIVEN it is 00:00 UTC+7, WHEN free user opens app, THEN counter resets to "0/5 bài hôm nay"

**Verification Method**: Test
**Dependencies**: SR-FN-010

---

### SR-FN-038: Ad Display Between Exercises

**Statement**: WHILE user is on free tier, WHEN user completes an exercise and taps "Next", the system SHALL display an interstitial ad before the next exercise loads. The system SHALL NOT display ads during active exercise sessions.

**Rationale**: Ads monetize free users while preserving the learning experience during exercises. (RULE-011)

**Source**: FR-023, RULE-011, BR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN free user taps "Next" after exercise summary, WHEN transition occurs, THEN interstitial ad is displayed
2. GIVEN user is in the middle of an exercise (listening, typing, checking), WHEN ad is scheduled, THEN no ad interrupts the exercise
3. GIVEN premium user completes an exercise, WHEN transition occurs, THEN no ad is shown

**Verification Method**: Test
**Dependencies**: SR-FN-044

---

### SR-FN-039: Subscription Plan Display

**Statement**: WHEN user navigates to the subscription screen, the system SHALL display 3 pricing tiers: Monthly ($9.99/month), Quarterly ($7.99/month billed $23.97), and Annual ($4.99/month billed $59.88), with the Annual plan visually highlighted as recommended.

**Rationale**: Three-tier pricing with highlighted annual maximizes LTV. (RULE-002)

**Source**: FR-024, RULE-002, BR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN subscription screen loads, WHEN plans are displayed, THEN all 3 tiers shown with correct pricing in VND equivalent
2. GIVEN Annual plan, WHEN screen loads, THEN Annual plan has "Khuyến nghị" (Recommended) badge and visual highlight

**Verification Method**: Test
**Dependencies**: SR-IF-009

---

### SR-FN-040: Subscription Purchase

**Statement**: WHEN user selects a plan and completes payment via App Store/Play Store, the system SHALL activate premium status, remove ads, lift daily exercise limits, and unlock TOEIC/IELTS test mode — all within 10 seconds of receipt validation.

**Rationale**: Immediate premium activation prevents frustration and confirms purchase value.

**Source**: FR-024, FR-025, BR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user completes App Store purchase, WHEN receipt is validated, THEN premium activates within 10 seconds
2. GIVEN premium just activated, WHEN user returns to exercise screen, THEN no ads appear and daily limit counter is hidden
3. IF payment fails, THEN system displays "Thanh toán không thành công. Vui lòng thử lại." in Vietnamese

**Verification Method**: Test
**Dependencies**: SR-IF-009, SR-IF-010

---

### SR-FN-041: Subscription Grace Period

**Statement**: WHEN a premium subscription expires, the system SHALL maintain premium access for a 7-day grace period, displaying "Đăng ký sắp hết hạn" warning.

**Rationale**: Grace period reduces involuntary churn from payment processing delays. (FR-026)

**Source**: FR-026, BR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN subscription expired 3 days ago, WHEN user opens app, THEN premium features are active and warning banner shows days remaining
2. GIVEN grace period expired (day 8 after expiration), WHEN user opens app, THEN user reverts to free tier with daily limits and ads

**Verification Method**: Test
**Dependencies**: SR-FN-040

---

### SR-FN-042: Subscription Expiration Warning

**Statement**: WHEN premium subscription is within 3 days of expiration, the system SHALL display a persistent banner "Đăng ký của bạn sẽ hết hạn trong X ngày" (Your subscription expires in X days).

**Rationale**: Early warning prompts renewal before access is interrupted.

**Source**: FR-026, BR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN subscription expires in 2 days, WHEN user opens app, THEN banner shows "Đăng ký của bạn sẽ hết hạn trong 2 ngày"

**Verification Method**: Test
**Dependencies**: SR-FN-040

---

### SR-FN-043: Premium TOEIC/IELTS Test Mode

**Statement**: WHERE user has premium subscription, WHEN user selects a TOEIC or IELTS test simulation, the system SHALL present a timed, full-length test with scoring and comparison to average scores.

**Rationale**: Test simulations differentiate premium from free and serve exam prep users (Linh, Minh personas). (RULE-008)

**Source**: FR-027, RULE-008, BR-012
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN premium user, WHEN user starts TOEIC test, THEN timed simulation begins with test conditions
2. GIVEN free user, WHEN user taps TOEIC test simulation, THEN paywall appears with "Nâng cấp Premium" CTA
3. GIVEN test completed, WHEN results display, THEN score shown with comparison to platform average

**Verification Method**: Test
**Dependencies**: SR-FN-040

---

### SR-FN-044: Ad Removal on Premium Activation

**Statement**: WHEN user's subscription status changes to premium, the system SHALL remove all ad placements (interstitial, banner) within the current session without requiring app restart.

**Rationale**: Immediate ad removal confirms premium value and improves user experience instantly. (FR-025)

**Source**: FR-025, BR-003
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN free user with ads, WHEN premium activates, THEN all ads disappear from all screens without app restart

**Verification Method**: Test
**Dependencies**: SR-FN-040

---

## 5. Content & Browse (SR-FN-045 to SR-FN-050)

### SR-FN-045: Exercise Catalog by Category

**Statement**: WHEN user navigates to the exercise catalog, the system SHALL display exercise categories as a grid, each showing category name, CEFR level range, exercise count, and thumbnail.

**Rationale**: Category browsing is the primary content discovery mechanism. (BR-004)

**Source**: FR-030, BR-004
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN catalog screen loads, WHEN categories are displayed, THEN each card shows: name, level range (e.g., "A2-B2"), exercise count, thumbnail
2. GIVEN user taps a category, WHEN exercise list loads, THEN exercises in that category are shown with infinite scroll (20 per page)

**Verification Method**: Test
**Dependencies**: SR-DA-003

---

### SR-FN-046: CEFR Level Filter

**Statement**: WHEN user applies a CEFR level filter on the exercise catalog, the system SHALL display only exercises matching the selected level(s), and show a filter indicator.

**Rationale**: Level filtering helps learners find appropriately challenging content.

**Source**: FR-030, BR-004
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user selects "B2" filter, WHEN filter is applied, THEN only B2-level exercises are shown
2. GIVEN user applies both category "TOEIC" and level "B1", WHEN filter is applied, THEN only B1-level TOEIC exercises are shown
3. GIVEN filters return zero results, WHEN list renders, THEN empty state message displays "Không tìm thấy bài tập" (No exercises found)

**Verification Method**: Test
**Dependencies**: SR-FN-045

---

### SR-FN-047: Exercise Card Details

**Statement**: WHEN user views an exercise card in the catalog, the system SHALL display: title, category, CEFR level, estimated duration, completion status (if attempted), accuracy score (if completed), and premium lock icon (if premium-only).

**Rationale**: Rich card metadata helps learners make informed choices about which exercise to attempt.

**Source**: FR-030, BR-004
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user has completed exercise "Short Story #15" with 85% accuracy, WHEN card is displayed, THEN checkmark and "85%" overlay are shown
2. GIVEN exercise is premium-only and user is free, WHEN card is displayed, THEN lock icon and "Premium" label are shown

**Verification Method**: Test
**Dependencies**: SR-FN-010

---

### SR-FN-048: Source Attribution Display

**Statement**: WHERE exercise is curated content, the system SHALL display source attribution (source name, link) on the exercise screen.

**Rationale**: Legal requirement for curated content from external sources. (RULE-006)

**Source**: FR-032, RULE-006
**Priority**: Essential
**Stability**: High

**Acceptance Criteria**:
1. GIVEN a curated exercise from "TED Talks", WHEN exercise screen loads, THEN attribution "Nguồn: TED Talks" with link is displayed
2. GIVEN an original exercise, WHEN exercise screen loads, THEN no attribution section is shown

**Verification Method**: Test
**Dependencies**: SR-DA-003

---

### SR-FN-049: Bookmark Exercise

**Statement**: WHEN user taps the bookmark icon on an exercise screen, the system SHALL toggle the bookmark status and persist it to the user's saved exercises list.

**Rationale**: Bookmarking enables personalized practice beyond algorithmic recommendations. (BR-017)

**Source**: FR-037, BR-017
**Priority**: Optional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN exercise is not bookmarked, WHEN user taps bookmark icon, THEN icon fills and exercise is added to saved list
2. GIVEN exercise is bookmarked, WHEN user taps bookmark icon, THEN icon unfills and exercise is removed from saved list

**Verification Method**: Test
**Dependencies**: SR-DA-006

---

### SR-FN-050: Custom Practice List

**Statement**: WHEN user creates a custom practice list with a name, the system SHALL allow adding bookmarked exercises to the list and enable sequential practice mode.

**Rationale**: Custom lists support targeted study for specific weaknesses. (BR-017)

**Source**: FR-038, BR-017
**Priority**: Optional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN user creates list "TOEIC Practice", WHEN list is saved, THEN it appears in the bookmarks section
2. GIVEN list has 10 exercises, WHEN user taps "Bắt đầu luyện tập" (Start practice), THEN exercises are presented sequentially

**Verification Method**: Test
**Dependencies**: SR-FN-049

---

## 6. CMS (SR-FN-051 to SR-FN-056)

### SR-FN-051: Exercise Creation

**Statement**: WHEN content creator submits the exercise creation form in CMS, the system SHALL validate all required fields (title, audio file, transcript, category, CEFR level) and save as draft.

**Rationale**: CMS enables the content team to build the exercise library efficiently. (BR-013)

**Source**: FR-031, BR-013
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN all required fields are filled, WHEN creator taps "Lưu nháp" (Save draft), THEN exercise is saved with status "draft"
2. IF required field is missing, THEN system highlights the field and shows "Trường bắt buộc" (Required field) in Vietnamese

**Verification Method**: Test
**Dependencies**: SR-DA-003

---

### SR-FN-052: Exercise Preview

**Statement**: WHEN content creator taps "Xem trước" (Preview) in CMS, the system SHALL render the exercise in a mobile viewport simulator showing exactly how learners will see it.

**Rationale**: Preview prevents publishing errors that would degrade learner experience.

**Source**: FR-031, BR-013
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN exercise is in draft, WHEN creator taps preview, THEN mobile viewport shows exercise with playable audio
2. GIVEN creator closes preview, WHEN returning to CMS form, THEN all form data is preserved

**Verification Method**: Test
**Dependencies**: SR-FN-051

---

### SR-FN-053: Exercise Publishing

**Statement**: WHEN content creator taps "Xuất bản" (Publish) on a draft exercise, the system SHALL make the exercise live and visible in the learner catalog within 5 minutes.

**Rationale**: Quick publish-to-live ensures content freshness.

**Source**: FR-031, BR-013
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN draft exercise, WHEN creator taps "Xuất bản", THEN exercise status changes to "published" and appears in catalog within 5 minutes

**Verification Method**: Test
**Dependencies**: SR-FN-051

---

### SR-FN-054: Exercise Scheduling

**Statement**: WHEN content creator selects a future date/time and taps "Lên lịch" (Schedule), the system SHALL auto-publish the exercise at the scheduled time (UTC+7).

**Rationale**: Scheduling enables content planning and consistent exercise release.

**Source**: FR-031, BR-013
**Priority**: Conditional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN exercise scheduled for 2026-03-20 09:00 UTC+7, WHEN that time arrives, THEN exercise auto-publishes and appears in catalog

**Verification Method**: Test
**Dependencies**: SR-FN-051

---

### SR-FN-055: Exercise Archiving

**Statement**: WHEN content creator taps "Lưu trữ" (Archive) on a published exercise, the system SHALL remove it from the learner catalog but preserve all data and completion history.

**Rationale**: Archiving allows content rotation without data loss.

**Source**: FR-031, BR-013
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN published exercise, WHEN creator archives it, THEN exercise no longer appears in catalog but completion history persists

**Verification Method**: Test
**Dependencies**: SR-FN-051

---

### SR-FN-056: Admin-Only Deletion

**Statement**: IF a content creator attempts to delete an exercise, THEN the system SHALL block the action and display "Chỉ quản trị viên mới có thể xóa" (Only admins can delete). The system SHALL allow deletion only for users with admin role.

**Rationale**: Prevents accidental data loss; deletion is irreversible. (RULE-009)

**Source**: FR-033, RULE-009
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN content creator role, WHEN creator attempts delete, THEN action is blocked with Vietnamese message
2. GIVEN admin role, WHEN admin deletes exercise, THEN exercise and all associated data are permanently removed

**Verification Method**: Test
**Dependencies**: SR-SC-010

---

## 7. Notifications (SR-FN-057 to SR-FN-060)

### SR-FN-057: Push Notification Permission Request

**Statement**: WHEN user first opens the app after registration, the system SHALL display a pre-prompt explaining notification benefits in Vietnamese before triggering the OS permission dialog.

**Rationale**: Pre-prompting improves opt-in rates by explaining value before the irreversible OS dialog.

**Source**: FR-034, BR-010
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN first app open after registration, WHEN pre-prompt displays, THEN Vietnamese text explains "Nhận nhắc nhở luyện tập hàng ngày" (Receive daily practice reminders)
2. GIVEN user taps "Để sau" (Later), WHEN pre-prompt dismisses, THEN OS dialog is NOT triggered and user proceeds to app

**Verification Method**: Test
**Dependencies**: SR-IF-011

---

### SR-FN-058: Streak Reminder Notification

**Statement**: WHEN it is 20:00 UTC+7 and user has not completed any exercise today, the system SHALL send a push notification in Vietnamese: "Đừng quên luyện tập hôm nay! Chuỗi X ngày đang chờ bạn." (Don't forget to practice today! Your X-day streak is waiting.)

**Rationale**: Evening reminder is the optimal time to prevent streak loss. (FR-035)

**Source**: FR-035, BR-010
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN user with 10-day streak and no exercise today, WHEN 20:00 UTC+7 arrives, THEN notification sent with streak count
2. GIVEN user already completed an exercise today, WHEN 20:00 UTC+7 arrives, THEN no notification is sent
3. GIVEN user opted out of notifications, WHEN 20:00 UTC+7 arrives, THEN no notification is sent

**Verification Method**: Test
**Dependencies**: SR-FN-025, SR-IF-011

---

### SR-FN-059: Deep Link from Notification

**Statement**: WHEN user taps a push notification, the system SHALL deep-link to the exercise catalog screen (or specific exercise if referenced in the notification payload).

**Rationale**: Direct navigation reduces friction from notification to action. (FR-036)

**Source**: FR-036, BR-010
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN streak reminder notification, WHEN user taps, THEN app opens to exercise catalog
2. GIVEN new content notification with exercise_id, WHEN user taps, THEN app opens directly to that exercise

**Verification Method**: Test
**Dependencies**: SR-IF-011

---

### SR-FN-060: Subscription Management Navigation

**Statement**: WHEN user taps "Quản lý đăng ký" (Manage subscription) in settings, the system SHALL open the native App Store/Play Store subscription management screen.

**Rationale**: App store policy requires directing users to native subscription management.

**Source**: FR-024, BR-003
**Priority**: Conditional
**Stability**: High

**Acceptance Criteria**:
1. GIVEN iOS user, WHEN user taps manage subscription, THEN Apple subscription management screen opens
2. GIVEN Android user, WHEN user taps manage subscription, THEN Google Play subscription management screen opens

**Verification Method**: Test
**Dependencies**: SR-IF-009, SR-IF-010

---

## 8. Referral & Email (SR-FN-061 to SR-FN-062)

### SR-FN-061: Referral Link Sharing

**Statement**: WHEN user taps "Giới thiệu bạn bè" (Refer friends), the system SHALL generate a unique referral link and open the native share sheet. WHEN a referred user completes registration, the system SHALL award both referrer and referee 7 days of premium.

**Rationale**: Referral program drives organic growth at low cost. (BR-016)

**Source**: FR-039, FR-040, BR-016
**Priority**: Optional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN user taps referral button, WHEN share sheet opens, THEN unique referral URL is pre-populated
2. GIVEN referee registers via referral link, WHEN registration completes, THEN both users receive 7-day premium
3. GIVEN user attempts self-referral (same device/email), WHEN system detects, THEN referral reward is denied

**Verification Method**: Test
**Dependencies**: SR-SC-011

---

### SR-FN-062: Weekly Progress Email

**Statement**: WHEN it is Sunday 09:00 UTC+7, the system SHALL send a weekly progress email in Vietnamese to all opted-in users, containing: exercises completed, accuracy trend, streak status, and XP earned that week. Each email SHALL include a one-click unsubscribe link.

**Rationale**: Weekly email re-engages users who may have lapsed during the week. (BR-018)

**Source**: FR-041, FR-042, BR-018
**Priority**: Optional
**Stability**: Medium

**Acceptance Criteria**:
1. GIVEN opted-in user, WHEN Sunday 09:00 UTC+7, THEN Vietnamese progress email is sent with week's stats
2. GIVEN user taps unsubscribe link, WHEN action completes, THEN user is opted out immediately with no further emails
3. GIVEN user has been inactive for 14+ days, WHEN email is generated, THEN a re-engagement variant is sent instead of standard progress

**Verification Method**: Test
**Dependencies**: SR-IF-007

---

## Document Lineage

| Version | Document | Focus | Status |
|---------|----------|-------|--------|
| v1 | SRS-v1-daily-dictation-functional-requirements.md | Functional SRs (62) | ✅ Current |

← Back to [Main SRS](SRS-v1-daily-dictation-software-requirements.md)
