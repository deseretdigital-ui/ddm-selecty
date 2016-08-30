import base, { alternative } from './constants';

export default (optGroups = null) => {
  const defaultGroup = optGroups[0].key ? base : alternative;
  let finalOptGroups = [];
  const optGroupHash = {};
  if (optGroups) {
    finalOptGroups = optGroups.slice(0);
    finalOptGroups.push(defaultGroup);
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
