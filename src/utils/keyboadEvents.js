import KEY_MAP from './keyMapping';
import { filterOptions } from '../simple/shared/option-groups/filter';

export default (e, label, options, selected, onSelected, onChange, typedValue, onOptionsFiltered) => {
  const key = KEY_MAP[e.keyCode];

  if (key) {
    e.preventDefault();
    if (options.length === 0) {
      return;
    }

    const index = options.findIndex(item => item.id === selected.id);
    const first = options[0];
    const last = options.length - 1;
    const next = options[index + 1];
    const prev = options[index - 1];

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
        const filtered = filterOptions(label, options[index][label], options);
        onOptionsFiltered(filtered);
        document.activeElement.blur();
        break;
      }
      case 'enter': {
        onChange(options[index][label]);
        onSelected(options[index]);
        const filtered = filterOptions(label, options[index][label], options);
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
  }
};
