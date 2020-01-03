import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class PlantIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    }

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.itemParent = React.createRef();
    this.handleChildEvent = this.handleChildEvent.bind(this);
  }

  handleFocus() {
    if (this.props.modalType === "add owned plant") {
      this.props.selectPlant(this.props.plant);
      this.setState({selected: true});
    } else {
      const plantId = this.props.plant._id;
      this.props.history.push(`/plants/${plantId}`);
    }
  }

  handleBlur() {
    if (this.props.modalType === "add owned plant") {
      this.props.deselectPlant();
      this.setState({ selected: false });
    }
  }

  handleChildEvent(ref, callback) {
    return event => {
      if (!ref.current.contains(event.relatedTarget)) {
        callback();
      }
    };
  }


  render() {
    const plantId = this.props.plant._id;
    const { plant } = this.props;
    if(this.state.selected) {
      return (
        <article className='plant-item-hover-selected' ref={this.itemParent} tabIndex='0'>
          <div className='plant-index-item-contents' onClick={this.handleFocus} onBlur={this.handleChildEvent(this.itemParent, this.handleBlur)}>
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
    } else {
      return (
        <article className='plant-item-hover' ref={this.itemParent} tabIndex='0'>
          <div className='plant-index-item-contents' onClick={this.handleFocus} onBlur={this.handleChildEvent(this.itemParent, this.handleBlur)}>
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
}

export default withRouter(PlantIndexItem);