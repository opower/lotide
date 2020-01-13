const letterPositions = str => {
  const results = {};

  let i = 0;
  for(const letter of str){
    if(results[letter]){
      results[letter].push(str.indexOf(letter, i));
      i++;
    }
    else{
      results[letter] = [str.indexOf(letter)];
      i++;
    }
  }
  return results;
}
module.exports = letterPositions;