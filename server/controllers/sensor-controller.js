const Device = require("../models/device-model");

const sendData = async (req, res, next) => {
    const { name, message, rssi } = req.body;

    try {
        const updatedDevice = await Device.findOneAndUpdate(
            { name: name },  // Search by transmitterID
            { rssi },   // Fields to update
            { new: true, upsert: true }  // Return the new document and insert if not found
        );

        res.status(200).json({ message: 'Data updated successfully', device: updatedDevice });
    } catch (error) {
        // res.status(500).send('Error updating data: ' + error.message);
        const err = {
            status: 500,
            message: "Data is Not Sent Internal Server Error",
            discription: error.message,
        }
        next(err);
    }
}

const readData = async (req, res, next) => {
    try {
        const device = await Device.find({});
        res.json({ device });
    } catch (error) {
        const err = {
            status: 500,
            message: "Data Cannot Fetched Internal Server Error",
            discription: error.message,
        }
        next(err);
    }
}

module.exports = { sendData, readData };