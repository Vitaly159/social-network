import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const testSchema = new Scheme({
    name: String,
    age: Number
});

export const Test = mongoose.model("test", testSchema);
