import { useEffect, useState } from "react";
import { useBooking } from "../../context/BookingContext";
import TheaterCard from "./TheaterCard";

const theaters = [
  {
    theater_id: 1,
    name: "Cinema Xuân Bảo",
    address: "135 Nguyễn Chí Thanh, P.4, Q.10, TP.HCM",
    rooms: [
      {
        room_id: 1,
        room_type: "Standard",
        showtimes: [
          { showtime_id: 101, start_time: "2025-10-11T10:30" },
          { showtime_id: 103, start_time: "2025-10-11T10:00" },
          { showtime_id: 104, start_time: "2025-10-11T11:00" },
        ],
      },
      {
        room_id: 2,
        room_type: "Deluxe",
        showtimes: [
          { showtime_id: 102, start_time: "2025-10-11T10:30" },
          { showtime_id: 105, start_time: "2025-10-12T11:00" },
        ],
      },
    ],
  },
  {
    theater_id: 2,
    name: "Cinema Tấn Cảnh",
    address: "246 Lý Thường Kiệt, P.10, Q.10, TP.HCM",
    rooms: [
      {
        room_id: 3,
        room_type: "Standard",
        showtimes: [
          { showtime_id: 201, start_time: "2025-10-11T10:30" },
          { showtime_id: 202, start_time: "2025-10-11T09:30" },
        ],
      },
      {
        room_id: 4,
        room_type: "VIP",
        showtimes: [
          { showtime_id: 203, start_time: "2025-10-11T20:00" },
          { showtime_id: 204, start_time: "2025-10-12T21:00" },
        ],
      },
    ],
  },
  {
    theater_id: 3,
    name: "Cinema Lê Phúc",
    address: "116 Nguyễn Du, P.Bến Nghé, Q.1, TP.HCM",
    rooms: [
      {
        room_id: 5,
        room_type: "Standard",
        showtimes: [{ showtime_id: 301, start_time: "2025-10-12T14:00" }],
      },
      {
        room_id: 6,
        room_type: "Deluxe",
        showtimes: [{ showtime_id: 302, start_time: "2025-10-12T16:00" }],
      },
    ],
  },
];

const TheaterList = () => {
  const [theaterList, setTheaterList] = useState([]);
  const [openTheater, setOpenTheater] = useState(false);

  const { selectedDate } = useBooking();

  useEffect(() => {
    const getTheater = async () => {
      setTheaterList(theaters);
    };
    getTheater();
  }, []);

  const theaterWithDate = theaterList.map((theater) => {
    const rooms = theater.rooms.map((room) => {
      const showtimes = room.showtimes.filter((st) =>
        st.start_time.startsWith(selectedDate)
      );
      return { ...room, showtimes: showtimes };
    });
    return { ...theater, rooms: rooms };
  });

  return (
    <div className="flex flex-col gap-2 w-full max-w-3xl mx-auto mt-16 px-4">
      <h2 className="uppercase text-3xl font-semibold pb-8">Danh sách rạp</h2>
      <div className="space-y-4">
        {theaterWithDate.map((theater) => {
          return (
            <TheaterCard
              key={theater.theater_id}
              theater={theater}
              isOpen={openTheater === theater.theater_id}
              onToggle={() =>
                setOpenTheater(
                  openTheater === theater.theater_id ? null : theater.theater_id
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default TheaterList;
