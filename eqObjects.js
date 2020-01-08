const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} != ${expected}`);
  }

};

const eqArrays = (a1, a2) => {

  if(a1.length != a2.length){
    return false;
  }
  else{
    for(let i = 0; i < a1.length; i++){
      if(a1[i] != a2[i]){
        return false;
      }
    }
    return true;
  }

}

const eqObjects = (obj1, obj2) => {

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if(keys1.length != keys2.length){
    return false;
  }

  for(const i of keys1){
    if(Array.isArray(obj1[i]) && Array.isArray(obj2[i])){
      if(!eqArrays(obj1[i], obj2[i])){
        return false;
      }
    }
    else{
      if(obj1[i] !== obj2[i]){
        return false;
      }
    }
  }


  return true;

}

const ab = { a: "1", b: "2" };
const aa = { a: "1", b: "2" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, aa), true);