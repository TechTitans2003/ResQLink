const Device = require("../models/device-model");
const User = require("../models/user-model");

// Adding Device Id to User Device Array
const addDeviceToUser = async (userId, deviceId) => {
    try {
        await User.findByIdAndUpdate(
            userId,
            { $push: { devices: deviceId } },
            { new: true }
        );
    } catch (error) {
        console.error("Error adding devvice to user:", error);
    }
}

// Adding Device To User Id 
const addDevice = async (req, res, next) => {
    try {
        const userId = req.userId;
        const { deviceName, latitude, longitude, userName, email, phone } = req.body;

        // Check if all required fields are filled
        if (!deviceName || !latitude || !longitude || !userName || !email || !phone) {
            return res.status(400).json({ message: "Please fill all required fields." });
        }

        // Check if the device already exists
        const deviceExist = await Device.findOne({ name: deviceName });
        if (deviceExist) {
            return res.status(403).json({ message: "Device already exists." });
        }

        // Create the new device
        const device = await Device.create({
            name: deviceName,
            latitude,
            longitude,
            user: userId,
            username: userName,
            email,
            phone,
        });

        // Add the device to the user
        await addDeviceToUser(userId, device._id);

        return res.status(201).json({
            message: "Device added successfully.",
            device
        });

    } catch (error) {
        console.error(error);
        const err = {
            status: 500,
            message: "Internal server error. Cannot add device.",
            description: error.message
        };
        next(err);
    }
};


// Editing Device Info
const editDevice = async (req, res, next) => {
    const editData = req.body;
    const deviceId = req.params.id;
    const userId = req.userId;

    try {
        const device = await Device.findById(deviceId);
        if (!device) {
            return res.status(404)
                .json({ message: "Device Not Found" });
        }
        const updateDevice = await Device.updateOne({ _id: deviceId }, {
            $set: editData,
        });

        return res.status(200)
            .json({
                message: "Device Info Updated Successfully",
                device: editData,
                userId,
            })

    } catch (error) {
        console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Update Device Info",
            discription: error,
        };

        next(err);
    }
}

// Removing Device Id to User Post Array
const removeDeviceFromUser = async (userId, deviceId) => {
    await User.findByIdAndUpdate(userId, { $pull: { devices: deviceId } });
}

// Deleting Device
const deleteDevice = async (req, res) => {
    const userId = req.userId;
    const deviceId = req.params.id;

    try {

        const device = await Device.findById(deviceId);
        if (!device) {
            return res.status(404)
                .json({ message: "Device Not Found" });
        }

        if (device.user.toString() !== userId) {
            return res.status(401)
                .json({ message: "User Not Authorized To Delete Device" });
        }

        const deleteDevice = await Device.deleteOne({ _id: deviceId });
        await removeDeviceFromUser(userId, deviceId);

        return res.status(200).json({
            message: "Device Deleted Successfully",
        })

    } catch (error) {
        // console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Delete Device",
            discription: error,
        };

        next(err);
    }
}

const getDeviceInfo = async (req, res, next) => {
    const userId = req.userId;
    const deviceId = req.params.id;

    try {

        const device = await Device.findById(deviceId).populate('user');
        if (!device) {
            return res.status(404)
                .json({ message: "Device Not Found" });
        }

        const user = await device.user;
        if (user._id.toString() !== userId) {
            return res.status(403)
                .json({ message: "User Not Authorized To View This Device" });
        }

        return res.status(200)
            .json({
                message: "Device Info Fetched Successfully",
                device,
                user,
            })

    } catch (error) {
        console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Get Device Info",
            discription: error,
        };

        next(err);
    }
}

module.exports = {
    addDevice,
    editDevice,
    deleteDevice,
    getDeviceInfo
};