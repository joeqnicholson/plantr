import axios from 'axios';

export const addOwnedPlant = ownedPlant => {
    return axios.post(`/api/ownedPlants/${ownedPlant.userId}`, ownedPlant);
};

export const deleteOwnedPlant = ownedPlant => {
    return axios.delete(`/api/ownedPlants/${ownedPlant.userId}`, ownedPlant);
};