import React from 'react';
import { withRouter } from 'react-router-dom';

class PlantModalIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { plant } = this.props;
    if(this.props.selected) {
      return (
        <div className='plant-modal-index-item-selected'>
          <div className='plant-modal-index-item-contents'>
            <div className='modal-img-wrapper'>
              <img className='plant-modal-thumb' alt="plant-thumb" src={plant.imgUrl} height="50" />
            </div>
            <div className='plant-modal-info'>
              <div className='plant-modal-name'>{plant.name}</div>
              <div className='plant-modal-latin-name'>{plant.latinName}</div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='plant-modal-index-item'>
          <div className='plant-modal-index-item-contents' >
              <div className='modal-img-wrapper'>
                <img className='plant-modal-thumb' alt="plant-thumb" src={plant.imgUrl} height="50" />
              </div>
              <div className='plant-modal-info'>
                <div className='plant-modal-name'>{plant.name}</div>
                <div className='plant-modal-latin-name'>{plant.latinName}</div>
              </div>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(PlantModalIndexItem);