import yaml from 'js-yaml';
import ini from 'ini';
import fs from 'fs';
import path from 'path';

export default (filepath) => {
  const format = path.extname(filepath);
  const data = fs.readFileSync(filepath, 'utf8');
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.safeLoad(data);
    case '.ini':
      return ini.parse(data);
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};
