import * as favouritesTypes from "../actionsType/favouritesTypes"

const addToFavourite = (catImage, id, isFavourite) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({
            type: favouritesTypes.ADD_TO_FAVOURITE,
            catImage,
            id,
            isFavourite,
        })
    }
}

export default addToFavourite;