const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7001;
const connectDB = require('./config/db'); // Import the database connection function
const sneakerRoutes = require('./routes/sneakerRoute');

// Middleware setup
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.status(300).redirect('/info.html');
});

// Connect to the database
connectDB().then(() => {
  // Use the sneaker routes
  app.use('/api/sneakers', sneakerRoutes);

  // Start the server after the database connection is established
  app.listen(port, () => {
    console.log(`API is listening at http://localhost:${port}`);
  });
});