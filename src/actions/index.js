import * as types from '../types'

const API_ROOT = 'https://api.trakt.tv/'

//var Trakt = require('trakt-api');
//var trakt = Trakt('abb63a0caac4b0e578a0fb975c3ea64ec23617444587c43b0e03775ccbe76c73');

export function login() {
  return {
    type: types.LOGIN
  }
}

export function getTrendingTVShows(tvshows) {
  return {
    type: types.GET_TRENDING_TV_SHOWS,
    payload: tvshows
  }
}

export const fetchTrendingShows = (dispatch) => {
  fetch(`${API_ROOT}shows/trending`, { method: 'GET', headers: new Headers({
                                                               "Content-Type": "application/json",
                                                               "trakt-api-version": 2,
                                                               "trakt-api-key": "abb63a0caac4b0e578a0fb975c3ea64ec23617444587c43b0e03775ccbe76c73",
                                                               })
                                     }
     )
    .then(raw => raw.json())
    .then(tvshows => dispatch(getTrendingTVShows(tvshows)))
}

export function getTVShow(tvshow) {
  return {
    type: types.GET_TV_SHOW,
    payload: tvshow
  }
}

export const fetchTVShow = (id, type) => (dispatch) => {
  fetch(`${API_ROOT}search/${type}/${id}?type=show`, { method: 'GET', headers: new Headers({
                                                               "Content-Type": "application/json",
                                                               "trakt-api-version": 2,
                                                               "trakt-api-key": "abb63a0caac4b0e578a0fb975c3ea64ec23617444587c43b0e03775ccbe76c73",
                                                               })
                                     }
     )
    .then(raw => raw.json())
    .then(tvshow => dispatch(getTVShow(tvshow)))
}