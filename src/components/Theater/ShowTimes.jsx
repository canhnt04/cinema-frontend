import dayjs from "dayjs";
import { useBooking } from "../../hooks/useBooking";
import { formatShortScale } from "../../helper/formatPrice";

const ShowTimes = ({ showtimes = [] }) => {
  const { selectedShowtime, setSelectedShowtime } = useBooking();

  const formatTime = (time) => {
    return dayjs(time).format("HH:mm");
  };

  const handleClick = (st) => {
    if (selectedShowtime?.showtime_id === st.showtimeId) {
      setSelectedShowtime(null);
      return;
    }
    setSelectedShowtime(st);
  };

  return (
    <div>
      {showtimes.map((st) => (
        <div key={st.showtimeId} className="inline-block">
          <button
            type="button"
            onClick={() => handleClick(st)}
            className={`text-gray-100 text-sm font-medium border border-white/80 inline-block px-3 py-1 md:py-1.5 mr-2 mt-2 rounded hover:border-[#f3ea28] hover:text-[#f3ea28] transition-colors cursor-pointer ${
              selectedShowtime?.showtimeId === st.showtimeId
                ? "!text-black bg-[#f3ea28]"
                : ""
            }`}
          >
            {formatTime(st.startTime)}
            <p className="text-xs">{formatShortScale(st.price)}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowTimes;
