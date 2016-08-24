import React from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import { SimpleSelecty } from '../../../../../../../dist/ddm.selecty.js';
// import { } from './actions';

const StatfulNoGroupStatic = ({
  defaultOptions,
  defaultOptGroups,
}) => (
  <div>
    Stateful Static Data WITHOUT Groups:
    <SimpleSelecty />
  </div>
);

export default StatfulNoGroupStatic;
