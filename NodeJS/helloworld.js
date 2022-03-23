var http = require("http");
var dt = require('./mymodule');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Now : " + dt.myDateTime() + "<br>");
    res.write("2 + 3 + 3 + 4 = " + dt.add(2,3,3,4) + "<br>");
    res.end("Hello World!");
}).listen(8080);
