const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

connectDb = () => mongoose.connect(dbConfig.url, { useNewUrlParser: true});
const db = mongoose.connection;

if(!db){
    console.log("Error connecting db");
}
else{
    console.log("Db connected successfully");
}

module.exports = connectDb;
