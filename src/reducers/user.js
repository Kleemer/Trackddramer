import * as types from '../types';

const initState = {
    id: 0,
    login: '',
    loginButton : 'login',
    shows: [],
    watchlists: []
}

export default function loginReducer(state = initState, action) {
    switch (action.type) {
        case types.LOGIN:
        return {
            ...state,
            id: action.id,
            login: action.login,
            loginButton: 'logout'
        };
        case types.LOGOUT:
        return {
            ...state,
            id: 0,
            login: '',
            watchlists: [],
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