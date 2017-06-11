import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';

import configureStore from './store/configureStore'

import Home from './containers/Home'
import Shows from './containers/Shows'
import Watchlists from './containers/Watchlists'
import Results from './containers/Results'
import DevTools from './containers/DevTools'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

/*function checkAuth(nextState, replaceState) {
  let { user } = store.getState();
  let loggedIn = user.login.length !== 0;
  // check if the path isn't dashboard
  // that way we can apply specific logic
  // to display/render the path we want to
    if (!loggedIn)
        replaceState(null, '/');
}*/

render((
<Provider store={store}>
  <div>
    <Router history={history} >
      <Route path="/" component={Home}>
        <Route path="/shows" component={Shows} />
        <Route path="/watchlists" component={Watchlists} />
        <Route path="/results" component={Results} />
      </Route>
    </Router>
  <DevTools />
</div>
</Provider>), document.getElementById('root'))