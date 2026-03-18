# Epic 02: Core Dictation

**Related BRs**: BR-001, BR-002, BR-009
**Related SRs**: SR-FN-001 to SR-FN-014, SR-PF-001 to SR-PF-003, SR-IF-001, SR-IF-002

---

## US-007: Start a Dictation Exercise

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-005 or US-006 (placement test completed or skipped) |

### Acceptance Criteria

**AC 1 — Exercise screen loads with all components**
> **Given** Linh taps on an exercise card from the catalog
> **When** the exercise screen loads
> **Then** it displays an audio player, a text input field, and action buttons ("Kiểm tra", "Bỏ qua")

**AC 2 — Load within 2 seconds on 4G**
> **Given** Linh is on a 4G mobile connection
> **When** she taps on an exercise card
> **Then** the exercise screen is fully loaded and interactive within 2 seconds

**AC 3 — Free user daily limit counter**
> **Given** Linh is a free-tier user and has completed 2 exercises today
> **When** the exercise screen loads
> **Then** the counter displays "3/5 bài hôm nay" (showing remaining exercises)

**AC 4 — Daily limit blocks 6th exercise**
> **Given** Linh is a free-tier user and has completed 5 exercises today
> **When** she attempts to start a 6th exercise
> **Then** the system displays "Bạn đã hết lượt luyện tập hôm nay. Nâng cấp Premium để luyện tập không giới hạn!" with an upgrade button

**AC 5 — Exercise blocked without placement test**
> **Given** Linh has verified her email but has NOT completed or skipped the placement test
> **When** she attempts to start any exercise
> **Then** the system redirects her to the placement test intro screen

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-PF-001 | Exercise load time ≤2s on 4G |
| SR-FN-001 | Exercise screen layout: audio player + input + buttons |
| SR-FN-002 | Free-tier daily limit: 5 exercises per calendar day |

---

## US-008: Listen to Exercise Audio

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-007 |

### Acceptance Criteria

**AC 1 — Audio plays within 500ms**
> **Given** Linh is on an exercise screen with audio loaded
> **When** she taps the play button
> **Then** audio playback begins within 500 milliseconds

**AC 2 — Pause and resume**
> **Given** audio is playing
> **When** Linh taps the pause button
> **Then** playback pauses; tapping play again resumes from the same position

**AC 3 — Unlimited replays**
> **Given** the audio has finished playing
> **When** Linh taps the play button again
> **Then** the audio replays from the beginning with no replay limit

**AC 4 — Speed change without restart**
> **Given** Linh is on the exercise screen
> **When** she selects a speed option (0.5x, 0.75x, 1.0x, or 1.25x)
> **Then** the playback speed changes without restarting the audio from the beginning

**AC 5 — Speed change mid-playback**
> **Given** audio is currently playing at 1.0x speed at position 00:15
> **When** Linh changes the speed to 0.75x
> **Then** playback continues from position 00:15 at 0.75x speed without interruption

**AC 6 — Pre-buffered audio starts within 200ms**
> **Given** the exercise screen has finished loading and audio is pre-buffered
> **When** Linh taps play for the first time
> **Then** audio starts within 200 milliseconds

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-PF-002 | Audio playback start ≤500ms; pre-buffered ≤200ms |
| SR-FN-003 | Playback speeds: 0.5x, 0.75x, 1.0x, 1.25x |
| RULE-012 | Speed change must not restart audio |
| SR-IF-001 | Audio player controls: play, pause, speed selector |

---

## US-009: Type Dictation Answer

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-007 |

### Acceptance Criteria

**AC 1 — Text input available**
> **Given** Linh is on the exercise screen
> **When** she taps the text input field
> **Then** the keyboard opens and she can type her dictation answer

**AC 2 — Real-time character count**
> **Given** Linh is typing in the text input field
> **When** she types each character
> **Then** the character count updates in real time per keystroke (e.g., "42 ký tự")

**AC 3 — Empty submission error**
> **Given** Linh has not typed anything in the text input field
> **When** she taps "Kiểm tra"
> **Then** the system displays the error message "Vui lòng nhập câu trả lời trước khi kiểm tra."

**AC 4 — Vietnamese keyboard compatibility**
> **Given** Linh is using a Vietnamese keyboard (Telex or VNI input method)
> **When** she types Vietnamese characters with diacritics (e.g., "ă", "ơ", "ữ")
> **Then** the input field correctly accepts and displays the characters without interference or conversion errors

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-004 | Real-time character count updates per keystroke |
| SR-FN-005 | Vietnamese keyboard input support |
| SR-IF-002 | Text input field UX |

---

## US-010: Check Answer and View Diff

| Field | Value |
|-------|-------|
| **Persona** | Linh (learner, free tier) |
| **Size** | L |
| **Priority** | Must Have |
| **Dependencies** | US-009 |

### Acceptance Criteria

**AC 1 — Color-coded diff display**
> **Given** Linh has typed "The cat sit on mat" for the reference "The cat sat on the mat"
> **When** she taps "Kiểm tra"
> **Then** the diff displays:
> - "The" in green (correct)
> - "cat" in green (correct)
> - "sit" in red (incorrect — should be "sat")
> - "on" in green (correct)
> - "the" in gray with underline (missing word)
> - "mat" in green (correct)

