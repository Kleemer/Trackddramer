import * as types from '../types';

export default function loginReducer(state = {login: 'guest', loginButton : 'login', shows: []}, action) {
    switch (action.type) {
        case types.LOGIN:
        return {
            ...state,
            loginButton: 'logout'
        };
        case types.LOGOUT:
        return {
            ...state,
            loginButton: 'login'
        };
        case types.SAVE_TV_SHOW:
        if (!state.shows.find(function (elt) { return elt.id === action.show.ids.trakt }))
            return {
                ...state,
                shows: state.shows.concat({
                    id:action.show.ids.trakt,
                    value:action.show
                })
            }
        else
            return state;
        default:
        return state;
    }
}