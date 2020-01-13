const eqArrays = require('./eqArrays');
const eqObjects = (obj1, obj2) => {

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  console.log(keys1);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const i of keys1) {
    if(typeof(obj1[i]) === 'object' || !Array.isArray(obj[i]) || obj[i] !== null)
    if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
      if (!eqArrays(obj1[i], obj2[i])) {
        return false;
      }
    } else {
      if (obj1[i] !== obj2[i]) {
        return false;
      }
    }
  }
  return true;

};
module.exports = eqObjects;