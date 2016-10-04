var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
console.dir(argv.x);

if(JSON.stringify(argv) == '{"_":[]}'){
 console.log("Añada un comando correcto");
}
if(argv.n){
	fs.createDir("./" + argv.n, function(err){
		console.log(err);
	})
}

if(argv.i)
{
  console.log("hola");
}
