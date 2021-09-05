import usersReducer from "./users_reducer";

import { combineReducers } from "redux";

export const entitiesReducer = combineReducers({
    users: usersReducer
})

export default entitiesReducer;