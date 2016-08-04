import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {SimpleSelecty} from '../../dist/ddm.selecty.js';
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
    this._onChange = this._onChange.bind(this);
    this._onSelected = this._onSelected.bind(this);

    this.state = {
      defaultOptions: [
        {name: 'One',   value: 1, group:"search"},
        {name: 'Two',   value: 2, group:"other"},
        {name: 'Three', value: 3, group:"search"},
        {id: "196", name: "Dessert"},
        {id: "197", name: "Diners"},
        {id: "198", name: "Donut Shops"},
        {id: "199", name: "Computer Repair"},
        {id: "201", name: "Other Electronic Services"}
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

  _onChange (text) {
    this.setState({typedText: text})
  }

  _onSelected (item) {
    this.setState({selectedItem: item});
  }
  render() {
    let {defaultOptions, optgroups} = this.state;
    return (
      <div style={{width: '400px'}}>
        Selectize (no jquery here):

        <div>
          API:
          <SimpleSelecty load={this._api} options={defaultOptions} optgroups={optgroups}/>
          API Without Groups:
          <SimpleSelecty load={this._api} options={defaultOptions}/>
        </div>

        <div>
          Default Options with Groups:
          <SimpleSelecty
            options={defaultOptions}
            optgroups={optgroups}
            onChange={this._onChange}
            onSelected={this._onSelected}
          />
          <div>
            You entered: {this.state.typedText} <br/>
            You selected: {this.state.selectedItem}
          </div>
        </div>
        <br/><br/>
        <div>
          Default Options WITHOUT Groups:
          <SimpleSelecty options={defaultOptions}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
