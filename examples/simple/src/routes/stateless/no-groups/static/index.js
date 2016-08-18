import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import { SimpleSelectyStateless } from '../../../../../../../dist/ddm.selecty.js';
import {
  updateFilteredOptions,
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
  updateValue,
  updateVisible,
  updateSelected,
  value,
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
      visible={visible}
      onBlur={() => updateVisible(false)}
      onFocus={() => updateVisible(true)}
      onClicked={item => {
        updateValue(item.label);
        updateSelected(item);
        updateVisible(false);
      }}
      onChange={text => updateValue(text)}
      onOptionsFiltered={filtered => {
        console.log("FILTERED", filtered);
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
  updateValue,
  updateVisible,
  updateSelected,
})(StatlessNoGroupStatic)
