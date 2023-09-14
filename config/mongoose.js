const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect('mongodb+srv://bhartiupkar6:upkar6@cluster0.mhmtj8w.mongodb.net/cv-upload?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Hi Upkar not  connecting to MongoDB"));

db.once('open', function(){
    console.log('Hi Upkar Connected to Database :: MongoDB');
});

module.exports = db;