import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_action";
import { RECEIVE_CONNECTEES } from "../actions/connection_actions";

const sessionReducer = (state = { id: null, connectees: {}}, action ) =>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id, connectees: {}};
        case LOGOUT_CURRENT_USER:
            return { id: null, connectees: {} };
        case RECEIVE_CONNECTEES:
            return { id: state.id, connectees: action.connectees }
        default:
            return state;
    }
}

export default sessionReducer;