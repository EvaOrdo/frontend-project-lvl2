import fs from 'fs';

const genDiff = (firstPath, secondPath) => {
  const firstFile = fs.readFileSync(firstPath);
  const secondFile = fs.readFileSync(secondPath);
  const obj1 = JSON.parse(firstFile);
  const obj2 = JSON.parse(secondFile);

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

export default genDiff;
