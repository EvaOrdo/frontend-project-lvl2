import _ from 'lodash';

const renderVal = (val) => {
  if (!_.isObject(val)) {
    return _.isString(val) ? `'${val}'` : val;
  }
  return '[complex value]';
};

const plainFormat = (ast) => {
  const iter = (tree, accum) => {
    const result = tree.map((node) => {
      const [type, key, val1, val2] = node;
      let newAcc;
      switch (type) {
        case 'added':
          newAcc = `${accum}${key}`;
          return `Property '${newAcc}' was added with value: ${renderVal(val1)}`;
        case 'removed':
          newAcc = `${accum}${key}`;
          return `Property '${newAcc}' was deleted`;
        case 'changed':
          newAcc = `${accum}${key}`;
          return `Property '${newAcc}' was changed from ${renderVal(val1)} to ${renderVal(val2)}`;
        case 'ancestor':
          newAcc = `${accum}${key}.`;
          return iter(val1, newAcc);
        default:
          return undefined;
      }
    });
    return result.filter((elem) => elem !== undefined).join('\n');
  };
  return iter(ast, '');
};

export default plainFormat;
