const path = require("path");

console.log("basename", path.basename("../readme.md"));
console.log("normalize", path.normalize("../readme.md"));
console.log(
  "join path:",
  path.join("/teste", "teste2", "teste3/teste4", "dir2", "..")
);
console.log("resolve", path.resolve("path.js"));
console.log("extension", path.extname("path.js"));
