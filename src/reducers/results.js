import * as types from '../types'


const initState = {
    request: null,
    message: 'Nothing to show',
    isFetching: true,
    payload: [],
    page: 0
}

export default function resultsReducer (state = initState, action) {
    switch (action.type) {
        case types.FETCH_SEARCH_REQUEST:
        var newPage = state.request === action.request ? state.page : 0;
        return {
            ...state,
            page: newPage,
            request: action.request,
            message: "Loading",
            isFetching: true
        }
        case types.FETCH_SEARCH_SPECIFIC_REQUEST:
        return {
            ...state,
            isFetching: true
        }
        case types.FETCH_SEARCH_NEXT:
        return {
            ...state,
            page: state.page + 1,
            message: 'Results',
            payload: action.payload,
            isFetching: false
        }
        case types.FETCH_SEARCH_PREV:
        return {
            ...state,
            page: state.page - 1,
            message: 'Results',
            payload: action.payload,
            isFetching: false

        }
        case types.FETCH_SEARCH_SPECIFIC:
        return {
            ...state,
            isFetching: false,
            payload: action.payload
        }
        case types.FETCH_SEARCH_FAIL:
        return {
            ...state,
            message: 'No results anymore',
            page: state.page + 1,
            isFetching: false,
            payload: []
        }
        default:
        return state
    }
}