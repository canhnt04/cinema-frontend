import { useState } from "react";
import { BookingContext } from "../context/BookingContext";

export const BookingProvider = ({ children }) => {
  const [selectedMovieDetail, setSelectedMovieDetail] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const resetBooking = () => {
    setSelectedMovieDetail(null);
    setSelectedDate(null);
    setSelectedTheater(null);
    setSelectedShowtime(null);
    setSelectedTicket(null);
    setSelectedSeats([]);
  };

  return (
    <BookingContext.Provider
      value={{
        selectedMovieDetail,
        setSelectedMovieDetail,
        selectedDate,
        setSelectedDate,
        selectedTheater,
        setSelectedTheater,
        selectedShowtime,
        setSelectedShowtime,
        selectedTicket,
        setSelectedTicket,
        selectedSeats,
        setSelectedSeats,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
