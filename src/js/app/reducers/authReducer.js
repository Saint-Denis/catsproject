import * as favoritesTypes from "../actionsType/favoritesTypes"

const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case favoritesTypes.LOGIN_ERROR: {
            return {
                ...state,
                authError: "Login failed"
            }
        }
        case favoritesTypes.LOGIN_SUCCESS: {
           console.log('login успех');
           return {
               ...state,
               authError: null,
           }
        }
        case favoritesTypes.SIGN_OUT_SUCCESS: {
            console.log('sugnout succes');
            return state;
        }
        case favoritesTypes.SIGN_UP_SUCCESS: {
            console.log('sugnoup succes');
            return {
                ...state,
                authError: null
            }
         }
         case favoritesTypes.SIGN_UP_ERROR: {
            console.log('sugnoup error');
            return {
                ...state,
                authError: action.err.message
            }
         }
        default:
            return state;
    }
}

export default authReducer;