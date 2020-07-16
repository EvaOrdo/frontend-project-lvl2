import _ from 'lodash';

const makeDiff = (tree1, tree2) => {
  const keys = _.union(Object.keys(tree1), Object.keys(tree2));
  const result = keys.map((key) => {
    if (!_.has(tree2, key)) {
      return { status: 'removed', key, value1: tree1[key] };
    }
    if (!_.has(tree1, key)) {
      return { status: 'added', key, value1: tree2[key] };
    }
    if (_.isEqual(tree1[key], tree2[key])) {
      return { status: 'unchanged', key, value1: tree1[key] };
    }
    if (_.isObject(tree1[key]) && _.isObject(tree2[key])) {
      return { status: 'ancestor', key, children: makeDiff(tree1[key], tree2[key]) };
    }
    return {
      status: 'changed', key, value1: tree1[key], value2: tree2[key],
    };
  });
  return result;
};

export default makeDiff;
