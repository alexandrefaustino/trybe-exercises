function maxIndexValue(array){
  let maxNumber = array[0];
  let maxIndex = 0;
  for(let i = 1; i < array.length; i += 1){
    if(array[i] > maxNumber){
      maxNumber = array[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

let meuArray = [10,25,30,42,5]
let index = maxIndexValue(meuArray);
console.log(`O índice do maior valor é: ${index}`);