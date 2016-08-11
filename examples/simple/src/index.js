import 'babel-polyfill';
/* eslint-enable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import Root from './routes/app';
import DevTools from './devTools';

const initialState = {};
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const routes = require('./routes').default(store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router
        history={history}
        routes={routes}
        render={applyRouterMiddleware()}
      />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
