import * as favoritesTypes from "../actionsType/favoritesTypes"

const setFavoritesRequest = () => {
    return {
        type: favoritesTypes.SET_FAVORITES_REQUEST,
    }
}
export default setFavoritesRequest;