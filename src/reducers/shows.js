import * as types from '../types'

export default function getTVShow (state = {payload: 'Nothing to show'}, action) {
    switch (action.type) {
        case types.FETCH_SEARCH_REQUEST:
        return {
            ...state,
            payload: "Loading"
        }
        case types.FETCH_SEARCH_SUCCESS:
        return {
            ...state,
            payload: action.payload
        }
        default:
        return state
    }
}