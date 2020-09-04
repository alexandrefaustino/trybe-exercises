function minIndexValue(array){
  let minNumber = array[0];
  let minIndex = 0;
  for(let i = 1; i < array.length; i += 1){
    if(array[i] < minNumber){
      minNumber = array[i];
      minIndex = i;
    }
  }
  return minIndex;
}

let meuArray = [1,25,-8,42,5]
let index = minIndexValue(meuArray);
console.log(`O índice do menor valor é: ${index}`);