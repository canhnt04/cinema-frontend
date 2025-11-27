import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import TheaterList from "../components/Theater/TheaterList";
import MovieInfo from "../components/DateMovie/MovieInfo";
import DateSelect from "../components/DateMovie/DateSelect";
import SeatLayout from "../components/Seat/SeatLayout";
import { useBooking } from "../hooks/useBooking";
import { getShowtimes } from "../service/showtimes";
import FullPageSpinner from "../components/ui/FullPageSpinner";
import { getMovieById } from "../service/movie";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [movieShowtimes, setMovieShowtimes] = useState([]);

  const {
    selectedShowtime,
    setSelectedShowtime,
    selectedDate,
    setSelectedMoiveDetail,
    resetBooking,
  } = useBooking();

  const selectedMovieId = id;

  // const movieShowtimes = showtimes.filter((s) => s.movie_id === Number(id));

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

  useEffect(() => {
    const loadMovieInfo = async () => {
      const data = await getMovieById(selectedMovieId);
      if (data) {
        setShow(data.result);
        setSelectedMoiveDetail(data.result);
      }
    };
    const loadShowtimes = async () => {
      const data = await getShowtimes(selectedMovieId);
      if (data) {
        setMovieShowtimes(data.result); // mảng suất chiếu
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
