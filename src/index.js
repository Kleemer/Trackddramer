import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import './bulma.css'

import configureStore from './store/configureStore'

import Home from './containers/Home'
import Shows from './containers/Shows'
import Watchlists from './containers/Watchlists'
import Results from './containers/Results'
import Restricted from './containers/Restricted'
import DevTools from './containers/DevTools'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

function checkAuth(nextState, replaceState) {
  let { user } = store.getState();
  let loggedIn = user.id !== 0;
  // check if the path isn't dashboard
  // that way we can apply specific logic
  // to display/render the path we want to
    if (!loggedIn) {
      replaceState({
        pathname: '/restricted',
        state: {
          nextPathname: nextState.location.pathname,
        },
      })
    }
}

render((
<Provider store={store}>
  <div>
    <Router history={history} >
      <Route path="/" component={Home}>
        <Route path="/restricted" component={Restricted} />
        <Route path="/results" component={Results} />
        <Route path="/shows" component={Shows} />
        <Route onEnter={checkAuth}>
          <Route path="/watchlists" component={Watchlists} />
        </Route>
      </Route>
    </Router>
  <DevTools />
</div>
</Provider>), document.getElementById('root'))