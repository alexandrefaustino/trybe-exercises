let baseTriangulo = 5;
baseTriangulo -= 1;
let asterisco = "     ";
let result = asterisco.split("");
let triangulo;

for(let i = baseTriangulo; i >= 0; i -= 1){
  result[i] = "*";
  triangulo = "";
  for (let j = 0; j <= baseTriangulo; j += 1){
    triangulo += result[j];
  }
  console.log(triangulo);
}

