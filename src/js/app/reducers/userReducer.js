import * as types from "../actionsType/types"
const initState = {
  favorites: []
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
      case types.FETCH_FAVORITES: {
        return {
          ...state,
          favorites: [...action.payload,]
        }
      }
      case types.ADD_TO_FAVORITE: {
        return {
          ...state,
          favorites: [
            ...state.favorites,
            {
              catImage: action.catImage,
              id: action.id,
            }
          ]
        }
      }
      case types.REMOVE_FROM_FAVORITE: {
        const newFavorites = state.favorites.filter(el => el.id !== action.id)
        console.log('newFavorites', newFavorites)
          return {
            ...state,
            favorites: [...newFavorites]
          }
        }
      case types.SIGN_OUT_SUCCESS: {
          return initState;
      }

      default:
          return state
      }
}

export default userReducer;
