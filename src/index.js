import parseFile from './parsers.js';
import makeDiff from './diff.js';
import chooseFormatter from './formatters/index.js';

const genDiff = (firstPath, secondPath, format) => {
  const firstFile = parseFile(firstPath);
  const secondFile = parseFile(secondPath);
  const diff = makeDiff(firstFile, secondFile);
  return chooseFormatter(diff, format);
};

export default genDiff;
