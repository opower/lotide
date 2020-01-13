const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
  
};
module.exports = map;
// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word.length);
// const results3 = map(words, word => word[word.length - 1]);

