#!/usr/bin/env node
var portfinder = require("portfinder");

var basePort = process.argv[2] || 8000;

portfinder.basePort = parseInt(basePort, 10);

portfinder.getPort(function(err, port){
	if(err) process.stderr.write(err.toString());
	else process.stdout.write(port.toString());
});