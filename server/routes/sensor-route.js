const express = require('express');
const { sendData, readData } = require('../controllers/sensor-controller');

const router = express.Router();

router.route("/").get((req, res) => { 
    res.send("Welcome To Sensor Data API");
});

router.route("/send").patch(sendData);

router.route("/read").get(readData);

module.exports = router;