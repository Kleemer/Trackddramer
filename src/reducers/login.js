import * as types from '../types';

export default function changeLoginState(state = {loginButton : 'login'}, action) {
    switch (action.type) {
        case types.LOGIN:
        return {
            ...state,
            loginButton: state.loginButton === 'login' ? 'logout' : 'login'
        };
        default:
        return state;
    }
}