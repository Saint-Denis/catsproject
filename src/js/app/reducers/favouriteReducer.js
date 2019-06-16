import * as favouritesTypes from "../actionsType/favouritesTypes"

const initState = []

const favouriteReducer = (state = initState, action) => {
    switch (action.type) {
        case favouritesTypes.ADD_TO_FAVOURITE: {
          return [
            ...state,
            {
              catImage: action.catImage,
              id: action.id,
              isFavourite: action.isFavourite,
            }
          ]
        }
        case favouritesTypes.REMOVE_FROM_FAVOURITE: {
          const newState = state.filter(el => el.id !== action.id );
          console.log(newState)
          return newState;
        }

        default:
          return state
      }
}

export default favouriteReducer;