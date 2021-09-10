import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors";
import userErrorsReducer from "./user_errors";
import postErrorReducer from './post_errors';

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    newUserError: userErrorsReducer,
    postCreationError: postErrorReducer
})

export default errorsReducer;