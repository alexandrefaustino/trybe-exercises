let a = 3;
let b = 1;
let c = 9;

if ((a % 2 === 1) || (b % 2 === 1) || (c % 2 == 1)){
  console.log("Pelo menos um dos valores é ímpar");
  return true;
} else {
  console.log("Nenhum dos valores testados é ímpar");
  return false;
}