import { NASA_API_URL } from '../constants';
import { formatDay, addDay } from './helpers';

const URL = day => `${NASA_API_URL}/api/natural/date/${formatDay(day)}`;

export const getImagesForDay = async day => {
  const response = await fetch(URL(day));
  const data = await response.json();

  return data;
};

export const getImagesForClosestDay = async day => {
  const response = await fetch(URL(day));
  const data = await response.json();

  if (data.length === 0) {
    return getImagesForClosestDay(addDay(day));
  } else {
    return data;
  }
};
