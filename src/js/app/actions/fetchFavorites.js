import * as types from "../actionsType/types"
import { resolve } from "url";

const fetchFavorites = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        firestore
            .collection('favorites')
            .doc(userId)
            .get()
            .then(res => {
                console.log('res', res)
                dispatch({
                    type: types.FETCH_FAVORITES,
                    payload: res
                });
            });
    }
}

export default fetchFavorites;
