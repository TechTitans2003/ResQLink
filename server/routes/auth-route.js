const express = require('express');
const {
    createUser,
    loginUser
} = require('../controllers/auth-controller');

const router = express.Router();


router.route('/').get((req, res) => {
    res.send("Welcome To Auth API");
})

router.route('/register').post(createUser);

router.route('/login').post(loginUser);

module.exports = router;