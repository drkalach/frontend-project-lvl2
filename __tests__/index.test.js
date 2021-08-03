import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('genDiff', () => {
  const file1 = getFixturePath('filepath1.json');
  const file2 = getFixturePath('filepath2.json');
  const result = readFile('result.txt');

  expect(genDiff(file1, file2)).toBe(result);
});
