# Epic 16: Referral

**Related BRs**: BR-016
**Related SRs**: SR-FN-061, SR-SC-011, SR-DA-010

---

## US-047: Chia sẻ liên kết giới thiệu

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Hoa (Learner) |
| **Size** | M |
| **Priority** | Could Have |

> **Là** Hoa, **tôi muốn** chia sẻ liên kết giới thiệu cho bạn bè, **để** cả hai cùng nhận được quyền lợi premium khi bạn bè đăng ký tài khoản.

### Tiêu chí chấp nhận

**AC-047.1: Tạo và chia sẻ liên kết giới thiệu**
```gherkin
Given Hoa đã đăng nhập và đang ở trang cá nhân
When Hoa nhấn nút "Giới thiệu bạn bè"
Then hệ thống tạo liên kết giới thiệu duy nhất cho Hoa (ví dụ: https://dailydictation.vn/ref/HOA1234)
And mở native share sheet của hệ điều hành cho phép chia sẻ qua Zalo, Messenger, SMS, Email
```
**SR**: SR-FN-061

**AC-047.2: Thưởng premium khi giới thiệu thành công**
```gherkin
Given Hoa đã chia sẻ liên kết giới thiệu https://dailydictation.vn/ref/HOA1234
When bạn của Hoa là Minh nhấn vào liên kết và đăng ký tài khoản mới thành công
Then Hoa được cộng 7 ngày premium vào tài khoản
And Minh cũng được cộng 7 ngày premium vào tài khoản mới
And cả hai nhận thông báo "Bạn đã nhận 7 ngày premium miễn phí!"
```
**SR**: SR-FN-061, SR-DA-010

**AC-047.3: Phát hiện và từ chối tự giới thiệu**
```gherkin
Given Hoa có liên kết giới thiệu https://dailydictation.vn/ref/HOA1234
When Hoa sử dụng chính liên kết đó để tạo tài khoản mới với cùng thiết bị hoặc cùng email domain
Then hệ thống phát hiện hành vi tự giới thiệu
And từ chối áp dụng thưởng referral cho cả hai tài khoản
And hiển thị thông báo "Không thể sử dụng mã giới thiệu cho chính mình"
```
**SR**: SR-SC-011

**AC-047.4: Mã giới thiệu duy nhất cho mỗi người dùng**
```gherkin
Given Hoa và Linh đều là người dùng đã đăng ký
When cả hai đều nhấn "Giới thiệu bạn bè"
Then mã giới thiệu của Hoa (HOA1234) khác với mã giới thiệu của Linh (LINH5678)
And mỗi mã giới thiệu là duy nhất trong toàn hệ thống
And mã giới thiệu không thay đổi theo thời gian
```
**SR**: SR-FN-061, SR-DA-010

### Ghi chú

- Mã giới thiệu được tạo một lần và gắn vĩnh viễn với tài khoản người dùng
- Phát hiện tự giới thiệu dựa trên: device fingerprint, IP address, email domain
- Số ngày premium thưởng (hiện tại: 7 ngày) có thể cấu hình được từ phía admin
- Không giới hạn số lần giới thiệu thành công cho mỗi người dùng

---

← Back to [INDEX.md](INDEX.md)
