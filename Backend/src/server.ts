import express from "express";
import mongoose from "mongoose";
import { validationResult, body } from "express-validator";

// const registerValidations = [
//   validator
//     .body("name", "Введите E-Mail")
//     .isString()
//     .withMessage("Неверный E-Mail")
//     .isLength({
//       min: 2,
//       max: 40,
//     })
//     .withMessage("Допустимое количество символов то 1 до 3"),
//   validator.body("age", "Введите имя").isString().isLength({
//     min: 1,
//     max: 3,
//   }),
// ];

const Scheme = mongoose.Schema;

const testSchema = new Scheme({
  name: String,
  age: String,
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
app.use(express.json())

function connectDataBase() {
  mongoose
    .connect("mongodb://localhost:27017/test")
    .then((res) => console.log("connected"))
    .catch((err) => console.log(err));
}

connectDataBase();

app.post(
  "/test",
  body("name", "Введите E-Mail")
    .isString()
    .withMessage("Неверный E-Mail")
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage("Допустимое количество символов то 1 до 3"),
  body("age", "Введите имя").isString()
  .isLength({
    min: 1,
    max: 3,
  })
,

  (req: express.Request, res: express.Response) => {
	const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    test.create({
	  name: req.body.name,
	  age: req.body.age,
	}).then(user => res.json(user));
  }
);

app.listen(3000, function () {
  test.find().then((res) => console.log(res));
});
