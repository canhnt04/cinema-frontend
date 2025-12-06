import { useEffect, useState } from "react";
import TheaterCard from "./TheaterCard";
import { useBooking } from "./../../hooks/useBooking";
import { getShowtimesByMovieAndDate } from "../../services/MoviesService";

const TheaterList = ({ movieId }) => {
  const [theaterList, setTheaterList] = useState([]);
  const [openTheater, setOpenTheater] = useState(false);

  const { selectedDate, setSelectedTheater } = useBooking();

  useEffect(() => {
    const getTheater = async () => {
      const res = await getShowtimesByMovieAndDate(movieId, selectedDate);

      if (res) {
        setTheaterList(res.theaters);
      }
    };

    getTheater();
  }, [movieId, selectedDate]);

  return (
    <div className="flex flex-col gap-2 w-full max-w-3xl mx-auto mt-16 px-4">
      <h2 className="uppercase text-3xl font-semibold pb-8">Danh sách rạp</h2>
      <div className="space-y-4">
        {theaterList?.map((theater) => {
          return (
            <TheaterCard
              key={theater.theater_id}
              theater={theater}
              isOpen={openTheater === theater.theater_id}
              onToggle={() => {
                setOpenTheater(
                  openTheater === theater.theater_id
                    ? false
                    : theater.theater_id
                );
                setSelectedTheater(
                  openTheater === theater.theater_id ? "" : theater
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TheaterList;
