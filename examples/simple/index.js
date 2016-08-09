import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {SimpleSelectyStateless} from '../../dist/ddm.selecty.js';
import '../../dist/ddm.selecty.css';
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

class Root extends React.Component {

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
  }

  _onSelected = (item, version) => {
    const newObj = {};
    newObj[`${version}SelectedItem`] = item;
    this.setState({selected: Object.assign ({}, this.state.selected, newObj)}, this.updateProps);
  }

  _updateProps = () => {
    console.log('Updating', this.state);
  }

  render() {
    let {defaultOptions, optgroups} = this.state;
    return (
      <div>
        DDM-Selecty (no jquery here):

        <div>
          Default Options WITHOUT Groups:
          <SimpleSelectyStateless
            options={defaultOptions}
            load={
              () => {
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
            }
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

ReactDOM.render(<Root />, document.getElementById('root'));


// <div>
//   API:
//   <SimpleSelectyStateless load={this._api} options={defaultOptions} optgroups={optgroups}/>
//   API Without Groups:
//   <SimpleSelectyStateless load={this._api} options={defaultOptions}/>
// </div>
//
// <div>
//   Default Options with Groups:
//   <SimpleSelectyStateless
//     options={defaultOptions}
//     optgroups={optgroups}
//     onValueChange={this._onChange}
//     onSelected={this._onSelected}
//   />
//   <div>
//     You entered: {this.state.typedText} <br/>
//     You selected: {this.state.selectedItem}
//   </div>
// </div>
// <br/><br/>
