import React from 'react';
import '../garden.css';
import GardenIndexItem from './garden_index_item';
import AddOwnedPlantModalContainer from '../modals/add_owned_plant_modal_container';
import ShowOwnedPlantModalContainer from '../modals/show_owned_plant_modal_container';
import {withRouter} from 'react-router-dom';

class Garden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOwnedPlant: null
        }
    }

    componentDidMount() {
        this.props.fetchAllPlants();
        this.props.fetchOwnedPlants(this.props.match.params.userId);
    }

    componentWillUnmount() {
        this.props.fetchAllPlants();
        this.props.fetchOwnedPlants(this.props.match.params.userId);
    }

    selectOwnedPlant(ownedPlant) {
        this.setState({selectedOwnedPlant: ownedPlant})
    }

    render() {
        if(this.props.ownedPlants.length === 0) {
            return null;
        } else {
            const gardenIndexItems = this.props.ownedPlants.map((ownedPlant) => {
                return (
                    <div onClick={e => e.stopPropagation()}>
                        <div onClick={() => this.selectOwnedPlant(ownedPlant)}>
                            <GardenIndexItem key={ownedPlant.id} ownedPlant={ownedPlant} openShowModal={this.props.openShowModal}/>
                        </div>
                    </div>
                );
            });

            let modal;
            switch(this.props.modal) {
                case 'add owned plant':
                    modal = <AddOwnedPlantModalContainer closeModal={this.props.closeModal} modalType={this.props.modal} />;
                    break;
                case 'show owned plant':
                    modal = <ShowOwnedPlantModalContainer closeModal={this.props.closeModal} modalType={this.props.modal} ownedPlant={this.state.selectedOwnedPlant}/>;
                    break;
                default:
                    modal = null;
                    break;
            }

            return (
                <div className="garden-wrapper">
                    {modal}
                    <h1 className="garden-title">My Garden</h1>
                    <div className="garden-body">
                        <div className="garden-items-wrapper">
                            <div className="plus" onClick={this.props.openAddModal}><p>+</p></div>
                            {gardenIndexItems}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Garden);