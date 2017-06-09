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
        case types.GET_ACCESS_TOKEN:
         return {
            ...state,
            loginButton: state.loginButton,
            access_token: action.body.access_token
        };
        default:
        return state;
    }
}