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

const StatlessNoGroupStatic = ({
  defaultOptions,
  defaultOptGroups,
  updateFilteredOptions,
  updateTypedValue,
  updateValue,
  updateVisible,
  updateSelected,
  filteredOptions_1,
  filteredOptions_2,
  item_1,
  item_2,
  typedValue_1,
  typedValue_2,
  value_1,
  value_2,
  visible_1,
  visible_2
}) => (
  <div>
    Stateless Static WITHOUT Groups:
    <div style={{'zIndex':'100', 'position':'relative'}}>
      <SimpleSelectyStateless
        filteredOptions={filteredOptions_1}
        item={item_1}
        optLabel={'label'}
        optValue={'id'}
        onBlur={() => updateVisible(false, 1)}
        onFocus={() => updateVisible(true, 1)}
        onClicked={item => {
          updateValue(item.label, 1);
          updateTypedValue(item.label, 1);
          updateSelected(item, 1);
          updateVisible(false, 1);
        }}
        onChange={text => {
          updateTypedValue(text, 1);
          updateValue(text, 1);
          updateSelected(null, 1);
        }}
        onFiltered={filtered => {
          updateFilteredOptions(filtered, 1)
        }}
        onChosen={
          item => {
            updateValue(item.label, 1);
            updateSelected(item, 1);
          }
        }
        options={defaultOptions}
        placeholder={'Stateless Without Groups'}
        sortable={true}
        tabIndex={1}
        typedValue={typedValue_1}
        value={value_1}
        visible={visible_1}
      />
    </div>

    <div style={{width: '100%', display: 'inline-block', marginTop: '50px'}}>
      The below SimpleSelecty component is an exact duplicate of the one above,
      except that it has a limit for the number of suggested, and it is wrapped
      in a smaller div to display SimpleSelecty responsive nature. The div has
      a width of 500px and SimpleSelecty will fill up 100% of its containers width.
      <div style={{width: '500px', marginTop: '20px'}}>
        <SimpleSelectyStateless
          filteredOptions={filteredOptions_2}
          item={item_2}
          limit={5}
          noResults={{show: true, label: 'Nothing!!'}}
          optLabel={'label'}
          optValue={'id'}
          onBlur={() => updateVisible(false, 2)}
          onFocus={() => updateVisible(true, 2)}
          onClicked={item => {
            updateValue(item.label, 2);
            updateTypedValue(item.label, 2);
            updateSelected(item, 2);
            updateVisible(false, 2);
          }}
          onChange={text => {
            updateTypedValue(text, 2);
            updateValue(text, 2);
            updateSelected(null, 2);
          }}
          onFiltered={filtered => {
            updateFilteredOptions(filtered, 2)
          }}
          onChosen={
            item => {
              updateValue(item.label, 2);
              updateSelected(item, 2);
            }
          }
          options={defaultOptions}
          placeholder={'Stateless Without Groups'}
          sortable={true}
          tabIndex={2}
          typedValue={typedValue_2}
          value={value_2}
          visible={visible_2}
        />
      </div>
    </div>
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
