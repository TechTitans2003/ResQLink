const express = require('express');
const {
    createUser,
    loginUser,
    updateUser,
    getUser,
    getDeviceForSingleUser
} = require('../controllers/auth-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const validate = require('../middlewares/validator-middleware');
const { signupSchema, loginSchema } = require('../validators/auth-validator');

const router = express.Router();


router.route('/').get((req, res) => {
    res.send("Welcome To Auth API");
})

router.route('/register').post(validate(signupSchema), createUser);

router.route('/login').post(validate(loginSchema), loginUser);

router.route('/user/update').patch(authMiddleware, updateUser);

router.route('/user/info').get(authMiddleware, getUser);

router.route('/user/device').get(authMiddleware, getDeviceForSingleUser);

module.exports = router;