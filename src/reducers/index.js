import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import user from './user'
import results from './results'
import watchlist from './watchlist'

const rootReducer = combineReducers({
  user,
  results,
  watchlist,
  routing
})

export default rootReducer
