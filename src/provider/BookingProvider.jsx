import { useState } from "react";
import { BookingContext } from "../context/BookingContext";

export const BookingProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMoiveDetail, setSelectedMoiveDetail] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const resetBooking = () => {
    setSelectedDate(null);
    setSelectedTheater(null);
    setSelectedShowtime(null);
    setSelectedTicket(null);
    setSelectedSeats([]);
  };

  return (
    <BookingContext.Provider
      value={{
        selectedMoiveDetail,
        setSelectedMoiveDetail,
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
