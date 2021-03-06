/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const isEmpty = (arr) => {
  if (arr === null || arr.length === 0) return true;
  return false;
};
const validateNumber = (arr) => {
  let result = false;
  for (let index = 0; index < arr.length; index += 1) {
    if (typeof arr[index] !== 'number') {
      result = true;
      break;
    }
  }
  return result;
};
const average = (arr) => {
  if (isEmpty(arr) || validateNumber(arr)) return undefined;
  let sum = 0;
  arr.forEach((element) => {
    element = Math.round(element);
    sum += element;
  });
  return Math.round(sum / arr.length);
};

module.exports = average;
