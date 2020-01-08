const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} != ${expected}`);
  }

};


const countLetters = str => {
  let results = {};

  for(const i of str){
    if(results[i]){
      results[i] += 1;
    }
    else{
      results[i] = 1;
    }
  }

  console.log(results);
  return results;
}

const results = countLetters('lighthouse');

assertEqual(results['l'],1);
assertEqual(results['h'],2);
