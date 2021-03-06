import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/modal_actions'


const toEditReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case OPEN_MODAL:
            if (!action.toEdit){
                action.toEdit = null;
            }
            return action.toEdit;
        case CLOSE_MODAL: 
            return null;
        default:
            return state;
    }
}

export default toEditReducer;