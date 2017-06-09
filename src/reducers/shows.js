import * as types from '../types'

export default function getTVShow (state = {message: 'Nothing to show', payload: [], page: 0}, action) {
    switch (action.type) {
        case types.FETCH_SEARCH_REQUEST:
        return {
            ...state,
            message: "Loading"
        }
        case types.FETCH_SEARCH_NEXT:
        return {
            ...state,
            page: state.page + 1,
            message: 'Page' + state.page + 1,
            payload: state.payload.concat(action.payload)
        }
        case types.FETCH_SEARCH_FAIL:
        return {
            ...state,
            message: 'No results anymore'
        }
        default:
        return state
    }
}