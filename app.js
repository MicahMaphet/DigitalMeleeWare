const http = require('http');
const fs = require('fs');
const url = require('url');

function renderHTML(path, response) {
    fs.readFile(path, null, (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'html' });
    var path = url.parse(req.url).pathname;
    switch (path) {
        case '/':
            renderHTML('index.html', res);
            break;
        default:
            res.writeHead(404);
            res.write('File not found: ' + path);
            res.end();
            break;
    }
}).listen(8080);
console.log('Server is listening on port 8080');
