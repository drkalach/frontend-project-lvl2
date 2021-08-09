import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';
import { readFile } from '../src/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);


test('json', () => {
  const file1 = getFixturePath('filepath1.json');
  const file2 = getFixturePath('filepath2.json');
  const result = readFile('result.txt');

  expect(genDiff(file1, file2)).toBe(result);
});

test('yml', () => {
  const file1 = getFixturePath('filepath1.yml');
  const file2 = getFixturePath('filepath2.yml');
  const result = readFile('result.txt');

  expect(genDiff(file1, file2)).toBe(result);
});

test('json-nested', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const result = readFile('result-nested.txt');

  expect(genDiff(file1, file2)).toBe(result);
});
