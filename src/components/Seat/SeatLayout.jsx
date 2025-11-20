import { assets } from "../../assets/assets";
import BlurCircle from "../BlurCircle";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./../../hooks/useBooking";
import { useEffect } from "react";
import { showToast } from "../../helper/cooldownToast";

const SeatLayout = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const { selectedTicket, selectedSeats, setSelectedSeats } = useBooking();
  const navigate = useNavigate();

  // Total ticket from SelectTicket
  const totalTickets =
    Array.isArray(selectedTicket) && selectedTicket.length > 0
      ? selectedTicket.reduce(
          (acc, current) => acc + (current.quantity ?? 0),
          0
        )
      : 0;

  useEffect(() => {
    setSelectedSeats((prev) => {
      if (prev.length <= totalTickets) return prev;
      const removed = prev.length - totalTickets;
      showToast(`Đã bỏ chọn ${removed} ghế do thay đổi số vé`, {
        type: "success",
      });

      return prev.slice(0, totalTickets);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalTickets]);

  const handleSeatClick = (seatId) => {
    if (totalTickets === 0) {
      showToast("Vui lòng chọn vé trước khi chọn ghế");
      return;
    }

    if (selectedSeats.includes(seatId)) {
      return setSelectedSeats((prev) =>
        prev.includes(seatId)
          ? prev.filter((id) => id !== seatId)
          : [...prev, seatId]
      );
    }

    if (selectedSeats.length >= totalTickets) {
      showToast(`Bạn chỉ được đặt tối đa ${totalTickets} ghế`);
      return;
    }

    setSelectedSeats([...selectedSeats, seatId]);
  };

  const renderSeats = (row, count = 18) => {
    return (
      <div className="flex flex-col w-full" key={row}>
        <div className="flex items-center gap-4">
          <p className="hidden lg:block text-white mx-2 w-6 text-center text-base">
            {row}
          </p>
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: count }, (_, i) => {
              const seatId = `${row}${i + 1}`;
              return (
                <button
                  key={seatId}
                  onClick={() => handleSeatClick(seatId)}
                  className={`h-8 w-12 mx-1 my-1 rounded border border-primary/60 cursor-pointer  ${
                    selectedSeats.includes(seatId)
                      ? "bg-primary text-white"
                      : "bg-black text-white"
                  }`}
                >
                  {seatId}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex-1 flex flex-col items-center mt-16 md:mt-40">
      <BlurCircle left="-100px" top="-100px" />
      <BlurCircle right="-100px" top="-100px" />
      <h1 className="text-3xl text-center font-semibold mb-4 md:mb-12 uppercase">
        chọn ghế - {`Rạp ${1}`}
      </h1>

      <div className="mx-auto">
        <img className="hidden lg:block" src={assets.imgScreen} alt="screen" />
        <p className="hidden lg:block text-center font-bold text-2xl -mt-14 text-gray-300">
          Màn hình
        </p>

        <div className="flex flex-col items-center mt-10 text-xs text-gray-300 w-full">
          <div className="flex flex-col gap-2 mb-6 w-full">
            {rows.map((row) => renderSeats(row))}
          </div>

          <div className="flex gap-4 mt-6 text-sm">
            <div>
              <span className="inline-block w-4 h-4 bg-black border border-primary mr-1"></span>
              Ghế trống
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-primary mr-1"></span>
              Ghế chọn
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-gray-500 mr-1"></span>Ghế
              đã đặt
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/my-bookings")}
        className="mt-20 flex items-center gap-1 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95"
      >
        THANH TOÁN
        <ArrowRight strokeWidth={3} className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SeatLayout;
