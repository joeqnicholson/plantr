import {connect} from 'react-redux';
import AddOwnedPlantModal from './add_owned_plant_modal';
import {addOwnedPlant} from '../../actions/owned_plant_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps,
        selectedPlantId: ownProps.selectedPlantId,
        plants: state.entities.plants,
        modalType: state.ui.modal,
        userId: state.session.user.id,
        username: state.session.user.username
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOwnedPlant: (plant) => {
            return dispatch(addOwnedPlant(plant))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOwnedPlantModal);