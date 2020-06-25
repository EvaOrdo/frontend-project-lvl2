import { test, expect } from '@jest/globals';
import fs from 'fs';
import genDiff from '../src/index.js';

test('gendiff tree json files', () => {
  expect(genDiff('__fixtures__/before_tree.json', '__fixtures__/after_tree.json')).toEqual(fs.readFileSync('__fixtures__/expected_tree.txt', 'utf-8').trim());
});

test('gendiff plain format tree json files', () => {
  expect(genDiff('__fixtures__/after_tree.json', '__fixtures__/before_tree.json', 'plain')).toEqual(fs.readFileSync('__fixtures__/expected_plain_comparing.txt', 'utf-8').trim());
});

test('gendiff json format tree json files', () => {
  expect(genDiff('__fixtures__/before_tree.json', '__fixtures__/after_tree.json', 'json')).toEqual(fs.readFileSync('__fixtures__/expected_json_format.txt', 'utf-8').trim());
});
