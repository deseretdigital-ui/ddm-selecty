export const filterOptions = (label, value, limit, opts) => {
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

    return filteredGroups;
  }
  return groups;
};
