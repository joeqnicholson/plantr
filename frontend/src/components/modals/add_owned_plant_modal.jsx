import React from 'react';
import {withRouter} from 'react-router-dom';
import '../modal.css';
import * as NotificationApiUtils from '../../util/notification_api_util';
import PlantModalIndexItem from './plant_modal_index_item';
import { fetchAllPlants } from '../../util/plant_api_util';

class AddOwnedPlantModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ownedPlantToAdd: null,
            nickname: "",
            selectedPlantId: null
        }
        this.addOwnedPlant = this.addOwnedPlant.bind(this);
        this.setNickname = this.setNickname.bind(this);
        this.setAlert = this.setAlert.bind(this);
    }

    setAlert() {
        const plant = this.state.ownedPlantToAdd;
        const frequency = plant.frequency;
        const plantName = plant.plantName;
        const water = plant.water;
        const username = this.props.username;
        const nickname = this.state.nickname;
        const userId = plant.userId;
        const name = `${userId} ${nickname.trim()} ${plantName}`;
        NotificationApiUtils.createNotification({ name, frequency, plantName, nickname, username, userId, water });
    }

    addOwnedPlant() {
        let ownedPlantToAdd = this.state.ownedPlantToAdd;
        ownedPlantToAdd.nickname = this.state.nickname;
        this.props.addOwnedPlant(ownedPlantToAdd);
        this.setAlert();
        this.props.ownProps.closeModal();
        this.props.history.push(`/garden/${this.props.userId}`);
    }

    setNickname(e) {
        if (e.currentTarget.value === null) {
            this.setState({nickname: "" });
        } else {
            this.setState({nickname: e.currentTarget.value});
        }
    }

    render() {
        const plantList = this.props.plants.map(plant => {
            if(plant._id === this.state.selectedPlantId) {
                return (
                    <PlantModalIndexItem
                        selected={true}
                        key={plant._id}
                        plant={plant}
                        modalType={this.props.modalType}
                    />
                )
            } else {
                return (
                    <div onClick={() => this.setState({ selectedPlantId: plant._id })}>
                        <PlantModalIndexItem
                            selected={false}
                            key={plant._id}
                            plant={plant}
                            modalType={this.props.modalType}
                        />
                    </div>
                )
            }
           
        });

        return (
            <div className="modal-background" onClick={this.props.ownProps.closeModal}>
                <div className="add-modal-child" onClick={e => e.stopPropagation()}>
                    <div className="modal-add-wrapper">
                        <div className="modal-add-items">
                            <p className="x" onClick={this.props.ownProps.closeModal}>+</p>
                            {plantList}
                        </div>
                        <div className='plant-modal-name-and-button'>
                            <label className="nickname-label">Nickname:</label>
                            <input className="nickname-input" type="text" placeholder="e.g. 'Lucy', 'Kitchen Plant" onChange={this.setNickname} value={this.state.nickname}/>
                            <div className="add-plant-btn" onClick={this.addOwnedPlant}>Add to garden</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddOwnedPlantModal);