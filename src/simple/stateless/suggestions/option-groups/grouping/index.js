import { create } from '../../../../shared/option-groups/create';

export const createGrouping = (options, groups = null) => {
  console.log('About to create grouping');
  return create(options, groups);
};
