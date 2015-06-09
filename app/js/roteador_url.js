var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(request, response){
	if(request.url == "/artigo"){
		fs.readFile(__dirname + "/artigo.html", function(err, data){
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(data);
			response.end();
		});
	} else if(request.url == "/contato") {
		fs.readFile(__dirname + "/contato.html", function(err, data){
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(data);
			response.end();
		});
	} else {
		fs.readFile(__dirname + "/erro.html", function(err, data){
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(data);
			response.end();
		});
	}
});

server.listen(3000, function(){
	console.log("Servidor rodando na porta 3000");
})