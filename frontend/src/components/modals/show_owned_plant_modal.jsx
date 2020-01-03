import React from 'react';
import '../modal.css';
import PlantIndexItem from '../plants/plant_index_item';
import * as NotificationApiUtils from '../../util/notification_api_util';

class ShowOwnedPlantModal extends React.Component {
    constructor(props) {
        super(props);
        this.cancelAlert = this.cancelAlert.bind(this);
    }

    cancelAlert(name) {
        debugger
        NotificationApiUtils.cancelNotification({ name });
    }

    render() {
        const {ownedPlant, plant} = this.props;
        debugger
        return (
            <div className="modal-background" onClick={this.props.ownProps.closeModal}>
                <div className="show-modal-child" onClick={e => e.stopPropagation()}>
                    <div className="modal-show-wrapper">
                        <div className="modal-show">
                            <p className="x" onClick={this.props.ownProps.closeModal}>+</p>
                            <PlantIndexItem
                                key={plant._id}
                                plant={plant}
                                modalType={this.props.modalType}
                            />
                            <div className="show-modal-info">
                                <p className="nickname">{ownedPlant.nickname}</p>
                                <p className="frequency">Watering frequency: ~{plant.frequency} days</p>
                            </div>
                            <div className="cancel-button">
                                <button onClick={() => this.cancelAlert(ownedPlant.plantId)}>Cancel notifications</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowOwnedPlantModal;