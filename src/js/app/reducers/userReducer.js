import * as favoritesTypes from "../actionsType/favoritesTypes"

const initState = {
  favorites: [],
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
      case favoritesTypes.ADD_TO_FAVORITE: {
        return Object.assign({}, state, {
          favorites: [
            ...state.favorites,
            {
              catImage: action.catImage,
              id: action.id,
            }
          ]
        })
        }
        case favoritesTypes.REMOVE_FROM_FAVORITE: {
          const newState = state.favorites.filter(el.id !== action.id)
          return newState;
        }

        default:
          return state
      }
}

export default userReducer;
