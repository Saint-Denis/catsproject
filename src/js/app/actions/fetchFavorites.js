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
              console.log("No such document!");
            }


        // firestore
        //   .collection("favorites")
        //   .doc(userId)
        //   .get()
        //   .then(doc => {
        //     if (doc.exists) {
        //       console.log("Document data:", doc.data());
        //       dispatch({
        //         type: types.FETCH_FAVORITES,
        //         payload: doc.data().favorites,
        //     })
        //     } else {
        //       // doc.data() will be undefined in this case
        //       console.log("No such document!");
        //   }

        //   })
    }
}

export default fetchFavorites;
