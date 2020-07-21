import fs from 'fs';
import path from 'path';
import makeDiff from './diff.js';
import render from './formatters/index.js';
import parseData from './parsers.js';

const getData = (filepath) => fs.readFileSync(filepath, 'utf8');
const getExtension = (filepath) => path.extname(filepath);

const genDiff = (firstPath, secondPath, format) => {
  const firstFile = parseData(getData(firstPath), getExtension(firstPath));
  const secondFile = parseData(getData(secondPath), getExtension(secondPath));
  const diff = makeDiff(firstFile, secondFile);
  return render(diff, format);
};

export default genDiff;
