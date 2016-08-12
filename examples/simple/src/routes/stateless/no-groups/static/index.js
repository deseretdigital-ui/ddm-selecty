import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import { SimpleSelectyStateless } from '../../../../../../../dist/ddm.selecty.js';
import {
  updateValue,
  updateVisible,
  updateSelected,
} from './actions';

const StatlessNoGroupStatic = ({
  defaultOptions,
  defaultOptGroups,
  selected,
  updateValue,
  updateVisible,
  updateSelected,
  value,
  visible
}) => (
  <div>
    Default Options WITHOUT Groups:
    <SimpleSelectyStateless
      onValueChange={text => updateValue(text)}
      onSelected={item => {
        updateValue(item.label);
        updateSelected(item);
        updateVisible(false);
      }}
      selected={selected}
      options={defaultOptions}
      placeholder={'Stateless Without Groups'}
      focus={() => updateVisible(true)}
      blur={() => updateVisible(false)}
      value={value}
      visible={visible}
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
})(StatlessNoGroupStatic)
