import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';

import configureStore from './store/configureStore'

import Home from './containers/Home'
import Shows from './containers/Shows'
import DevTools from './containers/DevTools'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render((
<Provider store={store}>
  <div>
    <Router history={history} >
      <Route path="/" component={Home}>
        <Route path="/shows" component={Shows} />
      </Route>
    </Router>
  <DevTools />
</div>
</Provider>), document.getElementById('root'))