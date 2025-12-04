import { useEffect, useState } from "react";
import { PrinterIcon } from "lucide-react";
import Toolbar from "../../components/ui/Toolbar";
import FullPageSpinner from "../../components/ui/FullPageSpinner";
import { getBookings, printBooking } from "../../services/BookingService";
import { showToast } from "../../helper/cooldownToast";

const ListBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSearch = (value) => setSearchValue(value.trim());

  const filteredBookings = bookings.filter(
    (b) =>
      b.orderReferenceId.toLowerCase().includes(searchValue.toLowerCase()) ||
      b.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      b.movieTitle.toLowerCase().includes(searchValue.toLowerCase()) ||
      b.theaterName.toLowerCase().includes(searchValue.toLowerCase()) ||
      b.roomName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const headers = [
    "Mã hóa đơn",
    "Email khách hàng",
    "Phim",
    "Rạp",
    "Phòng",
    "Suất chiếu",
    "Ghế",
    "Tổng tiền",
    "In vé",
  ];

  const fetchData = async () => {
    try {
      const res = await getBookings();
      if (res) setBookings(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrintTicket = async (orderReferenceId) => {
    try {
      const res = await printBooking(orderReferenceId);
      if (res) {
        showToast("In hóa đơn thành công", { type: "success" });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <FullPageSpinner />;

  return (
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
                <td colSpan={9} className="p-8 text-center text-gray-500">
                  Không tìm thấy vé nào khớp với từ khóa "{searchValue}"
                </td>
              </tr>
            ) : (
              filteredBookings.map((booking, index) => (
                <tr
                  key={index}
                  className="border-b border-primary/10 bg-primary/5 even:bg-primary/10 hover:bg-primary/15 transition"
                >
                  <td className="p-3 pl-10 font-medium text-blue-600">
                    {booking.orderReferenceId}
                  </td>
                  <td className="p-3">{booking.email}</td>
                  <td className="p-3">{booking.movieTitle}</td>
                  <td className="p-3">{booking.theaterName}</td>
                  <td className="p-3">{booking.roomName}</td>
                  <td className="p-3">{booking.startTime}</td>
                  <td className="p-3 font-medium">
                    {booking.tickets
                      .map((ticket) => ticket.seatName)
                      .join(", ")}
                  </td>
                  <td className="p-3 font-medium text-green-600">
                    {booking.amount.toLocaleString("vi-VN")}đ
                  </td>
                  <td className="p-3 flex gap-4">
                    <span
                      onClick={() => handlePrintTicket(booking.paymentId)}
                      className="cursor-pointer active:scale-95 text-blue-600"
                    >
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
  );
};

export default ListBookings;
