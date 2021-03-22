import { NASA_API_URL } from '../constants';

// returns Date object to YYYY-MM-DD
export const formatDay = day => {
  return day.toISOString().slice(0, 10);
};

export const getImageUrl = (imageName, date) => {
  return `${NASA_API_URL}/archive/natural/${formatDay(date).replaceAll(
    '-',
    '/'
  )}/png/${imageName}.png`;
};

export const addDay = day => {
  const date = new Date(day);
  date.setDate(date.getDate() + 1);
  return date;
};

export const getLastBirthday = day => {
  const date = new Date(day);
  const currentDate = new Date();

  date.setFullYear(currentDate.getFullYear());

  if (isFutureDate(date)) {
    return date.setFullYear(date.getFullYear() - 1);
  } else {
    return date;
  }
};

export const isFutureDate = day => {
  return new Date().getTime() <= new Date(day).getTime();
};
