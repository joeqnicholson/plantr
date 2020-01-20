import React from 'react';
import PlantIndexItem from './plant_index_item';
// import schedule from 'node-schedule';
// import setNotifications from '../../../../set_notifications';
// import jwt_decode from 'jwt-decode';
// import * as NotificationApiUtils from '../../util/notification_api_util';
import '../plants.css'

class PlantIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllPlants();
  }

  render() {
    let i = 0;
    const plantList = this.props.plants.map( plant => {
      return (
        <div className='plant-index-item' key={plant._id}>
            <PlantIndexItem plant={plant} i={i}  />
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