export default (sortable, options, optLabel) => {
  function compare(a, b) {
    const lableA = a[optLabel].toLowerCase();
    const lableB = b[optLabel].toLowerCase();
    if (lableA < lableB) {
      return -1;
    }
    if (lableA > lableB) {
      return 1;
    }
    return 0;
  }
  return sortable ? options.slice(0).sort(compare) : options.slice(0);
};
