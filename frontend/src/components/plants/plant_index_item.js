import React from 'react';
import { withRouter } from 'react-router-dom';

class PlantIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const plantId = this.props.plant._id;
    this.props.history.push(`/plants/${plantId}`);
  }

  render() {

    const { plant } = this.props;

    return (
      <article onClick={this.handleClick}>
        <div>
          <img src={plant.imgUrl} height="200" />
        </div>
        <summary>
          <h1>{plant.name}</h1>
        </summary>
      </article>
    )
  }
}

export default withRouter(PlantIndexItem);