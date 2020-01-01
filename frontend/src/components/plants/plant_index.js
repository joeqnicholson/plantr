import React from 'react';
import PlantIndexItem from './plant_index_item';
// import schedule from 'node-schedule';
// import setNotifications from '../../../../set_notifications';
// import jwt_decode from 'jwt-decode';
import * as NotificationApiUtils from '../../util/notification_api_util';

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
    NotificationApiUtils.createNotification({ name });
  }

  cancelAlert(name) {
    NotificationApiUtils.cancelNotification({ name });
  }

  render() {
    const plantList = this.props.plants.map( plant => {
      return <PlantIndexItem key={plant._id} plant={plant} />
    });

    return (
      <div>
        {plantList}
        <button onClick={() => this.setAlert("A")}>A</button>
        <button onClick={() => this.setAlert("B")}>B</button>
        <button onClick={() => this.cancelAlert("A")}>Cancel A</button>
        <button onClick={() => this.cancelAlert("B")}>Cancel B</button>
      </div>
    )
  }
}

export default PlantIndex;