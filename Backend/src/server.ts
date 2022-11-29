import express from 'express';
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost:27017/")

// app.use("/api", require("./api"))

// app.get('/', function(req, res) {
// 	res.send('hello world');
// });

app.listen(3000, function() {
	console.log('running');
});