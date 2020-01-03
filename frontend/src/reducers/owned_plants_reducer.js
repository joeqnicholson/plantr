import {
    RECEIVE_OWNED_PLANT,
    RECEIVE_OWNED_PLANTS,
    REMOVE_OWNED_PLANT
} from '../actions/owned_plant_actions';

const ownedPlantsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = Object.assign([], oldState);
    switch(action.type) {
        case RECEIVE_OWNED_PLANT:
            newState.push(action.ownedPlant);
            return newState;    
        case RECEIVE_OWNED_PLANTS:
            newState = action.ownedPlants;
            return newState;
        case REMOVE_OWNED_PLANT:
            //FIX THIS LATER TO IMPLEMENT DELETE FUNCTIONALITY
            // delete newState[action.ownedPlant.id];
            return newState;
        default:
            return oldState;
    }
};

export default ownedPlantsReducer;