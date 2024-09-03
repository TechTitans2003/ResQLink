const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const {
    adminLogin,
    getAllUsers,
    getAllDevices,
    getSingleUser,
    removeUser,
    getSingleDevice,
    removeDevice
} = require('../controllers/admin-controller');
const adminMiddleware = require('../middlewares/admin-middleware');

const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).send("Welcome To Admin API")
})

router.route('/login').post(adminLogin);

router.route('/users').get(authMiddleware, adminMiddleware, getAllUsers);

router.route('/users/:id/info').get(authMiddleware, adminMiddleware, getSingleUser);

router.route('/users/:id/delete').delete(authMiddleware, adminMiddleware, removeUser);

router.route('/devices').get(authMiddleware, adminMiddleware, getAllDevices);

router.route('/devices/:id/info').get(authMiddleware, adminMiddleware, getSingleDevice);

router.route('/devices/:id/delete').delete(authMiddleware, adminMiddleware, removeDevice);

module.exports = router;