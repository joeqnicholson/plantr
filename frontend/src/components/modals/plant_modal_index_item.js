import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

class PlantModalIndexItem extends React.Component {
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
    } else if (this.props.modalType === "show owned plant") {
      const plantId = this.props.plant._id;
      this.props.closeModal();
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

  focusDiv() {
    ReactDOM.findDOMNode(this.refs.indexItem).focus();
  }

  componentDidMount() {
    if(this.state.selected) {
      this.focusDiv();
    }
  }

  componentDidUpdate() {
    if(this.state.selected) {
      this.focusDiv();
    }
  }
  //
  //onClick={this.handleFocus} onBlur={this.handleChildEvent(this.itemParent, this.handleBlur)}
  //onBlur = { this.handleChildEvent(this.itemParent, this.handleBlur) }
//  ref = { this.itemParent }


  render() {
    const { plant } = this.props;
    if(this.state.selected) {
      return (
        <div className='plant-modal-index-item-selected' ref="indexItem" tab-index="0" onBlur={this.handleBlur}>
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
        <div className='plant-modal-index-item' ref="indexItem" tab-index="0" onClick={this.handleFocus} >
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