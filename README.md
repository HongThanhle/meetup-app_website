# Website Điểm Hẹn

Thư mục chứa landing page, chính sách quyền riêng tư và biểu mẫu yêu cầu xóa tài khoản. Đây là website tĩnh, có thể host trên bất kỳ dịch vụ HTTPS nào.

Trước khi đưa lên store:

1. Thay `[Tên pháp lý của nhà phát hành]` và `[Email hỗ trợ]` trong `privacy.html` bằng thông tin thật.
2. Sửa `API_BASE_URL` trong `delete-account.js` thành backend production.
3. Đưa domain website vào `CORS_ORIGINS` của backend; kiểm tra form xóa tài khoản trên chính domain HTTPS.
4. Dùng URL chính sách trong `EXPO_PUBLIC_PRIVACY_URL`, App Store Connect và Play Console; cung cấp trang `delete-account.html` làm URL yêu cầu xóa trên Play Console.
5. Kiểm tra nội dung chính sách, dữ liệu/đơn vị nhận dữ liệu và thời hạn lưu trữ với cách triển khai thực tế trước khi công bố.

Chạy xem trước cục bộ:

```powershell
python -m http.server 8080
```

Mở `http://localhost:8080`. Biểu mẫu xóa gọi API production, vì vậy chỉ nên gửi yêu cầu với tài khoản thử nghiệm.
