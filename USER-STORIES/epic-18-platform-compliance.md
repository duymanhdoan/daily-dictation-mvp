# Epic 18: Platform & Compliance

**Related BRs**: BR-001, BR-005, BR-014
**Related SRs**: SR-SC-009, SR-DA-009, SR-RA-004, SR-CN-001, SR-CN-002, SR-CN-005, SR-MB-001 to SR-MB-004, SR-MB-008

---

## US-051: Yêu cầu xuất dữ liệu cá nhân

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Linh (Learner) |
| **Size** | M |
| **Priority** | Must Have |

> **Là** Linh, **tôi muốn** yêu cầu xuất toàn bộ dữ liệu cá nhân của mình, **để** thực hiện quyền truy cập dữ liệu theo quy định bảo vệ dữ liệu.

### Tiêu chí chấp nhận

**AC-051.1: Yêu cầu xuất dữ liệu từ cài đặt**
```gherkin
Given Linh đã đăng nhập và đang ở trang "Cài đặt" > "Quyền riêng tư"
When Linh nhấn nút "Xuất dữ liệu của tôi" và xác nhận yêu cầu
Then hệ thống ghi nhận yêu cầu và hiển thị "Yêu cầu đã được tiếp nhận. Dữ liệu sẽ được gửi trong vòng 30 ngày."
And hệ thống gửi file JSON chứa toàn bộ dữ liệu cá nhân qua email trong vòng 30 ngày
```
**SR**: SR-SC-009

**AC-051.2: File xuất bao gồm đầy đủ dữ liệu**
```gherkin
Given hệ thống đã xử lý yêu cầu xuất dữ liệu của Linh
When Linh tải về file JSON từ email
Then file bao gồm đầy đủ: thông tin hồ sơ (tên, email, avatar), lịch sử hoàn thành bài tập (150 bài), dữ liệu streak (streak dài nhất: 30 ngày), thông tin đăng ký gói (Premium, ngày bắt đầu/kết thúc), lịch sử XP (tổng: 12,500 XP)
And dữ liệu được cấu trúc rõ ràng với các trường có tên mô tả
```
**SR**: SR-SC-009

**AC-051.3: Quá trình xuất không ảnh hưởng sử dụng ứng dụng**
```gherkin
Given Linh đã gửi yêu cầu xuất dữ liệu và yêu cầu đang được xử lý
When Linh tiếp tục sử dụng ứng dụng để luyện tập
Then tất cả tính năng hoạt động bình thường: làm bài tập, nghe audio, xem kết quả, tích XP
And quá trình xuất dữ liệu chạy nền không ảnh hưởng hiệu năng ứng dụng
```
**SR**: SR-SC-009

### Ghi chú

- Thời hạn xử lý tối đa: 30 ngày kể từ ngày yêu cầu
- File JSON được mã hóa và gửi qua liên kết tải về có thời hạn 7 ngày
- Giới hạn: 1 yêu cầu xuất dữ liệu mỗi 30 ngày cho mỗi tài khoản

---

## US-052: Yêu cầu xóa tài khoản

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Linh (Learner) |
| **Size** | M |
| **Priority** | Must Have |

> **Là** Linh, **tôi muốn** yêu cầu xóa vĩnh viễn tài khoản và dữ liệu cá nhân, **để** thực hiện quyền được quên theo quy định bảo vệ dữ liệu.

### Tiêu chí chấp nhận

**AC-052.1: Gửi yêu cầu xóa tài khoản**
```gherkin
Given Linh đã đăng nhập và đang ở trang "Cài đặt" > "Tài khoản"
When Linh nhấn "Xóa tài khoản" và nhập mật khẩu để xác nhận
Then hệ thống gửi email xác nhận đến địa chỉ email đã đăng ký
And hiển thị thông báo "Vui lòng kiểm tra email để xác nhận yêu cầu xóa tài khoản"
```
**SR**: SR-DA-009

