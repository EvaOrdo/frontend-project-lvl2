import recursiveFormat from './stylish.js';
import plainFormat from './plain.js';

const chooseFormatter = (tree, format) => {
  switch (format) {
    case 'plain':
      return plainFormat(tree);
    case 'recursive':
      return recursiveFormat(tree);
    default:
      return recursiveFormat(tree);
  }
};

export default chooseFormatter;
