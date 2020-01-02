import * as PlantApiUtils from '../util/plant_api_util';

export const RECEIVE_ALL_PLANTS = 'RECEIVE_ALL_PLANTS';
export const RECEIVE_PLANT = 'RECEIVE_PLANT';

const receiveAllPlants = plants => {
  return {
    type: RECEIVE_ALL_PLANTS,
    plants
  };
};

const receivePlant = plant => {
  return {
    type: RECEIVE_PLANT,
    plant
  };
};

export const fetchAllPlants = () => dispatch => {
  return PlantApiUtils.fetchAllPlants()
    .then(payload => {
      dispatch(receiveAllPlants(payload.data))})
};

export const fetchPlant = (plantId) => dispatch => {
  return PlantApiUtils.fetchPlant(plantId)
    .then(payload => dispatch(receivePlant(payload.data)))
};