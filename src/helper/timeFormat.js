import "dayjs/locale/vi";

export const timeFormatDuration = (minutes) => {
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

export const timeFormatShowtime = (dateString) => {
  const date = new Date(dateString);

  return date
    .toLocaleTimeString("vi-VN", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(",", "");
};
