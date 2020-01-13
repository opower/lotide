const flatten = array => {

  let arr = [];
  for(const i in array){
    if(typeof(array[i]) === 'number'){
      arr.push(array[i]);
    }
    else if(Array.isArray(array[i])){
      for(const j in array[i]){
        arr.push(array[i][j]);
      }
    }
  }
  return arr;

}
module.export = flatten;
