const findKeyByValue = (shows, value) =>{

  let names = Object.values(shows);
  let keys = Object.keys(shows);

  for(const i in names){
    if(names[i] === value){
      return keys[i];
    }
  }

}

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
module.exports = findKeyByValue;


