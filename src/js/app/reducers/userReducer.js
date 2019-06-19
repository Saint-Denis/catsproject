import * as types from "../actionsType/types"
const initState = {
  favorites: []
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
      case types.FETCH_FAVORITES: {
        return {
          ...state,
          favorites: [
            ...state.favorites,
            {
              favorites: payload.favorites,
            }
          ]
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
          return {
            ...state,
            favorites: [...state.favorites.filter(el => el.id !== action.id)]
          }
        }

        default:
          return state
      }
}

export default userReducer;
