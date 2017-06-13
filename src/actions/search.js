import * as types from '../types'
import { browserHistory } from 'react-router'
import { API_KEY, API_ROOT } from './constants'

export function cleanShow() {
  return {
    type: types.CLEAN_TV_SHOW
  }
}

export function fetchSearchSpecificRequest() {
  return {
    type: types.FETCH_SEARCH_SPECIFIC_REQUEST,
    payload: null
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

export function fetchSearchSpecific(show) {
  return {
    type: types.FETCH_SEARCH_SPECIFIC,
    payload: show
  }
}

export function fetchSearchFail() {
  return {
    type: types.FETCH_SEARCH_FAIL
  }
}

export const fetchSpecificSearchResults = (id) => (dispatch) => {
  dispatch(fetchSearchSpecificRequest());
  fetch(`${API_ROOT}search/trakt/${id}?type=show&extended=full`, { method: 'GET', headers: new Headers({
                                                               "Content-Type": "application/json",
                                                               "trakt-api-version": 2,
                                                               "trakt-api-key": API_KEY,
                                                              })
                                                            }
     )
    .then(raw => raw.json())
    .then(tvshow => dispatch(fetchSearchSpecific(tvshow)))
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

export const fetchPrevTrending = (page, text) => (dispatch) => {
  dispatch(fetchSearchRequest(text));
  fetch(`${API_ROOT}shows/trending?page=${page - 1}&limit=10&extended=full`, { method: 'GET', headers: new Headers({
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
  dispatch(cleanShow());
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

export const fetchNextTrending = (page, text) => (dispatch) => {
  dispatch(fetchSearchRequest(text));
  fetch(`${API_ROOT}shows/trending?page=${page + 1}&limit=10&extended=full`, { method: 'GET', headers: new Headers({
                                                               "Content-Type": "application/json",
                                                               "trakt-api-version": 2,
                                                               "trakt-api-key": API_KEY,
                                                              })
                                                            }
     )
    .then(raw => raw.json())
    .then(function(tvshows) {
      tvshows.length > 0 ? dispatch(fetchSearchNext(tvshows))
      :
      dispatch(fetchSearchFail())
    })
}