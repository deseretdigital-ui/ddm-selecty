import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import { SimpleSelectyStateless } from '../../../../../../../dist/ddm.selecty.js';
import {
  updateValue,
  updateVisible,
  updateSelected,
} from './actions';

const StatlessNoGroupAsync = ({
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
    Stateless Async WITHOUT Groups:
    <SimpleSelectyStateless
      items={items}
      options={defaultOptions}
      placeholder={'Stateless Without Groups'}
      value={value}
      visible={visible}
      onBlur={() => updateVisible(false)}
      onFocus={() => updateVisible(true)}
      onClicked={item => {
        updateValue(item.label);
        updateSelected(item);
        updateVisible(false);
      }}
      onChange={text => updateValue(text)}
    />
  </div>
);

function mapStateToProps (state, ownProps) {
  return {...state.global, ...state.SLNGStatic};
}

export default connect(mapStateToProps, {
  updateValue,
  updateVisible,
  updateSelected,
})(StatlessNoGroupAsync)
