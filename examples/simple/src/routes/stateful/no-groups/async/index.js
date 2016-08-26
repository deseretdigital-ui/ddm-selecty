import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import 'whatwg-fetch';
import { SimpleSelecty } from '../../../../../../../dist/ddm.selecty.js';

const StatfulNoGroupAsync = ({
  defaultOptions,
  defaultOptGroups,
}) => (
  <div>
    Stateful Async WITHOUT Groups:
    <SimpleSelecty
      optLabel={'name'}
      optValue={'id'}
      load={() => {
        return (query, callback) => {
          const uri = 'https://api.github.com/users/janiv/repos';
          return fetch(uri)
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
              callback(response);
            }).catch((error) => {
              console.error(`Unsuccessful api call ${error}`);
              callback();
            });
        }
      }}
    />
  </div>
);

function mapStateToProps (state, ownProps) {
  return {...state.global, ...state.SLNGStatic};
}

export default connect(mapStateToProps, { })(StatfulNoGroupAsync)
