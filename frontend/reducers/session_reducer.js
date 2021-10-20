import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_action";
import { RECEIVE_CONNECTEES, RECEIVE_USR_CONNECTIONS } from "../actions/connection_actions";

const sessionReducer = (state = { id: null, connectees: {}, CUConnections: {}}, action ) =>{
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id, connectees: {}, CUConnections: {}};
        case LOGOUT_CURRENT_USER:
            return { id: null, connectees: {}, CUConnections: {} };
        case RECEIVE_CONNECTEES:
            return { id: state.id, connectees: action.connectees, CUConnections: state.CUConnections };
        case RECEIVE_USR_CONNECTIONS:
            return { id: state.id, connectees: state.connectees, CUConnections: action.connections}
        default:
            return state;
    }
}

export default sessionReducer;