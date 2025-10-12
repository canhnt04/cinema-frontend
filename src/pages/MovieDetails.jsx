import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies, showtimes } from "../assets/mockData";
import dayjs from "dayjs";
import TheaterList from "../components/Theater/TheaterList";
import MovieInfo from "../components/DateMovie/MovieInfo";
import DateSelect from "../components/DateMovie/DateSelect";
import { BookingProvider } from "../context/BookingContext";
import SelectTicket from "../components/Ticket/SelectTicket";
import SeatLayout from "../components/Seat/SeatLayout";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const movieShowtimes = showtimes.filter((s) => s.movie_id === Number(id));

  const uniqueDates = [
    ...new Set(
      movieShowtimes.map((st) => dayjs(st.start_time).format("YYYY-MM-DD"))
    ),
  ];

  useEffect(() => {
    const show = movies.find((show) => show.movie_id === Number(id));
    setShow({
      movie: show,
      dateTime: show.duration,
    });
  }, [id]);

  return show ? (
    <BookingProvider>
      <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
        <MovieInfo movie={show.movie} />
        <DateSelect dates={uniqueDates} />
        <TheaterList />
        <SelectTicket />
        <SeatLayout />
      </div>
    </BookingProvider>
  ) : (
    <div>Loading...</div>
  );
};

export default MovieDetails;
