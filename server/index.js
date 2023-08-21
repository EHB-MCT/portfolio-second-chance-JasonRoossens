const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7001;
const connectDB = require('./config/db');
const sneakerRoutes = require('./routes/sneakerRoute');

// Middleware setup
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.get('/ping', function(req, res) {
  res.status(200).send('pong');
});

// Basic route
app.get('/', (req, res) => {
  res.status(300).redirect('/info.html');
});
  // Use the sneaker routes
  app.use('/api/sneakers', sneakerRoutes);

//  Connect to the database
connectDB().then(() => {
  // Start the server after the database connection is established
  app.listen(port, () => {
     console.log(`API is listening at http://localhost:${port}`);
  });
});

module.exports = app