import { OPEN_MODAL, CLOSE_MODAL } from '../actions/ui_actions';

const uiReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case OPEN_MODAL:
            return { modal: action.modalType }
        case CLOSE_MODAL:
            return { modal: null }
        default:
            return oldState;
    }
};

export default uiReducer;