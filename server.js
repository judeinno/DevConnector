const express = require('express');
const mongoose = require('mongoose');

const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

//conect to mongo db
mongoose
    .connect(db)
    .then(() => console.log('Mongo bd connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port}`))
