var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'html/txt'});
    res.end("hello world!")
}).listen(3000)
console.log("initialisation server");