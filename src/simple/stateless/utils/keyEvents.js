import KEY_MAP from './keyMap';
import events from './events';
import { sortOptions } from '../suggestions/option-groups/grouping/sort';
import filterOptions from '../suggestions/option-groups/grouping/filter';

export const keyBindings = (key, filterable, lazyLoading, options, sortable, typedText, update) => {
  let optKey = 'original';
  if (filterable) {
    if ((options.filtered.length > 0 || typedText.length > 0) && !lazyLoading) {
      optKey = 'filtered';
    }
  }

  if (sortable) { optKey = 'sorted'; }
  if (typeof options.groupings === 'Object') { optKey = 'grouped'; }
  if (options[optKey] === 0) { return; }
  if (options.groupings === null) {
    const current = options.selected ? options.selected[options.value] : null;
    const index = options[optKey].findIndex(item => item[options.value] === current);
    const first = options[optKey][0];
    const last = options[optKey].length - 1;
    const next = options[optKey][index + 1];
    const prev = options[optKey][index - 1];

    events(key, index, first, last, next, prev, options, optKey, typedText, update);
  } else {
    let displayedOptions = [];
    const objKeys = Object.keys(options.grouped);
    for (let index = 0; index < objKeys.length; index++) {
      displayedOptions = displayedOptions.concat(options.grouped[objKeys[index]].items);
    }
    const current = options.selected ? options.selected[options.value] : null;
    const index = displayedOptions.findIndex(item => item[options.value] === current);
    const first = displayedOptions[0];
    const last = displayedOptions.length - 1;
    const next = displayedOptions[index + 1];
    const prev = displayedOptions[index - 1];
    const updatedOpts = Object.assign({}, options);
    updatedOpts.displayed = displayedOptions;

    events(key, index, first, last, next, prev, updatedOpts, 'displayed', typedText, update);
  }
};

export const keyEvents = (e, eventType, filterable, lazyLoading, options, sortable, typedText, update) => {
  const key = KEY_MAP[e.keyCode];
  if (eventType === 'down' && key) {
    e.preventDefault();
    update.onKeyDown instanceof Function
      ? update.onKeyDown(e)
      : keyBindings(key, filterable, lazyLoading, options, sortable, typedText, update);
  } else if (eventType === 'up' && !key) {
    if (update.onFilter instanceof Function) {
      update.onFilter(e);
    } else if (filterable) {
      let updatedOptions = filterOptions(options, e.target.value);
      update.onFiltered(updatedOptions);
    }
  }
};
