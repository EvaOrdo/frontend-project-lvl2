import yaml from 'js-yaml';
import ini from 'ini';


export default (data, extencion) => {
  switch (extencion) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.safeLoad(data);
    case '.yaml':
      return yaml.safeLoad(data);
    case '.ini':
      return ini.parse(data);
    default:
      throw new Error(`Unknown format: '${extencion}'!`);
  }
};
