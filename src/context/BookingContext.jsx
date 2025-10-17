import { createContext } from "react";

export const BookingContext = createContext({
  selectedDate: null,
  setSelectedDate: () => {},
  selectedTheater: null,
  setSelectedTheater: () => {},
  selectedShowtime: null,
  setSelectedShowtime: () => {},
  selectedTicket: null,
  setSelectedTicket: () => {},
  selectedSeats: [],
  setSelectedSeats: () => {},
  resetBooking: () => {},
});
