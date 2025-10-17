import { ChevronDown, MonitorPlayIcon } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import ShowTimes from "./ShowTimes";

const TheaterCard = ({ theater, isOpen, onToggle }) => {
  const roomsWithShowtimes = theater.rooms.filter(
    (room) => room.showtimes.length > 0
  );

  return (
    <div
      className={`bg-gray-600 text-white rounded shadow ${
        isOpen ? "!bg-primary-dull text-yellow-300" : ""
      }`}
    >
      <div
        onClick={onToggle}
        className="flex justify-between items-center p-5 cursor-pointer"
      >
        <h2 className="text-2xl font-semibold">{theater.name}</h2>
        <ChevronDown
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden px-5 pb-5"
          >
            <h4 className="text-balance text-base text-white font-medium">
              {theater.address}
            </h4>

            {roomsWithShowtimes.length > 0 ? (
              roomsWithShowtimes.map((room) => {
                return (
                  <div key={room.room_id}>
                    <p className="text-white text-sm font-medium mb-1.5 mt-4">
                      {room.room_type}
                    </p>
                    <ShowTimes showtimes={room.showtimes} />
                  </div>
                );
              })
            ) : (
              <div className="flex items-center  text-white mt-6 border border-white/40 p-4 gap-x-2 rounded">
                <MonitorPlayIcon className="w-5 h-5" />
                <p className="font-medium text-sm">Hiện chưa có lịch chiếu</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TheaterCard;
