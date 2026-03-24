const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nome do funcionário: ', (nome) => {
    rl.question('Salário do funcionário: ', (salario) => {
        const salarioNum = parseFloat(salario);
        console.log(`Funcionário: ${nome}, Salário: R$ ${salarioNum.toFixed(2)}`);
        rl.close();
    });
});