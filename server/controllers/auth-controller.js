const User = require("../models/user-model");
// const bcrypt = require('bcrypt');

// Creating New User+
const createUser = async (req, res, next) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400)
                .json({ message: "User Already Exist" });
        }

        const user = await User.create({
            username,
            email,
            phone,
            password,
        });

        return res.status(201).json({
            message: 'User Created Successfully',
            token: user.generateToken(),
            user,
        })

    } catch (error) {
        console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Register User",
            discription: error,
        };

        next(err);
    }
}

// Login User
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Checking Whether User Exist Or Not
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(404)
                .json({ message: "User Not Found" });
        }

        const isPass = await userExist.comparePass(password);
        if (!isPass) {
            return res.status(400)
                .json({ message: "Information is wrong Cannot Login User" });
        }

        return res.status(200)
            .json({
                message: "User Login Succesfull",
                token: userExist.generateToken(),
                userId: userExist._id,
            });

    } catch (error) {
        // console.log(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Login User",
            discription: error,
        };

        next(err);
    }
}


const updateUser = async (req, res, next) => {
    try {
        const id = req.userId;
        const updateUser = req.body;

        // Check if password needs to be updated
        // if (updateUser.password) {
        //     // Hash the new password
        //     const salt = await bcrypt.genSalt(10);
        //     updateUser.password = await bcrypt.hash(updateUser.password, salt);
        // }

        // Remove password field if present
        if (updateUser.password) {
            delete updateUser.password;
        }


        if (Object.keys(updateUser).length === 0) {
            return res.status(400).json({
                message: "No data provided for update",
            });
        }

        const user = await User.findByIdAndUpdate(id, updateUser, { new: true });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json({
            message: "User updated successfully",
            user,
        });
    } catch (error) {
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Update User",
            description: error,
        };

        next(err);
    }
}


// Getting User Info
const getUser = async (req, res) => {
    try {
        const id = req.userId;
        const user = await User.findOne({ _id: id }, { password: 0 });

        if (!user) {
            return res.status(404)
                .json({ message: "User Not Found" });
        }

        return res.status(200)
            .json({
                message: "User Fetched Successfully",
                user,
            })

    } catch (error) {
        // console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Get User",
            discription: error,
        };

        next(err);
    }
}

// Getting Single User Device List
const getDeviceForSingleUser = async (req, res, next) => {
    try {
        const id = req.userId;

        const user = await User.findById(id).populate('devices');
        if (!user) {
            return res.status(404)
                .json({ message: 'User Not Found' })
        }
        const devices = await user.devices;

        return res.status(200)
            .json({
                message: "Device Fetched Succeessfully",
                devices,
            });
    } catch (error) {
        // console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Cannot Get Device List",
            discription: error,
        };

        next(err);
    }
}


module.exports = {
    createUser,
    loginUser,
    updateUser,
    getUser,
    getDeviceForSingleUser
};