const mongoose = require('mongoose');

const deviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rssi: {
        type: String,
        default: "rssi",
    },
    latitude: {
        type: String,
        default: "lat",
    },
    longitude: {
        type: String,
        default: "long",
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
    isActive: {
        type: Boolean,
        default: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
})

const Device = mongoose.model('device', deviceSchema);

module.exports = Device;