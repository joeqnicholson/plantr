import React from 'react';

class PlantShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.props.plant) {
      this.props.fetchPlant(this.props.match.params.plantId);
    }
  }

  render() {

    const { plant } = this.props;

    if (plant) {
      return (
        <div className="plant-show-container">
          <h1>{plant.name}</h1>
          <h1>{plant.latinName}</h1>
          <h1>{plant.frequency}</h1>
          <h1>{plant.water}</h1>
        </div>
      )
    } else {
      return null
    }
  }
}

export default PlantShow;