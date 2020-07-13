import fs from 'fs';
import path from 'path';
import makeDiff from './diff.js';
import chooseFormatter from './formatters/index.js';
import parseFile from './parsers.js';

const getData = (filepath) => fs.readFileSync(filepath, 'utf8');
const getExtension = (filepath) => path.extname(filepath);

const genDiff = (firstPath, secondPath, format) => {
  const firstFile = parseFile(getData(firstPath), getExtension(firstPath));
  const secondFile = parseFile(getData(secondPath), getExtension(secondPath));
  const diff = makeDiff(firstFile, secondFile);
  return chooseFormatter(diff, format);
};

export default genDiff;
