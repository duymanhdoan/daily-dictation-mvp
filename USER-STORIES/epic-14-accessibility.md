# Epic 14: Accessibility

**Related BRs**: BR-014
**Related SRs**: SR-PF-008, SR-CN-005

---

## US-044: Chuyển đổi chế độ tối

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Hoa (Learner) |
| **Size** | S |
| **Priority** | Should Have |

> **Là** Hoa, **tôi muốn** chuyển đổi giữa chế độ sáng và tối, **để** luyện tập thoải mái trong mọi điều kiện ánh sáng mà không bị mỏi mắt.

### Tiêu chí chấp nhận

**AC-044.1: Chuyển đổi nhanh không nhấp nháy**
```gherkin
Given Hoa đang sử dụng ứng dụng ở chế độ sáng
When Hoa nhấn nút chuyển đổi chế độ tối
Then giao diện chuyển sang chế độ tối trong vòng 200ms
And không xuất hiện nhấp nháy màn hình trắng trong quá trình chuyển đổi
```
**SR**: SR-PF-008

**AC-044.2: Chế độ tối lưu trữ qua các phiên**
```gherkin
Given Hoa đã bật chế độ tối
When Hoa đóng ứng dụng hoàn toàn và mở lại
Then ứng dụng hiển thị ở chế độ tối ngay từ đầu
And không xuất hiện giao diện sáng trước khi chuyển sang tối
```
**SR**: SR-PF-008

**AC-044.3: Tự động chuyển đổi theo cài đặt hệ điều hành**
```gherkin
Given Hoa đã chọn tùy chọn "Theo hệ thống" trong cài đặt giao diện
When hệ điều hành của Hoa chuyển sang chế độ tối lúc 18:00
Then ứng dụng tự động chuyển sang chế độ tối
And khi hệ điều hành chuyển lại chế độ sáng lúc 06:00 thì ứng dụng cũng chuyển theo
```
**SR**: SR-PF-008

### Ghi chú

- Ba tùy chọn giao diện: Sáng, Tối, Theo hệ thống
- Tùy chọn mặc định khi cài đặt lần đầu: "Theo hệ thống"
- Chế độ tối áp dụng cho toàn bộ màn hình bao gồm cả trình phát audio và diff view

---

## US-056: Tuân thủ tiêu chuẩn trợ năng WCAG 2.1 AA

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Hoa (Learner) |
| **Size** | M |
| **Priority** | Should Have |

> **Là** Hoa, **tôi muốn** ứng dụng tuân thủ tiêu chuẩn trợ năng WCAG 2.1 AA, **để** tôi và mọi người dùng đều có thể sử dụng ứng dụng một cách dễ dàng bất kể khả năng thể chất.

### Tiêu chí chấp nhận

**AC-056.1: Tỷ lệ tương phản màu đạt chuẩn**
```gherkin
Given ứng dụng đang hiển thị ở chế độ sáng hoặc chế độ tối
When kiểm tra tỷ lệ tương phản màu của tất cả các phần tử văn bản
Then văn bản cỡ bình thường (dưới 18pt) có tỷ lệ tương phản ≥ 4.5:1
And văn bản cỡ lớn (từ 18pt trở lên) có tỷ lệ tương phản ≥ 3:1
And tiêu chuẩn này áp dụng cho cả hai chế độ sáng và tối
```
**SR**: SR-CN-005

**AC-056.2: Điều hướng bằng bàn phím trên web**
```gherkin
Given Hoa đang sử dụng phiên bản web trên trình duyệt desktop
When Hoa sử dụng phím Tab để điều hướng qua các phần tử trên màn hình bài tập
Then tất cả các phần tử tương tác (nút phát audio, ô nhập liệu, nút gửi, nút gợi ý) đều có thể truy cập được
And phần tử đang được focus hiển thị viền chỉ báo rõ ràng
```
**SR**: SR-CN-005

**AC-056.3: Trình đọc màn hình đọc nhãn tiếng Việt**
```gherkin
Given Hoa đang sử dụng trình đọc màn hình VoiceOver (iOS) hoặc TalkBack (Android)
When trình đọc màn hình quét qua màn hình bài tập dictation
Then tất cả các phần tử được đọc bằng nhãn tiếng Việt: "Phát audio", "Nhập câu trả lời", "Gửi bài", "Xem gợi ý"
And thứ tự đọc theo logic sử dụng: audio → ô nhập → nút gửi
```
**SR**: SR-CN-005

**AC-056.4: Diff view sử dụng cả màu sắc và hoa văn**
```gherkin
Given Hoa đã gửi câu trả lời và đang xem kết quả so sánh (diff view)
When hệ thống hiển thị các loại lỗi (thiếu từ, sai từ, thừa từ)
Then mỗi loại lỗi được phân biệt bằng cả màu sắc VÀ hoa văn (gạch chân, gạch ngang, nền chấm)
And người dùng mù màu vẫn phân biệt được các loại lỗi chỉ qua hoa văn
```
**SR**: SR-CN-005

### Ghi chú

- Kiểm tra tương phản bằng công cụ axe-core hoặc Lighthouse
- Diff view sử dụng kết hợp: màu đỏ + gạch ngang (sai từ), màu xanh + gạch chân (thiếu từ), màu cam + nền chấm (thừa từ)
- Thử nghiệm trình đọc màn hình trên cả VoiceOver (iOS/macOS) và TalkBack (Android)

---

← Back to [INDEX.md](INDEX.md)
