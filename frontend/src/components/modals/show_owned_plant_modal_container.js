import { connect } from 'react-redux';
import ShowOwnedPlantModal from './show_owned_plant_modal';

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

export default connect(mapStateToProps, null)(ShowOwnedPlantModal);