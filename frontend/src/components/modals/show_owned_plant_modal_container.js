import {connect} from 'react-redux';
import ShowOwnedPlantModal from './show_owned_plant_modal';

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowOwnedPlantModal);