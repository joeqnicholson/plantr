import axios from 'axios';

// export const createNotification = () => {
//   return axios.get('/api/notifications')
// };

// export const cancelNotification = () => {
//   return axios.get('/api/notifications/cancel')
// };

export const createNotification = plantId => {
  return axios.post(`/api/notifications/`, plantId)
};

export const cancelNotification = plantId => {
  return axios.post(`/api/notifications/cancel/`, plantId)
};