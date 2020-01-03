import React from 'react';
import "../plant_show.css";
import IndividualAddPlantModalContainer from '../modals/individual_add_plant_modal_container';

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

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { plant } = this.props;

    if (plant) {
      return (
        <div className="plant-show-wrapper-wrapper">
          {this.props.modal === 'add owned plant' && <IndividualAddPlantModalContainer plant={plant} closeModal={this.props.closeModal}/>}
          <div className="plant-show-wrapper">
            <div className="plant-show-img-wrapper">
              <img 
                src={plant.imgUrl} 
                alt={`${plant.name} image`} 
                className="plant-show-img">
              </img>
            </div>
            <div className="plant-show-info-wrapper">
              <div className="plant-show-info-item-wrappers">
                <h1 className="plant-show-h1 name">{plant.name}</h1>
              </div>
              <div className="plant-show-info-item-wrappers">
                <h1 className="plant-show-h1 latin-name">{plant.latinName}</h1>
              </div>
              <div className="plant-show-info-item-wrappers">
                <h1 className="plant-show-h1 frequency">Watering frequency: ~{plant.frequency} days</h1>
              </div>
              <button className="add-owned-plant-button" onClick={this.props.openModal}>Plant {plant.name} in my garden!</button>
              <div className="plant-show-info-item-wrappers">
                <h1 className="plant-show-h1 water">Watering Needs:</h1>
                <p className="plant-show-p">{plant.water}</p>
              </div>
              <div className="plant-show-info-item-wrappers">
                <h1 className="plant-show-h1 water">Light Needs:</h1>
                <p className="plant-show-p">{plant.light}</p>
              </div>
              <div className="plant-show-info-item-wrappers">
                <h1 className="plant-show-h1 soil">Soil Requirements:</h1>
                <p className="plant-show-p">{plant.soil}</p>
              </div>
              <div className="plant-show-info-item-wrappers">
                <h1 className="plant-show-h1 misc">Additional Info:</h1>
                <p className="plant-show-p">{plant.misc}</p>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default PlantShow;