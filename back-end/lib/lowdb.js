
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ 
        tweets: [], 
        users: []
    })
  .write()

export default db;
