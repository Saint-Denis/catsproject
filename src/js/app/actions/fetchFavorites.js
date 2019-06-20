import * as types from "../actionsType/types"

const fetchFavorites = () => {
  return async (dispatch, getState, { getFirestore }) => {
        const userId = getState().firebase.auth.uid;
        const firestore = getFirestore();

        const res = await firestore
              .collection('favorites')
              .doc(userId)
              .get();

            if(res.data()) {
              dispatch({
                type: types.FETCH_FAVORITES,
                payload: res.data().favorites,
              })
            } else {
              dispatch({
                type: types.FETCH_FAVORITES_FAILED,
              })
            }
    }
}

export default fetchFavorites;
