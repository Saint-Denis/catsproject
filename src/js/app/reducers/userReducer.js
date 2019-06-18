import * as favoritesTypes from "../actionsType/favoritesTypes"

const initState = {
  favorites: [],
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case favoritesTypes.ADD_TO_FAVORITE: {
          return state
        }
        case favoritesTypes.REMOVE_FROM_FAVORITE: {
          return state
        }

        default:
          return state
      }
}

export default userReducer;