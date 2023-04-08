const http = require('http');
const routes  = require('./routes');
const server = http.createServer(routes.html);
server.listen(3000);