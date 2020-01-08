const eqObjects = (obj1, obj2) => {

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const i of keys1) {
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

const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  if(eqObjects(obj1,obj2)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  }
  else{
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(obj1)} != ${inspect(obj2)}`);
  }
}

assertObjectsEqual({a: '1', b: '2'}, {a: '1', b: '5'});
