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

const letterPositions = str => {
  const results = {};

  let i = 0;
  for(const letter of str){
    if(results[letter]){
      results[letter].push(str.indexOf(letter, i));
      i++;
    }
    else{
      results[letter] = [str.indexOf(letter)];
      i++;
    }
  }
  return results;
}

assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('helloo').o, [4,5]);