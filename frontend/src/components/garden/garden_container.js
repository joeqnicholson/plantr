import {connect} from 'react-redux';
import Garden from './garden';
import {
    addOwnedPlant,
    deleteOwnedPlant,
    fetchOwnedPlants
} from '../../actions/owned_plant_actions';

import {
    openModal,
    closeModal
} from '../../actions/ui_actions';

import { fetchAllPlants } from '../../actions/plant_actions';

const mapStateToProps = ({entities, ui}) => {
    let { ownedPlants, plants } = entities;
    if(ownedPlants.length !== 0) {
        ownedPlants.forEach((ownedPlant) => {
            ownedPlant.plant = plants.find((plant) => {
                return plant._id === ownedPlant.plantId;
            });
        });
    }

    return {
        ownedPlants: ownedPlants,
        plants: entities.plants,
        modal: ui.modal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOwnedPlant: ownedPlant => dispatch(addOwnedPlant(ownedPlant)),
        deleteOwnedPlant: ownedPlant => dispatch(deleteOwnedPlant(ownedPlant)),
        fetchOwnedPlants: (userId) => dispatch(fetchOwnedPlants(userId)),
        fetchAllPlants: () => dispatch(fetchAllPlants()),
        openAddModal: () => dispatch(openModal('add owned plant')),
        openShowModal: () => dispatch(openModal('show owned plant')),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Garden);