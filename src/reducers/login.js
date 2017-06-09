import * as types from '../types';

export default function loginReducer(state = {loginButton : 'login'}, action) {
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
        default:
        return state;
    }
}