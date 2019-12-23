require("./subdirectory/sub");
console.log("--------------");
console.log(`Nome do Arquivo: `, __filename);
console.log(`Diretório do Arquivo: `, __dirname);
console.log(`Diretório onde foi invocado: `, process.cwd());
console.log(`Parâmetros de execução: `, process.argv);
console.log(`Ambiente do Servidor:`, process);
