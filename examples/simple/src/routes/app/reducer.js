import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
} from './constants';

// {label: 'One',   value: 1, group:"search"},
// {label: 'Two',   value: 2, group:"other"},
// {label: 'Three', value: 3, group:"search"},

// The initial state of the App
const initialState = {
  defaultOptions: [
    {id: "196", label: "Dessert"},
    {id: "197", label: "Diners"},
    {id: "198", label: "Donut Shops"},
    {id: "199", label: "Computer Repair"},
    {id: "200", label: "computer repair"},
    {id: "201", label: "Other Electronic Services"},
    {id: "202", label: "Plumbers"},
    {id: "203", label: "Plumbing Supplies"},
    {id: "204", label: "Carpenter"},
    {id: "205", label: "Auto Mechanic"},
    {id: "206", label: "Painting"},
    {id: "207", label: "Italian Restuarants"}
  ],
  defaultOptGroups: [
    {
      order: 1,
      value: 'search',
      label: ''
    },
    {
      order: 2,
      value: 'other',
      label: 'Other'
    }
  ]
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;
