import * as favoritesTypes from "../actionsType/favoritesTypes"

const removeFromoFavourite = (id) => {
    return (dispatch)  => {
        dispatch({
                type: favoritesTypes.REMOVE_FROM_FAVORITE,
                id,
            })
    }
}

export default removeFromoFavourite;