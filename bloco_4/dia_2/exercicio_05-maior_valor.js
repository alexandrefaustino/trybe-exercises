let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maximunValue = numbers[0];
let currentValue;

for (let i = 1; i < numbers.length; i+=1){  
  currentValue = numbers[i];
  if (currentValue > maximunValue){
    maximunValue = currentValue;
  }
}

console.log(maximunValue);