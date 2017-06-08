import * as types from '../types'
import { browserHistory } from 'react-router'

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

export function fetchSearchRequest() {
  return {
    type: types.FETCH_SEARCH_REQUEST,
    payload: null
  }
}

export function fetchSearchSuccess(tvshows) {
  return {
    type: types.FETCH_SEARCH_SUCCESS,
    payload: tvshows
  }
}

export const fetchSearchResults = (text) => (dispatch) => {
  browserHistory.push('/shows');  
  dispatch(fetchSearchRequest());
  fetch(`${API_ROOT}search/show?query=${text.replace(/ /g,"+")}`, { method: 'GET', headers: new Headers({
                                                               "Content-Type": "application/json",
                                                               "trakt-api-version": 2,
                                                               "trakt-api-key": API_KEY,
                                                               })
                                     }
     )
    .then(raw => raw.json())
    .then(tvshows => dispatch(fetchSearchSuccess(tvshows)))
}

/*export const fetchTVShow = (id, type) => (dispatch) => {
  fetch(`${API_ROOT}search/${type}/${id}?type=show`, { method: 'GET', headers: new Headers({
                                                               "Content-Type": "application/json",
                                                               "trakt-api-version": 2,
                                                               "trakt-api-key": "abb63a0caac4b0e578a0fb975c3ea64ec23617444587c43b0e03775ccbe76c73",
                                                               })
                                     }
     )
    .then(raw => raw.json())
    .then(tvshow => dispatch(getTVShow(tvshow)))
}*/