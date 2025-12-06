import { get } from "./BaseService";

export const getMyBooking = () => get("/booking/me");

export const getBookings = () => get("/booking");

export const bookingResult = (status, txnRef, paymentId) =>
  get(
    `/booking/result?status=${status}&txnRef=${txnRef}&paymentId=${paymentId}`
  );

export const printBooking = (bookingId) => get(`/booking/print/${bookingId}`);
