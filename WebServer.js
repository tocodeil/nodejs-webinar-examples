var http = require('http');

var utils = require('./utils.js');

var server = http.createServer(function(req,res)
{
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(`<html><body>${utils.getGreet('Avi')}</body></html>`);
    res.end();
});

server.listen(3000);
console.log("Server is running...");