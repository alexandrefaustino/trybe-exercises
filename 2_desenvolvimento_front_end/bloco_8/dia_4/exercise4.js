const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

const isAustralianAndWasBornInThe20thCentury = (object) => {
  const startSecXX = 1901;
  const endSecXX = 2000;
    const {name, bornIn, nationality} = object;
    if (bornIn >= startSecXX && bornIn <= endSecXX && nationality === 'Australian') {
      return {name, bornIn, nationality}
    }   
}
const filterPeople = (people) => {
  return people.filter(isAustralianAndWasBornInThe20thCentury);
}

const filteredPeople = filterPeople(people)

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })