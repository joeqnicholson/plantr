import React from 'react';

class PlantShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const { plant } = this.props;

    return (
      <div>
        <h1>{plant.name}</h1>
        <h1>{plant.latinName}</h1>
        <h1>{plant.frequency}</h1>
        <h1>{plant.water}</h1>
      </div>
    )
  }
}

export default PlantShow;