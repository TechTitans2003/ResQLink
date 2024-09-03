const validate = (schema) => async (req, res, next) => {
    try {

        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();

    } catch (error) {
        // const err = error.errors[0].message;
        // console.error(err);
        // return res.status(500)
        //     .json({ message: "Validation Error From Zod" });

        const err = {
            status : 400,
            message: error.errors[0].message,
            discrption: error,
        };
        next(err);
    }
}

module.exports = validate;