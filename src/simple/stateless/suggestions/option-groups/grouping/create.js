/* eslint no-param-reassign: 0 */
/* eslint dot-notation: 0 */
/* eslint no-unneeded-ternary: 0 */

import createHash from './hash';

export default (options, groups = null, optGroupHashed = null) => {
  let groupsHashed = {};

  if (optGroupHashed === null) {
    groupsHashed = createHash(groups);
  } else {
    groupsHashed = optGroupHashed;

    // Clear out any previous items
    Object.keys(optGroupHashed).map(groupName => {
      optGroupHashed[groupName].items = [];
      return null;
    });
  }
  // If no groups everything go under default
  if (groups === null || groups.length === 0) {
    groupsHashed['__default__'].items = (options ? options : []);
  } else if (options && options.length > 0) {
    for (let i = 0; i < options.length; i++) {
      const item = options[i];

      for (let marker = 0; marker < groups.length; marker++) {
        if (item[groups[marker].groupKey] && item[groups[marker].groupKey] === groups[marker].groupValue) {
          groupsHashed[groups[marker].groupValue.toLowerCase()].items.push(item);
          break;
        }

        if (marker === groups.length - 1) {
          groupsHashed['__default__'].items.push(item);
          break;
        }
      }
    }
  }
  return groupsHashed;
};
