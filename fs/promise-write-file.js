const { writeFile } = require("fs");

function criaArquivo(name, content) {
  return new Promise((resolve, reject) => {
    writeFile(name, content, err => {
      if (err) return reject(err);

      resolve();
    });
  });
}

criaArquivo("promiseArquivo.txt", "criando arquivo utilizando promisse")
  .then(() => console.log("arquivo promiseArquivo.txt criado com sucesso"))
  .catch(err => console.log(err));
