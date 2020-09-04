function arrayName(array){
  let maxWordSize = array[0].length;
  let indexMaxWordSize=0;

  for(let i = 1; i < array.length - 1; i +=1){
    if(array[i].length > maxWordSize){
      maxWordSize = array[i].length;
      indexMaxWordSize = i;
    }
  }
  console.log(array[indexMaxWordSize]);
}

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
arrayName(arrayTeste);