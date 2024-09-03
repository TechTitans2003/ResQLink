const adminMiddleware = async (req, res, next) => {
    try {
        const isAdmin = req.admin;
        if (!isAdmin) {
            return res.status(401).json({ message: "You are not authenticated To access the page" });
        }

        next();

    } catch (error) {
        console.error(error);
        return res.status(500)
            .json({
                message: "Internal Server Error Admin is Not Verified",
                error,
            })
    }
}

module.exports = adminMiddleware;