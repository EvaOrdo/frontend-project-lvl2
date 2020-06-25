const jsonFormat = (ast) => {
  const iter = (tree) => {
    const result = tree.map((node) => {
      const [status, key, val1, val2] = node;
      switch (status) {
        case 'added':
          return { key, status: 'added', val: val1 };
        case 'removed':
          return { key, status: 'removed', val: val1 };
        case 'unchanged':
          return { key, status: 'unchanged', val: val1 };
        case 'changed':
          return {
            key, status: 'changed', val: val1, newVal: val2,
          };
        case 'ancestor':
          return { kye: key, status: 'ancestor', children: iter(val1) };
        default:
          return false;
      }
    });
    return result;
  };
  return JSON.stringify(iter(ast));
};

export default jsonFormat;
