const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} != ${expected}`);
  }

};

const tail = array =>{
  let arr = [];
  for (let i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  console.log(arr);
  return arr;
};

const words = tail(['a', 'b', 'c', 'd']);
assertEqual(words.length, 3);