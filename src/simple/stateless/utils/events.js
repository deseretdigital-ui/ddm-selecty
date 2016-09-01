import filterOptions from '../suggestions/option-groups/grouping/filter';

export default (key, index, first, last, next, prev, options, optType, typedValue, update) => {
  switch (key) {
    case 'down': {
      if (index < 0) {
        update.onSelected(first);
      } else if (index === last) {
        update.onChange(typedValue);
      } else {
        update.onSelected(next);
      }
      break;
    }
    case 'up': {
      if (index < 0) {
        update.onSelected(options[optType][last]);
      } else if (index === 0) {
        update.onChange(typedValue);
      } else {
        update.onSelected(prev);
      }
      break;
    }
    case 'tab': {
      update.onChange(options[optType][index][options.label]);
      update.onSelected(options[optType][index]);
      const filtered = filterOptions(options, null, optType, index);
      update.onFiltered(filtered);
      document.activeElement.blur();
      break;
    }
    case 'enter': {
      update.onChange(options[optType][index][options.label]);
      update.onSelected(options[optType][index]);
      const filtered = filterOptions(options, null, optType, index);
      update.onFiltered(filtered);
      document.activeElement.blur();
      break;
    }
    case 'esc': {
      document.activeElement.blur();
      break;
    }
    default: {
      break;
    }
  }
};
