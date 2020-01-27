const eqArrays = require('./eqArrays');
const eqObjects = (obj1, obj2) => {

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const i of keys1) {
    if(typeof(obj1[i]) === 'object' && !Array.isArray(obj1[i])){

      let x = eqArrays(obj1[i], obj2[i]);
      console.log(x)

    } else if (obj1[i] === obj2[i]) {
        return true;
    }
  }
  return false;

};
module.exports = eqObjects;
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) 