const findKey = (obj, callback) => {

  let keys = Object.keys(obj);
  for (const j of keys) {
    if (callback(obj[j])) {
      return j;
    }
  }
  return undefined;
};

module.exports = findKey;