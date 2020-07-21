import recursiveFormat from './stylish.js';
import plainFormat from './plain.js';
import jsonFormat from './json.js';

const render = (tree, format) => {
  switch (format) {
    case 'json':
      return jsonFormat(tree);
    case 'plain':
      return plainFormat(tree);
    case 'recursive':
      return recursiveFormat(tree);
    default:
      return recursiveFormat(tree);
  }
};

export default render;
