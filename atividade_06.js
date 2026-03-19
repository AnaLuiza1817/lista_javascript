let letra = prompt("Digite uma letra:").toLowerCase();

if (letra.length !== 1 || !letra.match(/[a-z]/)) {
    console.log("Digite apenas UMA letra válida.");
} else if ("aeiou".includes(letra)) {
    console.log("É uma VOGAL");
} else {
    console.log("É uma CONSOANTE");
}