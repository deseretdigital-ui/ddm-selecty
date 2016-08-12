import { createHash } from './hash';

export const createGrouping = (options, groups = null, optGroupHashed = null) => {
  let groupsHashed = {};

  if (optGroupHashed === null) {
    groupsHashed = createHash(groups);
  } else {
    groupsHashed = optGroupHashed;

    // Clear out any previous items
    Object.keys(optgroupHash).map((groupName, index) => {
      optgroupHash[groupName].items = [];
    });
  }

  // If no groups everything go under default
  if (groups === null) {
    groupsHashed['__default__'].items = (options ? options : []);
  } else {
    if (options) {
      for (var i = 0; i < options.length; i++) {
        const item = options[i];
        if (!item.group) {
          item.group = '__default__';
        }
        groupsHashed[item.group.toLowerCase()].items.push(item);
      }
    }
  }

  return groupsHashed;
};
