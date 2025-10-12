import dayjs from "dayjs";
import "dayjs/locale/vi";
import BlurCircle from "../BlurCircle";
import { useBooking } from "../../context/BookingContext";

dayjs.locale("vi");

const DateSelect = ({ dates = [] }) => {
  const { selectedDate, setSelectedDate } = useBooking();
  return (
    <div id="dateSelect" className="relative w-full pt-30">
      <div className="text-center">
        <BlurCircle top="30px" right="40%" />
        <h2 className="uppercase font-semibold text-4xl mb-4">Lịch chiếu</h2>
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        {dates.slice(0, 4).map((date, index) => (
          <button
            key={index}
            onClick={() => setSelectedDate(index)}
            className={`min-w-[96px] flex flex-col items-center py-6 rounded-md border
              ${
                selectedDate === index
                  ? "bg-primary text-white font-bold"
                  : "border-primary text-white/80 cursor-pointer"
              }`}
          >
            <span className="font-bold text-lg">
              {dayjs(date).format("DD/MM")}
            </span>
            <span className="capitalize">{dayjs(date).format("dddd")}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateSelect;
