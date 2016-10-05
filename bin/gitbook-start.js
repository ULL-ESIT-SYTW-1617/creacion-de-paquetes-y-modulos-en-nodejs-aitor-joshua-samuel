#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');

console.dir(argv.x);

if(JSON.stringify(argv) == '{"_":[]}'){
 console.log("Añada un comando correcto");
 console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
 console.log("-> -git (Pushea al repositorio especificado en el package.json)");
}
if(argv.n){
	fs.createDir("./" + argv.n, function(err){
    if(err)
      console.log(err);
	});

	fs.createDir("./" + argv.n + "/txt", function(err){
    if(err)
      console.log(err);
	});

	fs.copyDir("./node_modules/gitbook-start-aitor-joshua-samuel/txt", "./" + argv.n + "/txt", function (err) {
  	if (err)
      console.error(err)
	})

	fs.createDir("./" + argv.n + "/scripts", function(err){
    if(err)
      console.log(err);
	});

	fs.copyDir("./node_modules/gitbook-start-aitor-joshua-samuel/scripts", "./" + argv.n + "/scripts", function (err) {
  	if (err)
      console.error(err)
	});

  fs.copyFile("./node_modules/gitbook-start-aitor-joshua-samuel/gulpfile.js","./" + argv.n+ "/gulpfile.js",function(err){
    if(err)
      console.log(err);
  });

  fs.copyFile("./node_modules/gitbook-start-aitor-joshua-samuel/book.json","./" + argv.n + "/book.json",function(err){
    if(err)
    console.log(err);
  });
}

// deploy.js

if(argv.git){

 var repo = require("./package.json").reposirory.url;
push('.', repo, function() {
  console.log('Done!');
});

}
