import * as types from '../types'
import { DB_ROOT } from './constants'

//Actions
export function addWatchlist(id, user_id, name) {
  return {
    type: types.ADD_WATCHLIST,
    id: id,
    user_id: user_id,
    name: name
  }
}

export function fetchWatchlist() {
  return {
    type: types.FETCH_WATCHLISTS
  }
}

export function fetchWatchlistSuccess(list) {
  return {
    type: types.FETCH_WATCHLISTS_SUCCESS,
    list: list
  }
}

//Utils functions
export const fetchWatchlists = (user_id) => (dispatch) => {
  dispatch(fetchWatchlist());
  fetch(`${DB_ROOT}watchlistsByUserId?user=${user_id}`, { method: 'GET', headers: new Headers()})
    .then(raw => raw.json())
    .then(tvshow => dispatch(fetchWatchlistSuccess(tvshow)))
}

export const addWatchlist_util = (text, id) => (dispatch) => {
  let bodyUser = {user_id: id, name: text}
  fetch(`${DB_ROOT}watchlist`,
        { method: 'POST', headers: new Headers({"Content-Type": "application/json"}) 
          , body: JSON.stringify(bodyUser)
        }
  )
  .then(raw => raw.json())
  .then(function (result) {
      dispatch(addWatchlist(result.id, id, text));
  })
}