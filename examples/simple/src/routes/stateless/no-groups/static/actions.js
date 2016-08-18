import {
  UPDATE_FILTERED,
  UPDATE_VALUE,
  UPDATE_TYPED_VALUE,
  UPDATE_VISIBLE,
  UPDATE_SELECTED,
} from './constants';

export function updateTypedValue(value) {
  return {
    type: UPDATE_TYPED_VALUE,
    value,
  };
}

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

export function updateFilteredOptions(opts) {
  return {
    type: UPDATE_FILTERED,
    options: opts,
  };
}
