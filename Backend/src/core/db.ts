import mongoose from "mongoose"

const mongoDB: any = mongoose.connect('mongodb://127.0.0.1/twitter');
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

