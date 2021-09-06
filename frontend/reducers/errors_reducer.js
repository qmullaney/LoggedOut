import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors";
import userErrorsReducer from "./user_errors";

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    newUserError: userErrorsReducer
})

export default errorsReducer;