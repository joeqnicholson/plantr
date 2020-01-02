import { connect } from 'react-redux';
import PlantShow from './plant_show';

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
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantShow);