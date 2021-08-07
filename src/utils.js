import fs from 'fs';
import path from 'path';

export const readFile = (file) => fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', file));

export const getExt = (file) => path.extname(file);
