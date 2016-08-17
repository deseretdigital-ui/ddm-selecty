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

const StatlessNoGroupStatic = ({
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
    Im Stateful!!!!! Default Options WITHOUT Groups:
    <SimpleSelecty
      items={items}
      options={defaultOptions}
      placeholder={'Stateless Without Groups'}
      value={value}
      visible={visible}
      onBlur={() => updateVisible(false)}
      onFocus={() => updateVisible(true)}
      onKeyDown={
        keyName => {
          const index = defaultOptions.findIndex(item => item.id === items.id);
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
      onClicked={item => {
        updateValue(item.label);
        updateSelected(item);
        updateVisible(false);
      }}
      onChange={text => updateValue(text)}
      onLoad={(callback) => {
        fetch(`${endpoint}${query}`)
          .then(checkStatus)
          .then(response => response.json())
          .then(json => {callback(json)})
          .catch(error => console.error('Request Failed in callApi', error));
        }
      }
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
