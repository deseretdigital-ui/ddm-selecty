export const sort = (props, results) => {
  let term = props.searchTerm.toLowerCase();
  //TODO Reduce calls toLowerCase function
  function compare (a, b) {
    let displayFieldA = a[props.displayField];
    let displayFieldB = b[props.displayField];
    let sortA = displayFieldA.toLowerCase().indexOf(term);
    let sortB = displayFieldB.toLowerCase().indexOf(term);

    if (sortA === sortB) {
      return displayFieldA.localeCompare(displayFieldB);
    }
    return (sortA > sortB ? 1 : -1);
  }
  return results.sort(compare);
}
