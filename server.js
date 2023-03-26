//require express
const express = require('express');
//require connection config
const connectDB = require('./config/db');
//require cors to handle cors origin
const cors = require('cors');

//instanciate axpress to the app
const app = express();

// Connect to MongoDB
//calling the =function to connect to db that is imported from configdb
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
