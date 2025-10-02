const timeFormat = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const minutesRemainder = minutes % 60;
  if (hours < 1) {
    return `${minutesRemainder}m`;
  }
  return `${hours}h ${minutesRemainder}m`;
};

export default timeFormat;
