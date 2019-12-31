import { RECEIVE_ALL_PLANTS, RECEIVE_PLANT } from '../actions/plant_actions';

const plantsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_PLANTS:
      newState = action.plants;
      return newState;
    // case RECEIVE_PLANT:
    //   const { plant } = action.plant
    //   newState[plant.id] = action.plant;
    //   return newState;
    default:
      return state;
  };
};

export default plantsReducer;