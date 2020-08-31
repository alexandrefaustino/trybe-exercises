let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let currentValue;
let nextValue;
let number;
let newArray = [];

for (let i = 0; i < numbers.length; i += 1){
  currentValue = numbers[i];
  if ((i + 1) === numbers.length) {
    number = currentValue * 2;
    newArray.push(number);
  } else {
    nextValue = numbers[i + 1];
    number = currentValue * nextValue;
    newArray.push(number);
  }    
}

console.log(newArray);

