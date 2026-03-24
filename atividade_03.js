let ganhoAnual = 0;
let gastoAnual = 0;

for (let i = 1; i <= 12; i++) {
    let ganho = Number(prompt(`Digite o ganho bruto do mês ${i}:`));
    let gasto = Number(prompt(`Digite os gastos do mês ${i}:`));

    ganhoAnual += ganho;
    gastoAnual += gasto;
}
let saldo = ganhoAnual - gastoAnual;

console.log("Ganho bruto anual: R$ " + ganhoAnual);
console.log("Gasto anual: R$ " + gastoAnual);
console.log("Saldo financeiro anual: R$ " + saldo);

if (saldo > 0) {
    console.log("A empresa teve LUCRO ");
} else if (saldo < 0) {
    console.log("A empresa teve PREJUÍZO");
} else {
    console.log("A empresa ficou no ZERO a ZERO");
}
