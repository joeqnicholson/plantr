import React from 'react';
import PlantIndexItem from './plant_index_item';
// import schedule from 'node-schedule';
// import setNotifications from '../../../../set_notifications';
// import jwt_decode from 'jwt-decode';
import * as NotificationApiUtils from '../../util/notification_api_util';
import '../plants.css'
import { Link } from 'react-router-dom'

class PlantIndex extends React.Component {
  constructor(props) {
    super(props);

    this.setAlert = this.setAlert.bind(this);
    this.cancelAlert = this.cancelAlert.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPlants();
  }

  setAlert(name) {
    const frequency = 1;
    NotificationApiUtils.createNotification({ name, frequency });
  }

  cancelAlert(name) {
    NotificationApiUtils.cancelNotification({ name });
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
        <button onClick={() => this.setAlert("A")}>A</button>
        <button onClick={() => this.setAlert("B")}>B</button>
        <button onClick={() => this.cancelAlert("A")}>Cancel A</button>
        <button onClick={() => this.cancelAlert("B")}>Cancel B</button>
        </div>
      </div>
    )
  }
}

export default PlantIndex;