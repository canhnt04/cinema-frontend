import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TheaterList from "../components/Theater/TheaterList";
import MovieInfo from "../components/DateMovie/MovieInfo";
import DateSelect from "../components/DateMovie/DateSelect";
import SeatLayout from "../components/Seat/SeatLayout";
import dayjs from "dayjs";
import { getMovieDetail } from "../services/MoviesService";
import { getShowtimesByMovie } from "../services/ShowtimeService";
import { useBooking } from "./../hooks/useBooking";
import FullPageSpinner from "./../components/ui/FullPageSpinner";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [movieShowtimes, setMovieShowtimes] = useState([]);

  const {
    selectedShowtime,
    selectedDate,
    setSelectedMovieDetail,
    resetBooking,
  } = useBooking();

  const selectedMovieId = id;

  const uniqueDates = movieShowtimes.length
    ? [
        ...new Set(
          movieShowtimes.map((st) => dayjs(st.startTime).format("YYYY-MM-DD"))
        ),
      ].sort((a, b) => {
        // Hàm sort() so sánh 2 chuỗi ngày tháng
        // Vì định dạng là "YYYY-MM-DD", việc so sánh chuỗi cũng sẽ cho kết quả đúng
        if (a < b) return -1; // a đứng trước b (tăng dần)
        if (a > b) return 1; // a đứng sau b
        return 0;
      })
    : [];

  console.log("uniqueDates: ", uniqueDates);

  useEffect(() => {
    const loadMovieInfo = async () => {
      const res = await getMovieDetail(selectedMovieId);
      if (res) {
        setShow(res?.result);
        setSelectedMovieDetail(res?.result);
      }
    };
    const loadShowtimes = async () => {
      const res = await getShowtimesByMovie(selectedMovieId);
      if (res) {
        setMovieShowtimes(res?.result);
      }
    };

    loadMovieInfo();
    loadShowtimes();
    resetBooking();
  }, [id]);

  return show && movieShowtimes?.length > 0 ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      <MovieInfo movie={show} />
      <DateSelect dates={uniqueDates} />
      {selectedDate && <TheaterList movieId={selectedMovieId} />}
      {/* {selectedShowtime && <SelectTicket />} */}
      {selectedShowtime && (
        <SeatLayout showtimeId={selectedShowtime?.showtimeId} />
      )}
    </div>
  ) : (
    <FullPageSpinner />
  );
};

export default MovieDetails;
