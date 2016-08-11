import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // const createReducers = require('./reducers').default;
      //const nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(createReducer);
    });
  }

  store.asyncReducers = {};
  return store;
}
