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
    {id: "196", location: 'Salt Lake',    owner: 'Bryce',  label: "Dessert"},
    {id: "197", location: 'Provo',        owner: 'Bryce',  label: "Diners"},
    {id: "198", location: 'Ogden',        owner: 'Bryce',  label: "Donut Shops"},
    {id: "199", location: 'Cedar Hills',  owner: 'Justin', label: "Computer Repair"},
    {id: "200", location: 'Salt Lake',    owner: 'Andriy', label: "computer repair"},
    {id: "201", location: 'Provo',        owner: 'Andriy', label: "Other Electronic Services"},
    {id: "202", location: 'Ogden',        owner: 'Justin', label: "Plumbers"},
    {id: "203", location: 'Cedar Hills',  owner: 'Andriy', label: "Plumbing Supplies"},
    {id: "204", location: 'Sugar House',  owner: 'Bogdan', label: "Carpenter"},
    {id: "205", location: 'Unknown',      owner: 'Andriy', label: "Auto Mechanic"},
    {id: "206", location: 'Unknown',      owner: 'Bogdan', label: "Painting"},
    {id: "207", location: 'Unknown',      owner: 'Bogdan', label: "Italian Restuarants"}
  ],
  defaultOptGroups: [
    {
      order: 1,
      groupKey: 'owner',
      groupValue: 'Andriy',
      label: 'Andriy'
    },
    {
      order: 2,
      groupKey: 'location',
      groupValue: 'Salt Lake',
      label: 'Salt Lake'
    },
    {
      order: 3,
      groupKey: 'owner',
      groupValue: 'Bogdan',
      label: 'Third'
    },
    {
      order: 4,
      groupKey: 'location',
      groupValue: 'Unknown',
      label: 'Unknown Location'
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
