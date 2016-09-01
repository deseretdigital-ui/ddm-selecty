export const filterOpts = (label, value, limit, opts) => {
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

      if (LABEL.indexOf(TERM) > -1) {
        filtered.push(options[i]);
      }
    }
    return filtered.slice(0, limit);
  }
  return options.slice(0, limit);
};


export const filterGroupings = (label, value, limit, options, groups) => {
  const filteredGroups = Object.assign({}, groups);
  const proceed = groups ? (Object.keys(groups).length > 0) : false;
  if (value !== '' && proceed) {
    const term = value.toLowerCase();

    Object.keys(groups).map(groupName => {
      if (typeof filteredGroups[groupName].filterable === 'undefined' || filteredGroups[groupName].filterable) {
        filteredGroups[groupName].items = groups[groupName].items.filter((result) => {
          const lowerResult = result[label].toLowerCase();
          return lowerResult.indexOf(term) > -1;
        });
        return null;
      }

      return null;
    });

    let displayedOptions = [];
    const objKeys = Object.keys(options);
    for (let index = 0; index < objKeys.length; index++) {
      displayedOptions = displayedOptions.concat(options[objKeys[index]].items);
    }
    return displayedOptions;
  }
  return options;
};

export default (options, text, optType = null, index = null) => {
  let filtered = [];
  // console.log('Filtering!!!!!', options, `- ${text} -`, optType, index);

  if (optType === 'filtered') {
    console.log('Filtered Options');
  } else if (optType === 'sorted') {
    console.log('Sorted Groups');
    // filtered = filterGroupings(options, limit, options, groups);
  } else if (optType === 'grouped') {
    console.log('GROUPED');
    filtered = filterOpts(options.label, options[optType][index], options);
  } else {
    console.log("ORIGINAL");
    filtered = filterOpts(options.label, text, options.limit, options['original']);
  }

  // console.log("FILTERED", filtered);
  return filtered;
  // if (options.groupings && options.groupings.length > 0) {
};