**AC-052.2: Xóa vĩnh viễn thông tin cá nhân trong 30 ngày**
```gherkin
Given Linh đã xác nhận yêu cầu xóa tài khoản qua email
When 30 ngày trôi qua kể từ ngày xác nhận
Then hệ thống xóa vĩnh viễn thông tin nhận dạng cá nhân (PII): email, tên hiển thị, ảnh đại diện
And tài khoản Linh không còn đăng nhập được
And dữ liệu bị xóa không thể khôi phục
```
**SR**: SR-DA-009

**AC-052.3: Giữ lại dữ liệu tổng hợp đã ẩn danh**
```gherkin
Given hệ thống đã xóa PII của Linh sau 30 ngày
When quản trị viên xem dữ liệu tổng hợp của hệ thống
Then dữ liệu tổng hợp đã ẩn danh (số bài hoàn thành, XP trung bình theo trình độ) vẫn được giữ lại
And không có cách nào liên kết dữ liệu tổng hợp ngược lại với Linh
```
**SR**: SR-DA-009

**AC-052.4: Thông báo xác nhận bằng tiếng Việt**
```gherkin
Given Linh nhấn nút "Xóa tài khoản" trong cài đặt
When hộp thoại xác nhận hiển thị
Then nội dung hiển thị "Tài khoản sẽ bị xóa vĩnh viễn trong 30 ngày"
And có nút "Hủy" và "Xác nhận xóa"
And ghi rõ "Trong thời gian chờ, bạn có thể hủy yêu cầu bằng cách đăng nhập lại"
```
**SR**: SR-DA-009

### Ghi chú

- Trong 30 ngày chờ xóa, người dùng có thể hủy yêu cầu bằng cách đăng nhập lại
- Đăng ký Premium đang hoạt động sẽ bị hủy trước khi xóa tài khoản
- Dữ liệu ẩn danh phục vụ phân tích hệ thống không bị xóa

---

## US-053: Ứng dụng hoạt động trong điều kiện suy giảm dịch vụ

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Hoa (Learner) |
| **Size** | M |
| **Priority** | Should Have |

> **Là** Hoa, **tôi muốn** các tính năng cốt lõi vẫn hoạt động khi một số dịch vụ phụ trợ gặp sự cố, **để** việc luyện tập không bị gián đoạn.

### Tiêu chí chấp nhận

**AC-053.1: Bài tập vẫn hoạt động khi bảng xếp hạng ngừng**
```gherkin
Given dịch vụ bảng xếp hạng (leaderboard) đang gặp sự cố và không phản hồi
When Hoa mở ứng dụng và chọn bài tập "Airport Announcement" để luyện tập
Then bài tập hiển thị bình thường: audio phát được, ô nhập hoạt động, nút gửi hoạt động
And kết quả diff view hiển thị chính xác sau khi gửi bài
And tab bảng xếp hạng hiển thị thông báo lỗi thay vì làm ứng dụng bị treo
```
**SR**: SR-RA-004

**AC-053.2: Dữ liệu hoàn thành vẫn ghi nhận khi thông báo ngừng**
```gherkin
Given dịch vụ thông báo đẩy (push notification) đang gặp sự cố
When Hoa hoàn thành bài tập "Airport Announcement" với điểm 90%
Then hệ thống vẫn ghi nhận kết quả hoàn thành, cộng XP (ví dụ: +90 XP) và cập nhật streak
And Hoa không nhận được thông báo đẩy nhưng dữ liệu không bị mất
```
**SR**: SR-RA-004

**AC-053.3: Hiển thị thông báo thân thiện khi tính năng tạm ngưng**
```gherkin
Given dịch vụ bảng xếp hạng đang gặp sự cố
When Hoa mở tab "Bảng xếp hạng"
Then hệ thống hiển thị thông báo "Tính năng tạm ngưng. Vui lòng thử lại sau."
And không hiển thị mã lỗi kỹ thuật hoặc stack trace cho người dùng
```
**SR**: SR-RA-004

