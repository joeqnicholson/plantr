import React from 'react';
import '../modal.css';
import PlantModalIndexItem from '../modals/plant_modal_index_item';
import * as NotificationApiUtils from '../../util/notification_api_util';

class ShowOwnedPlantModal extends React.Component {
    constructor(props) {
        super(props);
        this.cancelAlert = this.cancelAlert.bind(this);
    }

    cancelAlert(name) {
        NotificationApiUtils.cancelNotification({ name });
        this.props.deleteOwnedPlant(this.props.ownedPlant);
    }

    render() {
        const {ownedPlant, plant} = this.props;
        return (
            <div className="modal-background" onClick={this.props.ownProps.closeModal}>
                <div className="show-modal-child" onClick={e => e.stopPropagation()}>
                    <div className="modal-show-wrapper">
                        <div className="modal-show">
                            <p className="x" onClick={this.props.ownProps.closeModal}>+</p>
                            <PlantModalIndexItem
                                key={plant._id}
                                plant={plant}
                                modalType={this.props.modalType}
                                closeModal={this.props.closeModal}
                            />
                            <div className="show-modal-info">
                                <p className="nickname">"{ownedPlant.nickname}"</p>
                                <p className="frequency">Water every ~{plant.frequency} days</p>
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