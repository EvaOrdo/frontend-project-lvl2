import _ from 'lodash';

const makeDiff = (tree1, tree2) => {
  const keys = _.union(Object.keys(tree1), Object.keys(tree2));
  const result = keys.map((key) => {
    if (!_.has(tree2, key)) {
      return ['removed', key, tree1[key]];
    }
    if (!_.has(tree1, key)) {
      return ['added', key, tree2[key]];
    }
    if (_.isEqual(tree1[key], tree2[key])) {
      return ['unchanged', key, tree1[key]];
    }
    if (_.isObject(tree1[key]) && _.isObject(tree2[key])) {
      return ['ancestor', key, makeDiff(tree1[key], tree2[key])];
    }
    return ['changed', key, tree1[key], tree2[key]];
  });
  return result;
};

export default makeDiff;