**AC-053.4: Tính năng cốt lõi không bị ảnh hưởng bởi dịch vụ phụ**
```gherkin
Given dịch vụ bảng xếp hạng, thông báo đẩy và email đều đang gặp sự cố đồng thời
When Hoa sử dụng ứng dụng để làm bài tập
Then 5 tính năng cốt lõi vẫn hoạt động bình thường: (1) làm bài tập dictation, (2) phát audio, (3) xem kết quả diff, (4) tích lũy XP, (5) cập nhật streak
And không có tính năng cốt lõi nào bị lỗi do sự cố dịch vụ phụ trợ
```
**SR**: SR-RA-004

### Ghi chú

- Tính năng cốt lõi: dictation exercise, audio playback, diff view, XP, streak
- Tính năng phụ trợ: leaderboard, push notification, email, referral
- Kiến trúc circuit breaker nên được áp dụng cho các dịch vụ phụ trợ
- Khi dịch vụ phục hồi, dữ liệu chờ (queued data) sẽ được xử lý tự động

---

## US-054: Hỗ trợ phiên bản hệ điều hành cũ

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Linh (Learner) |
| **Size** | S |
| **Priority** | Should Have |

> **Là** Linh, **tôi muốn** ứng dụng hoạt động trên các phiên bản hệ điều hành cũ hơn, **để** tôi không cần phải nâng cấp thiết bị mới để sử dụng ứng dụng.

### Tiêu chí chấp nhận

**AC-054.1: Hỗ trợ iOS 15.0 trở lên**
```gherkin
Given thiết bị iPhone chạy iOS 15.0
When Linh cài đặt và mở ứng dụng Daily Dictation
Then tất cả tính năng thiết yếu hoạt động: đăng ký, đăng nhập, làm bài tập, phát audio, xem kết quả, tích XP, streak
And giao diện hiển thị đúng không bị vỡ layout
```
**SR**: SR-CN-001

**AC-054.2: Hỗ trợ Android 10 (API 29) trở lên**
```gherkin
Given thiết bị Android chạy Android 10 (API 29)
When Linh cài đặt và mở ứng dụng Daily Dictation
Then tất cả tính năng thiết yếu hoạt động: đăng ký, đăng nhập, làm bài tập, phát audio, xem kết quả, tích XP, streak
And giao diện hiển thị đúng không bị vỡ layout
```
**SR**: SR-CN-001

**AC-054.3: Tính năng yêu cầu API cao hơn thoái hóa nhẹ nhàng**
```gherkin
Given thiết bị Android chạy Android 10 (API 29) không hỗ trợ Material You dynamic color (yêu cầu API 31+)
When Linh sử dụng ứng dụng
Then ứng dụng hiển thị theme mặc định thay vì dynamic color
And không xảy ra crash hoặc lỗi ANR (Application Not Responding)
And không hiển thị thông báo lỗi cho người dùng
```
**SR**: SR-CN-001

### Ghi chú

- Phiên bản tối thiểu: iOS 15.0, Android 10 (API 29)
- Kiểm thử trên thiết bị thực với các phiên bản OS tối thiểu trước mỗi bản phát hành
- Các API mới nên được gọi qua kiểm tra phiên bản có điều kiện (conditional version check)

---

## US-055: Hỗ trợ nhiều trình duyệt web

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Minh (Learner) |
| **Size** | S |
| **Priority** | Should Have |

> **Là** Minh, **tôi muốn** ứng dụng web hoạt động tốt trên các trình duyệt phổ biến, **để** tôi có thể luyện tập trên bất kỳ trình duyệt nào tôi sử dụng.

### Tiêu chí chấp nhận

**AC-055.1: Hỗ trợ 4 trình duyệt chính**
```gherkin
Given Minh sử dụng một trong các trình duyệt: Chrome 90+, Safari 15+, Firefox 90+, Edge 90+
When Minh truy cập ứng dụng web Daily Dictation và thực hiện toàn bộ luồng: đăng nhập → chọn bài tập → nghe audio → nhập câu trả lời → gửi bài → xem kết quả
Then tất cả các bước hoạt động chính xác và giao diện hiển thị nhất quán trên cả 4 trình duyệt
```
**SR**: SR-CN-002

