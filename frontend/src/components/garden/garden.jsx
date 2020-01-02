import React from 'react';
import '../garden.css';
import GardenIndexItem from './garden_index_item';
import AddOwnedPlantModalContainer from '../modals/add_owned_plant_modal_container';
import {withRouter} from 'react-router-dom';

class Garden extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchOwnedPlants(this.props.match.params.userId);
        this.props.fetchAllPlants();
    }

    render() {
        if(!this.props.ownedPlants.plant) {
            return null;
        } else {
            this.props.ownedPlants.forEach((ownedPlant) => {
                ownedPlant.plant = this.props.plants.filter((plant) => {
                    return plant.id === ownedPlant.plantId;
                }).first;
            });

            const gardenIndexItems = this.props.ownedPlants.map((ownedPlant) => {
                return (
                    <GardenIndexItem ownedPlant={ownedPlant}/>
                );
            });

            return (
                <div className="garden-wrapper">
                    {this.props.modal && <AddOwnedPlantModalContainer/>}
                    <div className="garden-body">
                        <div className="garden-items-wrapper">
                            {gardenIndexItems}
                            <div className="add-item"></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Garden);