const mongoose = require('mongoose');

const deviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rssi: {
        type: Number,
        default: 0,
    },
    latitude: {
        type: Number,
        default: 0,
    },
    longitude: {
        type: Number,
        default: 0,
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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const Device = mongoose.model('device', deviceSchema);

module.exports = Device;