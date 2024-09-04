const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Schema Definition
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    devices: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'device',
        }
    ]
});


// Encrypting User Password
userSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) {
        next();
    }

    try {

        const saltRound = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(user.password, saltRound);
        user.password = hashPass;

    } catch (error) {
        next(error);
    }
})

// Comparing The Passwords
userSchema.methods.comparePass = async function (password) {
    return bcrypt.compare(password, this.password);
}

// Generating and Sending JWT
userSchema.methods.generateToken = function () {
    try {
        return jwt.sign(
            {
                userId: this._id,
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.JWT_SECRET_KEY
        )
    } catch (error) {
        console.error(error);
    }
}

const User = mongoose.model('user', userSchema);

module.exports = User;