import dayjs from "dayjs";
import "dayjs/locale/vi";

export const timeFormatDuration = (minutes) => {
  // const hours = Math.floor(minutes / 60);
  // const minutesRemainder = minutes % 60;
  // if (hours < 1) {
  //   return `${minutesRemainder}m`;
  // }
  // return `${hours}h ${minutesRemainder}m`;
  return `${minutes} phút`;
};

export const timeFormatReleaseDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const groupByDate = (showtimes) => {
  return showtimes.reduce((acc, st) => {
    const date = dayjs(st.start_time).format("YYYY-MM-DD");
    if (!acc[date]) acc[date] = [];
    acc[date].push(st);
    return acc;
  }, {});
};

export const formatShowSchedule = (date) => {
  dayjs.locale("vi");
  return dayjs(date).format("dddd, DD/MM");
};
