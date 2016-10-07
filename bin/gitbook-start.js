#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');

if(JSON.stringify(argv) == '{"_":[]}'){
 console.log("Añada un comando correcto");
 console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
 console.log("-> -git (Pushea al repositorio especificado en el package.json)");
}

if(argv.h){
 console.log("Añada un comando correcto");
 console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
}

if(argv.n){

	fs.copyDir("./node_modules/gitbook-start-aitor-joshua-samuel/template", "./" + argv.n, function (err) {
  	if (err)
      console.error(err)
	});

}
