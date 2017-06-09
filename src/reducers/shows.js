import * as types from '../types'

export default function showsReducer (state = {shows: [], selected: null}, action) {
    switch (action.type) {
        case types.SAVE_TV_SHOW:
        return {
            ...state,
            shows: state.shows.concat(action.show)
        }
        case types.GET_TV_SHOW:
        return {
        ...state
        }
        default:
        return state
    }
}