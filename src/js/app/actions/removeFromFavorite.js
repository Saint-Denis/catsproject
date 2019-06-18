import * as favoritesTypes from "../actionsType/favoritesTypes"

const removeFromoFavourite = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const usersId = getState().firebase.auth.uid
        firestore.collection('favorites').delete({
            id,
            usersId,
        }).then(()=> {
            dispatch({
                type: favoritesTypes.REMOVE_FROM_FAVORITE,
                id,
                usersId,
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export default removeFromoFavourite;
