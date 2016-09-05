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
  alternativeOptions: [
    {id: "196", label: 'Salt Lake',    group: "search"},
    {id: "197", label: 'Provo',        group: "saved"},
    {id: "198", label: 'Ogden',        group: "saved"},
    {id: "199", label: 'Cedar Hills',  group: "recent"},
    {id: "200", label: 'South Jordan', group: "search"},
    {id: "201", label: 'Provo',        group: "search"},
    {id: "202", label: 'South Jordan', group: "saved"},
    {id: "203", label: 'Cedar Hills',  group: "recent"},
    {id: "204", label: 'Sugar House',  group: "saved"},
  ],
  defaultOptGroups: [
    {
      order: 1,
      key: 'owner',
      value: 'Andriy',
      label: 'Andriy',
      limit: 2,
    },
    {
      order: 2,
      key: 'location',
      value: 'Salt Lake',
      label: 'Salt Lake'
    },
    {
      order: 3,
      key: 'owner',
      value: 'Bogdan',
      label: 'Third'
    },
    {
      order: 4,
      key: 'location',
      value: 'Unknown',
      label: 'Unknown Location'
    }
  ],
  alternativeOptGroups: [
    {
      value: 'search',
      label: 'Search Results',
      limit: 'all',
    },
    {
      value: 'saved',
      label: 'Saved Location',
      limit: 3,
      filterable: false,
    },
    {
      value: 'recent',
      label: 'Recent Locations',
      limit: 1,
      filterable: false,
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
