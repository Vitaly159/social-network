import express from "express";
import mongoose from "mongoose";
import { validationResult } from "express-validator";
import { registerValidations } from "./validations/register";

const Scheme = mongoose.Schema;

const testSchema = new Scheme({
	email: String,
	fullname: String,
	username: String,
	password: String,
});

const test = mongoose.model("test", testSchema);

const data = new test({ name: "messy", age: 40 });
// data.save();

// const get = async () => {
//   const result = await test.find();
//   console.log(result);
// };

// get();

const app = express();
app.use(express.json());

function connectDataBase() {
  mongoose
    .connect("mongodb://localhost:27017/test")
    .then((res) => console.log("connected"))
    .catch((err) => console.log(err));
}

connectDataBase();

app.post(
  "/test",
  registerValidations,
  (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    test
      .create({
        email: req.body.email,
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password,
      })
      .then((user) => res.json(user));
  }
);

app.listen(3000, function () {
  test.find().then((res) => console.log(res));
});
