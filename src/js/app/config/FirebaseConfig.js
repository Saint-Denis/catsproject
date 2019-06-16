import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyC_WgoTOXmKB7-BQw7u7Smd7BwkqJ90-xw",
    authDomain: "cats-4d022.firebaseapp.com",
    databaseURL: "https://cats-4d022.firebaseio.com",
    projectId: "cats-4d022",
    storageBucket: "cats-4d022.appspot.com",
    messagingSenderId: "368806665414",
    appId: "1:368806665414:web:4fee5f598a5f26ef"
};

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
    timestampsInSnapshots: true
});

export default firebase;