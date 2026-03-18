# Epic 15: Bookmarking

**Related BRs**: BR-017
**Related SRs**: SR-FN-049, SR-FN-050, SR-DA-006

---

## US-045: Đánh dấu bài tập yêu thích

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Hoa (Learner) |
| **Size** | S |
| **Priority** | Could Have |

> **Là** Hoa, **tôi muốn** đánh dấu các bài tập yêu thích, **để** dễ dàng tìm lại và luyện tập lại những bài tập mà tôi quan tâm.

### Tiêu chí chấp nhận

**AC-045.1: Đánh dấu bài tập**
```gherkin
Given Hoa đang xem bài tập "Airport Announcement" trong danh mục
When Hoa nhấn vào biểu tượng bookmark (rỗng)
Then biểu tượng chuyển thành trạng thái đã lưu (đặc)
And bài tập "Airport Announcement" được thêm vào danh sách đánh dấu của Hoa
```
**SR**: SR-FN-049

**AC-045.2: Bỏ đánh dấu bài tập**
```gherkin
Given Hoa đã đánh dấu bài tập "Airport Announcement"
When Hoa nhấn lại vào biểu tượng bookmark (đặc)
Then biểu tượng chuyển thành trạng thái chưa lưu (rỗng)
And bài tập "Airport Announcement" bị xóa khỏi danh sách đánh dấu của Hoa
```
**SR**: SR-FN-049

**AC-045.3: Xem danh sách bài tập đã đánh dấu**
```gherkin
Given Hoa đã đánh dấu 3 bài tập: "Airport Announcement", "Hotel Booking", "Restaurant Order"
When Hoa mở mục "Đánh dấu" trong menu cá nhân
Then danh sách hiển thị đủ 3 bài tập đã đánh dấu
And mỗi bài tập hiển thị tiêu đề, danh mục và trình độ CEFR
```
**SR**: SR-FN-049, SR-DA-006

### Ghi chú

- Biểu tượng bookmark hiển thị trên cả trang danh mục và trang chi tiết bài tập
- Danh sách đánh dấu được đồng bộ giữa các thiết bị khi đăng nhập cùng tài khoản
- Giới hạn tối đa số bài tập đánh dấu cần được xác định (khuyến nghị: không giới hạn)

---

## US-046: Tạo danh sách luyện tập tùy chỉnh

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Hoa (Learner) |
| **Size** | M |
| **Priority** | Could Have |

> **Là** Hoa, **tôi muốn** tạo danh sách luyện tập tùy chỉnh từ các bài tập đã đánh dấu, **để** tổ chức việc luyện tập theo mục tiêu cá nhân.

### Tiêu chí chấp nhận

**AC-046.1: Tạo danh sách luyện tập mới**
```gherkin
Given Hoa đang ở mục "Đánh dấu" trong menu cá nhân
When Hoa nhấn "Tạo danh sách mới" và nhập tên "TOEIC Practice"
Then danh sách "TOEIC Practice" được tạo thành công
And danh sách hiển thị trong mục "Danh sách luyện tập" với trạng thái trống
```
**SR**: SR-FN-050

**AC-046.2: Thêm bài tập đã đánh dấu vào danh sách**
```gherkin
Given Hoa đã tạo danh sách "TOEIC Practice" và đã đánh dấu bài tập "Airport Announcement", "Hotel Booking"
When Hoa thêm lần lượt "Airport Announcement" rồi "Hotel Booking" vào danh sách "TOEIC Practice"
Then danh sách "TOEIC Practice" chứa 2 bài tập theo đúng thứ tự đã thêm
And "Airport Announcement" ở vị trí 1, "Hotel Booking" ở vị trí 2
```
**SR**: SR-FN-050

**AC-046.3: Bắt đầu luyện tập tuần tự**
```gherkin
Given danh sách "TOEIC Practice" chứa 3 bài tập: "Airport Announcement", "Hotel Booking", "Restaurant Order"
When Hoa nhấn nút "Bắt đầu luyện tập"
Then hệ thống mở bài tập đầu tiên "Airport Announcement" ở chế độ luyện tập tuần tự
And sau khi hoàn thành bài 1, tự động chuyển sang bài 2 "Hotel Booking"
And thanh tiến trình hiển thị "1/3", "2/3", "3/3"
```
**SR**: SR-FN-050, SR-DA-006

### Ghi chú

- Người dùng có thể tạo tối đa 10 danh sách luyện tập
- Mỗi danh sách có thể chứa tối đa 50 bài tập
- Thứ tự bài tập trong danh sách có thể được sắp xếp lại bằng kéo thả
- Chế độ luyện tập tuần tự cho phép thoát giữa chừng và tiếp tục sau

---

← Back to [INDEX.md](INDEX.md)
