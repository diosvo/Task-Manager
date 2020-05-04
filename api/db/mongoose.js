// Handle connection logic to the MongoDB database
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to MongoDB
const mongoDB = 'mongodb://localhost:27017/TaskManager';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connect to MongoDB successfully ^^');
})

//Get the default connection, Bind connection to error event (to get notification of connection errors)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Prevent warning (from MongoDB native driver)
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

module.exports = {
    mongoose
};