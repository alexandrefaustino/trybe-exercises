a = 55;
b = 45;
c = 80;

soma = a + b + c;
console.log(soma);

if (soma === 180){
  console.log("temos um triângulo");  
  return true;  
} else {
  console.log("Os angulos não formam um triângulo");
  return false;
}