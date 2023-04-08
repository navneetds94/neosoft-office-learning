const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(req.url);
    if (url === '/') {
        const indPage = `<html>
        <head>
            <title>Home Page</title>
        </head>
        <body>
            <h1>This is a Home Page</h1>
        </body>
    </html>`
        res.write(indPage);
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    const notfoundPage = `<html>
    <head>
        <title>Page Not Found</title>
    </head>
    <body>
        <h1>Page Not Found</h1>
    </body>
</html>`
    res.write(notfoundPage);
    res.end();
});

server.listen(3000);