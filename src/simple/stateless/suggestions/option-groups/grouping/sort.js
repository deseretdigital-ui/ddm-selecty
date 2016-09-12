export const sortOptions = (options, optLabel, sortable) => {
  function compare(a, b) {
    const labelA = a[optLabel].toLowerCase();
    const labelB = b[optLabel].toLowerCase();
    if (labelA < labelB) {
      return -1;
    }
    if (labelA > labelB) {
      return 1;
    }
    return 0;
  }
  return sortable ? options.slice(0).sort(compare) : options.slice(0);
};
