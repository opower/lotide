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
    for(let i = 0; i < a1.length -1; i++){
      if(a1[i] != a2[i]){
        return false;
      }
    }
    return true;
  }

}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);