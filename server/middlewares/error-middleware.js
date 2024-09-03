const errorMiddleware = (err, req, res, next) => {

    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    const discription = err.discription || "Error From Backend";

    return res.status(status)
        .json({
            message,
            discription,
        })

}

module.exports = errorMiddleware;