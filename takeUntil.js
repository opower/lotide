const takeUntil = (array,callback) => {
  const result = [];
  for (const j of array) {
    if (callback(j)) {
      break;
    } else {
      result.push(j);
    }
  }
  return result;
};
module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1,  x => x < 0);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');


