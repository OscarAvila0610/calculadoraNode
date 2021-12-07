const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  //si la persona no da un parametro pone el 5 por default
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
      consola += `${colors.red(base)} ${'X'.green} ${colors.red(i)} ${'='.green} ${colors.red(base * i)}\n`;
    }

    if (listar) {
      console.log("==================".green);
      console.log("    Tabla del: ".green, colors.yellow(base));
      console.log("==================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
