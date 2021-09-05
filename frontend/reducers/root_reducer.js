import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer
})

export default rootReducer;