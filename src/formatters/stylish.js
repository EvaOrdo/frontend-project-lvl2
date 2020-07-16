import _ from 'lodash';

const renderValue = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const space = '  ';
  const result = Object.keys(value).map((key) => `${space.repeat(depth + 2)}  ${key}: ${value[key]}`);
  return `{\n${result}\n${space.repeat(depth)}${space}}`;
};

const recursiveFormat = (ast) => {
  const iter = (tree, depth) => {
    const result = tree.map((node) => {
      const {
        status, key, value1, value2, children,
      } = node;
      const space = '  ';
      switch (status) {
        case 'unchanged':
          return `${space.repeat(depth)}  ${key}: ${renderValue(value1, depth)}`;
        case 'added':
          return `${space.repeat(depth)}+ ${key}: ${renderValue(value1, depth)}`;
        case 'removed':
          return `${space.repeat(depth)}- ${key}: ${renderValue(value1, depth)}`;
        case 'changed':
          return `${space.repeat(depth)}- ${key}: ${renderValue(value1, depth)}\n${space.repeat(depth)}+ ${key}: ${renderValue(value2, depth)}`;
        case 'ancestor':
          return `${space.repeat(depth)}  ${key}: {\n${iter(children, depth + 2).join('\n')}\n${space.repeat(depth)}${space}}`;
        default:
          throw new Error(`Unknown status: '${status}'!`);
      }
    });
    return result;
  };
  const result = iter(ast, 1).join('\n');
  return `{\n${result}\n}`;
};

export default recursiveFormat;
