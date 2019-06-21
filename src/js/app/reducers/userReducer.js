import * as types from "../actionsType/types"

const initState = {
  favorites: []
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
      case types.FETCH_FAVORITES: {
        return {
          favorites: [...action.payload,]
        }
      }

      case types.FETCH_FAVORITES_FAILED: {
        return state;
      }

      case types.ADD_TO_FAVORITE: {
        return {
          favorites: [
            ...state.favorites,
            {
              catImage: action.catImage,
              id: action.id,
            }
          ]
        }
      }

      case types.ADD_TO_FAVORITE_FAILED: {
        return state;
      }

      case types.REMOVE_FROM_FAVORITE: {
        const newFavorites = state.favorites.filter(el => el.id !== action.id)
          return {
            favorites: [...newFavorites]
          }
      }

      case types.REMOVE_FROM_FAVORITE_FAILED: {
        return state;
      }

      case types.SIGN_OUT_SUCCESS: {
          return initState;
      }

      default:
          return state
      }
}

export default userReducer;
