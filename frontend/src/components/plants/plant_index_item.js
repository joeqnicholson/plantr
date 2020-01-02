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
      <div>
        <article onClick={this.handleClick}>
          <div>
            <img src={plant.imgUrl} height="200" />
          </div>
          <div className='plant-info'>
            <div>{plant.name}</div>
          </div>
        </article>
      </div>
    )
  }
}

export default withRouter(PlantIndexItem);