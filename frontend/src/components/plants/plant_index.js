import React from 'react';
import PlantIndexItem from './plant_index_item';
import '../plants.css'
import { Link } from 'react-router-dom'

class PlantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPlants();
  }

  render() {
    let i = 0;
    const plantList = this.props.plants.map( plant => {
      return (
        
          <div className='plant-index-item'>
            <PlantIndexItem key={plant._id} plant={plant} i={i}  />
          </div>

      )
    });

    return (
      <div className='plant-wrapper'>
        <div className='middle-plant-wrapper'>
        {plantList}
        </div>
      </div>
    )
  }
}

export default PlantIndex;