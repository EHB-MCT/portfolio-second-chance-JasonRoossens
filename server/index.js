const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7001;
const connectDB = require('./config/db'); // Import the database connection function

// Middleware setup
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.status(300).redirect('/info.html');
});

// Call the database connection function
connectDB().then(() => {
  // Start the server after the database connection is established
  app.listen(port, () => {
    console.log(`API is listening at http://localhost:${port}`);
  });
});