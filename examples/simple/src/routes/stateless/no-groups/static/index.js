import 'babel-polyfill';
import React from 'react';
import { SimpleSelectyStateless } from '../../../../../../../dist/ddm.selecty.js';
import 'whatwg-fetch'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export class StatlessNoGroupStatic extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      defaultOptions: [
        {label: 'One',   value: 1, group:"search"},
        {label: 'Two',   value: 2, group:"other"},
        {label: 'Three', value: 3, group:"search"},
        {id: "196", label: "Dessert"},
        {id: "197", label: "Diners"},
        {id: "198", label: "Donut Shops"},
        {id: "199", label: "Computer Repair"},
        {id: "201", label: "Other Electronic Services"}
      ],
      optgroups: [{
        order: 1,
        value: 'search',
        label: ''
      },
      {
        order: 2,
        value: 'other',
        label: 'Other'
      }]
    }
  }

  _api () {
    return function (query, callback) {
      var queryParams = '';
      if (Object.keys(query).length) {
        queryParams = '?' + queryString.stringify(query);
      }

      // let uri = `//${window.location.host}/api${endpoint}${queryParams}`;
      let uri = 'https://api.github.com/users/mralexgray';
      return fetch(uri)
        .then(checkStatus)
        .then(parseJSON)
        .then(function (response){
          //Condition your response here.
          callback (response);
        }).catch(function (error) {
          callback();
        })
    }
  }

  _onValueChange = (text, version) => {
    const newStateObj = {};
    newStateObj[`${version}Text`] = text;
    this.setState({selected: Object.assign ({}, this.state.text, newStateObj)}, this.updateProps);
  };

  _onSelected = (item, version) => {
    const newObj = {};
    newObj[`${version}SelectedItem`] = item;
    this.setState({selected: Object.assign ({}, this.state.selected, newObj)}, this.updateProps);
  };

  _updateProps = () => {
    console.log('Updating', this.state);
  };

  render() {
    // let {defaultOptions, optgroups} = this.state;
    return (
      <div>
        DDM-Selecty (no jquery here):

        <div>
          Default Options WITHOUT Groups:
          <SimpleSelectyStateless
            onValueChange={(e) => this._onValueChange(e, 'StatelessWithoutGroups')}
            onSelected={(e) => this._onSelected(e, 'StatelessWithoutGroups')}
            options={this.state.defaultOptions}
            placeHolder={'Stateless Without Groups'}
          />
        </div>
      </div>
    );
  }
}

export default StatlessNoGroupStatic;
