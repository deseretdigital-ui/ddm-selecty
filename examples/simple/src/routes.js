import React from 'react';
import Homepage from './routes/home';
import NotFound from './routes/not-found';
import { getAsyncInjectors } from './utils/asyncInjectors';

export const createRoutes = (store) => {
  const { injectReducer, injectSagas } = getAsyncInjectors(store);
  return [
    {
      path: '/',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          injectReducer('global', require('./routes/app/reducer').default);
          cb(null, require('./routes/app').default);
        })
      },
      indexRoute: {
        name: "Homepage",
        component: Homepage
      },
      childRoutes: [
        {
          name: "StatelessNoGroupsAsync",
          path: "/stateless/no-groups/async",
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              injectReducer('SLNGAsync', require('./routes/stateless/no-groups/async/reducer').default);
              cb(null, require('./routes/stateless/no-groups/async/').default);
            })
          },
        },
        {
          name: "StatelessNoGroupsStatic",
          path: "/stateless/no-groups/static",
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              injectReducer('SLNGStatic', require('./routes/stateless/no-groups/static/reducer').default);
              cb(null, require('./routes/stateless/no-groups/static/').default);
            })
          },
        },
        {
          name: "StatefulNoGroupsAsync",
          path: "/stateful/no-groups/async",
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              injectReducer('SFNGAsync', require('./routes/stateful/no-groups/async/reducer').default);
              cb(null, require('./routes/stateful/no-groups/async/').default);
            })
          },
        },
        {
          name: "StatefulNoGroupsStatic",
          path: "/stateful/no-groups/static",
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              injectReducer('SFNGStatic', require('./routes/stateful/no-groups/static/reducer').default);
              cb(null, require('./routes/stateful/no-groups/static/').default);
            })
          },
        }
      ]
    }, {
      path: '*',
      name: 'notfound',
      component: NotFound
    },
  ];
}

export default createRoutes
