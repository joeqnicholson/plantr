import {connect} from 'react-redux';
import Garden from './garden';
import {
    addOwnedPlant,
    deleteOwnedPlant,
    fetchOwnedPlants
} from '../../actions/owned_plant_actions';
import { fetchAllPlants } from '../../actions/plant_actions';

const mapStateToProps = ({entities, ui}) => {
    debugger
    return {
        ownedPlants: entities.ownedPlants,
        plants: entities.plants,
        modal: ui.modal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOwnedPlant: ownedPlant => dispatch(addOwnedPlant(ownedPlant)),
        deleteOwnedPlant: ownedPlant => dispatch(deleteOwnedPlant(ownedPlant)),
        fetchOwnedPlants: (userId) => dispatch(fetchOwnedPlants(userId)),
        fetchAllPlants: () => dispatch(fetchAllPlants())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Garden);