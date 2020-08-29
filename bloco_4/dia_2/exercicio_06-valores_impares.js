let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalOddNumbers = 0;

for (let currentValue of numbers){
    if (currentValue % 2 === 1){
      totalOddNumbers += 1;      
    }
}

if (totalOddNumbers > 0 ){
  console.log(`Existem ${totalOddNumbers} números ímpares no array`);
} else {
  console.log("nenhum valor ímpar encontrado");
}