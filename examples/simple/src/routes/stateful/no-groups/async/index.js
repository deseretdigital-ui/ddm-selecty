import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import 'whatwg-fetch';
import { SimpleSelecty } from '../../../../../../../dist/ddm.selecty.js';


// <div style={{'zIndex':'70', 'position':'relative'}}>
//   <SimpleSelecty
//     optLabel={'name'}
//     optValue={'id'}
//     load={() => {
//       return (params, callback) => {
//         const uri = 'https://api.github.com/users/janiv/repos';
//         return fetch(uri)
//           .then((response) => {
//             if (response.status >= 200 && response.status < 300) {
//               return response;
//             }
//             const error = new Error(response.statusText);
//             error.response = response;
//             throw error;
//           })
//           .then((response) => {
//               return response.json();
//           })
//           .then((response) => {
//             setTimeout(() => {
//               callback(response);
//             }, 2000);
//           }).catch((error) => {
//             console.error(`Unsuccessful api call ${error}`);
//             callback();
//           });
//       }
//     }}
//   />
// </div>

const StatfulNoGroupAsync = ({
  defaultOptions,
  defaultOptGroups,
}) => (
  <div>
    Stateful Async WITHOUT Groups:
    <div style={{'zIndex':'100', 'position': 'relative', marginTop: '20px'}}>
      <SimpleSelecty
        optLabel={'userId'}
        optValue={'id'}
        lazyLoad={() => {
          return (params, callback) => {
            return fetch(`http://jsonplaceholder.typicode.com/posts/${params}`)
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
                setTimeout(() => {
                  callback(response);
                }, 2000);
              }).catch((error) => {
                console.error(`Unsuccessful api call ${error}`);
                callback();
              });
          }
        }}
        value={"1"}
      />
    </div>
  </div>
);

function mapStateToProps (state, ownProps) {
  return {...state.global, ...state.SLNGStatic};
}

export default connect(mapStateToProps, { })(StatfulNoGroupAsync)
