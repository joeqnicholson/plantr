import { connect } from 'react-redux';
import PlantShow from './plant_show';
import { fetchPlant } from '../../actions/plant_actions';

const mapStateToProps = (state, ownProps) => {
  const plant = state.entities.plants.find( plant => {
    return plant._id === ownProps.match.params.plantId
  });

  return {
    plant
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlant: (plantId) => dispatch(fetchPlant(plantId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantShow);