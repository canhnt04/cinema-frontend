import { assets } from "../../assets/assets";
import { useBooking } from "../../context/BookingContext";
import BlurCircle from "../BlurCircle";

const SeatLayout = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const { selectedSeats, setSelectedSeats } = useBooking();

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
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
                  className={`h-8 w-12 mx-1 my-1 rounded border border-primary/60 cursor-pointer ${
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
    </div>
  );
};

export default SeatLayout;
