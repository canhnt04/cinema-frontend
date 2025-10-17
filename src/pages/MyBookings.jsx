import BlurCircle from "./../components/BlurCircle";
import Button from "./../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { ClockIcon, FilmIcon } from "lucide-react";
import Countdown from "../components/ui/Countdown";
import { timeFormatShowtime } from "../helper/timeFormat";

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();
  // const {
  //   selectedDate,
  //   setSelectedDate,
  //   selectedTheater,
  //   setSelectedTheater,
  //   selectedShowtime,
  //   setSelectedShowtime,
  //   selectedTicket,
  //   setSelectedTicket,
  //   selectedSeats,
  //   setSelectedSeats,
  // } = useBooking();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getMyBookings = async () => {
  //     setLoading(false);
  //   };
  //   getMyBookings();
  // }, []);

  return (
    <div className="relative px-6 md:px-16 lg:px-40 pt-24 md:pt-36 min-h-[80vh]">
      <BlurCircle top="5%" left="0" />
      <h1 className="text-2xl font-semibold mb-1">THANH TOÁN</h1>
      <ul className="flex items-center gap-1">
        <li className="uppercase flex flex-col">
          <span className="text-xl font-bold text-center mt-4 mb-2 text-primary">
            1
          </span>
          <span className="text-sm text-primary">thông tin khách hàng</span>
        </li>
        <div className="w-10 h-[2px] bg-gray-200"></div>
        <li className="uppercase flex flex-col">
          <span className="text-xl font-bold text-center mt-4 mb-2">2</span>
          <span className="text-sm">thanh toán</span>
        </li>
      </ul>
      <div className="flex">
        <form action="" className="mt-4 flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span className="text-sm font-normal">Họ và tên</span>
              <span className="text-sm font-normal text-red-500">*</span>
            </div>
            <input
              type="text"
              className="bg-gray-300 w-[95%] h-8 text-base px-3 py-4 rounded text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-dull"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span className="text-sm font-normal">Số điện thoại</span>
              <span className="text-sm font-normal text-red-500">*</span>
            </div>
            <input
              type="text"
              className="bg-gray-300 w-[95%] h-8 text-base px-3 py-4 rounded text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-dull"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span className="text-sm font-normal">Email</span>
              <span className="text-sm font-normal text-red-500">*</span>
            </div>
            <input
              type="email"
              className="bg-gray-300 w-[95%] h-8 text-base px-3 py-4 rounded text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-dull"
            />
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              className="w-4 h-4 accent-primary cursor-pointer"
            />
            <span>Đồng ý với điều khoản của BCP Cinema.</span>
          </div>
          <Button
            type="button"
            variant="primary"
            className="w-[95%] mt-4 py-2.5 rounded-sm active:scale-95"
            onClick={() => navigate("/my-bookings/payment")}
          >
            TIẾP TỤC
          </Button>
        </form>
        <div className="bg-gray-600 flex-1 mt-2">
          <div className="mx-6 mt-6">
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-1 items-center font-semibold text-primary">
                <FilmIcon className="hidden lg:block w-5 h-5" />
                <h2 className="uppercase text-xl text-balance">
                  Tử chiến trên không
                </h2>
              </div>
              <Countdown />
            </div>
            <div className="mt-4">
              <h3 className="text-lg text-primary">
                Cinestar Quốc Thanh (HCM)
              </h3>
              <p className="text-balance text-sm text-white font-medium mt-1">
                246 Lý Thường Kiệt, P.10, Q.10, TP.HCM
              </p>
            </div>
            <div className="mt-4">
              <span className="flex items-center gap-1 text-base text-primary">
                <ClockIcon className="hidden lg:block w-4 h-4" /> Thời gian
              </span>
              <p className="text-base">
                {timeFormatShowtime("2025-10-12T14:00")}
              </p>
            </div>
            <div className="flex items-start md:items-center gap-6 mt-4">
              <div>
                <p className="text-base text-primary">Phòng chiếu</p>
                <p className="text-base">{"01"}</p>
              </div>
              <div>
                <p className="text-base text-primary">Số vé</p>
                <p className="text-base">{"1"}</p>
              </div>
              <div>
                <p className="text-base text-primary">Loại vé</p>
                <p className="text-base">{"HSSV-U22"}</p>
              </div>
              <div>
                <p className="text-base text-primary">Số ghế</p>
                <p className="text-base">{"A1, A2, A3, A4, A5"}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 border-t pt-2 lg:pt-4 border-dashed">
              <p className="text-xl font-bold text-primary">TỔNG TIỀN</p>
              <p className="text-lg font-semibold">
                {"200,000"}
                {currency}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
