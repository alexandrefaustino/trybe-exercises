const assert = require('assert');
const greetPeople = (people) => {
  const newArray = [];
  const greeting = 'Hello';
  people.forEach(element => {
    newArray.push(`${greeting} ${element}`);
  });
  return(newArray);  
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);