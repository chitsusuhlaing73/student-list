var http = require("http");
var url = require("url");
var fs = require("fs");
http.createServer(function(req, res) {
    var reqUrl = url.parse(req.url, true);
    var html = "";
    if (reqUrl.pathname.endsWith('.do')) {
        switch(reqUrl.pathname) {
            
            case '/useradd.do':
                html = '<h1>Action Called : /useradd.do</h1>';
                html += 'User Name : ' + reqUrl.query.uname + '<br>';
                html += 'User Email : ' + reqUrl.query.uemail + '<br>';
                break;
            
            case '/userlist.do':
                html = '<h1>Action Called: /userlist.do</h1>';
                html += 'Search Key: ' + reqUrl.query.key;
                break;
            default:
                res.writeHead(404, {"Content-Type": "text/html"});
                res.write("Action Not Found " + reqUrl.pathname);
                res.write('<br><a href="http://localhost:70/">Back</a>');
                res.end();
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
    } else {
        var filename = '.' + reqUrl.pathname;
        if (filename == './') filename = './index.html';
        fs.readFile(filename, function(err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type':'text/html'});
                res.end("File not found : " + reqUrl.pathname);
            }
            var ctype = "text/html";
            if (reqUrl.pathname.startsWith("/js/")) {
                ctype = "text/javascript";
            } else if (reqUrl.pathname.startsWith("/css/")) {
                ctype = "text/css";
            }
            res.writeHead(200, {'Content-Type':ctype});
            res.end(data);
        })
    }
}).listen(9000);
console.log("Server is running...")
