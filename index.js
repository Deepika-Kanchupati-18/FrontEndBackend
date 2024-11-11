const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const authRouter = require('./Routes/AuthRouter');
const dashboardRouter = require('./Routes/DashboardRouter');
const settingsRouter = require('./Routes/SettingsRouter');

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRouter); 
app.use('/api/user', dashboardRouter); 
app.use('/api/settings', settingsRouter);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
