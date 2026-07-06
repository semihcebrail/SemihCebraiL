var http = require('http');
var PORT = 1881;
var web = http.createServer((istek, cevap) => {
    cevap.statusCode = 200;
    cevap.setHeader('Content-Type', 'text/plain');
    cevap.end('sie');
});
web.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
