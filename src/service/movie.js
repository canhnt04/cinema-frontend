import axiosClient from "../config/axios";

export const getMovieById = async (movieId) => {
  const res = await axiosClient.get(`/movies/${movieId}`);
  return res;
};
