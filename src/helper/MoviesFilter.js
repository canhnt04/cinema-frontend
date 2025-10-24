import dayjs from "dayjs";

export const filterNowShowing = (movies) => {
  const today = dayjs();
  return movies.filter(
    (movie) =>
      dayjs(movie.release_date).isBefore(today) ||
      dayjs(movie.release_date).isSame(today, "day")
  );
};

export const filterComingSoon = (movies) => {
  const today = dayjs();
  return movies.filter((movie) => dayjs(movie.release_date).isAfter(today));
};
