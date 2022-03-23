var http = require("http");
var url = require("url");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var r = url.parse(req.url, true);
    console.log("Req URL ", req.url);
    console.log("pare URL ", r)
    res.write('Hello World');
    res.end();
}).listen(90);
console.log('Server Running...');
