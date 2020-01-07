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

const assertArraysEqual = (a1, a2) => {

  if(eqArrays(a1,a2)){
    console.log(`✅✅✅ Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${a1} != ${a2}`);
  }
}

assertArraysEqual([1,2,3], [1,2]);