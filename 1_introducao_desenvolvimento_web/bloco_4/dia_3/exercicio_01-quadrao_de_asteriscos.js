n = 5
let asteristico = "";

if (n >= 1) {
  for(let i = 1; i <= n; i += 1){
    asteristico += "*";
}
  for(let j = 1; j <= n; j += 1){
    console.log(asteristico);
  } 
} else {
  console.log("O valor de 'n' deve ser maior ou igual a 1");
}

