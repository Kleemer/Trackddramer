import * as types from '../types'

export default function getTVShow (state = {payload: null}, action) {
    switch (action.type) {
        case types.GET_TV_SHOW:
        return {
            ...state,
            payload: action.payload
        }
        default:
        return state
    }
}