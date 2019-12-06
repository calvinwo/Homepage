var http = require ('http'),
fs = require('fs');

fs.readFile('./index.html', function (err, html)
{
    if(err)
    {
        throw err;
    }

    let port = process.env.PORT;
    if (port == null || port == "") {
      port = 8000;
    }

    http.createServer(function(req, res)
    {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    }).listen(port);
})