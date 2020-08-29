let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minValue = numbers[0];
for (let currentValue of numbers) {
  if (currentValue < minValue) {
    minValue = currentValue;
  }
}

console.log(`O menor valor no array é: ${minValue}`);