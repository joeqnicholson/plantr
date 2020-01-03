import React from 'react';
import '../modal.css';
import PlantIndexItem from '../plants/plant_index_item';
import {withRouter} from 'react-router-dom';

class AddOwnedPlantModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ownedPlantToAdd: null,
            nickname: "",
        }
        this.addOwnedPlant = this.addOwnedPlant.bind(this);
        this.setNickname = this.setNickname.bind(this);
        this.selectPlant = this.selectPlant.bind(this);
        this.deselectPlant = this.deselectPlant.bind(this);
    }

    selectPlant(plant) {
        let ownedPlantToAdd = {};
        ownedPlantToAdd.userId = this.props.userId;
        ownedPlantToAdd.plantId = plant._id;
        this.setState({ ownedPlantToAdd: ownedPlantToAdd });
    }

    deselectPlant() {
        this.setState({ ownedPlantToAdd: null });
    }

    addOwnedPlant() {
        let ownedPlantToAdd = this.state.ownedPlantToAdd;
        ownedPlantToAdd.nickname = this.state.nickname;
        this.props.addOwnedPlant(ownedPlantToAdd);
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
        let selected;
        const plantList = this.props.plants.map(plant => {
            selected = (plant._id === this.props.selectedPlantId);
            return (
                <div className='plant-index-item'>
                    <PlantIndexItem
                        key={plant._id}
                        plant={plant}
                        modalType={this.props.modalType}
                        selectPlant={this.selectPlant}
                        deselectPlant={this.deselectPlant}
                        selected={selected}
                    />
                </div>
            )
        });

        return (
            <div className="modal-background" onClick={this.props.ownProps.closeModal}>
                <div className="add-modal-child" onClick={e => e.stopPropagation()}>
                    <div className="modal-add-wrapper">
                        <div className="modal-add-items">
                            <p className="x" onClick={this.props.ownProps.closeModal}>+</p>
                            {plantList}
                        </div>
                        <label className="nickname-label">Nickname:</label>
                        <input className="nickname-input" type="text" placeholder="e.g. 'Lucy', 'Kitchen Snake Plant" onChange={this.setNickname} value={this.state.nickname}/>
                        <div className="add-plant-btn" onClick={this.addOwnedPlant}>Add to garden</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddOwnedPlantModal);