const without = (source, itemsToRemove) => {

  let arr = [];

  for(let i = 0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){
      arr.push(source[i]);
    }
  }
  return arr;

}
module.exports = without;
