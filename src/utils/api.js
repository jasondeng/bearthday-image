import { NASA_API_URL } from '../constants';
import { formatDayForAPI, addDay } from './helpers';

export const getImagesForDayOrClosestDay = async day => {
  const URL = `${NASA_API_URL}/api/natural/date/${formatDayForAPI(day)}`;
  const response = await fetch(URL);
  const data = await response.json();

  if (data.length === 0) {
    return getImagesForDayOrClosestDay(addDay(day));
  } else {
    return data;
  }
};
