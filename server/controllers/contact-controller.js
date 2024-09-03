const Contact = require("../models/Contact-model");

// Sending Message To Admin
const sendMsg = async (req, res) => {
    try {
        const { username, email, message } = req.body;

        const msg = await Contact.create({
            username,
            email,
            message
        });

        return res.status(200)
            .json({ message: `${username}, Your message is sent to Admin` });

    } catch (error) {
        console.error(error);
        return res.status(500)
            .json({ message: "Internal Server Error Cannot Send Message", });
    }
}

const getAllMsg = async (req, res) => {
    try {

        const msgs = await Contact.find({});
        if (msgs.length === 0) {
            return res.status(404)
                .json({ message: "No Message Left" });
        }

        return res.status(200)
            .json({
                message: "Messages Fetched Successfully",
                msgs
            })

    } catch (error) {
        console.error(error);
        return res.status(500)
            .json({
                message: "Internal Server Error Cannot Get Messages",
                error
            });
    }
}

const deleteMsg = async (req, res) => {
    try {

        const id = req.params.id;
        const msg = await Contact.findById(id);
        if (!msg) {
            return res.status(404)
                .json({ message: "Message Not Found" });
        }

        await Contact.deleteOne({ _id: id });

        return res.status(200)
            .json({ message: "Message Deleted Successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500)
            .json({ message: "Internal Server Error Cannot Delete Message" });
    }
}

module.exports = {
    sendMsg,
    getAllMsg,
    deleteMsg,
};