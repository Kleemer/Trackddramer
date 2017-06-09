import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import user from './user'
import results from './results'
import shows from './shows'

const rootReducer = combineReducers({
  user,
  results,
  shows,
  routing
})

export default rootReducer
