function invertsWord(params){
  let word="";
  let endPosition = params.length - 1;
  for(let i = endPosition; i >=0 ; i -= 1){
      word += params[i];
  }
  return word;  
}

function verificaPalindromo(params) {
  let word = invertsWord(params);
  if(word === params){
    console.log("É palíndromo");
  } else {
    console.log("Não é palíndromo");
  }
}

verificaPalindromo("arara");
