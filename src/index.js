import parseFile from './parsers.js';
import makeDiff from './diff.js';
import formatTree from './stylish.js';

const genDiff = (firstPath, secondPath) => {
  const firstFile = parseFile(firstPath);
  const secondFile = parseFile(secondPath);
  const diff = makeDiff(firstFile, secondFile);
  return formatTree(diff);
};

export default genDiff;
