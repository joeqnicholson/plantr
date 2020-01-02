import {connect} from 'react-redux';
import Garden from './garden';
import {
    addOwnedPlant,
    deleteOwnedPlant,
    getOwnedPlants
} from '../../actions/owned_plant_actions';

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
        getOwnedPlants: () => dispatch(getOwnedPlants())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Garden);