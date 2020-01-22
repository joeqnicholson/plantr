import React from 'react';
import '../garden.css';
import GardenIndexItem from './garden_index_item';
import AddOwnedPlantModalContainer from '../modals/add_owned_plant_modal_container';
import ShowOwnedPlantModalContainer from '../modals/show_owned_plant_modal_container';
import {withRouter} from 'react-router-dom';

class Garden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOwnedPlant: null
        }
    }

    componentDidMount() {
        this.props.fetchAllPlants();
        this.props.fetchOwnedPlants(this.props.match.params.userId);
    }

    // componentWillUnmount() {
    //     this.props.fetchAllPlants();
    //     this.props.fetchOwnedPlants(this.props.match.params.userId);
    // }

    selectOwnedPlant(ownedPlant) {
        this.setState({selectedOwnedPlant: ownedPlant})
    }

    render() {
            const gardenIndexItems = this.props.ownedPlants.map((ownedPlant) => {
                return (
                    <div className='plant-index-item' key={ownedPlant._id} onClick={e => e.stopPropagation()}>
                        <div onClick={() => this.selectOwnedPlant(ownedPlant)} >
                            <GardenIndexItem ownedPlant={ownedPlant} openShowModal={this.props.openShowModal}/>
                        </div>
                    </div>
                );
            });
            let modal;
            switch(this.props.modal) {
                case 'add owned plant':
                    modal = <AddOwnedPlantModalContainer closeModal={this.props.closeModal} modalType={this.props.modal} />;
                    break;
                case 'show owned plant':
                    modal = <ShowOwnedPlantModalContainer closeModal={this.props.closeModal} modalType={this.props.modal} ownedPlant={this.state.selectedOwnedPlant}/>;
                    break;
                default:
                    modal = null;
                    break;
            }

            if (this.props.plants.length) {
                return (
                    <div className="plant-wrapper">
                        {modal}
                        <div className="middle-plant-wrapper">
                                <div className="plus-index-item" onClick={this.props.openAddModal}>
                                    <div className='plant-index-item-plus'>
                                        +
                                    </div>
                                </div>
    
                                {this.props.ownedPlants.length ? gardenIndexItems : null}
                        </div>
                    </div>
                );
            } else {
                return null;
            }
        }
    }


export default withRouter(Garden);