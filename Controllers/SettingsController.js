const Settings = require('../Modals/Settings');

// Update settings
const updateSettings = async (req, res) => {
    const { username, email, password, theme } = req.body;
    const userId = req.userId; // Assuming userId is provided in the JWT token

    try {
        const settings = await Settings.findOneAndUpdate(
            { userId },
            { username, email, password, theme },
            { new: true, upsert: true }
        );
        res.status(200).json({ message: 'Settings updated successfully', settings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { updateSettings };
