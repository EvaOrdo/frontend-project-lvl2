import { test, expect } from '@jest/globals';
import fs from 'fs';
import genDiff from '../src/index.js';

test('gendif recursive format', () => {
  expect(genDiff('__fixtures__/before.json', '__fixtures__/after.json')).toEqual(fs.readFileSync('__fixtures__/recursive.txt', 'utf-8').trim());
  expect(genDiff('__fixtures__/before.yml', '__fixtures__/after.yml')).toEqual(fs.readFileSync('__fixtures__/recursive.txt', 'utf-8').trim());
  expect(genDiff('__fixtures__/before.ini', '__fixtures__/after.ini')).toEqual(fs.readFileSync('__fixtures__/recursive.txt', 'utf-8').trim());
});

test('gendiff plain format', () => {
  expect(genDiff('__fixtures__/before.json', '__fixtures__/after.json', 'plain')).toEqual(fs.readFileSync('__fixtures__/plain.txt', 'utf-8').trim());
  expect(genDiff('__fixtures__/before.yml', '__fixtures__/after.yml', 'plain')).toEqual(fs.readFileSync('__fixtures__/plain.txt', 'utf-8').trim());
  expect(genDiff('__fixtures__/before.ini', '__fixtures__/after.ini', 'plain')).toEqual(fs.readFileSync('__fixtures__/plain.txt', 'utf-8').trim());
});

test('gendiff json format', () => {
  expect(genDiff('__fixtures__/before.json', '__fixtures__/after.json', 'json')).toEqual(fs.readFileSync('__fixtures__/json.txt', 'utf-8').trim());
  expect(genDiff('__fixtures__/before.yml', '__fixtures__/after.yml', 'json')).toEqual(fs.readFileSync('__fixtures__/json.txt', 'utf-8').trim());
  expect(genDiff('__fixtures__/before.ini', '__fixtures__/after.ini', 'json')).toEqual(fs.readFileSync('__fixtures__/json.txt', 'utf-8').trim());
});
