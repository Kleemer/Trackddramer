import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import user from './user'
import results from './results'

const rootReducer = combineReducers({
  user,
  results,
  routing
})

export default rootReducer
