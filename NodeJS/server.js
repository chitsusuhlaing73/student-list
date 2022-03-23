var http = require("http");
var url = require("url");
http.createServer(function(req, res) {
    var reqUrl = url.parse(req.url, true);
    var html = "";
    switch(reqUrl.pathname) {
        case '/':
            html = '<h1>Index Page</h1>';
            html += '<a href="useradd.html">User Add</a><br>';
            html += '<a href="userlist.html">User List</a>';
            break;
        case '/useradd.html':
            html = '<h1>User Add</h1>';
            html += '<form action="/useradd.do">';
            html += 'User name: <input type="text" name="uname"><br>';
            html += 'User email: <input type="email" name="uemail"><br>';
            html += '<button onclick="go(this.form);">Add User</button>';
            html += '</form>';
            html += '<script>';
            html += 'console.log("Page loaded...' + Date.now() + '");';
            html += 'function go(f) {';
            html += 'alert("User name: " + f.uname.value);';
            html += 'f.submit();';
            html += '}';
            html += '</script>';
            break;
        case '/useradd.do':
            html = '<h1>Action Called : /useradd.do</h1>';
            html += 'User Name : ' + reqUrl.query.uname + '<br>';
            html += 'User Email : ' + reqUrl.query.uemail + '<br>';
            break;
        case '/userlist.html':
            html = '<h1>User List</h1>';
            html += '<form action="/userlist.do">';
            html += '<input type="search" name="key">';
            html += '</form>';
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
}).listen(70);
console.log("Server is running...")
