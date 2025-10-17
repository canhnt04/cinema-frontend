import dayjs from "dayjs";
import { useBooking } from "../../hooks/useBooking";

const ShowTimes = ({ showtimes = [] }) => {
  const { selectedShowtime, setSelectedShowtime } = useBooking();

  const formatTime = (time) => {
    return dayjs(time).format("HH:mm");
  };

  const handleClick = (st) => {
    if (selectedShowtime?.showtime_id === st.showtime_id) {
      setSelectedShowtime(null);
      return;
    }
    setSelectedShowtime({
      showtime_id: st.showtime_id,
      theater_id: st.Theater_id,
      room_id: st.room_id,
      start_time: st.start_time,
    });
  };

  return (
    <div>
      {showtimes.map((st) => (
        <div key={st.showtime_id} className="inline-block">
          <button
            type="button"
            onClick={() => handleClick(st)}
            className={`text-gray-100 text-sm font-medium border border-white/80 inline-block px-3 py-1 md:py-1.5 mr-2 mt-2 rounded hover:border-[#f3ea28] hover:text-[#f3ea28] transition-colors cursor-pointer ${
              selectedShowtime?.showtime_id === st.showtime_id
                ? "!text-black bg-[#f3ea28]"
                : ""
            }`}
          >
            {formatTime(st.start_time)}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowTimes;
