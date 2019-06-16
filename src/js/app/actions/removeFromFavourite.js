import * as favouritesTypes from "../actionsType/favouritesTypes"

const removeFromoFavourite = (id) => {
    return (dispatch)  => {
        dispatch({
                type: favouritesTypes.REMOVE_FROM_FAVOURITE,
                id,
            })
    }
}

export default removeFromoFavourite;