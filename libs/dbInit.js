const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vasenking:123123123@vasenking-mg2ow.azure.mongodb.net/bobr')
    .then(succ => console.log("CONNECT to DB"))
    .catch(err => console.error(err));
mongoose.Promise = global.Promise;
console.log("End...");
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function callback () {
    console.log("Open");
});
module.exports = mongoose;