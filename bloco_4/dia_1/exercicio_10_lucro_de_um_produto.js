let valorCusto = 50;
let impostoSobreCusto = (50 * 20) / 100;
let valorCustoTotal = valorCusto + impostoSobreCusto;
let valorVenda = 61;

if ((valorCusto < 0) || (valorVenda <= 0) || (valorVenda < valorCustoTotal)){
  console.log("Valores inválidos");
  return
} else {
  lucro = valorVenda - valorCustoTotal
  console.log(`Seu lucro foi de: R$${lucro},00`);
}






