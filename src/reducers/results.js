import * as types from '../types'

export default function resultsReducer (state = {request: null, message: 'Nothing to show', payload: [], page: 0}, action) {
    switch (action.type) {
        case types.FETCH_SEARCH_REQUEST:
        var newPage = state.request === action.request ? state.page : 0;
        return {
            ...state,
            page: newPage,
            request: action.request,
            message: "Loading"
        }
        case types.FETCH_SEARCH_NEXT:
        return {
            ...state,
            page: state.page + 1,
            message: 'Results',
            payload: action.payload
        }
        case types.FETCH_SEARCH_PREV:
        return {
            ...state,
            page: state.page - 1,
            message: 'Results',
            payload: action.payload
        }
        case types.FETCH_SEARCH_SPECIFIC:
        return {
            ...state,
            payload: action.payload
        }
        case types.FETCH_SEARCH_FAIL:
        return {
            ...state,
            message: 'No results anymore',
            page: state.page + 1,
            payload: []
        }
        default:
        return state
    }
}