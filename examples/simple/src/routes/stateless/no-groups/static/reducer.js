import {
  UPDATE_FILTERED,
  UPDATE_TYPED_VALUE,
  UPDATE_VALUE,
  UPDATE_VISIBLE,
  UPDATE_SELECTED,
} from './constants';

// The initial state of the App
const initialState = {
  value: '',
  typedValue: '',
  visible: false,
  items: [{
    id: null,
    label: null,
  }],
  filteredOptions: [],
};

function _static(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VALUE: {
      return Object.assign({}, state, {value: action.value});
    }
    case UPDATE_TYPED_VALUE: {
      return Object.assign({}, state, {typedValue: action.value});
    }
    case UPDATE_VISIBLE: {
      return Object.assign({}, state, {visible: action.value});
    }
    case UPDATE_SELECTED: {
      if (!action.item) {
        return Object.assign({}, state, {items: initialState.items});
      }
      return Object.assign({}, state, {items: [action.item]});
    }
    case UPDATE_FILTERED: {
      return Object.assign({}, state, {filteredOptions: action.options});
    }
    default:
      return state;
  }
}

export default _static;
