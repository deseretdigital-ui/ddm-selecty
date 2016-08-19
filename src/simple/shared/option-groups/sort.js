export default (sortable, options) => {
  function compare(a, b) {
    const lableA = a.label.toLowerCase();
    const lableB = b.label.toLowerCase();
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
