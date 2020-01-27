const eqArrays = (a1, a2) => {

  if (a1.length !== a2.length) {
    return false;
  }
  for (const i in a1) {
    if (Array.isArray(a1[i])) {
      let value = eqArrays(a1[i], a2[i]);
      if (!value) {
        return false;
      }
    } else if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;
