import defaultGroup from './constants';

export default (optGroups = null) => {
  let finalOptGroups = [];
  const optGroupHash = {};

  if (optGroups) {
    finalOptGroups = optGroups;
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
