function createHobbit(name = 'unknown', age = 0){
  return {
    name: name,
    age: age,
    isAdult: false,
    isOld: false,
    acquaintances: []
  }
}

function celebrateBirthday(hobbit) {
  hobbit.age += 1;
  if(hobbit.age > 100){
    hobbit.isOld = true;
  } else if(hobbit.age > 32){
    hobbit.isAdult = true;
  }
  return hobbit;
}

function getRing(hobbit){
  if(hobbit.name === 'Frodo'){
    return `Here is the ring!`;
  } else {
    return `You can't have it!`;
  }
}

function meetPeople(hobbit, people) {
  for (const i of people){
    hobbit.acquaintances.push(i);
  }
  return hobbit;
}

function findFriends(hobbit) {
  let friends = []
  for (const person of hobbit.acquaintances){
    if (person.relationship === 'friend'){
      friends.push(person.name);
    }
  }
  return friends;
}
module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}