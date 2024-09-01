const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User Schema Definition
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
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
    device: [
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


const User = mongoose.model('user', userSchema);

module.exports = User;