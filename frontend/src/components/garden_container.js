import { connect } from 'react-redux';
import Garden from './garden';

const mapStateToProps = state => {
  return {
    plants: state.entities.plants
  };
};

export default connect(mapStateToProps)(Garden);