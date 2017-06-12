import * as types from '../types'


const initState = {
    list: [],
    specific: null,
    isFetching:true,
    isFetchingSpecific:true

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
            specific:null,
            isFetching:true
        }
        case types.FETCH_SPECIFIC_WATCHLIST:
        return {
            ...state,
            isFetchingSpecific:true
        }
        case types.FETCH_WATCHLISTS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            list: action.list
        }
        case types.FETCH_SPECIFIC_WATCHLIST_SUCCESS:
        let spec = {
            name: action.watchlist.infos[0].name,
            shows: action.watchlist.watchlist
        }
        return {
            ...state,
            isFetchingSpecific: false,
            specific: spec
        }
        case types.CLEAN_WATCHLISTS:
        return {
            ...state,
            isFetching: true,
            isFetchingSpecific: true,
            specific: null
        }
        default:
        return state
    }
}