import { get } from "./BaseService";

export const getShowtimesByMovie = (movieId) => get(`/showtimes/${movieId}`);
