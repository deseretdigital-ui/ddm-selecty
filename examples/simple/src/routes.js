import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './routes/app';
import Homepage from './routes/home';
import NotFound from './routes/not-found';
import StatlessNoGroupStatic from './routes/stateless/no-groups/static';

export const createRoutes = (store) => ([
  {
    path: '/',
    component: Root,
    indexRoute: {
      name: "Homepage",
      component: Homepage
    },
    childRoutes: [
      {
        name: "StatelessNoGroupsStatic",
        path: "/stateless/no-groups/static",
        component: StatlessNoGroupStatic
      }
    ]
  }, {
    path: '*',
    name: 'notfound',
    component: NotFound
  },
])

export default createRoutes
