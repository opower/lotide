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

const assertArraysEqual = (a1, a2) => {

  if(eqArrays(a1,a2)){
    console.log(`✅✅✅ Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${a1} != ${a2}`);
  }
}

const without = (source, itemsToRemove) => {

  let arr = [];

  for(let i = 0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){
      arr.push(source[i]);
    }
  }
  return arr;

}

assertArraysEqual(without([1,2,3], [1]) , [2,3]);
assertArraysEqual(without(['hi',2,3], ['hi']), [2,3]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
