
require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to db'));

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const coursesRouter = require('./routes/courses')
app.use('/courses', coursesRouter);
const playerRouter = require('./routes/players')
app.use('/players', playerRouter);

app.listen(3000, () => console.log('server started'));