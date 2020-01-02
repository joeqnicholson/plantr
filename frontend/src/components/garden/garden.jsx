import React from 'react';
import '../garden.css';
import GardenIndexItem from './garden_index_item';
import AddOwnedPlantModalContainer from '../modals/add_owned_plant_modal_container';

class Garden extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        

        debugger
        this.props.ownedPlants.forEach((ownedPlant) => {
            ownedPlant.plant = this.props.plants.filter((plant) => {
                return plant.id === ownedPlant.plantId;
            }).first;
        });
        debugger
    }

    render() {
        if(!this.props.ownedPlants) {
            this.props.getOwnedPlants();
            return null;
        } else if (!this.props.ownedPlants.first.plant) {
            return null;
        } else {
            debugger
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
        // return(
        //     null
        // )
       
    }
}

export default Garden;