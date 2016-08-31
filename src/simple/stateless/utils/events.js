import { filterOptions } from '../suggestions/option-groups/grouping/filter';

export default (key, index, first, last, next, prev, label, limit, options,
  onSelected, onChange, typedValue, onOptionsFiltered) => {
  switch (key) {
    case 'down': {
      if (index < 0) {
        onSelected(first);
      } else if (index === last) {
        onChange(typedValue);
      } else {
        onSelected(next);
      }
      break;
    }
    case 'up': {
      if (index < 0) {
        onSelected(options[last]);
      } else if (index === 0) {
        onChange(typedValue);
      } else {
        onSelected(prev);
      }
      break;
    }
    case 'tab': {
      onChange(options[index][label]);
      onSelected(options[index]);
      const filtered = filterOptions(label, options[index][label], limit, options);
      onOptionsFiltered(filtered);
      document.activeElement.blur();
      break;
    }
    case 'enter': {
      onChange(options[index][label]);
      onSelected(options[index]);
      const filtered = filterOptions(label, options[index][label], limit, options);
      onOptionsFiltered(filtered);
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
