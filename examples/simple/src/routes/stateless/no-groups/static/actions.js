import {
  UPDATE_VALUE,
  UPDATE_VISIBLE,
} from './constants';

export function updateValue(value) {
  return {
    type: UPDATE_VALUE,
    value: value,
  };
}

export function updateVisible(value) {
  return {
    type: UPDATE_VISIBLE,
    value: value,
  };
}
