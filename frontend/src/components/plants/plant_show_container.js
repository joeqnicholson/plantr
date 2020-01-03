import { connect } from 'react-redux';
import PlantShow from './plant_show';
import { fetchPlant } from '../../actions/plant_actions';
import {openModal, closeModal} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const plant = state.entities.plants.find( plant => {
    return plant._id === ownProps.match.params.plantId
  });

  return {
    plant,
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlant: (plantId) => dispatch(fetchPlant(plantId)),
    openModal: () => dispatch(openModal('add owned plant')),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantShow);