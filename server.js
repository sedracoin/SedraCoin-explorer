//app.js
const express = require('express');
const http = require('http');
const path = require('path');
let app = express();
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);




app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});





app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"), err => {
        if (err) {
            console.log(err);
        }
    });
});
server.listen(port, () => console.log(`Running on localhost:${port}`));