**AC 2 — Accuracy percentage calculated**
> **Given** the reference transcript has 6 words and Linh got 4 correct
> **When** the diff is displayed
> **Then** the accuracy is shown as "67%" calculated as (4/6) x 100 rounded to the nearest integer

**AC 3 — Extra words shown with strikethrough**
> **Given** Linh typed "The big cat sat on the mat" for reference "The cat sat on the mat"
> **When** she taps "Kiểm tra"
> **Then** "big" is displayed with strikethrough styling to indicate it is an extra word not in the reference

**AC 4 — Full reference transcript shown below diff**
> **Given** Linh has submitted her answer
> **When** the diff is displayed
> **Then** the full correct reference transcript is shown below the diff section with the label "Đáp án:"

**AC 5 — Diff computed within 1 second**
> **Given** Linh has submitted an answer for an exercise with up to 500 words
> **When** she taps "Kiểm tra"
> **Then** the diff result is computed and displayed within 1 second

**AC 6 — Case-insensitive comparison (NEW)**
> **Given** the reference transcript is "THE CAT sat on the mat"
> **When** Linh types "the cat sat on the mat"
> **Then** all words are shown in green (correct) because comparison is case-insensitive

**AC 7 — Punctuation stripped from comparison (NEW)**
> **Given** the reference transcript is "Hello, world! How are you?"
> **When** Linh types "Hello world How are you"
> **Then** all words are shown in green (correct) because punctuation is stripped before comparison

**AC 8 — Reference transcript hidden during placement test (NEW)**
> **Given** Linh is taking the placement test (not a regular exercise)
> **When** she submits an answer
> **Then** the reference transcript section ("Đáp án:") is NOT shown; only a "Tiếp tục" button appears (per RULE-007)

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-IF-002 | Color-coded diff: green (correct), red (incorrect), gray+underline (missing) |
| SR-FN-007 | Accuracy formula: (correct_words / total_words) x 100, rounded to integer |
| SR-FN-011 | Case-insensitive word comparison |
| SR-FN-012 | Punctuation stripped before comparison |
| SR-FN-014 | Full reference transcript shown after check (except placement test) |
| SR-PF-003 | Diff computation ≤1s for 500 words |
| RULE-007 | Correct answers hidden during placement test |

---

## US-011: View Vietnamese Error Explanations

| Field | Value |
|-------|-------|
| **Persona** | Hoa (learner, experienced) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-010 |

### Acceptance Criteria

**AC 1 — Tap incorrect word shows Vietnamese tooltip**
> **Given** the diff is displayed and "sit" is highlighted in red (incorrect, should be "sat")
> **When** Hoa taps on "sit"
> **Then** a tooltip appears showing:
> - Vietnamese meaning: e.g., "sat (quá khứ của 'sit' — ngồi)"
> - IPA pronunciation: /sæt/

**AC 2 — Tap missing word shows meaning**
> **Given** the diff shows "the" in gray with underline (missing word)
> **When** Hoa taps on "the"
> **Then** a tooltip appears showing the Vietnamese meaning of the missing word

**AC 3 — Word without hint shows IPA only**
> **Given** a word in the diff does not have a Vietnamese hint available in the database
> **When** Hoa taps on that word
> **Then** the tooltip shows only the IPA pronunciation (e.g., /ðə/)

**AC 4 — Dismiss tooltip by tapping outside**
> **Given** a tooltip is currently displayed
> **When** Hoa taps anywhere outside the tooltip
> **Then** the tooltip is dismissed; tooltip max width is 280pt

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-008 | Vietnamese error explanations with meaning + IPA |
| SR-DA-005 | Fallback: IPA only when Vietnamese hint unavailable |
| SR-IF-005 | Tooltip max width: 280pt; dismiss on outside tap |

---

## US-012: Practice Read Aloud Step

| Field | Value |
|-------|-------|
| **Persona** | Hoa (learner, experienced) |
| **Size** | M |
| **Priority** | Must Have |
| **Dependencies** | US-010 |

### Acceptance Criteria

**AC 1 — Word-by-word highlight synced to audio**
> **Given** Hoa has checked her answer and is on the read-aloud step
> **When** she taps play
> **Then** each word in the reference transcript is highlighted in sequence, synced to the audio playback timing

**AC 2 — Skip option**
> **Given** Hoa is on the read-aloud step
> **When** she taps "Bỏ qua"
> **Then** the read-aloud step is skipped and the exercise is marked as complete

**AC 3 — Exercise completion recorded**
> **Given** Hoa finishes the read-aloud step (either by completing or skipping)
> **When** the exercise is marked complete
> **Then** the system records: exercise ID, user ID, accuracy percentage, XP earned, timestamp, and time spent

### Notes

| SR-ID | Description |
|-------|-------------|
| SR-FN-009 | Word-by-word highlight synced to audio playback |
| SR-FN-010 | Exercise completion record fields: exercise_id, user_id, accuracy, xp, timestamp, duration |

---

← Back to [INDEX.md](INDEX.md)
