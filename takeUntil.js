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


