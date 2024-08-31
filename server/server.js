const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, We Welcome You Here");
})


const port = 2024;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
    
})