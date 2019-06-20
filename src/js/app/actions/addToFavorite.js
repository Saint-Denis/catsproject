import * as types from "../actionsType/types"

const addToFavorite = (catImage, id) => {
    return async (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        const newFavorite = {
            catImage,
            id,
        };

        try {
            const res = await firestore
              .collection('favorites')
              .doc(userId)
              .get();

            if(!res.data()) {
              firestore
                .collection('favorites')
                .doc(userId)
                .set({
                    favorites: [newFavorite],
                });
            } else {
              firestore
                .collection('favorites')
                .doc(userId)
                .update({
                    favorites: [...res.data().favorites, newFavorite],
                });
            }

            dispatch({
                type: types.ADD_TO_FAVORITE,
                catImage,
                id,
            })
            return true;
          } catch (err) {
            dispatch({
              type: types.ADD_TO_FAVORITE_FAILED,
            })
          }
    }
}

export default addToFavorite;
