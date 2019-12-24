console.log("Exibindo uma mensagem no console!");

//erro

console.error(new Error("Exibindo mensagem de erro, temos problemas!"));

const carros = ["GM", "FIAT", "FORD", "VW", "RENAULT"];

console.table(carros);

const dados = { name: "Thiago Roberto", empresa: "Tecmil" };

console.table(dados);

console.count("processo");
console.count("processo");

console.log("Resetando o processo");
console.countReset("processo");
console.count("processo");

console.time("contador");
for (let index = 0; index < 100; index++) {
  // console.log(" - ");
}
console.timeEnd("contador");

console.assert(true, "Faça alguma coisa");
console.assert(false, "Ih rapaz, %s, que pena!", "Não funcionou");

// console.clear();