**AC-055.2: Phát audio hoạt động trên Safari**
```gherkin
Given Minh đang sử dụng Safari 15+ trên macOS hoặc iOS
When Minh nhấn nút phát audio trong bài tập dictation
Then audio phát chính xác không bị lỗi autoplay policy
And các nút điều khiển (phát/tạm dừng, tua lại 5 giây, điều chỉnh tốc độ 0.75×/1×/1.25×) hoạt động bình thường
```
**SR**: SR-CN-002

**AC-055.3: Thông báo trình duyệt không được hỗ trợ**
```gherkin
Given Minh đang sử dụng trình duyệt Internet Explorer 11 hoặc Chrome phiên bản dưới 90
When Minh truy cập ứng dụng web Daily Dictation
Then hệ thống hiển thị thông báo "Trình duyệt không được hỗ trợ. Vui lòng cập nhật."
And kèm danh sách trình duyệt được hỗ trợ với liên kết tải về
```
**SR**: SR-CN-002

### Ghi chú

- Danh sách trình duyệt hỗ trợ: Chrome 90+, Safari 15+, Firefox 90+, Edge 90+
- Safari cần xử lý đặc biệt cho autoplay policy và Web Audio API
- Kiểm thử cross-browser nên được tích hợp vào CI/CD pipeline
- Sử dụng Browserslist để cấu hình target browsers cho build tools

---

## US-057: Tuân thủ Human Interface Guidelines của iOS

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Linh (Learner) |
| **Size** | S |
| **Priority** | Should Have |

> **Là** Linh, **tôi muốn** ứng dụng iOS tuân thủ Human Interface Guidelines của Apple, **để** trải nghiệm sử dụng quen thuộc và nhất quán với các ứng dụng iOS khác.

### Tiêu chí chấp nhận

**AC-057.1: Sử dụng tab bar và navigation controller**
```gherkin
Given Linh đang sử dụng ứng dụng Daily Dictation trên iPhone
When Linh điều hướng giữa các mục chính: Trang chủ, Khám phá, Bảng xếp hạng, Hồ sơ
Then ứng dụng sử dụng tab bar ở dưới cùng với tối đa 5 tab
And mỗi tab sử dụng navigation controller cho phép điều hướng sâu với nút quay lại
```
**SR**: SR-MB-001

**AC-057.2: Dynamic Type co giãn văn bản không bị cắt**
```gherkin
Given Linh đã cài đặt cỡ chữ hệ thống ở mức lớn nhất (1.5× kích thước mặc định) trong Cài đặt iOS > Trợ năng
When Linh mở ứng dụng Daily Dictation
Then tất cả văn bản co giãn theo cài đặt Dynamic Type
And không có văn bản nào bị cắt xén hoặc chồng chéo lên phần tử khác
```
**SR**: SR-MB-001

**AC-057.3: Tôn trọng safe area trên thiết bị có notch**
```gherkin
Given Linh đang sử dụng iPhone 14 Pro có Dynamic Island
When Linh sử dụng ứng dụng ở cả chế độ dọc và ngang
Then nội dung không bị che khuất bởi notch, Dynamic Island hoặc home indicator
And safe area insets được áp dụng đúng cho tất cả các màn hình
And tất cả vùng nhấn có kích thước tối thiểu 44×44 điểm (pt)
```
**SR**: SR-MB-001

### Ghi chú

- Tham khảo Apple Human Interface Guidelines phiên bản mới nhất
- Dynamic Type hỗ trợ từ xSmall đến AX5 (Accessibility Extra Extra Extra Extra Extra Large)
- Kiểm thử trên các thiết bị: iPhone SE (không notch), iPhone 14 (notch), iPhone 14 Pro (Dynamic Island)
- Tất cả touch target tối thiểu 44×44pt theo khuyến nghị của Apple

