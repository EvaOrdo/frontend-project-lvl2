import _ from 'lodash';

const renderValue = (value) => {
  if (!_.isObject(value)) {
    return _.isString(value) ? `'${value}'` : value;
  }
  return '[complex value]';
};

const plainFormat = (ast) => {
  const iter = (tree, accum) => {
    const result = tree.map((node) => {
      const {
        status, key, value1, value2, children,
      } = node;
      const propName = [...accum, key].join('.');
      switch (status) {
        case 'added':
          return `Property '${propName}' was added with value: ${renderValue(value1)}`;
        case 'removed':
          return `Property '${propName}' was deleted`;
        case 'changed':
          return `Property '${propName}' was changed from ${renderValue(value1)} to ${renderValue(value2)}`;
        case 'ancestor':
          return iter(children, [...accum, key]);
        case 'unchanged':
          return undefined;
        default:
          throw new Error(`Unknown status: '${status}'!`);
      }
    });
    return result.filter((item) => item !== undefined).join('\n');
  };
  return iter(ast, []);
};

export default plainFormat;
