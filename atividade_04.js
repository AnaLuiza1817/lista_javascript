let numeros = [];

for (let i = 1; i <= 4; i++) {
    let valor = parseInt(prompt(`Digite o ${i}º valor inteiro:`));
    numeros.push(valor);
}
numeros.sort((a, b) => a - b);

console.log ("Valores em ordem decrescente: ");
console.log (numeros);

