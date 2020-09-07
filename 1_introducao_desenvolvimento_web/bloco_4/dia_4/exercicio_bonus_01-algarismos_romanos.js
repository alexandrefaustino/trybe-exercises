const romansNumber = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function transformsNumberRomanos(numbersRomans) {
  numbersRomans = numbersRomans.toUpperCase();
  numbersRomans = numbersRomans.replace('IV','IIII')
  numbersRomans = numbersRomans.replace('IX','VIIII')
  numbersRomans = numbersRomans.replace('XL','XXXX')
  numbersRomans = numbersRomans.replace('XC','LXXXX')
  numbersRomans = numbersRomans.replace('CD','CCCC')
  numbersRomans = numbersRomans.replace('CM','DCCCC')
  return numbersRomans;
}  

function valueNumbersRomans(numbersRomans) {
  numbersRomans = transformsNumberRomanos(numbersRomans);
  let outputNumber = 0
  for (let number of numbersRomans) {
    for (let key in romansNumber) {
      if ( number === key) {
        outputNumber += romansNumber[key];
      }
    }
  }
  return outputNumber;
}

console.log(valueNumbersRomans('CM'));