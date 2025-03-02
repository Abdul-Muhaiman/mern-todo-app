const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//Initialize the express app instance
const app = express();
const port = process.env.PORT || 5000;

//Use middleware for cross-platform interactions
app.use(cors());
//Use middleware for parsing data into json
app.use(express.json());

//Mounting the routes on server
const todoRoutes = require('./routes/todos');
app.use('/todos', todoRoutes);

// MongoDB Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//Listen of server on port
app.listen(port, () => {
    console.log(`Server running on port ${port}`); // You wrote "Server running" which is great!
})