export function formatDate(
  startDate: Date,
  timeIncluded?: boolean,
  endDate?: Date
): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const zeroPad = (num: number) => String(num).padStart(2, "0");
  const startTime = `${zeroPad(startDate.getHours())}:${zeroPad(
    startDate.getMinutes()
  )}`;

  const dayName = days[startDate.getDay()];
  const dayOfMonth = startDate.getDate();
  const monthName = months[startDate.getMonth()];

  if (endDate) {
    const durationInHours =
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60);
    if (durationInHours < 24 && durationInHours > 0) {
      const endTime = `${zeroPad(endDate.getHours())}:${zeroPad(
        endDate.getMinutes()
      )}`;
      return `${
        timeIncluded ? `${startTime} - ${endTime},` : ""
      } ${dayName} ${dayOfMonth} ${monthName}`;
    }
  }

  return `${
    timeIncluded ? startTime : ""
  } ${dayName} ${dayOfMonth} ${monthName}`;
}
