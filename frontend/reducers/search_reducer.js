import {
    OPEN_SEARCH,
    CLOSE_SEARCH
} from '../actions/modal_actions'

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case OPEN_SEARCH:
            return true;
        case CLOSE_SEARCH:
            return false;
        default:
            return state;
    }
}

export default searchReducer;