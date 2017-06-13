import * as types from '../types'
import { DB_ROOT } from './constants'
import { browserHistory } from 'react-router'
import { fetchWatchlists, cleanWatchlists } from '../actions/watchlist'

//Actions
export function login(login, id) {
  return {
    type: types.LOGIN,
    login: login,
    id: id
  }
}

export function logout() {
  return {
    type: types.LOGOUT
  }
}

export const logout_clean = () => (dispatch) => {
  dispatch(cleanWatchlists());
  dispatch(logout());
  browserHistory.push('/');  
}

//Utils functions
export const addUser = (text) => {
  let bodyUser = {login: text}
  fetch(`${DB_ROOT}user`,
        { method: 'POST', headers: new Headers({"Content-Type": "application/json"}) 
          , body: JSON.stringify(bodyUser)
        }
  )
  .then(raw => raw.json())
  .then(function (result) {
    return result.id;
  })
}

export const fetchLogin = (text) => (dispatch) => {
  fetch(`${DB_ROOT}user?login=${text}`, { method: 'GET', headers: new Headers()})
  .then(raw => raw.json())
  .then(function(results) {
      let id;
      if (results.length === 0)
          id = addUser(text);
      else
          id = results[0].id;
      dispatch(login(text, id));
      dispatch(fetchWatchlists(id));
      browserHistory.push('/');  
    })
}
