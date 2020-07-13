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
  ['__fixtures__/before.json', '__fixtures__/after.json'],
  ['__fixtures__/before.yml', '__fixtures__/after.yml'],
  ['__fixtures__/before.ini', '__fixtures__/after.ini'],
])('gendiff with each formats', (first, second) => {
  expect(genDiff(first, second)).toEqual(recursive);
  expect(genDiff(first, second, 'plain')).toEqual(plain);
  expect(genDiff(first, second, 'json')).toEqual(json);
});
