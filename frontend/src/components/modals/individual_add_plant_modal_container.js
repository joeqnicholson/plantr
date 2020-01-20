import { connect } from 'react-redux';
import IndividualAddPlantModal from './individual_add_plant_modal';
import { addOwnedPlant } from '../../actions/owned_plant_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps,
        plant: ownProps.plant,
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualAddPlantModal);