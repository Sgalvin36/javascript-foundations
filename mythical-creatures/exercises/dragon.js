function createDragon(name, rider, temperment) {
  return {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true
  };
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`;
}

function eat(dragon) {
  dragon.timesEaten += 1;
  if (dragon.timesEaten >= 3){
    dragon.hungry = false;
  }
  return dragon;
}

function findFireBreathers(array) {
  let fireBreathers = []
  for (const i of array){
    if (i.temperment === 'aggressive'){
      fireBreathers.push(i); 
    }
  }
  return fireBreathers;
}
module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}