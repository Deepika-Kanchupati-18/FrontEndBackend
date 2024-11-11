const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongo_url = process.env.MONGO_CONN;
        await mongoose.connect(mongo_url); // Mongoose will use the default options for newer versions
        console.log("MongoDB Connected..");
    } catch (err) {
        console.log('MongoDB Connection Error: ', err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
