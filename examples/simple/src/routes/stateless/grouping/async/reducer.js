import { UPDATE_VALUE, UPDATE_VISIBLE, UPDATE_SELECTED } from './constants';

// The initial state of the App
const initialState = {
  value: '',
  visible: false,
  items: [{
    id: null,
    label: null,
  }],
};

function _async(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VALUE: {
      return Object.assign({}, state, {value: action.value});
    }
    case UPDATE_VISIBLE: {
      return Object.assign({}, state, {visible: action.value});
    }
    case UPDATE_SELECTED: {
      return Object.assign({}, state, {items: action.item});
    }
    default:
      return state;
  }
}

export default _async;
