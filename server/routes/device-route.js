const express = require('express');
const authmiddleware = require('../middlewares/auth-middleware');
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

router.route("/new").post(authmiddleware, addDevice);

router.route("/:id/edit").patch(authmiddleware, editDevice);

router.route("/:id/delete").delete(authmiddleware, deleteDevice);

router.route("/:id/info").get(authmiddleware, getDeviceInfo);


module.exports = router;