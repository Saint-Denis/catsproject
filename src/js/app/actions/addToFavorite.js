import * as favoritesTypes from "../actionsType/favoritesTypes"

const addToFavourite = (catImage, id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('favorites').add({
            catImage,
            id,
        }).then(()=> {
            dispatch({
                type: favoritesTypes.ADD_TO_FAVORITE,
                catImage,
                id,
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export default addToFavourite;