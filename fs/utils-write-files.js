const { promisify } = require("util");

const writeFile = promisify(require("fs").writeFile);
const conteudo =
  "criando um arquivo utilizando promisify do módulo nativo util";

writeFile("utilArquivo.txt", conteudo)
  .then(() => {
    console.log("arquivo utilArquivo.txt gerado com sucesso.");
  })
  .catch(err => {
    console.log(err);
  });
