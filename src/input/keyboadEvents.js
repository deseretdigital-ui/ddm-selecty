import KEY_MAP from './keyMapping';

export default (e, options, selected, onSelected) => {
  const key = KEY_MAP[e.keyCode];
  if (key) {
    e.preventDefault();
    const index = options.findIndex(item => item.id === selected.id);

    const first = options[0];
    const last = options.length - 1;
    const next = options[index + 1];
    const prev = options[index - 1];

    switch (key) {
      case 'down':
        index < 0 || index === last ? onSelected(first) : onSelected(next);
        break;
      case 'up':
        index <= 0 ? onSelected(options[last]) : onSelected(prev);
        break;
      case 'tab':
        onSelected(options[index]);
        document.activeElement.blur();
        break;
      case 'enter':
        console.log('do submit');
        break;
      case 'esc':
        document.activeElement.blur();
        break;
      default:
        console.log('pressed key', key);
    }
  }
};
