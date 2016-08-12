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
      onKeyDown={
        keyName => {
          const index = defaultOptions.findIndex(item => item.id === selected.id);
          const first = defaultOptions[0];
          const last = defaultOptions.length - 1;
          const next = defaultOptions[index + 1];
          const prev = defaultOptions[index - 1];

          switch (keyName) {
            case 'down':
              index < 0 || index === last ? updateSelected(first) : updateSelected(next);
              break;
            case 'up':
              index <= 0 ? updateSelected(defaultOptions[last]) : updateSelected(prev);
              break;
            case 'tab':
                updateSelected(defaultOptions[index]);
                updateValue(defaultOptions[index].label);
                document.activeElement.blur();
              break;
            case 'enter':
                console.log('do submit');
              break;
            case 'esc':
                document.activeElement.blur();
              break;
          }
        }
      }
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
