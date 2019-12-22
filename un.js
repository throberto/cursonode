const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
  if (err) throw err;

  console.log(data);

  fs.unlink("file.txt", unlinkerr => {
    if (unlinkerr) throw unlinkerr;

    console.log("Arquivo excluído com sucesso!");
  });
});