---

## US-058: Tuân thủ Material Design 3

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Linh (Learner) |
| **Size** | S |
| **Priority** | Should Have |

> **Là** Linh, **tôi muốn** ứng dụng Android tuân thủ Material Design 3, **để** trải nghiệm sử dụng nhất quán và hiện đại trên thiết bị Android.

### Tiêu chí chấp nhận

**AC-058.1: Sử dụng bottom navigation và top app bar**
```gherkin
Given Linh đang sử dụng ứng dụng Daily Dictation trên thiết bị Android
When Linh điều hướng giữa các mục chính
Then ứng dụng sử dụng bottom navigation bar với tối đa 5 mục theo chuẩn Material Design 3
And mỗi mục có top app bar hiển thị tiêu đề và các action phù hợp
```
**SR**: SR-MB-002

**AC-058.2: Material You dynamic color trên Android 12+**
```gherkin
Given Linh đang sử dụng thiết bị Android 12+ (API 31+) với hình nền màu xanh dương
When Linh mở ứng dụng Daily Dictation
Then giao diện ứng dụng áp dụng bảng màu dynamic color được tạo từ hình nền (tông xanh dương)
And các thành phần UI (nút, thanh điều hướng, chip) sử dụng màu sắc hài hòa theo Material You
```
**SR**: SR-MB-002

**AC-058.3: Thiết bị Android cũ sử dụng theme mặc định**
```gherkin
Given Linh đang sử dụng thiết bị Android 10 (API 29) không hỗ trợ Material You
When Linh mở ứng dụng Daily Dictation
Then ứng dụng hiển thị với Material Design 3 theme mặc định (bảng màu cố định của ứng dụng)
And không xảy ra crash hoặc lỗi runtime
And tất cả tính năng hoạt động bình thường
```
**SR**: SR-MB-002

### Ghi chú

- Material Design 3 là phiên bản thiết kế mới nhất của Google
- Dynamic color (Material You) chỉ hỗ trợ Android 12+ (API 31+)
- Cần kiểm tra khả năng tương thích ngược (backward compatibility) cho các thành phần MD3
- Sử dụng Material Design Components (MDC) library phiên bản mới nhất

---

## US-059: Mở khóa ứng dụng bằng sinh trắc học

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Minh (Learner) |
| **Size** | M |
| **Priority** | Could Have |

> **Là** Minh, **tôi muốn** mở khóa ứng dụng bằng vân tay hoặc nhận diện khuôn mặt, **để** bảo vệ dữ liệu học tập của tôi một cách tiện lợi.

### Tiêu chí chấp nhận

**AC-059.1: Bật/tắt sinh trắc học trong cài đặt**
```gherkin
Given Minh đã đăng nhập và đang ở trang "Cài đặt" > "Bảo mật"
When Minh bật toggle "Mở khóa bằng sinh trắc học"
Then hệ thống yêu cầu xác thực sinh trắc học lần đầu để kích hoạt
And sau khi xác thực thành công, tính năng được bật
And từ lần mở ứng dụng tiếp theo, hệ thống yêu cầu sinh trắc học
```
**SR**: SR-MB-004

**AC-059.2: Xác thực sinh trắc học trên iOS**
```gherkin
Given Minh đã bật tính năng mở khóa sinh trắc học trên iPhone có Face ID
When Minh mở ứng dụng Daily Dictation
Then hệ thống hiển thị prompt Face ID/Touch ID của iOS
And sau khi xác thực thành công, ứng dụng mở với phiên đăng nhập hiện tại
```
**SR**: SR-MB-004

**AC-059.3: Xác thực sinh trắc học trên Android**
```gherkin
Given Minh đã bật tính năng mở khóa sinh trắc học trên thiết bị Android có cảm biến vân tay
When Minh mở ứng dụng Daily Dictation
Then hệ thống hiển thị prompt Android Biometric API
And sau khi xác thực vân tay thành công, ứng dụng mở với phiên đăng nhập hiện tại
```
**SR**: SR-MB-004

