export const filterOptions = (label, value, opts) => {
  const options = opts.slice(0);
  if (value !== '' && options.length > 0) {
    const TERM = value.toLowerCase();
    const filtered = [];
    for (let i = 0; i < options.length; i++) {
      const LABEL = options[i][label].toLowerCase();
      if (LABEL.indexOf(TERM) > -1) {
        filtered.push(options[i]);
      }
    }
    return filtered;
  }
  return options;
};


export const filterGroups = (label, value, groups) => {
  const filteredGroups = Object.assign({}, groups);
  const proceed = groups ? (Object.keys(groups).length > 0) : false;
  if (value !== '' && proceed) {
    const term = value.toLowerCase();

    Object.keys(groups).map(groupName => {
      filteredGroups[groupName].items = groups[groupName].items.filter((result) => {
        const lowerResult = result[label].toLowerCase();
        return lowerResult.indexOf(term) > -1;
      });
      return null;
    });

    // filteredResults = this._sort(props, filteredResults);
    // filteredResults = this._optgroup(props, filteredResults);
    return filteredGroups;
  }
  // let results = this._optgroup(props, props.options);
  // return results;
  return groups;
};
