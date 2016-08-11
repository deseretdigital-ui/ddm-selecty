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
          name: "StatelessNoGroupsStatic",
          path: "/stateless/no-groups/static",
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              injectReducer('SLNGStatic', require('./routes/stateless/no-groups/static/reducer').default);
              cb(null, require('./routes/stateless/no-groups/static/').default);
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
