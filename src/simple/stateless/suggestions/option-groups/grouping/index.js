import {create} from '../../../../shared/option-groups/create';

export const CreateGrouping = (options, groups = null) => {
  console.log("About to create grouping");
  return create(options, groups);
}
