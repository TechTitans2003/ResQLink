require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const connectDb = require('./db/db');

const authRouter = require('./routes/auth-route');
const deviceRouter = require('./routes/device-route');
const adminRouter = require('./routes/admin-route');
const contactRouter = require('./routes/contact-route');
const sensorRouter = require('./routes/sensor-route');
const errorMiddleware = require('./middlewares/error-middleware');

const app = express();


const corsOptions = {
    origin: "http://localhost:4000",
    methods: "GET, POST, PUT, PATCH, DELETE",
    credentials: true,
}

app.use(cors(corsOptions));


app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/device', deviceRouter);
app.use('/api/admin', adminRouter);
app.use('/api/contact', contactRouter);
app.use('/api/sensor', sensorRouter);

// Use the client app
app.use(express.static(path.join(__dirname, '/client/dist')))

app.use(errorMiddleware)

// Render client for any path
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/client/dist/index.html'))
);

app.get("/api", (req, res) => {
    res.send("Hello, We Welcome You Here");
})

const port = 4000;
// const hostname = '127.0.0.1';

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is started at http://127.0.0.1:${port}`);
    })
});