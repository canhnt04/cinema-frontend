import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies, showtimes } from "../assets/mockData";
import dayjs from "dayjs";
import TheaterList from "../components/Theater/TheaterList";
import MovieInfo from "../components/DateMovie/MovieInfo";
import DateSelect from "../components/DateMovie/DateSelect";
import SelectTicket from "../components/Ticket/SelectTicket";
import SeatLayout from "../components/Seat/SeatLayout";
import { useBooking } from "../hooks/useBooking";
import { getShowtimes } from "../service/showtimes";
const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [movieShowtimes, setMovieShowtimes] = useState([]);

  const {
    selectedMoiveDetail,
    setSelectedMoiveDetail,
    selectedShowtime,
    selectedDate,
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
    const loadShowtimes = async () => {
      const data = await getShowtimes(selectedMovieId);
      if (data) {
        setMovieShowtimes(data.result); // mảng suất chiếu
      }
    };
    const show = movies.find((show) => show.movie_id == selectedMovieId);

    loadShowtimes();
    setShow(show);
  }, [id]);

  return show && movieShowtimes?.length > 0 ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      <MovieInfo movie={show} />
      <DateSelect dates={uniqueDates} />
      {selectedDate && <TheaterList />}
      {selectedShowtime && <SelectTicket />}
      {selectedShowtime && <SeatLayout />}
    </div>
  ) : (
    <div>Loading...</div>
  );
};
export default MovieDetails;
