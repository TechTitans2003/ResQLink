const User = require("../models/user-model");

// Creating New User+
const createUser = async (req, res) => {
    try {
        const { name, username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400)
                .json({ message: "User Already Exist" });
        }

        const user = await User.create({
            name,
            username,
            email,
            phone,
            password,
        });

        return res.status(201).json({
            message: 'User Created Successfully',
            user,
        })

    } catch (error) {
        console.error(error);
        return res.status(500)
            .json({ message: 'Server Error Cannot Login', error });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Checking Whether User Exist Or Not
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400)
                .json({ message: "User Not Found" });
        }

        const isPass = await userExist.comparePass(password);
        if (!isPass) {
            return res.status(400)
                .json({message: "Information is wrong Cannot Login User"});
        }

        return res.status(200)
            .json({ 
                message: "User Login Succesfull",
                token: userExist.generateToken(),
                userIdd: userExist._id,
            });

    } catch (error) {
        console.log(error);
        return res.status(500)
            .json({
                message: "Internal Server Error Cannot Login User",
                error,
            })
    }
}

module.exports = { createUser, loginUser };