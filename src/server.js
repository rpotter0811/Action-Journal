require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('../routes/subscribers'); // change this line of code; change the folder name in the routes folder

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use('/subscribers', subscribersRouter);

app.listen(3000, () => console.log('Server Started'));