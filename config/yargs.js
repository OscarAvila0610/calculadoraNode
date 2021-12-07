const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'muestra la tabla en consola'
  })
  .option('h',{
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Es el limite hasta donde se mostrara la tabla'
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }

    return true;
  }).argv;

module.exports = argv;

// const [ , ,arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
