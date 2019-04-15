
//Set up mongoose connection
const mongoose = require('mongoose');
const { server, database, user, password } = require('./keys');
mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}`);
mongoose.Promise = global.Promise;
module.exports = mongoose;