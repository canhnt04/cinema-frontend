import dayjs from "dayjs";
import { useBooking } from "../../context/BookingContext";

const ShowTimes = ({ showtimes = [] }) => {
  const { selectedShowtime, setSelectedShowtime } = useBooking();

  const formatTime = (time) => {
    return dayjs(time).format("HH:mm");
  };

  return (
    <div>
      {showtimes.map((st) => (
        <div key={st.showtime_id} className="inline-block">
          <ul>
            <li
              className={`text-gray-100 text-sm font-medium border border-white/80 inline-block px-3 py-1 md:py-1.5 mr-2 mt-2 rounded hover:border-[#f3ea28] hover:text-[#f3ea28] transition-colors cursor-pointer ${
                selectedShowtime === formatTime(st.start_time)
                  ? "!text-black bg-[#f3ea28]"
                  : ""
              }`}
              onClick={() => setSelectedShowtime(formatTime(st.start_time))}
            >
              {formatTime(st.start_time)}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ShowTimes;
