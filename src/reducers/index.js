import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import login from './login'
import shows from './shows'

const rootReducer = combineReducers({
  login,
  shows,
  routing
})

export default rootReducer
