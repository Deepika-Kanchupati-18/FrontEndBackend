const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    theme: { 
        type: String, 
        enum: ['light', 'dark'], 
        required: true 
    }
});

const SettingsModel = mongoose.model('Settings', SettingsSchema);

module.exports = SettingsModel;
