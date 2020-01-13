const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = arr => {

  let middle = [];

  if(arr.length <= 2){
    return middle;
  }

  if (arr.length % 2 != 0){
    let mid = Math.floor(arr.length / 2);
    middle.push(arr[mid]);
    return middle;
  }
  else{
    let mid1 = arr.length / 2;
    let mid = mid1 - 1;
    middle.push(arr[mid]);
    middle.push(arr[mid1]);
    console.log(middle);
    return middle;
  }
  
}
module.exports = middle;
