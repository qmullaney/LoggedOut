import {
    OPEN_SEARCH,
    CLOSE_SEARCH,
    FILL_SEARCH
} from '../actions/modal_actions'

const searchReducer = (state = { open: false, results: {} }, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case OPEN_SEARCH:
            return { open: true, results: {} };
        case CLOSE_SEARCH:
            return { open: false, results: {} };
        case FILL_SEARCH: 
            return { open: true, results: action.results }
        default:
            return state;
    }
}

export default searchReducer;