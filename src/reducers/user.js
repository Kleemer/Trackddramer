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
        return {
            ...state,
            shows: state.shows.concat(action.show)
        }
        default:
        return state;
    }
}