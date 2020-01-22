import React from 'react';
import '../modal.css';
import ShowPlantModalIndexItem from '../modals/show_plant_modal_index_item';
import * as NotificationApiUtils from '../../util/notification_api_util';

class ShowOwnedPlantModal extends React.Component {
    constructor(props) {
        super(props);
        this.cancelAlert = this.cancelAlert.bind(this);
    }

    cancelAlert(name) {
        NotificationApiUtils.cancelNotification({ name });
        this.props.deleteOwnedPlant(this.props.ownedPlant);
        this.props.ownProps.closeModal();
    }

    render() {
        const {ownedPlant, plant} = this.props;
        let name = `${ownedPlant.userId} ${ownedPlant.nickname.trim()} ${plant.name}`;
        
        return (
            <div className="modal-background" onClick={this.props.ownProps.closeModal}>
                <div className="show-modal-child" onClick={e => e.stopPropagation()}>
                    <div className="modal-show-wrapper">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div className="show-x-wrapper" onClick={this.props.ownProps.closeModal}><div className="show-modal-x"><i class="fa fa-close"></i></div></div>
                        <div className="modal-show">
                            <ShowPlantModalIndexItem
                                key={plant._id}
                                plant={plant}
                                modalType={this.props.modalType}
                                closeModal={this.props.closeModal}
                                ownedPlant={this.props.ownedPlant}
                            />
                            
                            <div className="cancel-button">
                                <button onClick={() => this.cancelAlert(name)}>Remove from garden</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowOwnedPlantModal;