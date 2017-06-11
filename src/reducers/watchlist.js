import * as types from '../types'


const initState = {
    list: [],
    isFetching:true
}

export default function watchlistReducer (state = initState, action) {
    switch (action.type) {
        case types.ADD_WATCHLIST:
        return {
            ...state,
            list: state.list.concat({id: action.id, user_id: action.user_id, name: action.name})
        }
        case types.FETCH_WATCHLISTS:
        return {
            ...state,
            isFetching:true
        }
        case types.FETCH_WATCHLISTS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            list: action.list
        }
        default:
        return state
    }
}