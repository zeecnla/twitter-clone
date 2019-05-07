
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const tweetRoute = require('./src/routes/tweet');
const userRoute = require('./src/routes/user');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.set('secretKey', process.env.JWT_SECRET);
app.use(cors());

app.use('/users',userRoute);
app.use('/tweets', validateUser, tweetRoute);

function validateUser(req, res, next) {
    console.log('verifying...,');
    jwt.verify(req.headers['x-access-token'], process.env.JWT_SECRET, function(err, decoded) {
        console.log("decoded" + decoded.email);
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        console.log(decoded);
        req.body.email = decoded.email;
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
