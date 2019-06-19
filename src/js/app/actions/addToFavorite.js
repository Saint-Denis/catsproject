import * as types from "../actionsType/types"

const addToFavourite = (catImage, id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        console.log(userId)
        firestore
            .collection('favorites')
            .doc(userId)
            .set({
            catImage,
            id,
            userId,
        }).then(()=> {
            dispatch({
                type: types.ADD_TO_FAVORITE,
                catImage,
                id,
            })
        }).catch((err) => {
            console.log(err);
    })

    }
}

export default addToFavourite;
