import usersReducer from "./users_reducer";
import postReducer from "./posts_reducer";

import { combineReducers } from "redux";

export const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postReducer
})

export default entitiesReducer;