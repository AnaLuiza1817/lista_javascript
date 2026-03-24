const prompt = require('prompt-sync')();

const sabores = {
    a: { nome: "Chocolate", preco: 1.50 },
    b: { nome: "Morango", preco: 2.50 },
    c: { nome: "Creme", preco: 2.50 },
    d: { nome: "Manga", preco: 3.20 },
    e: { nome: "Melancia", preco: 3.40 },
    f: { nome: "Vanilla Ice", preco: 3.00 },
    g: { nome: "Céu Azul", preco: 3.60 },
    h: { nome: "Brownie", preco: 4.00 },
    i: { nome: "Hawaiano", preco: 5.00 }
};

console.log("Sabores disponíveis:");
for (const codigo in sabores) {
    const sabor = sabores[codigo];
    console.log(`${codigo} - ${sabor.nome} (R$ ${sabor.preco.toFixed(2)})`);
}

const codigo = prompt("Digite o código do sabor desejado: ").toLowerCase();

if (sabores[codigo]) {
    const sabor = sabores[codigo];
    console.log(`O sabor escolhido foi ${sabor.nome}. Preço: R$ ${sabor.preco.toFixed(2)}`);
} else {
    console.log("Código inválido. Por favor, tente novamente.");
}