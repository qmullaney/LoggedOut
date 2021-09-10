import { CLEAR_ERRORS, RECEIVE_POST, RECEIVE_POST_ERRORS } from "../actions/post_action";

const postErrorReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_POST:
            return [];
        case RECEIVE_POST_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default postErrorReducer;