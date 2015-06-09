var http = require("http");

var server = http.createServer(function(request, response) {
	response.writeHead(200,{"Content-Type":"text/html"});
	if(request.url == "/"){
		response.write("<h1>Hello World</h1>");
	}
	if(request.url == "/bemvindo"){
		response.write("<h2>Bem-vindo</h2>");
	}
	response.end();
});

server.listen(3000, function(){
	console.log("Servidor Rodando");
});