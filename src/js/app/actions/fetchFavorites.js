import * as types from "../actionsType/types"

const fetchFavorites = (id) => {
  return async (dispatch, getState, { getFirestore }) => {
        const userId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        // const userId = getState().firebase.auth.uid;

        console.log('userId', userId)

        dispatch({
          type: types.FETCH_FAVORITES,
          payload: await firestore
                  .collection('favorites')
                  .doc(userId)
                  .get()
        })


        // try {
        //     const res = await firestore
        //       .collection('favorites')
        //       .doc(id)
        //       .get();
        //   console.log('id', id)
        //   console.log('result----------', res)
        //   dispatch({
        //     type: types.FETCH_FAVORITES,
        //     payload: res.data(),
        //   })

        //   if (!res.data()) {
        //     console.log('FETCH_FAVORITES');
        //     dispatch({
        //       type: types.FETCH_FAVORITES,
        //       payload: res.data(),
        //     })
        //   } else {
        //     dispatch({
        //       type: types.NEW_USER,
        //     })
        //   }
        //   } catch (err) {
        //     console.log('err', err);
        //   }
    }
}

export default fetchFavorites;
