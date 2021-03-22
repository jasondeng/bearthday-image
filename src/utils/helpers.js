import { NASA_API_URL } from '../constants';

// returns Date object to YYYY-MM-DD
export const formatDayForAPI = day => {
  return day.toISOString().slice(0, 10);
};

export const getImageUrl = (imageName, date) => {
  return `${NASA_API_URL}/archive/natural/${formatDayForAPI(date).replaceAll(
    '-',
    '/'
  )}/png/${imageName}.png`;
};

export const addDay = day => {
  const date = new Date(day);
  date.setDate(date.getDate() + 1);

  console.log(date);
  return date;
};
