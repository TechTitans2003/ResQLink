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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const Device = mongoose.model('device', deviceSchema);

module.exports = Device;