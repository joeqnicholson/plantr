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
      <div className='plant-index-item-contents' >
        <article onClick={this.handleClick}>
          <div className='img-wrapper'>
            <img src={plant.imgUrl} height="200" />
          </div>
          <div className='plant-info'>
            <div className='plant-name'>{plant.name}</div>
            <div className='plant-latin-name'>{plant.latinName}</div>
          </div>
        </article>
      </div>
    )
  }
}

export default withRouter(PlantIndexItem);