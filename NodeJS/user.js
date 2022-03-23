var url = require("url");

exports.add = function(req, res) {
    var q = url.parse(req.url, true).query;
    var html = '<h1>Action Called : /useradd.do</h1>';
    html += 'User Name : ' + q.uname + '<br>';
    html += 'User Email : ' + q.uemail + '<br>';
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html);
}

exports.list = function(req, res) {
    var q = url.parse(req.url, true).query;
    var html = '<h1>Action Called: /userlist.do</h1>';
    html += 'Search Key: ' + q.key;
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html);
}
