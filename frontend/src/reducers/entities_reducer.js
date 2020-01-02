import { combineReducers } from 'redux';
import plantsReducer from './plants_reducer';
import ownedPlantsReducer from './owned_plants_reducer';

const entitiesReducer = combineReducers({
  plants: plantsReducer,
  ownedPlants: ownedPlantsReducer
});

export default entitiesReducer;