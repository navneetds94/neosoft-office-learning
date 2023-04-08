const fs = require('fs');
const requestHandler = (req, res) => {
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
                <input type="text" placeholder="Enter message" name="message" />
                <button type="submit">Send</button>
            </form>
        </body>
    </html>`
        res.write(indPage);
        return res.end();
    }

    // sending data to file
    if (url === '/message' && method === 'POST') {
        console.log("Form Submitted Successfully!!!!!!!!!");
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
            console.log(body)
        });
        return req.on('end', ()=> {
            const parseBodyData = Buffer.concat(body).toString()
            const newParseBody = decodeURIComponent(parseBodyData)
            const message = newParseBody.split('=')[1]
            console.log(message)
            fs.writeFile('message.txt',message, err => {
                res.statusCode = 302; // redirection status code
                res.setHeader('Location', '/');
                return res.end();
            })
        })
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
}

module.exports.html = requestHandler