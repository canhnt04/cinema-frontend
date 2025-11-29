import { get } from "./BaseService";

export const getBookings = () => get("/tickets");

export const bookingResult = (status, txnRef, paymentId) =>
  get(
    `/booking/result?status=${status}&txnRef=${txnRef}&paymentId=${paymentId}`
  );
