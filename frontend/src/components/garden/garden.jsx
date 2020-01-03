import React from 'react';
import '../garden.css';
import GardenIndexItem from './garden_index_item';
import AddOwnedPlantModalContainer from '../modals/add_owned_plant_modal_container';
import ShowOwnedPlantModalContainer from '../modals/show_owned_plant_modal_container';
import {withRouter} from 'react-router-dom';

class Garden extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchOwnedPlants(this.props.match.params.userId);
        this.props.fetchAllPlants();
    }

    componentWillUnmount() {
        this.props.fetchOwnedPlants(this.props.match.params.userId);
        this.props.fetchAllPlants();
    }

    // componentDidUpdate() {
    //     this.props.fetchOwnedPlants(this.props.match.params.userId);
    //     this.props.fetchAllPlants();
    // }

    render() {
        if(this.props.ownedPlants.length === 0) {
            return null;
        } else {
            const gardenIndexItems = this.props.ownedPlants.map((ownedPlant) => {
                return (
                    <GardenIndexItem key={ownedPlant.id} ownedPlant={ownedPlant} openShowModal={this.props.openShowModal}/>
                );
            });

            let modal;
            switch(this.props.modal) {
                case 'add owned plant':
                    modal = <AddOwnedPlantModalContainer closeModal={this.props.closeModal} modalType={this.props.modal} />;
                    break;
                case 'show owned plant':
                    modal = <ShowOwnedPlantModalContainer closeModal={this.props.closeModal} />;
                    break;
                default:
                    modal = null;
                    break;
            }

            return (
                <div className="garden-wrapper">
                    {modal}
                    <div className="garden-body">
                        <div className="garden-items-wrapper">
                            {gardenIndexItems}
                            <div className="plus" onClick={this.props.openAddModal}><p>+</p></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Garden);