function maxNumbersRepeat(array){
  let contNumber = 0;
  let maxNumber= 0;
  let indexMax= 0;

  for(let i = 0; i < array.length; i +=1){
    for(let j = 0; j < array.length; j +=1){
      if(array[i] === array[j]){
        contNumber += 1;
      }    
    }
    if(contNumber > maxNumber){
      maxNumber = contNumber;
      indexMax = i;
    }
    contNumber = 0;  
  }
  console.log(array[indexMax]);
}


let arrayTeste = [2, 3, 3, 5, 3, 2, 3, 9, 5, 0, 5];
maxNumbersRepeat(arrayTeste);