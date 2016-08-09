export const filter = (props) => {
  let key = props.displayField;
  let {searchTerm, options} = props;
  let proceed = options ? (options.length > 0) : false;

  if(searchTerm != '' && proceed){
    let term = searchTerm.toLowerCase();
    let filteredResults = options.filter((result) => {
      let lowerResult = result[key].toLowerCase();
      return lowerResult.indexOf(term) > -1;
    });
    filteredResults = this._sort(props, filteredResults);
    filteredResults = this._optgroup(props, filteredResults);
    return filteredResults;
  } else {
    let results = this._optgroup(props, props.options);
    return results;
  }
}
