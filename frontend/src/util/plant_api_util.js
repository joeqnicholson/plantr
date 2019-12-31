import axios from 'axios';

export const fetchAllPlants = () => {
  debugger
  return axios.get('/api/plants')
};

export const fetchPlant = plantId => {
  return axios.get(`/api/plants/${plantId}`)
};