const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    const authToken = req.header("Authorization");
    if (!authToken) {
        return res.status(400)
            .json({ message: 'Invalid Token' });
    }

    const token = authToken.replace("Bearer", "").trim();

    try {
        const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await User.findById(isVerified.userId)
            .select({
                password: 0,
            });

        req.user = user;
        req.token = token;
        req.userId = isVerified.userId;
        req.admin = isVerified.isAdmin;

        next();
    } catch (error) {
        console.error(error);
        return res.status(500)
            .json({
                message: "Internal Server Error Cannot Verify User",
                error,
            });
    }
}


module.exports = authMiddleware;