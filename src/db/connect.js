const mongoose = require('mongoose');

const connectDb = () => mongoose.connect(process.env.DB_PATH, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

if (!db) {
	console.log('Error connecting db');
} else {
	console.log('Db connected successfully');
}

module.exports = connectDb;
