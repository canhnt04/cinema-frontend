import {
  Armchair,
  ArrowLeft,
  ClockIcon,
  FilmIcon,
  MapPin,
  Theater,
} from "lucide-react";
import { timeFormatShowtime } from "./../../helper/timeFormat";
import { formatCurrency } from "./../../helper/formatPrice";

const ConfirmationDetails = ({ data }) => {
  if (!data) return null;

  // Lấy thông tin vé (chỉ lấy vé đầu tiên để hiển thị tổng quan)
  // const firstTicket =
  //   data.tickets && data.tickets.length > 0 ? data.tickets[0] : null;
  const seatNames = data.tickets
    ? data.tickets.map((t) => t.seatName).join(", ")
    : "---";
  const totalTickets = data.tickets ? data.tickets.length : 0;

  return (
    <div className="w-1/2 mx-auto lg:flex-row gap-8">
      <div className="flex-1 space-y-6">
        {/* 1. THÔNG TIN PHIM & SUẤT CHIẾU */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-primary/50">
          <div className="flex items-center mb-3 border-b border-white/10 pb-2">
            <FilmIcon className="w-5 h-5 text-primary mr-2" />
            <h2 className="text-xl font-bold text-primary uppercase">
              {data.movieTitle}
            </h2>
          </div>

          <p className="text-white/80 flex items-center my-2 border-b border-white/10 pb-2">
            <MapPin className="w-4 h-4 mr-2 text-white/50" />
            {data.theaterName} ({data.theaterAddress})
          </p>
          <p className="text-white/80 flex items-center my-2 border-b border-white/10 pb-2">
            <ClockIcon className="w-4 h-4 mr-2 text-white/50" />
            Thời gian: {timeFormatShowtime(data.startTime)}
          </p>
          <p className="text-white/80 flex items-center my-2 border-b border-white/10 pb-2">
            <Theater className="w-4 h-4 mr-2 text-white/50" />
            Phòng chiếu: {data.roomName}
          </p>
          <p className="text-white/80 flex items-center mt-2">
            <Armchair className="w-4 h-4 mr-2 text-white/50" />
            Số ghế ({totalTickets}): {seatNames}
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h3 className="text-lg font-semibold mb-3 border-b border-white/10 pb-2 text-primary">
            Thông tin cá nhân
          </h3>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Họ và tên:</span>
              <span className="font-medium">{data.name}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Email:</span>
              <span className="font-medium">{data.email}</span>
            </div>
            <div className="flex justify-between">
              <span>Số điện thoại:</span>
              <span className="font-medium">{data.phone}</span>
            </div>
          </div>
        </div>
        {/* 2. THÔNG TIN THANH TOÁN */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h3 className="text-lg font-semibold mb-3 border-b border-white/10 pb-2 text-primary">
            Chi Tiết Thanh Toán
          </h3>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Mã giao dịch (VNPay Ref):</span>
              <span className="font-medium text-yellow-400">
                {data.orderReferenceId}
              </span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Mã Payment (Hệ thống):</span>
              <span className="font-medium">{data.paymentId}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Phương thức:</span>
              <span className="font-medium">{data.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span>Thời gian thanh toán:</span>
              <span className="font-medium">
                {timeFormatShowtime(data.paymentTime)}
              </span>
            </div>
          </div>
        </div>

        {/* 3. TỔNG TIỀN */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex justify-between items-center text-xl font-bold">
            <span>TỔNG CỘNG</span>
            <span className="text-primary">
              {formatCurrency(data.amount)} VND
            </span>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => {
              window.location.href = "http://localhost:5000";
            }}
            className="flex items-center gap-1 mx-auto bg-primary text-white py-3 px-8 rounded-md hover:opacity-90 transition-opacity cursor-pointer"
          >
            <ArrowLeft size={20} /> Về Trang Chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDetails;
