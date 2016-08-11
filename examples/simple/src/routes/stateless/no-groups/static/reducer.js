import { UPDATE_VALUE, UPDATE_VISIBLE } from './constants';

// The initial state of the App
const initialState = {
  value: '',
  visible: false,
  selected: {
    id: null,
    label: null,
  },
};

function _static(state = initialState, action) {
  switch (action.type) {
    case (UPDATE_VALUE): {
      return Object.assign({}, state, {value: action.value});
    }
    case (UPDATE_VISIBLE) :{
      return Object.assign({}, state, {visible: action.value});
    }
    default:
      return state;
  }
}

export default _static;
