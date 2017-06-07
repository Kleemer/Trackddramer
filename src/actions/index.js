import * as types from '../types'

//var Trakt = require('trakt-api');
//var trakt = Trakt('abb63a0caac4b0e578a0fb975c3ea64ec23617444587c43b0e03775ccbe76c73');

export function login() {
  return {
    type: types.LOGIN
  }
}

export function getPopularMovies() {
}