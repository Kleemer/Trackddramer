import * as types from '../types';

export default function loginReducer(state = {loginButton : 'login', authUrl : ''}, action) {
    switch (action.type) {
        case types.LOGIN:
        return {
            ...state,
            loginButton: 'logout',
            authUrl: state.authUrl
        };
        case types.LOGOUT:
        return {
            ...state,
            loginButton: 'login',
            authUrl: state.authUrl
        };
        case types.GET_AUTH_URL:
         return {
            ...state,
            loginButton: state.loginButton,
            authUrl: action.authUrl
        };
        default:
        return state;
    }
}