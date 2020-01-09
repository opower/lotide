const eqArrays = (a1, a2) => {

  if (a1.length !== a2.length) {
    return false;
  } else {
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) {
        return false;
      }
    }
    return true;
  }

};

const assertArraysEqual = (a1, a2) => {

  if (eqArrays(a1,a2)) {
    console.log(`✅✅✅ Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${a1} != ${a2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
  
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word[word.length - 1]);

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(results2, [6, 7,2,5,3]);
assertArraysEqual(results3, ['d','l','o','r','m']);