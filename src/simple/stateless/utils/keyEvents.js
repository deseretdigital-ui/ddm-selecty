import KEY_MAP from './keyMap';
import events from './events';
import filterOptions from '../suggestions/option-groups/grouping/filter';

export const keyBindings = (key, filterable, lazyLoading, options, sortable, typedText, update) => {
  const updatedOpts = Object.assign({}, options);
  let optKey = 'original';
  let current = null;
  let index = null;
  let first = null;
  let last = null;
  let next = null;
  let prev = null;

  if (filterable) {
    if ((options.filtered.length > 0 || typedText.length > 0) && !lazyLoading) {
      optKey = 'filtered';
    }
  }

  if (sortable) { optKey = 'sorted'; }
  // if (typeof options.groupings === 'object' && options.groupings !== null) { optKey = 'grouped'; }
  if (options[optKey] === 0) { return; }
  if (options.groupings === null) {
    current = options.selected ? options.selected[options.value] : null;
    index = options[optKey].findIndex(item => item[options.value] === current);
    first = options[optKey][0];
    last = options[optKey].length - 1;
    next = options[optKey][index + 1];
    prev = options[optKey][index - 1];
  } else {
    let displayedOptions = [];
    const objKeys = Object.keys(options.grouped);
    for (let marker = 0; marker < objKeys.length; marker++) {
      displayedOptions = displayedOptions.concat(options.grouped[objKeys[marker]].items);
    }
    current = options.selected ? options.selected[options.value] : null;
    index = displayedOptions.findIndex(item => item[options.value] === current);
    first = displayedOptions[0];
    last = displayedOptions.length - 1;
    next = displayedOptions[index + 1];
    prev = displayedOptions[index - 1];
    updatedOpts.displayed = displayedOptions;
    optKey = 'displayed';
  }

  if (options.limit) {
    // BRYCE note this will cause an error when using groups with limit...more work here.
    last = last > options.limit ? options.limit - 1 : last;
  }
  events(key, index, first, last, next, prev, updatedOpts, optKey, typedText, update);
};

export const keyEvents = (e, eventType, filterable, lazyLoading, options, sortable, typedText, update) => {
  const key = KEY_MAP[e.keyCode];
  if (eventType === 'down' && key) {
    if (key !== 'tab' && key !== 'enter') {
      e.preventDefault();
    }

    if (update.onKeyDown instanceof Function) {
      update.onKeyDown(e);
    } else {
      keyBindings(key, filterable, lazyLoading, options, sortable, typedText, update);
    }
  } else if (eventType === 'up' && !key) {
    if (update.onFilter instanceof Function) {
      update.onFilter(e);
    } else if (filterable) {
      const updatedOptions = filterOptions(options, e.target.value);
      update.onFiltered(updatedOptions);
    }
  }
};
