# Cinema Frontend

Frontend cho hệ thống đặt vé rạp chiếu phim — Single Page Application (SPA) cung cấp giao diện người dùng và quản trị.

## Tổng quan

- Ứng dụng cho phép người dùng tìm phim, xem lịch chiếu, chọn ghế và đặt vé. Phần Admin quản lý rạp, phòng chiếu, suất chiếu và đơn hàng.
- Mục tiêu: trải nghiệm mượt mà, responsive trên mobile & desktop; tích hợp chặt chẽ với API backend để quản lý dữ liệu.

## Tính năng chính

- Danh sách phim và trang chi tiết (trailer, synopsis, thông tin kỹ thuật).
- Tra cứu lịch chiếu theo phim / rạp / ngày.
- Quy trình đặt vé: chọn suất → chọn ghế → thanh toán (mock hoặc tích hợp payment gateway).
- Quản trị (Admin): CRUD rạp, phòng chiếu, suất chiếu, quản lý đơn hàng và doanh thu cơ bản.
- Xác thực người dùng: đăng ký, đăng nhập, quản lý profile và phân quyền user/admin.
- Thông báo trạng thái đơn hàng và lịch sử đặt vé của người dùng.
- Responsive UI, tối ưu hiệu năng (lazy loading, code-splitting) và xử lý trạng thái tải/lỗi rõ ràng.
- Kiểm thử cơ bản: unit tests & E2E tests.

## Cài đặt nhanh (local)

- Yêu cầu: Node.js LTS, npm hoặc yarn

```bash
npm install
# hoặc
yarn install
```

- Chạy dev:

```bash
npm run dev
# hoặc
yarn dev
```

- Build production:

```bash
npm run build
# hoặc
yarn build
```

- Chạy test:

```bash
npm test
# hoặc
yarn test
```

## Cấu trúc thư mục

- `src/` — mã nguồn chính
- `src/pages/` — các trang (Home, Movies, MovieDetail, Booking, Admin)
- `src/components/` — component tái sử dụng
- `src/hooks/` — custom hooks
- `src/services/` — API clients, business logic
- `src/store/` — state management (Redux / Zustand / Context)
- `public/` — tài nguyên tĩnh

## Công nghệ

- Framework: React 19 + Vite
- Styling: Tailwind CSS (daisyUI)
- HTTP client: Axios (configured with baseURL http://localhost:8080)
- State: React Context (AuthProvider, BookingProvider). `@reduxjs/toolkit` và `react-redux` are present in deps.
- Routing: react-router-dom (v7)
- Other libraries: react-hot-toast, react-player, framer-motion, lucide-react
- Dev tooling: Vite, ESLint
