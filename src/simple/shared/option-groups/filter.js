export const filterOptions = (displayField, searchTerm, groups) => {
  const filteredGroups = Object.assign({}, groups);
  const proceed = groups ? (Object.keys(groups).length > 0) : false;
  if (searchTerm != '' && proceed) {
    const term = searchTerm.toLowerCase();

    Object.keys(groups).map((groupName, index) => {
      filteredGroups[groupName].items = groups[groupName].items.filter((result) => {
        const lowerResult = result[displayField].toLowerCase();
        return lowerResult.indexOf(term) > -1;
      });
    });

    // filteredResults = this._sort(props, filteredResults);
    // filteredResults = this._optgroup(props, filteredResults);
    return filteredGroups;
  } else {
    // let results = this._optgroup(props, props.options);
    // return results;
    return groups;
  }
};
