// Time conversion from seconds to date for heatmap :)
const getDate = (secs: number) => {
  // Epoch https://en.wikipedia.org/wiki/Epoch_(reference_date)
  let date = new Date(1970, 0, 1);
  date.setSeconds(secs);
  return date;
};

export const relativeDate = (date: Date, secs: number) => {
  const INT_MAX = (Math.pow(2, 31) - 1);
  if (secs === INT_MAX)
    return date;

  let currDate = new Date(date);
  currDate.setSeconds(secs);
  return currDate;
}

// toDateTime(1608370500);

export default getDate;
