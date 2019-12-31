import { connect } from 'react-redux';
import PlantIndex from './plant_index';
import { fetchAllPlants } from '../../actions/plant_actions';

const mapStateToProps = state => {
  return {
    plants: state.entities.plants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPlants: () => dispatch(fetchAllPlants())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantIndex);
