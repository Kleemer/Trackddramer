import * as types from '../types'

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