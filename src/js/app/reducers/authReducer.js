import * as types from "../actionsType/types"

const initState = {
    authError: null,
    user: {},
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case types.LOGIN_ERROR: {
            return {
                ...state,
                authError: "Login failed"
            }
        }
        case types.LOGIN_SUCCESS: {
           return {
               ...state,
               authError: null,
               user: action.payload
           }
        }
        case types.SIGN_OUT_SUCCESS: {
            return state;
        }
        case types.SIGN_UP_SUCCESS: {
            return {
                ...state,
                authError: null
            }
         }
         case types.SIGN_UP_ERROR: {
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