import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

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
    const plantId = this.props.plant._id;
    const { plant } = this.props;

    return (
      <article class= 'plant-hover' onClick={this.handleClick}>
      <div className='plant-index-item-contents' >
          <div className='img-wrapper'>
            <img className='plant-thumb' src={plant.imgUrl} height="200" />
          </div>
          <div className='plant-info'>
            <div className='plant-name'>{plant.name}</div>
            <div className='plant-latin-name'>{plant.latinName}</div>
          </div>
      </div>
      </article>
    )
  }
}

export default withRouter(PlantIndexItem);