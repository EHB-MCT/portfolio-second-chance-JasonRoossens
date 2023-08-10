const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 7001;

// Middleware setup
app.use(express.static('public'));
app.use(express.json()); // Use built-in JSON parsing middleware
app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.status(300).redirect('/info.html');
});

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after the database connection is established
    app.listen(port, () => {
      console.log(`API is listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });