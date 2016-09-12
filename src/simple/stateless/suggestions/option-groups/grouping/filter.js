export const wordFilter = (phrase, term) => {
  // If nothing is passed back to search for, always return true
  if (term === null || term === '' || term.length === 0) {
    return true;
  } else if (phrase === null || phrase === '') {
    return false;
  }
  const words = phrase.split(' ');
  let contains = false;
  for (let index = 0; index < words.length; index++) {
    const word = words[index].substring(0, term.length);
    if (word.indexOf(term) > -1) {
      contains = true;
      break;
    }
  }

  return contains;
};

export const filterOpts = (label, value, limit, opts) => {
  let amount = limit;
  const options = opts.slice(0);
  if (value !== '') {
    const TERM = value.toLowerCase();
    const filtered = [];
    for (let i = 0; i < options.length; i++) {
      let LABEL = '';
      if (typeof options[i][label] === 'string') {
        LABEL = options[i][label].toLowerCase();
      } else if (typeof options[i][label] === 'number') {
        LABEL = options[i][label].toString();
      }

      if (wordFilter(LABEL, TERM)) {
        filtered.push(options[i]);
      }
    }
    amount = amount ? amount : filtered.length;
    return filtered.slice(0, amount);
  }
  amount = amount ? amount : options.length;
  return options.slice(0, amount);
};


export const filterGroupings = (label, value, limit, options, groups) => {
  const proceed = groups ? (Object.keys(groups).length > 0) : false;
  if (value !== '' && proceed) {
    const term = value.toLowerCase();
    const groupHash = {};

    for (let marker = 0; marker < groups.length; marker++) {
      groupHash[groups[marker].value.toLowerCase()] = groups[marker];
    }
    // Determine the options that would be displayed if they weren't grouped
    let displayedOptions = [];
    const objKeys = Object.keys(options);
    for (let index = 0; index < objKeys.length; index++) {
      const current = groupHash[objKeys[index]];
      if (typeof current === 'undefined') { continue; }
      let items = options[objKeys[index]].items;
      if (objKeys[index] === '__default__' || typeof current.filterable === 'undefined' || current.filterable) {
        items = items.filter((result) => {
          const lowerResult = result[label].toLowerCase();
          return wordFilter(lowerResult, term);
        });
      }
      // Longer if statement in case someone passes back a limit of 0 for a group
      if (current.limit !== null &&
           typeof current.limit !== 'undefined' && current.limit !== 'all' || limit) {
        if (current.limit) {
          items = items.slice(0, current.limit);
        } else {
          items = items.slice(0, limit);
        }
      }

      displayedOptions = displayedOptions.concat(items);
    }
    return displayedOptions;
  }
  return options;
};

export default (options, text) => {
  const opts = Object.assign({}, options);
  let filtered = [];

  if (options.groupings) {
    filtered = filterGroupings(opts.label, text, opts.limit, opts['grouped'], opts.groupings);
  } else {
    filtered = filterOpts(opts.label, text, opts.limit, opts['original']);
  }
  return filtered;
};
