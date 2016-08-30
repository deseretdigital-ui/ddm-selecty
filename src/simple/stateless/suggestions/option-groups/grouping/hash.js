import base, { alternative } from './constants';

export default (optGroups = null) => {
  let defaultGroup = Object.assign({}, base);

  if (optGroups && optGroups.length > 0 && optGroups[0].key) {
    defaultGroup = Object.assign({}, alternative);
  }

  let finalOptGroups = [];
  const optGroupHash = {};
  if (optGroups) {
    finalOptGroups.push(defaultGroup);
    finalOptGroups = finalOptGroups.concat(optGroups);
  } else {
    finalOptGroups = [defaultGroup];
  }
  for (let i = 0; i < finalOptGroups.length; i++) {
    const group = finalOptGroups[i];
    group.items = [];
    optGroupHash[group.value.toLowerCase()] = group;
  }
  return optGroupHash;
};
