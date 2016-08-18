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
      onOptionsFiltered={filtered => updateFilteredOptions(filtered)}
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


// onKeyDown={
//   e => {
//     const key = KEY_MAP[e.keyCode];
//     if (key) {
//       e.preventDefault();
//       console.log('filteredOptions', filteredOptions);
//       const index = filteredOptions.findIndex(item => item.id === items.id);
//       const first = filteredOptions[0];
//       const last = filteredOptions.length - 1;
//       const next = filteredOptions[index + 1];
//       const prev = filteredOptions[index - 1];
//
//       switch (key) {
//         case 'down':
//           index < 0 || index === last ? updateSelected(first) : updateSelected(next);
//           break;
//         case 'up':
//           index <= 0 ? updateSelected(filteredOptions[last]) : updateSelected(prev);
//           break;
//         case 'tab':
//             updateSelected(filteredOptions[index]);
//             updateValue(filteredOptions[index].label);
//             document.activeElement.blur();
//           break;
//         case 'enter':
//             console.log('do submit');
//           break;
//         case 'esc':
//             document.activeElement.blur();
//           break;
//       }
//     }
//   }
// }
