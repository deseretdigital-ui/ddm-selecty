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
    {id: "196", owner: 'Bryce',  label: "Dessert"},
    {id: "197", owner: 'Bryce',  label: "Diners"},
    {id: "198", owner: 'Bryce',  label: "Donut Shops"},
    {id: "199", owner: 'Justin', label: "Computer Repair"},
    {id: "200", owner: 'Andriy', label: "computer repair"},
    {id: "201", owner: 'Andriy', label: "Other Electronic Services"},
    {id: "202", owner: 'Justin', label: "Plumbers"},
    {id: "203", owner: 'Andriy', label: "Plumbing Supplies"},
    {id: "204", owner: 'Bogdan', label: "Carpenter"},
    {id: "205", owner: 'Andriy', label: "Auto Mechanic"},
    {id: "206", owner: 'Bogdan', label: "Painting"},
    {id: "207", owner: 'Bogdan', label: "Italian Restuarants"}
  ],
  defaultOptGroups: [
    {
      order: 1,
      groupKey: 'owner',
      groupValue: 'Andriy',
      label: ''
    },
    {
      order: 2,
      groupKey: 'owner',
      groupValue: 'Bogdan',
      label: 'Second'
    },
    {
      order: 3,
      groupKey: 'owner',
      groupValue: 'Bryce',
      label: 'Third'
    },
    {
      order: 4,
      groupKey: 'owner',
      groupValue: 'Justin',
      label: 'Fourth'
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
