import React from 'react';
import '../modal.css';
import PlantIndexItem from '../plants/plant_index_item';
import {withRouter} from 'react-router-dom';
import * as NotificationApiUtils from '../../util/notification_api_util';

class IndividualAddPlantModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: ""
        }

        this.addOwnedPlant = this.addOwnedPlant.bind(this);
        this.setNickname = this.setNickname.bind(this);
        this.setAlert = this.setAlert.bind(this);
        // this.cancelAlert = this.cancelAlert.bind(this);
    }

    setAlert(ownedPlantToAdd) {
        const plant = ownedPlantToAdd;
        const frequency = plant.frequency;
        const plantName = plant.plantName;
        const water = plant.water;
        const username = this.props.username;
        const nickname = this.state.nickname;
        const userId = plant.userId;
        const name = `${userId} ${nickname.trim()} ${plantName}`;
        NotificationApiUtils.createNotification({ name, frequency, plantName, nickname, username, userId, water });
    }

    // cancelAlert(name) {
    //     NotificationApiUtils.cancelNotification({ name });
    // }

    addOwnedPlant() {
        let ownedPlantToAdd = {
            nickname: this.state.nickname,
            userId: this.props.userId,
            plantId: this.props.plant._id,
            frequency: this.props.plant.frequency,
            plantName: this.props.plant.name,
            water: this.props.plant.water
        }
        this.props.addOwnedPlant(ownedPlantToAdd);
        this.setAlert(ownedPlantToAdd);
        //setAlert functionality to be implemented by Kenny :)
        // this.setAlert();
        this.props.ownProps.closeModal();
        this.props.history.push(`/garden/${this.props.userId}`);
    }

    setNickname(e) {
        if (e.currentTarget.value === null) {
            this.setState({ nickname: "" });
        } else {
            this.setState({ nickname: e.currentTarget.value });
        }
    }

    render() {
        const { plant } = this.props;

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
                                <label className="individual-nickname-label">
                                    <p className="individual-nickname">Nickname:</p>
                                    <input className="individual-nickname-input"
                                        type="text"
                                        placeholder="e.g. 'Lucy', or 'Kitchen Snake Plant"
                                        value={this.state.nickname}
                                        onChange={this.setNickname} 
                                    />
                                </label>
                                <div className="individual-add-plant-btn" onClick={this.addOwnedPlant}>Add to garden</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(IndividualAddPlantModal);