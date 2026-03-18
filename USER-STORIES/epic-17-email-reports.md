# Epic 17: Email Reports

**Related BRs**: BR-018
**Related SRs**: SR-FN-062

---

## US-048: Nhận email tiến độ hàng tuần

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Linh (Learner) |
| **Size** | M |
| **Priority** | Could Have |

> **Là** Linh, **tôi muốn** nhận email tổng kết tiến độ học tập hàng tuần, **để** theo dõi sự tiến bộ và duy trì động lực luyện tập.

### Tiêu chí chấp nhận

**AC-048.1: Gửi email tiến độ hàng tuần bằng tiếng Việt**
```gherkin
Given Linh đã đăng ký tài khoản và có hoạt động luyện tập trong tuần
When hệ thống gửi email tiến độ vào Chủ nhật lúc 09:00 UTC+7
Then Linh nhận được email bằng tiếng Việt với tiêu đề "Tổng kết tuần của bạn - Daily Dictation"
And nội dung email bao gồm: số bài hoàn thành (ví dụ: 12 bài), XP kiếm được (ví dụ: 840 XP), streak hiện tại (ví dụ: 7 ngày), điểm trung bình (ví dụ: 85%)
And email hiển thị biểu đồ so sánh với tuần trước
```
**SR**: SR-FN-062

**AC-048.2: Hủy đăng ký bằng một cú nhấn**
```gherkin
Given Linh đã nhận email tiến độ hàng tuần
When Linh nhấn vào liên kết "Hủy nhận email" ở cuối email
Then hệ thống hủy đăng ký email tiến độ cho Linh ngay lập tức
And hiển thị trang xác nhận "Bạn đã hủy nhận email tiến độ hàng tuần"
And Linh không nhận email tiến độ từ tuần tiếp theo
```
**SR**: SR-FN-062

**AC-048.3: Email tái tương tác cho người dùng không hoạt động**
```gherkin
Given Linh đã không đăng nhập hoặc luyện tập trong 14 ngày liên tiếp
When hệ thống gửi email hàng tuần vào Chủ nhật lúc 09:00 UTC+7
Then Linh nhận được email phiên bản tái tương tác với tiêu đề "Chúng tôi nhớ bạn! Quay lại luyện tập nhé"
And nội dung bao gồm: streak đã mất (ví dụ: "Chuỗi 15 ngày đã kết thúc"), gợi ý bài tập mới phù hợp trình độ, nút "Luyện tập ngay" dẫn đến bài tập gợi ý
```
**SR**: SR-FN-062

### Ghi chú

- Email gửi vào Chủ nhật hàng tuần lúc 09:00 UTC+7 (giờ Việt Nam)
- Người dùng mới tự động được đăng ký nhận email tiến độ
- Ngưỡng không hoạt động cho email tái tương tác: 14 ngày liên tiếp
- Email tuân thủ CAN-SPAM Act với liên kết hủy đăng ký bắt buộc
- Hệ thống không gửi email cho người dùng đã hủy đăng ký, kể cả phiên bản tái tương tác

---

← Back to [INDEX.md](INDEX.md)
