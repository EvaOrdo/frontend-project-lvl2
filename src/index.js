import parseFile from './parsers.js';

const compareObjects = (obj1, obj2) => {
  const result = [];
  Object.keys(obj1).forEach((key) => {
    if (key in obj2) {
      if (obj1[key] === obj2[key]) {
        result.push(`    ${key}: ${obj1[key]}`);
      } else {
        result.push(`  - ${key}: ${obj1[key]}`, `  + ${key}: ${obj2[key]}`);
      }
    } else {
      result.push(`  - ${key}: ${obj1[key]}`);
    }
  });
  Object.keys(obj2).forEach((key) => {
    if (!(key in obj1)) {
      result.push(`  + ${key}: ${obj2[key]}`);
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

const genDiff = (firstPath, secondPath) => {
  const firstFile = parseFile(firstPath);
  const secondFile = parseFile(secondPath);

  return compareObjects(firstFile, secondFile);
};

export default genDiff;
