import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import { SimpleSelecty } from '../../../../../../../dist/ddm.selecty.js';
import {
  updateValue,
  updateVisible,
  updateSelected,
} from './actions';
import 'whatwg-fetch';

const StatfulNoGroupStatic = ({
  defaultOptions,
  defaultOptGroups,
  items,
  updateValue,
  updateVisible,
  updateSelected,
  value,
  visible
}) => (
  <div>
    Stateful Static Data WITHOUT Groups:
  </div>
);

function mapStateToProps (state, ownProps) {
  return {...state.global, ...state.SLNGStatic};
}

export default connect(mapStateToProps, {
  updateValue,
  updateVisible,
  updateSelected,
})(StatfulNoGroupStatic)
