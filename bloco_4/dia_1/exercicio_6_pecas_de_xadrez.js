let peca = "PEAO";
peca = peca.toLowerCase();

switch (peca) {
  case "rei":
    console.log("Qualquer direção, sendo uma casa por vez");
    break;
  case "dama":
    console.log("Qualquer direção e quantas casas quiser");
    break;
  case "torre":
    console.log("Horizontal e vertical em linha reta");
    break;
  case "bispo":
    console.log("Move-se na diagonal e quantas casas quiser");
    break;
  case "cavalo":
    console.log("Movimentos em forma de 'L'");
    break;
  case "peao":
    console.log("anda uma casa por vez");
    break;
  default:
    console.log("Peça inválida");
}
