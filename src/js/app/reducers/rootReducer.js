import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import user from "./userReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    user: user,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer;
