import {
  UPDATE_VALUE,
  UPDATE_VISIBLE,
  UPDATE_SELECTED,
} from './constants';

export function updateValue(value) {
  return {
    type: UPDATE_VALUE,
    value,
  };
}

export function updateVisible(value) {
  return {
    type: UPDATE_VISIBLE,
    value,
  };
}

export function updateSelected(item) {
  return {
    type: UPDATE_SELECTED,
    item,
  };
}
