import KEY_MAP from './keyMapping';
import events from './events';

export default (e, label, options, selected, onSelected, onChange, typedValue, onOptionsFiltered, optGroups) => {
  const key = KEY_MAP[e.keyCode];

  if (key) {
    e.preventDefault();
    if (options.length === 0) {
      return;
    }

    if (!optGroups || optGroups.length === 0) {
      const index = options.findIndex(item => item.id === selected.id);
      const first = options[0];
      const last = options.length - 1;
      const next = options[index + 1];
      const prev = options[index - 1];
      events(key, index, first, last, next, prev, label, options, onSelected, onChange, typedValue, onOptionsFiltered);
    } else {
      let displayedOptions = [];
      const objKeys = Object.keys(options);
      for (let index = 0; index < objKeys.length; index++) {
        displayedOptions = displayedOptions.concat(options[objKeys[index]].items);
      }
      const index = displayedOptions.findIndex(item => item.id === selected.id);
      const first = displayedOptions[0];
      const last = displayedOptions.length - 1;
      const next = displayedOptions[index + 1];
      const prev = displayedOptions[index - 1];

      events(key, index, first, last, next, prev, label,
         displayedOptions, onSelected, onChange, typedValue, onOptionsFiltered);
    }
  }
};
