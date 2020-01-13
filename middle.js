const middle = array => {

  let middle = [];

  if (array.length <= 2) {
    return middle;
  }

  if (array.length % 2 !== 0) {
    let mid = Math.floor(array.length / 2);
    middle.push(array[mid]);
    return middle;
  } else {
    let mid1 = array.length / 2;
    let mid = mid1 - 1;
    middle.push(array[mid]);
    middle.push(array[mid1]);
    return middle;
  }
  
};
module.exports = middle;
