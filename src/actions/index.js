import * as types from '../types'
import { browserHistory } from 'react-router'

const API_ROOT = 'https://api.trakt.tv/'
const API_KEY = "abb63a0caac4b0e578a0fb975c3ea64ec23617444587c43b0e03775ccbe76c73"

export function login() {
  return {
    type: types.LOGIN
  }
}

export function logout() {
  return {
    type: types.LOGOUT
  }
}

export function getShow(show) {
  return {
    type: types.GET_TV_SHOW,
    show: show
  }
}

export function saveShow(show) {
  return {
    type: types.SAVE_TV_SHOW,
    show: show
  }
}

export function fetchSearchRequest(request) {
  return {
    type: types.FETCH_SEARCH_REQUEST,
    request: request,
    payload: null
  }
}

export function fetchSearchNext(tvshows) {
  return {
    type: types.FETCH_SEARCH_NEXT,
    payload: tvshows
  }
}

export function fetchSearchPrev(tvshows) {
  return {
    type: types.FETCH_SEARCH_PREV,
    payload: tvshows
  }
}

export function fetchSearchFail() {
  return {
    type: types.FETCH_SEARCH_FAIL
  }
}

export const fetchPrevSearchResults = (page, text) => (dispatch) => {
  browserHistory.push('/results');  
  dispatch(fetchSearchRequest(text));
  fetch(`${API_ROOT}search/show?query=${text.replace(/ /g,"+")}&page=${page - 1}&limit=10&extended=full`, { method: 'GET', headers: new Headers({
                                                               "Content-Type": "application/json",
                                                               "trakt-api-version": 2,
                                                               "trakt-api-key": API_KEY,
                                                              })
                                                            }
     )
    .then(raw => raw.json())
    .then(function(tvshows) {
      tvshows.length > 0 ? dispatch(fetchSearchPrev(tvshows))
      :
      dispatch(fetchSearchFail())
    })
}

export const fetchNextSearchResults = (page, text, isPrev) => (dispatch) => {
  browserHistory.push('/results');  
  dispatch(fetchSearchRequest(text));
  fetch(`${API_ROOT}search/show?query=${text.replace(/ /g,"+")}&page=${page + 1}&limit=10&extended=full`, { method: 'GET', headers: new Headers({
                                                               "Content-Type": "application/json",
                                                               "trakt-api-version": 2,
                                                               "trakt-api-key": API_KEY,
                                                              })
                                                            }
     )
    .then(raw => raw.json())
    .then(tvshows => tvshows.length > 0 ? dispatch(fetchSearchNext(tvshows)) : dispatch(fetchSearchFail()))
}