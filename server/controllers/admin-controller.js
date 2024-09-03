const Device = require("../models/device.model");
const User = require("../models/user-model");

// Logging in Admin
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404)
                .json({ message: "Admin Not Found" });
        }

        if (!user.isAdmin) {
            return res.status(401)
                .json({ message: "User is not Admin" });
        }

        const isPass = await user.comparePass(password);
        if (!isPass) {
            return res.status(403)
                .json({ message: "Information is entered Wrong" });
        }

        return res.status(200).json({
            message: "Admin Login Successfull",
            token: user.generateToken(),
            user,
        })

    } catch (error) {
        // console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Login Admin",
            discription: error,
        };

        next(err);
    }
}

// Fetching All Users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200)
            .json({ message: "All Users Fetched Successfully", users })

    } catch (error) {
        // console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Get All User",
            discription: error,
        };

        next(err);
    }
}

// Fetching Single User
const getSingleUser = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findById(id).populate('devices');
        if (!user) {
            return res.status(404)
                .json({ message: "Following User Not Found" });
        }

        const devices = await user.devices;

        return res.status(200)
            .json({ message: "User Data Fetched", user, devices })

    } catch (error) {
        // console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Get This User",
            discription: error,
        };

        next(err);
    }
}

// Deleting The User
const removeUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404)
                .json({ message: "User Not Found" });
        }

        const deleteUser = await User.deleteOne({ _id: userId });

        return res.status(200)
            .json({ message: "User Deleted Successfully" });

    } catch (error) {
        // console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Delete User",
            discription: error,
        };

        next(err);
    }
}

// Fetching All Devices
const getAllDevices = async (req, res) => {
    try {
        const devices = await Device.find({});
        return res.status(200)
            .json({ message: "All Device Fetched Successfully", devices })

    } catch (error) {
        // console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Get All Device",
            discription: error,
        };

        next(err);
    }
}

// Fetching Single User
const getSingleDevice = async (req, res) => {
    try {
        const deviceId = req.params.id;

        const device = await Device.findById(deviceId).populate('user');
        if (!device) {
            return res.status(404)
                .json({ message: "Device Not Found" });
        }

        return res.status(200)
            .json({ message: "Device Data Fetched Successfully", device, })

    } catch (error) {
        // console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Locate The Device",
            discription: error,
        };

        next(err);
    }
}

// Deleting The Device
const removeDevice = async (req, res) => {
    try {
        const deviceId = req.params.id;

        const device = await Device.findById(deviceId);
        if (!device) {
            return res.status(404)
                .json({ message: "Device Not Found" });
        }

        const deleteDevice = await Device.deleteOne({ _id: deviceId });
        return res.status(200)
            .json({ message: "Device Deleted Successfully" });

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

module.exports = {
    adminLogin,
    getAllUsers,
    getSingleUser,
    removeUser,
    getAllDevices,
    getSingleDevice,
    removeDevice,
};