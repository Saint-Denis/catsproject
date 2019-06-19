import * as types from "../actionsType/types"

const removeFromoFavourite = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('favorites')
        .doc(id)
        .delete()
        .then(()=> {
            dispatch({
                type: types.REMOVE_FROM_FAVORITE,
                id,
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export default removeFromoFavourite;
