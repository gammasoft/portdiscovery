var portfinder = require("portfinder");

portfinder.getPort(function(err, port){
	if(err) process.stderr.write(err.toString());
	else process.stdout.write(port.toString());
});