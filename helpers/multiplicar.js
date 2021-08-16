const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
    }

    fileName = `tabla-${base}.txt`;

    if (listar) {
      console.log(salida.green);
    }

    fs.writeFileSync(fileName, salida);

    return fileName;
  } catch (err) {
    return err;
  }
};

module.exports = {
  crearArchivo,
};
