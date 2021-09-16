import { RECEIVE_POST, RECEIVE_POSTS, DELETE_POST } from "../actions/post_action";
import { LOGOUT_CURRENT_USER } from "../actions/session_action";

const postReducer = (state = {}, action) =>{
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.post.id]: action.post });
        case RECEIVE_POSTS:
            return action.posts;
        case DELETE_POST:
            let newObj = Object.assign({}, state);
            delete newObj[action.postId];
            return newObj;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default postReducer;