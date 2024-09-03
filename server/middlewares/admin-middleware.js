const adminMiddleware = async (req, res, next) => {
    try {
        const isAdmin = req.admin;
        if (!isAdmin) {
            return res.status(401).json({ message: "You are not authenticated To access the page" });
        }

        next();

    } catch (error) {
        // console.error(error);
        const err = {
            status: 500,
            message: "Internal Server Error Admin is Not Verified",
            discription: error,
        };

        next(err);
    }
}

module.exports = adminMiddleware;