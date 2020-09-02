function sumSequence(number){
  let sum = 0;
  for(let i = 1; i <= number; i +=1){
    sum += i;
  }
  console.log(sum);
}

sumSequence(5);