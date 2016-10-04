var argv = require('minimist')(process.argv.slice(2));
console.dir(argv.x);

if(JSON.stringify(argv) == '{"_":[]}'){
 console.log("Añada un comando correcto");
}

if(argv.i)
{
  console.log("hola");
}
