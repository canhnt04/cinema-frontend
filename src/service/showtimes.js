import axiosClient from "../config/axios";

export const getShowtimes = async (movieId) => {
  const res = await axiosClient.get(`/showtimes/${movieId}`);
  return res;
};
