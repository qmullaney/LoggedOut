import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_action';
import { RECEIVE_USER } from '../actions/user_actions';
const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default usersReducer;