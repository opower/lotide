const eqObjects = (obj1, obj2) => {

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const i of keys1) {
    if (typeof(obj1[i]) === 'object' && !Array.isArray(obj1[i])) {
      let value = eqObjects(obj1[i], obj2[i]);
      if (!value) {
        return false;
      }
    } else if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;

};
module.exports = eqObjects;
