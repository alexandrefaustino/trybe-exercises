const words = "minha terra tem palmeiras";

const createsArrayOfWords = (array) => {
  const arrayWords = words.split(' ');
  return arrayWords;
}

const biggestWord = (words) => {
  let total = 0;
  let output = '';
  const arrayWords = createsArrayOfWords(words);  
  arrayWords.forEach((element) => {
    if (element.length > total) {
      total = element.length;
      output = element;
    }
  });
  return output;
}

console.log(biggestWord(words));