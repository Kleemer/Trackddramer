import * as types from '../types'
import { browserHistory } from 'react-router'

const API_ROOT = 'https://api.trakt.tv/'
const API_KEY = "abb63a0caac4b0e578a0fb975c3ea64ec23617444587c43b0e03775ccbe76c73"
const API_SECRET = "53bb2f9cc0fb2ac9c1f25b12fb8e7e653b3e0e9128978ed5d1afb57956a02479"

const Trakt = require('trakt.tv');

const trakt = new Trakt({
  client_id: API_KEY,
  client_secret: API_SECRET,
  redirect_uri: null,   // defaults to 'urn:ietf:wg:oauth:2.0:oob'
  api_url: null         // defaults to 'https://api.trakt.tv'
});

var Trakt2 = require('traktapi2');
var trakt2 = new Trakt2({
  client_id: API_KEY,
  client_secret: API_SECRET,
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

export function getAccessToken(body) {
  return {
    type: types.GET_ACCESS_TOKEN,
    body: body
  }
}

export function fetchSearchRequest() {
  return {
    type: types.FETCH_SEARCH_REQUEST,
    payload: null
  }
}

export function fetchSearchNext(tvshows) {
  return {
    type: types.FETCH_SEARCH_NEXT,
    payload: tvshows
  }
}

export function fetchSearchFail() {
  return {
    type: types.FETCH_SEARCH_FAIL
  }
}

export const exchange_code = (code) => (dispatch) => {
  trakt.exchange_code(code).then(result => {
    console.log(result)
  })
}

export const authorizeTrakt = (code) => (dispatch) => {

  var url = trakt.get_url();
  console.log(url);
  /*var body = {
    'code': code,
    'client_id': API_KEY,
    'client_secret': API_SECRET,
    'redirect_uri': 'urn:ietf:wg:oauth:2.0:oob',
    'grant_type': 'authorization_code'
  };
  fetch(`${API_ROOT}oauth/token`, { method: 'POST', headers: new Headers({
                                                               "Content-Type": "application/json",
                                                               "Access-Control-Allow-Origin": '*'
                                                              }), body: body, mode: 'cors'
                                                            }
     )
    .then(response => response.json())
    .then((body => dispatch(fetchSearchNext(body))))*/
}

export const fetchSearchResults = (page, text) => (dispatch) => {
  browserHistory.push('/shows');  
  dispatch(fetchSearchRequest());

  fetch(`${API_ROOT}search/show?query=${text.replace(/ /g,"+")}&page=${page + 1}&limit=10`, { method: 'GET', headers: new Headers({
                                                               "Content-Type": "application/json",
                                                               "trakt-api-version": 2,
                                                               "trakt-api-key": API_KEY,
                                                              })
                                                            }
     )
    .then(function(response) {
      console.log("here")
      for (var pair of response.headers.entries()) {
        console.log(pair[0]+ ': '+ pair[1]);
      }
      return response.json()
    })
    .then((tvshows => dispatch(fetchSearchNext(tvshows))), function(response) {
      console.log("there")
      dispatch(fetchSearchFail())
    })
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