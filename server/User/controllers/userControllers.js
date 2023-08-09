const User = require('../models/User');

const getUserProfile = async (req, res) => {
    const userId = req.params.id;

    try {
        const userProfile = await User.findOne({ userId });
        if (!userProfile) {
            return res.status(404).json({ message: 'User profile not found' });
        }

        return res.status(200).json(userProfile);
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
}

const updateUserProfile = async (req, res) => {
    const userId = req.params.id;
    const updateProfileData = req.body;
    
    try {
        const userProfile = await User.findOneAndReplace({ userId }, updateProfileData, { new: true });

        if (!userProfile) {
            return res.status(404).json({ message: 'User profile not found' });
        }
        return res.status(200).json(userProfile);
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
}

module.exports = {
    getUserProfile,
    updateUserProfile
}