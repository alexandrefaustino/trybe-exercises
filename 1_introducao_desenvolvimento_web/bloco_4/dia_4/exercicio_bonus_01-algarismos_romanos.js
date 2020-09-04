romansNumber = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function transformsNumberRomanos(number){
  for(let i in romansNumber){
    if(number === romansNumber[i]){
      console.log(i);
      break;
    }           
  }
}
transformsNumberRomanos(23);
let dividendo = 23;
let divisor = 10;
let resto;
let quociente;

resto = dividendo %  divisor;
quociente = dividendo - resto;
quociente = (dividendo - resto) / divisor;
console.log(resto);
console.log(quociente);

let outputNumber =0;
console.log(romansNumber.X);

outputNumber += romansNumber.X
outputNumber += romansNumber.X
console.log(outputNumber);