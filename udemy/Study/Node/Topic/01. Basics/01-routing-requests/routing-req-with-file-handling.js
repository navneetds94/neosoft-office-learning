const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        const indPage = `<html>
        <head>
            <title>Home Page</title>
        </head>
        <body>
            <h1>This is a Home Page</h1>
            <form action="/message" method="POST">
                <input type="text" placeholder="Enter message" />
                <button type="submit">Send</button>
            </form>
        </body>
    </html>`
        res.write(indPage);
        return res.end();
    }

    // sending data to file
    if (url === '/message' && method === 'POST'){
        console.log("Form Submitted Successfully!!!!!!!!!");
        fs.writeFileSync('message.txt','Hello World');
        res.statusCode = 302; // redirection status code
        res.setHeader('Location', '/');
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