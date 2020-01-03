import React from 'react';
import '../modal.css';
import PlantIndexItem from '../plants/plant_index_item';

class AddOwnedPlantModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ownedPlantToAdd: null,
            nickname: ""
        }
        this.addOwnedPlant = this.addOwnedPlant.bind(this);
        this.setNickname = this.setNickname.bind(this);
        this.selectPlant = this.selectPlant.bind(this);
    }

    selectPlant(plant) {
        let ownedPlantToAdd = {};
        ownedPlantToAdd.userId = this.props.userId;
        ownedPlantToAdd.plantId = plant._id;
        this.setState({ ownedPlantToAdd: ownedPlantToAdd });
    }

    addOwnedPlant() {
        let ownedPlantToAdd = this.state.ownedPlantToAdd;
        ownedPlantToAdd.nickname = this.state.nickname;
        this.props.addOwnedPlant(ownedPlantToAdd);
        this.props.ownProps.closeModal();
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
            return (
                <div className='plant-index-item'>
                    <PlantIndexItem key={plant._id} plant={plant} modalType={this.props.modalType} selectPlant={this.selectPlant}/>
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

export default AddOwnedPlantModal;