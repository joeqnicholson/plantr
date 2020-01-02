import React from 'react';
import PlantIndexItem from './plant_index_item';
import '../plants.css'

class PlantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPlants();
  }

  render() {
    const { plants } = this.props;
    const plantList = this.props.plants.map( plant => {
      for (let i = 0; i < plants.length; i++) {
        return (
          <div className='plant-index-item'>
            <PlantIndexItem key={plant._id} plant={plant}/>
          </div>
        )        
      }
      
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