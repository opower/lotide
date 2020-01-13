const findKeyByValue = (shows, value) =>{

  let names = Object.values(shows);
  let keys = Object.keys(shows);

  for(const i in names){
    if(names[i] === value){
      return keys[i];
    }
  }

}

module.exports = findKeyByValue;


