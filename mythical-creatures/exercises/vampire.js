function createVampire(name, pet='bat') {
  return {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0
  }
}

function encounterDeliciousVictim(vampire) {
  let result;
  if(vampire.thirsty) {
    result = 'I WANT TO SUCK YOUR BLOOD!';
  } else {
    result = 'No thanks, I am too full.'
  }
  return result;
}

function drink(vampire) {
  if(vampire.thirsty) {
    vampire.ouncesDrank += 10;
  }
  if(vampire.ouncesDrank >= 50) {
    vampire.thirsty = false;
  }
  return vampire
}

function inquirePlace(locations, place) {
  let result;
  for(const location of locations) {
    if(location === place){
      result = `Yes, I have spent some time in ${place}.`;
      break;
    }
    result = `No, I have never been to ${place}.`;
  }
  return result;
}

function findBatLovers(array) {
  let result = [];
  for(const vampire of array) {
    if(vampire.pet === 'bat'){
      result.push(vampire.name);
    }
  }
  return result;
}

module.exports = {
  createVampire,
  drink, 
  findBatLovers, 
  encounterDeliciousVictim,
  inquirePlace
}