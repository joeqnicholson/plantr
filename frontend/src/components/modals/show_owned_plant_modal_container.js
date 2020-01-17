import { connect } from 'react-redux';
import ShowOwnedPlantModal from './show_owned_plant_modal';
import { deleteOwnedPlant } from '../../actions/owned_plant_actions';

const mapStateToProps = (state, ownProps) => {
    const ownedPlant = ownProps.ownedPlant;
    const plant = ownedPlant.plant;
    return {
        ownProps,
        ownedPlant,
        plant,
        modalType: state.ui.modal,
        userId: state.session.user.id
    };
}

const mapDispatchToProps = dispatch => {
    return {
        deleteOwnedPlant: plant => dispatch(deleteOwnedPlant(plant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowOwnedPlantModal);