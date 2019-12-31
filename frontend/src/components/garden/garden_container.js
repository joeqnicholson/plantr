import {connect} from 'react-redux';
import Garden from './garden';

const mapStateToProps = ({entities, session}) => {
    const ownedPlants = Object.values(entities.ownedPlants);
    return {
        ownedPlants,
        plants: entities.plants
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Garden);