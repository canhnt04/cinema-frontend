import { assets } from "../../assets/assets";
import BlurCircle from "../BlurCircle";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./../../hooks/useBooking";
import { useEffect, useState } from "react";
import { showToast } from "../../helper/cooldownToast";
import axiosClient from "../../config/axios";

const SeatLayout = ({ showtimeId }) => {
  const [seats, setSeats] = useState([]);
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

  // Group seats by row
  const groupSeatsByRow = seats.reduce((acc, seat) => {
    if (!acc[seat.seatRow]) acc[seat.seatRow] = [];
    acc[seat.seatRow].push(seat);
    return acc;
  }, {});

  // Sort seat number inside each row
  Object.keys(groupSeatsByRow).forEach((row) => {
    groupSeatsByRow[row].sort((a, b) => a.seatNumber - b.seatNumber);
  });

  useEffect(() => {
    setSelectedSeats((prev) => {
      if (prev.length <= totalTickets) return prev;
      const removed = prev.length - totalTickets;
      showToast(`Đã bỏ chọn ${removed} ghế do thay đổi số vé`, {
        type: "success",
      });

      return prev.slice(0, totalTickets);
    });

    const fetchSeats = async () => {
      try {
        const res = await axiosClient.get(`/seat/${showtimeId}`);
        setSeats(res.result);
      } catch (error) {
        console.error("Failed to fetch seats:", error);
      }
    };

    fetchSeats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalTickets, showtimeId]);

  const handleSeatClick = (seat) => {
    const seatId = seat.seatId;

    if (seat.isBooked === 1) {
      showToast("Ghế đã được đặt!");
      return;
    }

    if (totalTickets === 0) {
      showToast("Vui lòng chọn vé trước khi chọn ghế");
      return;
    }

    if (selectedSeats.includes(seatId)) {
      return setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
    }

    if (selectedSeats.length >= totalTickets) {
      showToast(`Bạn chỉ được đặt tối đa ${totalTickets} ghế`);
      return;
    }

    setSelectedSeats([...selectedSeats, seatId]);
  };
  // Styling classes
  const baseSeatStyle =
    "h-8 w-12 mx-1 my-1 rounded border border-primary/60 cursor-pointer transition ";

  const seatStyles = {
    NORMAL: "bg-tranparent hover:bg-primary",
    BOOKED: "bg-gray-500 text-gray-200 border-none cursor-not-allowed",
    SELECTED: "bg-primary text-white",
  };

  const renderSeats = (seat) => {
    const isSelected = selectedSeats.includes(seat.seatId);

    let style = seatStyles[seat.seatType?.toUpperCase()] || seatStyles.NORMAL;

    if (seat.isBooked === 1) style = seatStyles.BOOKED;
    if (isSelected) style = seatStyles.SELECTED;

    return (
      <button
        key={seat.seatId}
        onClick={() => handleSeatClick(seat)}
        className={baseSeatStyle + style}
      >
        {seat.seatRow}
        {seat.seatNumber}
      </button>
    );
  };
  return (
    <div className="relative flex-1 flex flex-col items-center mt-16 md:mt-40">
      <BlurCircle left="-100px" top="-100px" />
      <BlurCircle right="-100px" top="-100px" />
      <h1 className="text-3xl text-center font-semibold mb-4 md:mb-12 uppercase">
        chọn ghế
      </h1>

      <div className="mx-auto">
        <img className="hidden lg:block" src={assets.imgScreen} alt="screen" />
        <p className="hidden lg:block text-center font-bold text-2xl -mt-14 text-gray-300">
          Màn hình
        </p>

        <div className="flex flex-col items-center mt-10 text-xs text-gray-300 w-full">
          <div className="flex flex-col gap-2 mb-6 w-full">
            {Object.keys(groupSeatsByRow).map((row) => (
              <div key={row} className="flex items-center gap-2">
                <span className="w-6 font-bold">{row}</span>
                <div className="flex gap-2">
                  {groupSeatsByRow[row].map(renderSeats)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-6 text-sm">
            <div>
              <span className="inline-block w-4 h-4 bg-black border border-primary mr-1"></span>
              Ghế trống
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-primary mr-1"></span>
              Ghế đã chọn
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
