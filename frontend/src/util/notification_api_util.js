import axios from 'axios';

export const createNotification = plantId => {
  return axios.post(`/api/notifications/`, plantId)
};

export const cancelNotification = plantId => {
  return axios.post(`/api/notifications/cancel/`, plantId)
};