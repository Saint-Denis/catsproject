import * as types from "../actionsType/types"

const resetState = () => {
    return (dispatch) => {
        dispatch({
            type: types.RESET_STATE,
        })
    }
}

export default resetState;