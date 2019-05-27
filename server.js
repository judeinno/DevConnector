const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const bodyParser = require('body-parser');
const passport = require('passport');


const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//conect to mongo db
mongoose
    .connect(db)
    .then(() => console.log('Mongo bd connected'))
    .catch(err => console.log(err))

//passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport.js')(passport);

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port}`))
