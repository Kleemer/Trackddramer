import * as types from '../types'
import { DB_ROOT } from './constants'
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

export const saveShow_util = (show, watchlist_id) => (dispatch) => {
  let bodyUser = {watchlist_id: watchlist_id, show_id: show.ids.trakt, show_name: show.title}
  fetch(`${DB_ROOT}addshowtowatchlist`,
        { method: 'POST', headers: new Headers({"Content-Type": "application/json"}) 
          , body: JSON.stringify(bodyUser)
        }
  )
  .then(raw => raw.json())
  .then(function (result) {
      dispatch(saveShow(show));
  })
}