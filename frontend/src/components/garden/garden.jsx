import React from 'react';
import '../garden.css';
import GardenIndexItem from './garden_index_item_container';

class Garden extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.ownedPlants.forEach((ownedPlant) => {
            ownedPlant[plant] = this.props.plants[ownedPlant.plantId];
        });
    }

    render() {
        if(!this.props.ownedPlants.first.plant) {
            return null;
        } else {
            const gardenIndexItems = this.props.ownedPlants.map((ownedPlant) => {
                return (
                    <GardenIndexItem ownedPlant={ownedPlant}/>
                );
            });

            return (
                <div className="garden-wrapper">
                    <div className="garden-body">
                        <div className="garden-items-wrapper">
                            {gardenIndexItems}
                            <div className="add-item"></div>
                        </div>
                    </div>
                </div>
            );
        }
        return(
            null
        )
       
    }
}

export default Garden;