import * as APIUtil from '../util/owned_plants_api_util';

export const RECEIVE_OWNED_PLANT = "RECEIVE_OWNED_PLANT";
export const RECEIVE_OWNED_PLANTS = "RECEIVE_OWNED_PLANTS";
export const REMOVE_OWNED_PLANT = "REMOVE_OWNED_PLANT";
export const RECEIVE_OWNED_PLANT_ERRORS = "RECEIVE_OWNED_PLANT_ERRORS";

export const receiveOwnedPlant = ownedPlant => {
    return {
        type: RECEIVE_OWNED_PLANT,
        ownedPlant
    };
};

export const removeOwnedPlant = ownedPlant => {
    return {
        type: REMOVE_OWNED_PLANT,
        ownedPlant
    };
};

export const receiveOwnedPlants = (ownedPlants) => {
    return {
        type: RECEIVE_OWNED_PLANTS,
        ownedPlants
    }
}

export const receiveErrors = errors => ({
    type: RECEIVE_OWNED_PLANT_ERRORS,
    errors
});

export const addOwnedPlant = ownedPlant => dispatch => {
    APIUtil.addOwnedPlant(ownedPlant)
        .then(
            res => {
                const {ownedPlant} = res.data;
                dispatch(receiveOwnedPlant(ownedPlant));
            }
        )
        .catch(
            err => {
                dispatch(receiveErrors(err.response.data));
            }
        )
};

export const deleteOwnedPlant = ownedPlant => dispatch => {
    APIUtil.deleteOwnedPlant(ownedPlant)
        .then(
            res => {
                const {ownedPlant} = res.data;
                dispatch(removeOwnedPlant(ownedPlant));
            }
        )
        .catch(
            err => {
                dispatch(receiveErrors(err.response.data));
            } 
        )
}

export const fetchOwnedPlants = () => dispatch => {
    APIUtil.fetchOwnedPlants()
        .then(
            res => {
                const {ownedPlants} = res.data;
                dispatch(receiveOwnedPlants(ownedPlants));
            }
        )
}