import favouriteReducer from "./favouriteReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    favourite: favouriteReducer,
    auth: authReducer
})

export default rootReducer;