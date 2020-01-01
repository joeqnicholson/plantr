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

  setAlert() {
    // console.log("init");
    // let rule = new schedule.RecurrenceRule();
    // rule.minute = new schedule.Range(0, 59, 1);
    
    // let job = schedule.scheduleJob(rule, function(){
    //   console.log("test");
    // });
    NotificationApiUtils.createNotification({name: "test job"});
  }

  cancelAlert() {
    NotificationApiUtils.cancelNotification({name: "test job"});
  }

  render() {
    const plantList = this.props.plants.map( plant => {
      return <PlantIndexItem key={plant._id} plant={plant} />
    });

    return (
      <div>
        {plantList}
        <button onClick={this.setAlert}>10 seconds</button>
        <button onClick={this.cancelAlert}>Cancel</button>
      </div>
    )
  }
}

export default PlantIndex;