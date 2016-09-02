import {
  UPDATE_FILTERED,
  UPDATE_TYPED_VALUE,
  UPDATE_VALUE,
  UPDATE_VISIBLE,
  UPDATE_SELECTED,
} from './constants';

// The initial state of the App
const defaultState = (num) => {
  const state = {};
  state[`value_${num}`] = '';
  state[`typedValue_${num}`] = '';
  state[`visible_${num}`] = false;
  state[`item_${num}`] = {
    id: null,
    label: null,
  };
  state[`filtereOptions_${num}`] = [];
  return state;
}

const initialState = {
  ...defaultState(1),
  ...defaultState(2)
};

function _static(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VALUE: {
      const newState = {};
      newState[`value_${action.num}`] = action.value;
      return Object.assign({}, state, newState);
    }
    case UPDATE_TYPED_VALUE: {
      const newState = {};
      newState[`typedValue_${action.num}`] = action.value;
      return Object.assign({}, state, newState);
    }
    case UPDATE_VISIBLE: {
      const newState = {};
      newState[`visible_${action.num}`] = action.value;
      return Object.assign({}, state, newState);
    }
    case UPDATE_SELECTED: {
      const newState = {};
      newState[`item_${action.num}`] = initialState[`item_${action.num}`];
      if (typeof action.item === 'object' && action.item !== null) {
        newState[`item_${action.num}`] = action.item;
      }

      return Object.assign({}, state, newState);
    }
    case UPDATE_FILTERED: {
      const newState = {};
      newState[`filteredOptions_${action.num}`] = action.options;
      return Object.assign({}, state, newState);
    }
    default:
      return state;
  }
}

export default _static;
