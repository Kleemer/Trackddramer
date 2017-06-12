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

export function fetchSpecificWatchlist() {
  return {
    type: types.FETCH_SPECIFIC_WATCHLIST
  }
}

export function fetchWatchlistsSuccess(list) {
  return {
    type: types.FETCH_WATCHLISTS_SUCCESS,
    list: list
  }
}

export function fetchSpecificWatchlistSuccess(infos, watchlist) {
  return {
    type: types.FETCH_SPECIFIC_WATCHLIST_SUCCESS,
    watchlist: {infos, watchlist}
  }
}

export function cleanWatchlists() {
  return {
    type: types.CLEAN_WATCHLISTS
  }
}

//Utils functions
export const fetchWatchlists = (user_id) => (dispatch) => {
  dispatch(fetchWatchlist());
  fetch(`${DB_ROOT}watchlistsByUserId?user=${user_id}`, { method: 'GET', headers: new Headers()})
    .then(raw => raw.json())
    .then(watchlist => dispatch(fetchWatchlistsSuccess(watchlist)))
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

export const fetchSpecificWatchlistShows_util = (id, infos) => (dispatch) => {
  fetch(`${DB_ROOT}watchlistContent?id=${id}`, { method: 'GET', headers: new Headers()})
  .then(raw => raw.json())
  .then(watchlist => dispatch(fetchSpecificWatchlistSuccess(infos, watchlist)))
}

export const fetchSpecificWatchlistInfos_util = (id) => (dispatch) => {
  dispatch(fetchSpecificWatchlist());
  fetch(`${DB_ROOT}watchlist?id=${id}`, { method: 'GET', headers: new Headers()})
  .then(raw => raw.json())
  .then(infos => {
    dispatch(fetchSpecificWatchlistShows_util(id, infos))
  });
}