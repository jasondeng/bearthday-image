import { NASA_API_URL } from '../constants';
import { formatDayForAPI } from './helpers';

export const getImagesForDay = async day => {
  const URL = `${NASA_API_URL}/api/natural/date/${formatDayForAPI(day)}`;
  const response = await fetch(URL);
  return response.json();
};
