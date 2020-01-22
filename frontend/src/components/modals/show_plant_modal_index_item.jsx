import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

class ShowPlantModalIndexItem extends React.Component {
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
      return (
        <div className='show-plant-modal-index-item'>
              <div className='show-modal-img-wrapper'>
                <img className='plant-modal-thumb' alt="show-plant-thumb" src={this.props.plant.imgUrl} height="50" />
              </div>
              <div className='show-plant-modal-info'>
                  <div className="show-nickname">
                    {
                        this.props.ownedPlant.nickname === " " ? 
                        (this.props.plant.name):
                        (this.props.ownedPlant.nickname)
                    }
                </div>
                <div className='show-plant-modal-latin-name'>{this.props.plant.latinName}</div>
                <div className="show-frequency">Water every ~{this.props.plant.frequency} days</div>
              </div>
        </div>
      )
    }
}

export default withRouter(ShowPlantModalIndexItem);