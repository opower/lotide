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


assertArraysEqual(middle([1,2,3]),[3]);