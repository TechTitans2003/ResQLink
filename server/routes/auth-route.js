const express = require('express');
const {
    createUser,
    loginUser,
    updateUser,
    getUser,
    getDeviceForSingleUser
} = require('../controllers/auth-controller');
const authmiddleware = require('../middlewares/auth-middleware');

const router = express.Router();


router.route('/').get((req, res) => {
    res.send("Welcome To Auth API");
})

router.route('/register').post(createUser);

router.route('/login').post(loginUser);

router.route('/user/update').patch(authmiddleware, updateUser);

router.route('/user/info').get(authmiddleware, getUser);

router.route('/user/device').get(authmiddleware, getDeviceForSingleUser);

module.exports = router;