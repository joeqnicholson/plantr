import React from 'react';
import '../modal.css';

class ShowOwnedPlantModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal-background" onClick={this.props.ownProps.closeModal}>
                <div className="modal-child">
                    <div className="modal-show-wrapper">
                        <p className="modal-show-box"></p>
                        <input type="text" className="show-modal-input" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowOwnedPlantModal;