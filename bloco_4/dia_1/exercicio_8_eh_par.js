let a = 3;
let b = 1;
let c = 90;

if ((a % 2 === 0) || (b % 2 === 0) || (c % 2 == 0)){
  console.log("Pelo menos um dos valores é par");
  return true;
} else {
  console.log("Nenhum dos valores testados é par");
  return false;
}