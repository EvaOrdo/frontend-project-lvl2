import { test, expect } from '@jest/globals';
import fs from 'fs';
import genDiff from '../src/index.js';

test('gendiff flat json files', () => {
  expect(genDiff('__fixtures__/before.json', '__fixtures__/after.json')).toEqual(fs.readFileSync('__fixtures__/expected.txt', 'utf-8').trim());
});

test('gendiff flat yml files', () => {
  expect(genDiff('__fixtures__/before.yml', '__fixtures__/after.yml')).toEqual(fs.readFileSync('__fixtures__/expected.txt', 'utf-8').trim());
});

test('gendiff flat ini files', () => {
  expect(genDiff('__fixtures__/before.ini', '__fixtures__/after.ini')).toEqual(fs.readFileSync('__fixtures__/expected.txt', 'utf-8').trim());
});
