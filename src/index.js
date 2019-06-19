/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose  } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import App from "./js/app/App";
import rootReducer from "./js/app/reducers/rootReducer"
import FirebaseConfig from "./js/app/config/FirebaseConfig"
import "./scss/aplication.scss";


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({
            getFirebase,
            getFirestore,
        })),
        reduxFirestore(FirebaseConfig, { logErrors: true, enableLogging: true }),
        reactReduxFirebase(FirebaseConfig, {
            useFirestoreForProfile: true,
            userProfile: 'users',
            attachAuthIsReady: true
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.firebaseAuthIsReady.then(()=> {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
})
