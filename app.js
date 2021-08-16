const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

// console.log(process.argv);
// const [, , arg3 = "base=5"] = process.argv;
// const [, base] = arg3.split("=");

// console.log(argv);
// console.log(argv.base);

// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
  .then((fileName) => console.log(fileName, "creado"))
  .catch((err) => console.log(err));
