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
  state.stateful = true;
  return state;
}

const initialState = {
  ...defaultState(1),
};

function _static(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default _static;
