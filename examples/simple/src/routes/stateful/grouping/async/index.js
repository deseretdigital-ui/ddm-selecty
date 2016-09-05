import React from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import { SimpleSelecty } from '../../../../../../../dist/ddm.selecty.js';
// import { } from './actions';

const StatfulGroupingAsync = ({
  alternativeOptions,
  alternativeOptGroups,
  defaultOptions,
  defaultOptGroups,
}) => (
  <div>
    Stateful Static WITH Groupings:
    <SimpleSelecty
      autoHighlight={false}
      autoSuggest={false}
      placeholder={"Where?"}
      optLabel={'name'}
      optValue={'id'}
      optionGroups={[
        {
          value: 'Search Results',
          label: '',
          limit: '10',
        },
        {
          value: 'Current Location',
          label: 'Current Location',
          filterable: false,
          limit: '2',
        }, {
          value: 'Recent Locations',
          label: 'Recent Locations',
          filterable: false,
          limit: '2',
        },
      ]}
      lazyLoad={() => {
        return (value, callback) => {
          return fetch(`/api/autocomplete/get-cities?q=${encodeURIComponent(value)}&limit=10&fmerged=1`)
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
              const optionHash = {};
              const options = [];
              if (response.length > 0) {
                for (let i = 0; i < response.length; i++) {
                  if (i === 0) {
                    optionHash[response[0].name] = response[0];
                  } else if (!optionHash[response[i].name]) {
                    optionHash[response[i].name] = response[i];
                  }
                }
                const optionKeys = Object.keys(optionHash);
                for (let i = 0; i < optionKeys.length; i++) {
                  options[i] = optionHash[optionKeys[i]];
                }
              }
              callback(options);
            }).catch((error) => {
              console.error(`Unsuccessful api call ${error}`);
              callback();
            });
        };
      }}
    />
  </div>
);

function mapStateToProps (state, ownProps) {
  return {...state.global};
}

export default connect(mapStateToProps, {})(StatfulGroupingAsync)
