//#region Basic Requirements

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//#endregion

//#region Mongo connection

const {MONGO_DB_USER, MONGO_DB_KEY, MONGO_DB_DB } = process.env;
const MongoURI = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_KEY}@meanfullstackcours.vwemt.mongodb.net/${MONGO_DB_DB}?retryWrites=true&w=majority`
mongoose.connect( MongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
    .then(res => console.log('Database Connected Correctly'))
    .catch(err => console.err(`Error while connecting ${err}`));

//#endregion

//#region Application Creation

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//#endregion

//#region Cors and Server options

const PORT = process.env.PORT || 5000;

const whitelist = ['http://localhost:5000', 'http://127.0.0.1:5000', 'http://localhost:4200', 'http://127.0.0.1:4200', 'http://localhost:8081', 'http://127.0.0.1:8081'];
const corsOptions = {
    credenttials: true,
    origin: function (origin, callback) {
        if (origin === undefined || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by cors'));
        }
    }
}

app.use(cors(corsOptions));

//#endregion

//#region Routes

const authRoutes = require('./routes/authentication');
const userRoutes = require('./routes/user');

app.use('/', authRoutes);
app.use('/users', userRoutes);

//#endregion

//#region Start Server

app.listen(PORT, console.log(`Server is running on ${PORT}`));

//#endregion
