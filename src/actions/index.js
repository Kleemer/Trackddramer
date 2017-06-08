import * as types from '../types'

const API_ROOT = 'https://api.trakt.tv/'
const API_KEY = "abb63a0caac4b0e578a0fb975c3ea64ec23617444587c43b0e03775ccbe76c73"

var Trakt = require('traktapi2');
var trakt = new Trakt({
  client_id: API_KEY,
  client_secret: '53bb2f9cc0fb2ac9c1f25b12fb8e7e653b3e0e9128978ed5d1afb57956a02479',
  redirect_uri: null, // Defaults to urn:ietf:wg:oauth:2.0:oob,
  user_agent: 'TraktClientNr1', // Defaults to url for this repository
  endpoint: API_ROOT // Defaults to https://api-v2launch.trakt.tv
});

export function login() {
  return {
    type: types.LOGIN
  }
}

export function logout() {
  return {
    type: types.LOGIN
  }
}

export function getAuthUrl(url) {
  return {
    type: types.GET_AUTH_URL,
    authUrl: url
  }
}

export const fetchLoginWithTrakt = () => (dispatch) => {
  var url = trakt.authUrl();
  dispatch(getAuthUrl(url));
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
                                                               "trakt-api-key": API_KEY,
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