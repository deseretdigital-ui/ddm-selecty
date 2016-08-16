/* eslint no-console: ["error", { allow: ["log"] }] */
import create from '../../../../shared/option-groups/create';

export default (options, groups = null) => {
  console.log('About to create grouping');
  return create(options, groups);
};
