const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const {
    addDevice,
    editDevice,
    deleteDevice,
    getDeviceInfo
} = require('../controllers/device-controller');

const router = express.Router();

router.route("/").get((req, res) => {
    res.send("Welcome To Device API");
})

router.route("/new").post(authMiddleware, addDevice);

router.route("/:id/edit").patch(authMiddleware, editDevice);

router.route("/:id/delete").delete(authMiddleware, deleteDevice);

router.route("/:id/info").get(authMiddleware, getDeviceInfo);


module.exports = router;