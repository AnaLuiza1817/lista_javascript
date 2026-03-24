const prompt = require('prompt-sync')();

const salarioBruto = parseFloat(prompt('Informe o salário bruto: R$ '));

let taxaDesconto;
if (salarioBruto <= 1000) {
    taxaDesconto = 0.08;
} else if (salarioBruto <= 1500) {
    taxaDesconto = 0.085;
} else {
    taxaDesconto = 0.09;
}

const valorDesconto = salarioBruto * taxaDesconto;
const salarioLiquido = salarioBruto - valorDesconto;

console.log(`Salário informado: R$ ${salarioBruto.toFixed(2)}`);
console.log(`Taxa de desconto aplicada: ${(taxaDesconto * 100).toFixed(1)}%`);
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);