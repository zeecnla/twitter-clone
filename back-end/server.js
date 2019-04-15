
require('dotenv').config();
const express = require('express');
const app = express();
const tweetRoute = require('./src/routes/tweet');
const userRoute = require('./src/routes/user');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('./lib/connection');
const jwt = require('jsonwebtoken');
app.set('secretKey', process.env.JWT_SECRET);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

app.use('/users',userRoute);
app.use('/tweets', validateUser, tweetRoute);

function validateUser(req, res, next) {
    console.log('verifying...,');
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
        console.log("decoded" + decoded.id);
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });

  }
//404 requests
app.use(function(req,res) {
    res.status(404).send({url : req.originalUrl + ' not found '});
});
app.use((error, req,res, next) => {
    res.send(path.join(__dirname,))
});
app.listen(2093);
