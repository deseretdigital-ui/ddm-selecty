import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import 'whatwg-fetch';
import { SimpleSelectyStateless } from '../../../../../../../dist/ddm.selecty.js';
import {
  updateFilteredOptions,
  updateOptions,
  updateSelected,
  updateTypedValue,
  updateValue,
  updateVisible,
} from './actions';

export class StatlessNoGroupAsync extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    fetch(`https://api.github.com/users/janiv/repos`)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log('API', response);
        this.props.updateOptions(response);
      }).catch((error) => {
        console.error(`Unsuccessful api call ${error}`);
      });
  }

  render() {
    const {
      options,
      updateFilteredOptions,
      updateTypedValue,
      updateValue,
      updateVisible,
      updateSelected,
      filteredOptions_1,
      items_1,
      typedValue_1,
      value_1,
      visible_1,
    } = this.props;

    return (
      <div>
        Stateless Async WITHOUT Groups:
        <SimpleSelectyStateless
          optLabel={'name'}
          optValue={'id'}
          style={{'zIndex':'100'}}
          filteredOptions={filteredOptions_1}
          items={items_1}
          sortable={true}
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
          onOptionsFiltered={filtered => {
            updateFilteredOptions(filtered, 1)
          }}
          onSelected={
            item => {
              updateValue(item.label, 1);
              updateSelected(item, 1);
            }
          }
          options={options}
          placeholder={'Stateless Without Groups'}
          tabIndex={1}
          typedValue={typedValue_1}
          value={value_1}
          visible={visible_1}
        />
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {...state.global, ...state.SLNGAsync};
}

export default connect(mapStateToProps, {
  updateFilteredOptions,
  updateOptions,
  updateSelected,
  updateTypedValue,
  updateValue,
  updateVisible,
})(StatlessNoGroupAsync)
