import { get } from "./BaseService";

export const getSeatByShowtime = (showtimeId) => get(`/seat/${showtimeId}`);
