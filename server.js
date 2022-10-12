const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error: "));

  mongoose.set('debug',true);

  app.use(require('./routes'));

  app.listen(PORT, () => console.log(`Connected on localhost${PORT}`));