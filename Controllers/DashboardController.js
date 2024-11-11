const Dashboard = require('../Modals/Dashboard');

// Create or update dashboard
const createOrUpdateDashboard = async (req, res) => {
    const { weight, height, daysOfTrainingPerWeek, fitnessGoal } = req.body;
    const userId = req.userId; // Assuming userId is provided in the JWT token

    try {
        const dashboard = await Dashboard.findOneAndUpdate(
            { userId },
            { weight, height, daysOfTrainingPerWeek, fitnessGoal },
            { new: true, upsert: true }
        );
        res.status(200).json({ message: 'Dashboard updated successfully', dashboard });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createOrUpdateDashboard };
