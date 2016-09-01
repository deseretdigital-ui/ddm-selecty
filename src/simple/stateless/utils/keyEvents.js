import KEY_MAP from './keyMap';
import events from './events';
import sortOptions from '../suggestions/option-groups/grouping/sort';
import filterOptions from '../suggestions/option-groups/grouping/filter';

export const keyBindings = (e, filterable, lazyLoading, options, sortable, typedText, update) => {
  const key = KEY_MAP[e.keyCode];
  if (key) {
    e.preventDefault();
    let optKey = 'original';

    if (filterable) {
      if ((options.filtered.length > 0 || typedText.length > 0) && !lazyLoading) {
        optKey = 'filtered';
      }
    }

    if (sortable) { optKey = 'sorted'; }
    if (options.groupings.length > 0) { optKey = 'grouped'; }
    console.log('BINDING #################', optKey, options);
    if (options[optKey] === 0) { return; }
    if (!options.groupings || options.groupings.length === 0) {
      console.log('--------------- NO GROUPINGS BINDING ---------------');
      const current = options.selected ? options.selected.id : null;
      console.log('Current', current);
      const index = options[optKey].findIndex(item => item.id === current);
      const first = options[optKey][0];
      const last = options[optKey].length - 1;
      const next = options[optKey][index + 1];
      const prev = options[optKey][index - 1];

      events(key, index, first, last, next, prev, options, optKey, typedText, update);
    } else {
      console.log('+++++++++++++ GROUPINGS BINDING +++++++++++++');
      let displayedOptions = [];
      const objKeys = Object.keys(options);
      for (let index = 0; index < objKeys.length; index++) {
        displayedOptions = displayedOptions.concat(options[objKeys[index]].items);
      }
      const current = options.selected[0] ? options.selected[0] : null;
      const index = displayedOptions.findIndex(item => item.id === current);
      const first = displayedOptions[0];
      const last = displayedOptions.length - 1;
      const next = displayedOptions[index + 1];
      const prev = displayedOptions[index - 1];
      const updatedOpts = Object.assign({}, options);
      updatedOpts.displayed = displayedOptions;

      events(key, index, first, last, next, prev, updatedOpts, optKey, typedText, update);
    }
  }
};

export const keyEvents = (e, eventType, filterable, lazyLoading, options, sortable, typedText, update) => {
  if (eventType === 'down') {
    update.onKeyDown instanceof Function
      ? update.onKeyDown(e)
      : keyBindings(e, filterable, lazyLoading, options, sortable, typedText, update);
  } else if (eventType === 'up') {
    if (update.onFilter instanceof Function) {
      update.onFilter(e);
    } else if (filterable) {
      let updatedOptions = filterOptions(options, e.target.value);
      if (sortable) {
        updatedOptions = sortOptions(updatedOptions, options.label, sortable);
      }
      update.onFiltered(updatedOptions);
    }
  }
};
