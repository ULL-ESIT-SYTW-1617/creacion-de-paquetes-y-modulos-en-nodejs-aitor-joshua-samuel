var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
console.dir(argv.x);

if(JSON.stringify(argv) == '{"_":[]}'){
 console.log("Añada un comando correcto");
 console.log("-> -n [NOMBRE DE DIR]");
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

	fs.copyDir("./txt", "./" + argv.n + "/txt", function (err) {
  	if (err)
      console.error(err)
	})

	fs.createDir("./" + argv.n + "/scripts", function(err){
    if(err)
      console.log(err);
	});

	fs.copyDir("./txt", "./" + argv.n + "/scripts", function (err) {
  	if (err)
      console.error(err)
	});

  fs.copyFile("./gulpfile.js","./" + argv.n+ "/gulpfile.js",function(err){
    if(err)
      console.log(err);
  });

  fs.copyFile("./book.json","./" + argv.n + "/book.json",function(err){
    if(err)
    console.log(err);
  });
}

if(argv.i)
{
  console.log("hola");
}
