const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const {
    sendMsg,
    getAllMsg,
    deleteMsg
} = require('../controllers/contact-controller');
const validate = require('../middlewares/validator-middleware');
const { contactSchema } = require('../validators/auth-validator');

const router = express.Router();

router.route("/").get((req, res) => {
    res.send("Welcome To Contact API");
});

router.route("/send-msg").post(validate(contactSchema), sendMsg);

router.route("/read").get(authMiddleware, adminMiddleware, getAllMsg);

router.route("/:id/delete").delete(authMiddleware, adminMiddleware, deleteMsg);

module.exports = router;