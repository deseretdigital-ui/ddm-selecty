/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import 'whatwg-fetch';

function checkStatus(response) {
  const error = new Error(response.statusText);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  error.response = response;
  throw error;
}

export default function load(
  endpoint,
  query,
) {
  return fetch(`${endpoint}${query}`)
    .then(checkStatus)
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.error('Request Failed in callApi', error));
}
