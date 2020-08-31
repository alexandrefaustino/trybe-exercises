const salarioBruto = 10000.00;
let impostoINSS = 0;
let impostoIR = 0;

if (salarioBruto <= 1556.94) {
  impostoINSS = (salarioBruto * 8) / 100;    
} else if ((salarioBruto >= 1556.95) && (salarioBruto <= 2594.92)) {
    impostoINSS = (salarioBruto * 9) / 100  
} else if ((salarioBruto >= 2594.93) && (salarioBruto <= 5189.82)) {
    impostoINSS = (salarioBruto * 11) / 100  
} else {
  impostoINSS = 570.88;
}

let salarioBase = salarioBruto - impostoINSS;

if ((salarioBase >= 1903.99) && (salarioBase <= 2826.65)) {
    impostoIR = ((salarioBase * 7.5) / 100) - 142.80; 
} else if ((salarioBase >= 2826.66) && (salarioBase <= 3751.05)) {
  impostoIR = ((salarioBase * 15) / 100) - 354.80; 
} else if ((salarioBase >= 3751.06) && (salarioBase <= 4664.68)) {
  impostoIR = ((salarioBase * 22.5) / 100) - 636.13; 
} else if ((salarioBase > 4664.68)) {
  impostoIR = ((salarioBase * 27.5) / 100) - 869.36; 
}

let salarioLiquido = salarioBase - impostoIR;
console.log(`Salário Bruto R$${salarioBruto}`);
console.log(`Imposto INSS R$${impostoINSS}`);
console.log(`Salário Base R$${salarioBase}`);
console.log(`Imposto de Renda R$${impostoIR}`);

//Limitando o salário líquido a duas casas decimais
salarioLiquido = parseFloat(salarioLiquido.toFixed(2));
console.log(`Salário líquido R$${salarioLiquido}`);
