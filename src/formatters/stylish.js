import _ from 'lodash';

const renderVal = (value, depth) => {
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
      const [status, key, val1, val2] = node;
      const space = '  ';
      switch (status) {
        case 'unchanged':
          return `${space.repeat(depth)}  ${key}: ${renderVal(val1, depth)}`;
        case 'added':
          return `${space.repeat(depth)}+ ${key}: ${renderVal(val1, depth)}`;
        case 'removed':
          return `${space.repeat(depth)}- ${key}: ${renderVal(val1, depth)}`;
        case 'changed':
          return `${space.repeat(depth)}- ${key}: ${renderVal(val1, depth)}\n${space.repeat(depth)}+ ${key}: ${renderVal(val2, depth)}`;
        case 'ancestor':
          return `${space.repeat(depth)}  ${key}: {\n${iter(val1, depth + 2).join('\n')}\n${space.repeat(depth)}${space}}`;
        default:
          return false;
      }
    });
    return result;
  };
  const result = iter(ast, 1).join('\n');
  return `{\n${result}\n}`;
};

export default recursiveFormat;
