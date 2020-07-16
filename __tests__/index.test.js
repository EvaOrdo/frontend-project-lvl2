import { test, expect, beforeAll } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const pathToFile = (filename) => path.join(path.resolve(), '__fixtures__', filename);
const getData = (filename) => fs.readFileSync(pathToFile(filename), 'utf-8').trim();

let recursive;
let plain;
let json;

beforeAll(() => {
  recursive = getData('recursive.txt');
  plain = getData('plain.txt');
  json = getData('json.txt');
});

test.each([
  ['.json'],
  ['.yml'],
  ['.ini'],
])('gendiff with each formats', (ext) => {
  const first = pathToFile(`before${ext}`);
  const second = pathToFile(`after${ext}`);
  expect(genDiff(first, second)).toEqual(recursive);
  expect(genDiff(first, second, 'plain')).toEqual(plain);
  expect(genDiff(first, second, 'json')).toEqual(json);
});
