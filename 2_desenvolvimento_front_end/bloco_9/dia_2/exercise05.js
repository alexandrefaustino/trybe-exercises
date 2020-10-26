const numberSquared = () => {
  const numberDrawn = Math.floor(Math.random() * 51);
  return Math.pow(numberDrawn, 2);
} 

const createArrayNumber = () => {
  const arrayNumber = [];
  while (arrayNumber.length < 10) {
    arrayNumber.push(numberSquared());
  }
  return arrayNumber;
}

const sumList = (array) => array.reduce((ac, cv) => ac + cv, 0);

const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const maxNumber = 8000;
    const arrayNumber = createArrayNumber();
    const sum = sumList(arrayNumber);
    if (sum >= maxNumber ) return reject(sum);
    resolve(sum);
  })
  .then(sum => [2, 3, 5, 10].map(number => sum / number))
  .then(array => console.log(sumList(array)))
  .catch(sum => console.log(`É mais de oito mil! Essa promise deve estar quebrada :( soma: ${sum}`))
};

fetchPromise();
