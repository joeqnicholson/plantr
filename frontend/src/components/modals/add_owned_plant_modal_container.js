import {connect} from 'react-redux';
import AddOwnedPlantModal from './add_owned_plant_modal';
import {addOwnedPlant} from '../../actions/owned_plant_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps,
        plants: state.entities.plants,
        modalType: state.ui.modal,
        userId: state.session.user.id
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOwnedPlant: (plant) => {
            debugger
            return dispatch(addOwnedPlant(plant))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOwnedPlantModal);