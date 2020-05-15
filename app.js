const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        const html = `
<html>
<head>
    <title>Test Page</title>    
</head>
<body>
    <h1>Testing Server</h1>
    <form action="/message" method="post">
        <input type="text">
        <button type="submit">Send</button>
    </form>
</body>
</html>`;
        res.setHeader('Content-Type', 'text/html');
        res.write(html);
        return res.end();
    }

});

server.listen(3000);
