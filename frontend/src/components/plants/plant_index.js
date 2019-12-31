import React from 'react';
import PlantIndexItem from './plant_index_item';

class PlantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchAllPlants();
  }

  render() {
    debugger
    const plantList = this.props.plants.map( plant => {
      return <PlantIndexItem key={plant._id} plant={plant} />
    });

    return (
      <div>
        {plantList}
      </div>
    )
  }
}

export default PlantIndex;