**AC-059.4: Dự phòng khi xác thực sinh trắc học thất bại**
```gherkin
Given Minh đã bật mở khóa sinh trắc học và mở ứng dụng
When Minh xác thực sinh trắc học thất bại 3 lần liên tiếp
Then hệ thống chuyển sang phương thức đăng nhập dự phòng bằng email và mật khẩu
And hiển thị form đăng nhập với thông báo "Xác thực sinh trắc học thất bại. Vui lòng đăng nhập bằng mật khẩu."
```
**SR**: SR-MB-004

**AC-059.5: Ẩn tùy chọn khi thiết bị không có phần cứng sinh trắc học**
```gherkin
Given Minh đang sử dụng thiết bị không có phần cứng sinh trắc học (không có cảm biến vân tay, Face ID)
When Minh mở trang "Cài đặt" > "Bảo mật"
Then toggle "Mở khóa bằng sinh trắc học" không hiển thị
And không có thông báo lỗi nào liên quan đến sinh trắc học
```
**SR**: SR-MB-004

### Ghi chú

- iOS sử dụng LocalAuthentication framework (Face ID / Touch ID)
- Android sử dụng AndroidX Biometric API (vân tay, nhận diện khuôn mặt)
- Số lần thử tối đa trước khi chuyển fallback: 3 lần
- Không lưu trữ dữ liệu sinh trắc học trong ứng dụng — chỉ sử dụng API hệ điều hành

---

## US-060: Phản hồi xúc giác khi đạt thành tựu

| Thuộc tính | Giá trị |
|---|---|
| **Persona** | Hoa (Learner) |
| **Size** | S |
| **Priority** | Could Have |

> **Là** Hoa, **tôi muốn** cảm nhận phản hồi xúc giác khi đạt thành tựu, **để** trải nghiệm được tăng cường và tạo cảm giác thành tựu mạnh mẽ hơn.

### Tiêu chí chấp nhận

**AC-060.1: Haptic feedback trên iOS khi nhận huy hiệu**
```gherkin
Given Hoa đang sử dụng iPhone có Taptic Engine và vừa hoàn thành bài tập thứ 100
When hệ thống trao huy hiệu "Centurion - 100 bài hoàn thành"
Then thiết bị phát phản hồi xúc giác dạng "medium impact" (UIImpactFeedbackGenerator)
And phản hồi xúc giác đồng bộ với animation hiển thị huy hiệu
```
**SR**: SR-MB-008

**AC-060.2: Haptic feedback trên Android khi lên cấp**
```gherkin
Given Hoa đang sử dụng thiết bị Android có motor rung và vừa đạt đủ XP để lên Level 10
When hệ thống hiển thị thông báo lên cấp "Chúc mừng! Bạn đã đạt Level 10"
Then thiết bị phát rung 50ms
And phản hồi rung đồng bộ với animation lên cấp
```
**SR**: SR-MB-008

**AC-060.3: Xử lý nhẹ nhàng khi thiết bị không có phần cứng haptic**
```gherkin
Given Hoa đang sử dụng thiết bị không có phần cứng haptic (ví dụ: iPad đời cũ hoặc thiết bị Android giá rẻ)
When Hoa đạt thành tựu nhận huy hiệu hoặc lên cấp
Then hệ thống bỏ qua phản hồi xúc giác mà không hiển thị lỗi
And animation thành tựu vẫn hiển thị bình thường
And không có log lỗi nào được ghi liên quan đến haptic
```
**SR**: SR-MB-008

### Ghi chú

- iOS sử dụng UIImpactFeedbackGenerator với style .medium
- Android sử dụng Vibrator API với thời lượng 50ms
- Kiểm tra khả năng phần cứng trước khi gọi haptic API
- Người dùng có thể tắt haptic feedback trong cài đặt ứng dụng (tùy chọn tương lai)

---

← Back to [INDEX.md](INDEX.md)
