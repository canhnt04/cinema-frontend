import BlurCircle from "./../components/BlurCircle";
import Button from "./../components/ui/Button";
import { ClockIcon, FilmIcon } from "lucide-react";
import { timeFormatShowtime } from "../helper/timeFormat";
import { useBooking } from "../hooks/useBooking";
import { useEffect, useState } from "react";
import { formatCurrency } from "./../helper/formatPrice";
import PaymentMethodList from "../components/Payment/PaymentMethodList";
import InfomationCustomer from "../components/Payment/InfomationCustomer";
import { showToast } from "../helper/cooldownToast";
import axiosClient from "../services/axiosClient";
import { useAuth } from "../hooks/useAuth";

const MyBookings = () => {
  const { user } = useAuth();
  const currency = import.meta.env.VITE_CURRENCY;
  const [step, setStep] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    name: user.fullName,
    email: user.email,
    phone: user.phone,
  });

  const {
    selectedMoiveDetail,
    selectedTheater,
    selectedShowtime,
    selectedSeats,
  } = useBooking();

  const selectedSeatNames = selectedSeats.map(
    (seat) => `${seat.seatRow}${seat.seatNumber}`
  );

  const seatIdArr = selectedSeats.map((seat) => {
    return seat.seatId;
  });

  // Tách hàm xử lý bước
  const handleStep = () => {
    // Tăng step lên 2 hoặc 3 (có thể giới hạn MAX_STEP = 3)
    setStep((prev) => prev + 1);
  };

  // Sử dụng useEffect để theo dõi sự thay đổi của step
  useEffect(() => {
    // 1. Tách logic gọi API ra khỏi useEffect để dễ dàng gọi (nếu cần)
    const fetchCreatePayment = async () => {
      try {
        const res = await axiosClient.post("/payment/create-payment", {
          userId: user.id,
          showtimeId: selectedShowtime.showtimeId,
          seatIds: seatIdArr,
          amount: selectedSeats?.length * selectedShowtime?.price,
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone,
        });

        // 💡 QUAN TRỌNG: Kiểm tra cấu trúc data. Nếu là Axios, thường là res.data
        // Giả định server trả về { url: '...' }
        window.location.href = res.data.result?.url;
      } catch (error) {
        console.error("Lỗi tạo thanh toán:", error);
        // Xử lý lỗi (ví dụ: hiển thị thông báo)
        return null;
      }
    };

    // 2. Chỉ chạy khi step đạt đến 3
    if (step >= 3) {
      if (!selectedPaymentMethod) {
        showToast("Vui lòng chọn phương thức thanh toán.");
        return;
      }
      fetchCreatePayment();
    }

    // Lưu ý: Thêm dependencies thiếu (axiosClient, selectedShowtime, selectedSeats, etc.)
  }, [step]);
  return (
    <div className="relative px-6 md:px-16 lg:px-40 pt-24 md:pt-36">
      <BlurCircle top="5%" left="0" />
      <h1 className="text-2xl font-semibold mb-1">THANH TOÁN</h1>
      <ul className="flex items-center gap-1">
        <li
          className={`cursor-pointer uppercase flex flex-col ${
            step == 1 ? "text-primary" : ""
          }`}
          onClick={() => setStep(1)}
        >
          <span className="text-xl font-bold text-center mt-4 mb-2 ">1</span>
          <span className="text-sm ">thông tin khách hàng</span>
        </li>
        <div
          className={`w-10 h-[2px] bg-gray-200  ${
            step >= 2 ? "bg-primary" : ""
          }`}
        ></div>
        <li
          className={`uppercase flex flex-col ${
            step >= 2 ? "text-primary" : ""
          }`}
        >
          <span className="text-xl font-bold text-center mt-4 mb-2">2</span>
          <span className="text-sm">thanh toán</span>
        </li>
        <div className="w-10 h-[2px] bg-gray-200"></div>
        <li className="uppercase flex flex-col">
          <span className="text-xl font-bold text-center mt-4 mb-2">3</span>
          <span className="text-sm">thông tin vé</span>
        </li>
      </ul>
      <div className="flex min-h-[45vh]">
        <div className="mt-4 flex flex-1 flex-col">
          {step == 1 && (
            <InfomationCustomer
              onChangeInfo={(info) => setCustomerInfo(info)}
              user={user}
            />
          )}
          {step >= 2 && (
            <PaymentMethodList
              setSelectPaymentMethod={setSelectedPaymentMethod}
            />
          )}
          <Button
            type="button"
            variant="primary"
            className="w-[95%] mt-4 py-2.5 rounded-sm active:scale-95"
            onClick={handleStep}
          >
            {step == 1 ? "TIẾP TỤC" : "XÁC NHẬN"}
          </Button>
        </div>
        <div className="bg-gray-600 flex-1 mt-2">
          <div className="mx-6 mt-6 h-max">
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-1 items-center font-semibold text-primary">
                <FilmIcon className="hidden lg:block w-5 h-5" />
                <h2 className="uppercase text-xl text-balance">
                  {selectedMoiveDetail?.title}
                </h2>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg text-primary">
                {selectedTheater?.theater_name}
              </h3>
              <p className="text-balance text-sm text-white font-medium mt-1">
                {selectedTheater?.theater_address}
              </p>
            </div>
            <div className="mt-4">
              <span className="flex items-center gap-1 text-base text-primary">
                <ClockIcon className="hidden lg:block w-4 h-4" /> Thời gian
              </span>
              <p className="text-base">
                {timeFormatShowtime(selectedShowtime?.startTime)}
              </p>
            </div>
            <div className="flex items-start md:items-center gap-6 mt-4">
              <div>
                <p className="text-base text-primary">Phòng chiếu</p>
                <p className="text-base">
                  {selectedTheater?.rooms[0].room_name}
                </p>
              </div>
              <div>
                <p className="text-base text-primary">Số vé</p>
                <p className="text-base">{selectedSeats?.length}</p>
              </div>
              <div>
                <p className="text-base text-primary">Số ghế</p>
                <p className="text-base">{selectedSeatNames.join(", ")}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 border-t pt-2 lg:pt-4 border-dashed">
              <p className="text-xl font-bold text-primary">TỔNG TIỀN</p>
              <p className="text-lg font-semibold">
                {formatCurrency(
                  selectedSeats?.length * selectedShowtime?.price
                )}{" "}
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
