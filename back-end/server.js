
const express = require('express');
const app = express();
const tweetRoute = require('./src/routes/tweet');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { server, database, user, password } = require('./lib/keys');
mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}`);



app.use(bodyParser.json());
app.use(tweetRoute);
app.use(express.static('public'));

//404 requests
app.use(function(req,res) {
    res.status(404).send({url : req.originalUrl + ' not found '});
});
app.use((error, req,res, next) => {
    res.send(path.join(__dirname,))
});
app.listen(2093);