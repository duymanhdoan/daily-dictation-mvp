# Epic 13: CMS

**Related BRs**: BR-013
**Related SRs**: SR-FN-051 to SR-FN-056, SR-SC-010, SR-PF-010

---

## US-040: Tạo bài tập mới trong CMS

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Trang (Content Creator) |
| **Size** | L |
| **Priority** | Should Have |

> **Là** Trang, **tôi muốn** tạo bài tập dictation mới trong hệ thống CMS với đầy đủ thông tin bắt buộc, **để** cung cấp nội dung luyện tập chất lượng cho người học.

### Tiêu chí chấp nhận

**AC-040.1: Điền đầy đủ các trường bắt buộc**
```gherkin
Given Trang đang ở trang "Tạo bài tập mới" trong CMS
When Trang điền đầy đủ tiêu đề "Business Meeting Conversation", tải lên file audio, nhập transcript, chọn danh mục "TOEIC" và chọn trình độ CEFR "B1"
Then hệ thống cho phép lưu bài tập thành công
And tất cả 5 trường bắt buộc (title, audio, transcript, category, CEFR level) được ghi nhận
```
**SR**: SR-FN-051

**AC-040.2: Lưu nháp bài tập**
```gherkin
Given Trang đã điền tiêu đề "Business Meeting Conversation" và tải lên file audio
When Trang nhấn nút "Lưu nháp"
Then bài tập được lưu với trạng thái "Nháp"
And Trang có thể quay lại chỉnh sửa bài tập từ danh sách nháp
```
**SR**: SR-FN-051

**AC-040.3: Tải audio hiển thị thời lượng và xem trước**
```gherkin
Given Trang đang tạo bài tập mới
When Trang tải lên file audio "meeting_conversation.mp3" có dung lượng 5MB
Then hệ thống hiển thị thời lượng audio "02:35"
And hiển thị trình phát audio cho phép Trang nghe thử trước khi lưu
```
**SR**: SR-FN-051

**AC-040.4: Thông báo lỗi khi thiếu trường bắt buộc**
```gherkin
Given Trang đã điền tiêu đề "Business Meeting Conversation" nhưng chưa tải lên audio
When Trang nhấn nút "Lưu nháp"
Then hệ thống hiển thị thông báo lỗi "Trường bắt buộc" bên dưới trường audio
And bài tập không được lưu cho đến khi tất cả trường bắt buộc được điền
```
**SR**: SR-FN-051

**AC-040.5: Hiệu năng lưu bài tập với file audio lớn**
```gherkin
Given Trang đã điền đầy đủ thông tin bài tập với file audio 10MB
When Trang nhấn nút "Lưu nháp"
Then quá trình lưu hoàn tất trong vòng 15 giây
And hiển thị thanh tiến trình tải lên trong suốt quá trình
```
**SR**: SR-PF-010

### Ghi chú

- Định dạng audio hỗ trợ: MP3, WAV, M4A
- Kích thước file audio tối đa cần được xác định trong cấu hình hệ thống
- Trình độ CEFR bao gồm: A1, A2, B1, B2, C1, C2

---

## US-041: Xem trước bài tập trước khi xuất bản

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Trang (Content Creator) |
| **Size** | M |
| **Priority** | Should Have |

> **Là** Trang, **tôi muốn** xem trước bài tập trên giao diện mobile trước khi xuất bản, **để** đảm bảo nội dung hiển thị đúng với trải nghiệm người dùng cuối.

### Tiêu chí chấp nhận

**AC-041.1: Xem trước với viewport mobile**
```gherkin
Given Trang đã tạo bài tập "Business Meeting Conversation" với đầy đủ thông tin
When Trang nhấn nút "Xem trước"
Then hệ thống hiển thị bài tập trong khung xem trước với viewport mobile 375×812px
And bố cục hiển thị đúng như trên thiết bị di động thực tế
```
**SR**: SR-FN-052

**AC-041.2: Phát audio trong chế độ xem trước**
```gherkin
Given Trang đang ở chế độ xem trước bài tập "Business Meeting Conversation"
When Trang nhấn nút phát audio
Then audio phát đúng file đã tải lên
And các nút điều khiển (phát/tạm dừng, tua lại, tốc độ) hoạt động chính xác
```
**SR**: SR-FN-052

**AC-041.3: Đóng xem trước giữ nguyên dữ liệu form**
```gherkin
Given Trang đang xem trước bài tập với tiêu đề "Business Meeting Conversation" và danh mục "TOEIC"
When Trang đóng chế độ xem trước
Then quay lại form chỉnh sửa với tất cả dữ liệu đã nhập được giữ nguyên
And không có trường nào bị mất hoặc thay đổi giá trị
```
**SR**: SR-FN-052

### Ghi chú

- Khung xem trước hỗ trợ chuyển đổi giữa các kích thước viewport phổ biến
- Chế độ xem trước là read-only, không cho phép chỉnh sửa trực tiếp

---

## US-042: Xuất bản và lên lịch bài tập

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Trang (Content Creator) |
| **Size** | M |
| **Priority** | Should Have |

