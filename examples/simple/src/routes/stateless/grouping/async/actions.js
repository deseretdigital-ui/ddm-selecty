import {
  UPDATE_FILTERED,
  UPDATE_OPTIONS,
  UPDATE_VALUE,
  UPDATE_TYPED_VALUE,
  UPDATE_VISIBLE,
  UPDATE_SELECTED,
} from './constants';

export function updateTypedValue(value, num) {
  return {
    type: UPDATE_TYPED_VALUE,
    value,
    num,
  };
}

export function updateValue(value, num) {
  return {
    type: UPDATE_VALUE,
    value,
    num,
  };
}

export function updateVisible(value, num) {
  return {
    type: UPDATE_VISIBLE,
    value,
    num,
  };
}

export function updateSelected(item, num) {
  return {
    type: UPDATE_SELECTED,
    item,
    num,
  };
}

export function updateFilteredOptions(opts, num) {
  return {
    type: UPDATE_FILTERED,
    options: opts,
    num,
  };
}

export function updateOptions(options) {
  return {
    type: UPDATE_OPTIONS,
    options,
  };
}
