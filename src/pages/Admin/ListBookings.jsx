import { useState } from "react";
import { PrinterIcon } from "lucide-react";
import Toolbar from "../../components/ui/Toolbar";
import FullPageSpinner from "../../components/ui/FullPageSpinner";

// Hàm tạo ghế ngẫu nhiên
const generateRandomSeats = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seats = [];
  const count = Math.floor(Math.random() * 4) + 1; // 1-4 ghế
  for (let i = 0; i < count; i++) {
    const row = rows[Math.floor(Math.random() * rows.length)];
    const num = Math.floor(Math.random() * 12) + 1;
    seats.push(`${row}${num}`);
  }
  return seats.sort();
};

// Dữ liệu giả – nằm luôn trong file này
const dummyBills = [
  {
    id: 1,
    bill_id: "HD001234",
    code: "TICKET-20241101",
    payment_id: "pay_672f8a1b9c123",
    user_id: "user_001",
    customer_name: "Nguyễn Văn An",
    movie_title: "Avengers: Endgame",
    show_time: "19:30",
    show_date: "2025-11-20",
    seats: generateRandomSeats(),
    total: 360000,
    status: "paid",
  },
  {
    id: 2,
    bill_id: "HD001235",
    code: "TICKET-20241102",
    payment_id: "pay_672f9b2c8d456",
    user_id: "user_002",
    customer_name: "Trần Thị Bích",
    movie_title: "Oppenheimer",
    show_time: "14:00",
    show_date: "2025-11-19",
    seats: generateRandomSeats(),
    total: 240000,
    status: "pending",
  },
  {
    id: 3,
    bill_id: "HD001236",
    code: "TICKET-20241103",
    payment_id: "pay_672fa1d3e5678",
    user_id: "user_003",
    customer_name: "Lê Minh Châu",
    movie_title: "Nhà Bà Nữ",
    show_time: "21:00",
    show_date: "2025-11-18",
    seats: generateRandomSeats(),
    total: 180000,
    status: "paid",
  },
  {
    id: 4,
    bill_id: "HD001237",
    code: "TICKET-20241104",
    payment_id: "pay_672fb2e4f7890",
    user_id: "user_004",
    customer_name: "Phạm Quốc Hưng",
    movie_title: "Lật Mặt 7: Một Điều Ước",
    show_time: "16:45",
    show_date: "2025-11-21",
    seats: generateRandomSeats(),
    total: 450000,
    status: "cancelled",
  },
  {
    id: 5,
    bill_id: "HD001238",
    code: "TICKET-20241105",
    payment_id: "pay_672fc3f501234",
    user_id: "user_005",
    customer_name: "Hoàng Thị Mai",
    movie_title: "Deadpool & Wolverine",
    show_time: "20:15",
    show_date: "2025-11-20",
    seats: generateRandomSeats(),
    total: 320000,
    status: "paid",
  },
  {
    id: 6,
    bill_id: "HD001239",
    code: "TICKET-20241106",
    payment_id: "pay_672fd4g612345",
    user_id: "user_006",
    customer_name: "Đỗ Văn Nam",
    movie_title: "Mai",
    show_time: "18:30",
    show_date: "2025-11-22",
    seats: generateRandomSeats(),
    total: 280000,
    status: "pending",
  },
];

const ListBookings = () => {
  const [loading] = useState(false);
  const [viewBooking, setViewBooking] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => setSearchValue(value.trim());

  // Lọc dữ liệu theo nhiều trường
  const filteredBookings = dummyBills.filter(
    (b) =>
      b.code.toLowerCase().includes(searchValue.toLowerCase()) ||
      b.bill_id.toLowerCase().includes(searchValue.toLowerCase()) ||
      b.customer_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      b.movie_title.toLowerCase().includes(searchValue.toLowerCase()) ||
      b.user_id.toLowerCase().includes(searchValue.toLowerCase())
  );

  const headers = [
    "Mã vé",
    "Phim",
    "Suất chiếu",
    "Khách hàng",
    "Ghế",
    "Tổng tiền",
    "Trạng thái",
    "Thao tác",
  ];

  const getStatusBadge = (status) => {
    const map = {
      paid: { text: "Đã thanh toán", color: "bg-green-500" },
      pending: { text: "Chờ thanh toán", color: "bg-yellow-500" },
      cancelled: { text: "Đã hủy", color: "bg-red-500" },
    };
    const s = map[status] || map.pending;
    return (
      <span className={`px-2 py-1 rounded text-xs text-white ${s.color}`}>
        {s.text}
      </span>
    );
  };

  return !loading ? (
    <>
      <div className="w-full mt-6">
        <Toolbar onSearch={handleSearch} title="Danh sách đặt vé" />

        <table className="w-full min-w-[1000px] border-collapse rounded-md overflow-hidden">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              {headers.map((h) => (
                <th key={h} className="p-3 font-medium first:pl-10">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredBookings.length === 0 ? (
              <tr>
                <td colSpan={8} className="p-8 text-center text-gray-500">
                  Không tìm thấy vé nào khớp với từ khóa "{searchValue}"
                </td>
              </tr>
            ) : (
              filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b border-primary/10 bg-primary/5 even:bg-primary/10 hover:bg-primary/15 transition"
                >
                  <td className="p-3 pl-10 font-medium text-blue-600">
                    {booking.code}
                  </td>
                  <td className="p-3">{booking.movie_title}</td>
                  <td className="p-3">
                    {booking.show_time} - {booking.show_date}
                  </td>
                  <td className="p-3">{booking.customer_name}</td>
                  <td className="p-3 font-medium">
                    {booking.seats.join(", ")}
                  </td>
                  <td className="p-3 font-medium text-green-600">
                    {booking.total.toLocaleString("vi-VN")}đ
                  </td>
                  <td className="p-3">{getStatusBadge(booking.status)}</td>
                  <td className="p-3 flex gap-4">
                    <span className="cursor-pointer active:scale-95 text-blue-600">
                      <PrinterIcon className="w-6 h-6" />
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <FullPageSpinner />
  );
};

export default ListBookings;
