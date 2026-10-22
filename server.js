const express = require('express');
const path = require('path');
const app = express();

// Render sẽ tự động cấp cổng thông qua biến môi trường PORT
const PORT = process.env.PORT || 3000;
// Lấy biến môi trường tùy chỉnh (sẽ cấu hình trên Render)
const APP_SECRET = process.env.APP_SECRET || "Chưa cấu hình Secret";

// Phục vụ các file tĩnh trong thư mục dist (đã build ở bài trước)
app.use(express.static(path.join(__dirname, 'dist')));

// Endpoint API kiểm tra biến môi trường
app.get('/api/status', (req, res) => {
  res.json({
    status: "success",
    message: "Ứng dụng Node.js đã triển khai thành công trên Render!",
    secret_key: APP_SECRET
  });
});

app.listen(PORT, () => {
  console.log(`Server đang khởi chạy tại cổng ${PORT}`);
});