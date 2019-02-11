const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vasenking:123123123@vasenking-mg2ow.azure.mongodb.net/bobr')
    .catch(err => console.error(err));

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;


