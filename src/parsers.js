import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export default (filepath) => {
  const format = path.extname(filepath);
  const data = fs.readFileSync(filepath, 'utf8');
  let parse;
  if (format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yml') {
    parse = yaml.safeLoad;
  }
  return parse(data);
};
