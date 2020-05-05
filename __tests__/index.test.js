import { test, expect } from '@jest/globals';
import fs from 'fs';
import genDiff from '../src/index.js';

test('gendiff', () => {
  expect(genDiff('__fixtures__/before.json', '__fixtures__/after.json')).toEqual(fs.readFileSync('__fixtures__/expected.txt', 'utf-8').trim());
});
