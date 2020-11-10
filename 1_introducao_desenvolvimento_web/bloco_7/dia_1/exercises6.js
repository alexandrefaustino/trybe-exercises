let arraySkills = ['HTML', 'CSS', 'JAVASCRIPT', 'GITHUB', 'PYTHON'];

const replaceX = (word) => {
  let phrase = 'Trybe x aqui!';
  const caracter = 'x';
  const result = phrase.replace('x', word);
  return result;
}
console.log(replaceX('Alexandre'));

const concatenar  = (string) => {
  let msg1 = `${string} Minhas cinco principais habilidade são:`;
  let msg2 = '';
  arraySkills.sort().forEach((element) => {
    msg2 += `\n${element}`     
  });  
  console.log(msg1 + msg2);  
}

concatenar(replaceX('Alexandre'));