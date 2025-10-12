import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const resetBooking = () => {
    setSelectedMovie(null);
    setSelectedDate(null);
    setSelectedTheater(null);
    setSelectedShowtime(null);
    setSelectedTicket(null);
    setSelectedSeats([]);
  };

  return (
    <BookingContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
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

// eslint-disable-next-line react-refresh/only-export-components
export const useBooking = () => useContext(BookingContext);
