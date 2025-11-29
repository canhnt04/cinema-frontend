import dayjs from "dayjs";
import { useBooking } from "./../../hooks/useBooking";
import { formatShortScale } from "../../helper/formatPrice";

const ShowTimes = ({ showtimes = [] }) => {
  const { selectedShowtime, setSelectedShowtime } = useBooking();

  const formatTime = (time) => {
    return dayjs(time).format("HH:mm");
  };

  // const isPastShowtime = (startTime) => {
  //   // Check if the current time is 5 minutes after the scheduled start time
  //   return dayjs().isAfter(dayjs(startTime).add(5, "minute"));
  // };

  // const handleClick = (st) => {
  //   if (selectedShowtime?.showtime_id === st.showtimeId) {
  //     setSelectedShowtime(null);
  //     return;
  //   }
  //   setSelectedShowtime(st);
  // };

  const isPastShowtime = (startTime) => {
    return dayjs().isAfter(dayjs(startTime).add(5, "minute"));
  };

  const handleClick = (st) => {
    // Ngăn chặn việc chọn suất chiếu đã qua
    if (isPastShowtime(st.startTime)) {
      console.log(`Suất chiếu lúc ${formatTime(st.startTime)} đã kết thúc.`);
      return;
    }

    if (selectedShowtime?.showtimeId === st.showtimeId) {
      setSelectedShowtime(null);
      return;
    }
    setSelectedShowtime(st);
  };

  // Các lớp CSS cơ bản áp dụng cho tất cả các nút (để đảm bảo tính đồng nhất)
  const baseClasses =
    "text-sm font-medium border transition-all duration-300 inline-flex flex-col items-center justify-center px-3 py-1 md:py-1.5 mr-2 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";

  // Các lớp CSS cho trạng thái MẶC ĐỊNH (Enabled)
  const defaultEnabledClasses =
    "text-gray-100 border-white/80 bg-gray-800 cursor-pointer hover:border-[#f3ea28] hover:text-[#f3ea28] focus:ring-[#f3ea28]";

  return (
    <div>
      {showtimes.map((st) => {
        const isPast = isPastShowtime(st.startTime);

        let buttonClasses = defaultEnabledClasses;

        if (isPast) {
          // Cập nhật: Trạng thái BỊ VÔ HIỆU HÓA: Mờ, nền xám, không có hiệu ứng hover/active.
          buttonClasses =
            "opacity-40 bg-gray-700/50 border-gray-600 cursor-not-allowed";
        } else if (selectedShowtime?.showtimeId === st.showtimeId) {
          // Cập nhật: Trạng thái ĐANG ĐƯỢC CHỌN: Màu chủ đạo vàng/đen, nổi bật hơn.
          // Thêm hover nhẹ nhàng cho nút đang chọn.
          buttonClasses =
            "!text-black bg-[#f3ea28] border-[#f3ea28] font-bold hover:bg-[#ffe75e] hover:border-[#ffe75e] focus:ring-[#f3ea28]";
        }

        return (
          <div key={st.showtimeId} className="inline-block">
            <button
              type="button"
              onClick={() => handleClick(st)}
              // Quan trọng: Thuộc tính 'disabled' phải có để 'cursor-not-allowed' hoạt động chính xác.
              disabled={isPast}
              className={`${baseClasses} ${buttonClasses}`}
            >
              {/* Nội dung bên trong vẫn giữ nguyên */}
              <span className="text-base font-semibold">
                {formatTime(st.startTime)}
              </span>
              <span
                className="text-xs font-normal opacity-80"
                aria-label="Giá vé"
              >
                {isPast ? (
                  <span className="text-[10px] text-red-400 font-bold mt-0.5">
                    Hết giờ
                  </span>
                ) : (
                  formatShortScale(st.price)
                )}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTimes;
