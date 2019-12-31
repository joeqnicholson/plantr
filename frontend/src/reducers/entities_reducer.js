import { combineReducers } from 'redux';
import plantsReducer from './plants_reducer';

const entitiesReducer = combineReducers({
  plants: plantsReducer
});

export default entitiesReducer;