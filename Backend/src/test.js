import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const testSchema = new Scheme({
    name: String,
    age: Number
});

const test = mongoose.model("test", testSchema);

module.exports = test;
