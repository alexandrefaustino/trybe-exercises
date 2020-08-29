let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;
totalElements = numbers.length;

for(let number of numbers){
  sum += number;
}

average = sum / totalElements;

console.log(`A média dos elementos do array é: ${average}`);
if (average > 20)  {
  console.log(`Valor maior que 20`);
} else {
  console.log(`Valor menor ou igual a 20`);
}


