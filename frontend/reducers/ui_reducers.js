import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import toEditReducer from "./to_edit_reducer";

const uiReducer = combineReducers({
    modal: modalReducer,
    toEdit: toEditReducer
})

export default uiReducer;