> **Là** Trang, **tôi muốn** xuất bản hoặc lên lịch xuất bản bài tập, **để** kiểm soát thời điểm nội dung được hiển thị cho người học.

### Tiêu chí chấp nhận

**AC-042.1: Xuất bản bài tập ngay lập tức**
```gherkin
Given Trang đã tạo bài tập "Business Meeting Conversation" với đầy đủ thông tin và trạng thái "Nháp"
When Trang nhấn nút "Xuất bản"
Then bài tập xuất hiện trong danh mục cho người học trong vòng 5 phút
And trạng thái bài tập chuyển thành "Đã xuất bản"
```
**SR**: SR-FN-053

**AC-042.2: Lên lịch xuất bản cho ngày giờ tương lai**
```gherkin
Given Trang đã tạo bài tập "Business Meeting Conversation" với trạng thái "Nháp"
When Trang chọn "Lên lịch xuất bản" với ngày giờ 2026-03-25 08:00 UTC+7
Then bài tập được lưu với trạng thái "Đã lên lịch"
And bài tập tự động xuất bản vào ngày 25/03/2026 lúc 08:00 giờ Việt Nam
```
**SR**: SR-FN-054

**AC-042.3: Lưu trữ bài tập**
```gherkin
Given bài tập "Business Meeting Conversation" đang có trạng thái "Đã xuất bản" với 150 lượt hoàn thành
When Trang nhấn nút "Lưu trữ"
Then bài tập bị xóa khỏi danh mục hiển thị cho người học
And lịch sử hoàn thành của 150 người dùng vẫn được bảo toàn
And bài tập chuyển sang trạng thái "Đã lưu trữ"
```
**SR**: SR-FN-055

**AC-042.4: Content Creator không được phép xóa bài tập**
```gherkin
Given Trang đang có vai trò "Content Creator" và bài tập "Business Meeting Conversation" ở trạng thái "Đã lưu trữ"
When Trang cố gắng xóa bài tập
Then hệ thống hiển thị thông báo "Chỉ quản trị viên mới có thể xóa"
And bài tập không bị xóa
```
**SR**: SR-FN-056, SR-SC-010

**AC-042.5: Admin có quyền xóa bài tập**
```gherkin
Given người dùng có vai trò "Admin" và bài tập "Business Meeting Conversation" ở trạng thái "Đã lưu trữ"
When Admin nhấn nút "Xóa" và xác nhận hành động
Then bài tập bị xóa vĩnh viễn khỏi hệ thống
And lịch sử hoàn thành của người học được chuyển sang trạng thái "Bài tập đã xóa"
```
**SR**: SR-FN-056, SR-SC-010

### Ghi chú

- Múi giờ mặc định cho lên lịch là UTC+7 (giờ Việt Nam)
- Bài tập đã xuất bản có thể chuyển về trạng thái "Nháp" hoặc "Đã lưu trữ"
- Chỉ Admin mới có quyền xóa vĩnh viễn bài tập

---

## US-043: Bắt buộc ghi nguồn nội dung

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Trang (Content Creator) |
| **Size** | S |
| **Priority** | Should Have |

> **Là** Trang, **tôi muốn** hệ thống bắt buộc ghi nguồn cho nội dung được tuyển chọn, **để** đảm bảo tuân thủ bản quyền và minh bạch nguồn gốc nội dung.

### Tiêu chí chấp nhận

**AC-043.1: Nội dung tuyển chọn yêu cầu ghi nguồn**
```gherkin
Given Trang đang tạo bài tập với loại nội dung "Tuyển chọn" (curated)
When Trang để trống trường source_attribution
Then hệ thống hiển thị lỗi "Trường bắt buộc" bên dưới trường ghi nguồn
And không cho phép lưu bài tập
```
**SR**: SR-CN-006

**AC-043.2: Chặn xuất bản khi thiếu ghi nguồn**
```gherkin
Given Trang đã tạo bài tập tuyển chọn "TED Talk Excerpt" nhưng chưa điền source_attribution
When Trang nhấn nút "Xuất bản"
Then hệ thống chặn xuất bản và hiển thị thông báo "Vui lòng điền nguồn nội dung trước khi xuất bản"
And bài tập giữ nguyên trạng thái "Nháp"
```
**SR**: SR-CN-006

**AC-043.3: Hiển thị nguồn nội dung cho người học**
```gherkin
Given bài tập "TED Talk Excerpt" đã được xuất bản với source_attribution "TED Talks - Simon Sinek"
When người học Hoa mở bài tập "TED Talk Excerpt"
Then hệ thống hiển thị dòng "Nguồn: TED Talks - Simon Sinek" trên màn hình bài tập
And thông tin nguồn hiển thị rõ ràng và không bị cắt xén
```
**SR**: SR-FN-048

### Ghi chú

- Chỉ nội dung loại "Tuyển chọn" (curated) mới bắt buộc ghi nguồn
- Nội dung tự tạo (original) không yêu cầu trường source_attribution
- Định dạng hiển thị: "Nguồn: [tên nguồn]"

---

← Back to [INDEX.md](INDEX.md)
