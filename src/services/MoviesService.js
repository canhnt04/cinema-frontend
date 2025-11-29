import { get } from "./BaseService";

export const getMovies = () => get("/movies");

export const getMovieDetail = async (movieId) =>
  await get(`/movies/${movieId}`);

export const getShowDateMovie = (movieId) =>
  get(`/movies/${movieId}/show-dates`);

export const getShowtimesByMovieAndDate = (movieId, selectedDate) =>
  get(`/movies/${movieId}/showtimes?date=${selectedDate}`);
