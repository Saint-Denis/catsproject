import * as favoritesTypes from "../actionsType/favoritesTypes"

const addToFavourite = (catImage, id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const usersId = getState().firebase.auth.uid
        firestore.collection('favorites').add({
            catImage,
            id,
            usersId,
        }).then(()=> {
            dispatch({
                type: favoritesTypes.ADD_TO_FAVORITE,
                catImage,
                id,
                usersId,
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export default addToFavourite;
