const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParson.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db)
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server started on port ${port}`))
  
// app.listen(port, () => console.log(`Server started on port ${port}`));