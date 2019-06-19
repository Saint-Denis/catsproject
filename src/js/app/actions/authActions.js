import * as types from "../actionsType/types"


const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((user) => {
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: user,
            })
        }).catch((err) => {
            dispatch({
                type: types.LOGIN_ERROR,
                err
            })
        })
    }
}

const signOut = () => {
    return (dispatch, getState, { getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=> {
            dispatch({
                type: types.SIGN_OUT_SUCCESS
            })
        })

    }
}

const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();

      firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      ).then(resp => {
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0]
        });
      }).then(() => {
        dispatch({ type: types.SIGN_UP_SUCCESS });
      }).catch((err) => {
        dispatch({ type: types.SIGN_UP_ERROR, err});
      });
    }
}

export { signIn, signOut, signUp };
