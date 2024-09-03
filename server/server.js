require('dotenv').config();
const express = require('express');
const connectDb = require('./db/db');

const authRouter = require('./routes/auth-route');
const deviceRouter = require('./routes/device-route');

const app = express();


app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/device', deviceRouter);

app.get("/", (req, res) => {
    res.send("Hello, We Welcome You Here");
})

const port = 2024;
const hostname = '127.0.0.1';

connectDb().then(() => {
    app.listen(port, hostname, () => {
        console.log(`Server is started at http://${hostname}:${port}`);
    })
});