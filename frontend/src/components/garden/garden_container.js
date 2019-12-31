// import {connect} from 'react-redux';
// import Garden from './garden';
// import {
//     addOwnedPlant,
//     deleteOwnedPlant
// } from '../../actions/owned_plant_actions';

// const mapStateToProps = ({entities, ui}) => {
//     const ownedPlants = Object.values(entities.ownedPlants);
//     return {
//         ownedPlants,
//         plants: entities.plants,
//         modal: ui.modal
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addOwnedPlant: ownedPlant => dispatch(addOwnedPlant(ownedPlant)),
//         deleteOwnedPlant: ownedPlant => dispatch(deleteOwnedPlant(ownedPlant))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Garden);