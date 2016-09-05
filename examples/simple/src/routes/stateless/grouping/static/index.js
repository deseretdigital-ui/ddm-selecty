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

const StatlessGroupingStatic = ({
  alternativeOptions,
  alternativeOptGroups,
  defaultOptions,
  defaultOptGroups,
  updateFilteredOptions,
  updateTypedValue,
  updateValue,
  updateVisible,
  updateSelected,
  filteredOptions_1,
  filteredOptions_2,
  filteredOptions_3,
  item_1,
  item_2,
  item_3,
  typedValue_1,
  typedValue_2,
  typedValue_3,
  value_1,
  value_2,
  value_3,
  visible_1,
  visible_2,
  visible_3
}) => (
  <div>
    Stateless Static WITH Groupings:


    <div style={{zIndex:'70', marginTop: '20px', position:'relative'}}>
      This examples shows that limit will reduce the number found in all
      option groups. However, you can also customize each groups' limit by
      adding a limit field to the objects in optionGroups parameter. The limit
      is set to 3 but 'Saved Locations' will have all its items due to it's option
      group object having a limit on it set to 'all', and 'Recent Location' will
      only have a single item on it.
      <SimpleSelectyStateless
        style={{'zIndex':'100'}}
        filteredOptions={filteredOptions_3}
        item={item_3}
        sortable={false}
        limit={3}
        optLabel={'label'}
        optValue={'id'}
        onBlur={() => updateVisible(false, 3)}
        onFocus={() => updateVisible(true, 3)}
        onClicked={item => {
          updateValue(item.label, 3);
          updateTypedValue(item.label, 3);
          updateSelected(item, 3);
          updateVisible(false, 3);
        }}
        onChange={text => {
          updateTypedValue(text, 3);
          updateValue(text, 3);
          updateSelected(null, 3);
        }}
        onFiltered={filtered => {
          updateFilteredOptions(filtered, 3)
        }}
        onSelected={
          item => {
            updateValue(item.label, 3);
            updateSelected(item, 3);
          }
        }
        options={alternativeOptions}
        optionGroups={alternativeOptGroups}
        placeholder={'Stateless WITH Groupings'}
        tabIndex={3}
        typedValue={typedValue_3}
        value={value_3}
        visible={visible_3}
      />
    </div>
  </div>
);

function mapStateToProps (state, ownProps) {
  return {...state.global, ...state.SLGStatic};
}

export default connect(mapStateToProps, {
  updateFilteredOptions,
  updateTypedValue,
  updateValue,
  updateVisible,
  updateSelected,
})(StatlessGroupingStatic)


// <div style={{'zIndex':'100', 'position':'relative'}}>
//   This option shows using various fields and values found on the
//   json objects, to specify very specific option groups and ordering
//   without actually changing the api and how the data is returned.
//   <SimpleSelectyStateless
//     style={{'zIndex':'100'}}
//     filteredOptions={filteredOptions_1}
//     item={item_1}
//     sortable={true}
//     optLabel={'label'}
//     optValue={'id'}
//     onBlur={() => updateVisible(false, 1)}
//     onFocus={() => updateVisible(true, 1)}
//     onClicked={item => {
//       updateValue(item.label, 1);
//       updateTypedValue(item.label, 1);
//       updateSelected(item, 1);
//       updateVisible(false, 1);
//     }}
//     onChange={text => {
//       updateTypedValue(text, 1);
//       updateValue(text, 1);
//       updateSelected(null, 1);
//     }}
//     onFiltered={filtered => {
//       updateFilteredOptions(filtered, 1)
//     }}
//     onSelected={
//       item => {
//         updateValue(item.label, 1);
//         updateSelected(item, 1);
//       }
//     }
//     options={defaultOptions}
//     optionGroups={defaultOptGroups}
//     placeholder={'Stateless WITH Groupings'}
//     tabIndex={1}
//     typedValue={typedValue_1}
//     value={value_1}
//     visible={visible_1}
//   />
// </div>
// <div style={{zIndex:'80', marginTop: '20px', position:'relative'}}>
//   Unlike the option above, this example displays how to using Groupings
//   when the API data has been altered to return a field on the json objects
//   called <i>group</i>.
//   <SimpleSelectyStateless
//     style={{'zIndex':'100'}}
//     filteredOptions={filteredOptions_2}
//     item={item_2}
//     sortable={false}
//     optLabel={'label'}
//     optValue={'id'}
//     onBlur={() => updateVisible(false, 2)}
//     onFocus={() => updateVisible(true, 2)}
//     onClicked={item => {
//       updateValue(item.label, 2);
//       updateTypedValue(item.label, 2);
//       updateSelected(item, 2);
//       updateVisible(false, 2);
//     }}
//     onChange={text => {
//       updateTypedValue(text, 2);
//       updateValue(text, 2);
//       updateSelected(null, 2);
//     }}
//     onFiltered={filtered => {
//       updateFilteredOptions(filtered, 2)
//     }}
//     onSelected={
//       item => {
//         updateValue(item.label, 2);
//         updateSelected(item, 2);
//       }
//     }
//     options={alternativeOptions}
//     optionGroups={alternativeOptGroups}
//     placeholder={'Stateless WITH Groupings'}
//     tabIndex={2}
//     typedValue={typedValue_2}
//     value={value_2}
//     visible={visible_2}
//   />
// </div>
