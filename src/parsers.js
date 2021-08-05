import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parser = (file) => {
  const filename = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', file));
  let parse;
  if (path.extname(file) === '.json') {
    parse = JSON.parse(filename);
  } else if (path.extname(file) === '.yaml' || path.extname(file) === '.yml') {
    parse = yaml.load(filename);
  }
  return parse;
};

export default parser;