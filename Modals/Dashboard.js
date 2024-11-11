const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DashboardSchema = new Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    weight: { 
        type: Number, 
        required: true 
    },
    height: { 
        type: Number, 
        required: true 
    },
    daysOfTrainingPerWeek: { 
        type: Number, 
        required: true 
    },
    fitnessGoal: { 
        type: String, 
        required: true 
    }
});

const DashboardModel = mongoose.model('Dashboard', DashboardSchema);

module.exports = DashboardModel;
