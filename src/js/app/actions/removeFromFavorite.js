import * as types from "../actionsType/types"

const removeFromoFavorite = (id) => {
    return async (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;

        try {
            const res = await firestore
              .collection('favorites')
              .doc(userId)
              .get();

            const previousFavorites = res.data().favorites;
            const newFavorites = previousFavorites.filter(el => el.id !== id)

            await firestore
              .collection('favorites')
              .doc(userId)
              .update({
                favorites: newFavorites,
              });
            dispatch({
                type: types.REMOVE_FROM_FAVORITE,
                id,
             });
          } catch (err) {
            console.log(err)
        }
    }
}

export default removeFromoFavorite;