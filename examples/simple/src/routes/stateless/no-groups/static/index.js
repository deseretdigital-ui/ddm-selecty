import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import { SimpleSelectyStateless } from '../../../../../../../dist/ddm.selecty.js';
import {
  updateFilteredOptions,
  updateTypedValue,
  updateValue,
  updateVisible,
  updateSelected,
} from './actions';
import KEY_MAP from '../../../../utils/keyMapping';

const StatlessNoGroupStatic = ({
  defaultOptions,
  defaultOptGroups,
  filteredOptions,
  items,
  updateFilteredOptions,
  updateTypedValue,
  updateValue,
  updateVisible,
  updateSelected,
  value,
  typedValue,
  visible
}) => (
  <div>
    Stateless Static WITHOUT Groups:
    <SimpleSelectyStateless
      items={items}
      filterable={true}
      filteredOptions={filteredOptions}
      options={defaultOptions}
      placeholder={'Stateless Without Groups'}
      value={value}
      typedValue={typedValue}
      visible={visible}
      onBlur={() => updateVisible(false)}
      onFocus={() => updateVisible(true)}
      onClicked={item => {
        updateValue(item.label);
        updateSelected(item);
        updateVisible(false);
      }}
      onChange={text => {
        updateTypedValue(text);
        updateValue(text);
        updateSelected(null);
      }}
      onOptionsFiltered={filtered => {
        updateFilteredOptions(filtered)
      }}
      onSelected={
        item => {
          updateValue(item.label);
          updateSelected(item);
        }
      }
    />
  </div>
);

function mapStateToProps (state, ownProps) {
  return {...state.global, ...state.SLNGStatic};
}

export default connect(mapStateToProps, {
  updateFilteredOptions,
  updateTypedValue,
  updateValue,
  updateVisible,
  updateSelected,
})(StatlessNoGroupStatic)
