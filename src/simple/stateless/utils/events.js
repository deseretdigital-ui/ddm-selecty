import filterOptions from '../suggestions/option-groups/grouping/filter';

export default (key, index, first, last, next, prev, options, optType, typedValue, update) => {
  switch (key) {
    case 'down': {
      if (index < 0) {
        update.onChosen(first);
      } else if (index === last) {
        update.onChange(typedValue);
      } else {
        update.onChosen(next);
      }
      break;
    }
    case 'up': {
      if (index < 0) {
        update.onChosen(options[optType][last]);
      } else if (index === 0) {
        update.onChange(typedValue);
      } else {
        update.onChosen(prev);
      }
      break;
    }
    case 'enter':
    case 'tab': {
      const text = options[optType][index][options.label];
      update.onChange(text);
      update.onChosen(options[optType][index]);
      const filtered = filterOptions(options, text, optType, index);
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
