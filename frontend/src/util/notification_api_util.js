import axios from 'axios';

export const createNotification = () => {
  return axios.get('/api/notifications')
};

export const cancelNotification = () => {
  return axios.get('/api/notifications/cancel')
};