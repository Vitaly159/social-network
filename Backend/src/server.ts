import express from "express";
import mongoose from "mongoose";
import { validationResult } from "express-validator";
import { registerValidations } from "./validations/register";
import jwt from "jsonwebtoken";
import {
  createProxyMiddleware,
  Filter,
  Options,
  RequestHandler,
} from "http-proxy-middleware";
import { AppsSharp } from "@material-ui/icons";

const router = express.Router();


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

// app.get(
//   "/api/t",

//   (req, res) => {
//     // console.log(res.json({tag: 'hi'}));
//     // createProxyMiddleware({
//     //   target: 'http://localhost:3100',
//     //   changeOrigin: true,
//     // }),
//     res.json({
//       // result: test.find().then((res) => {return res})
//       tag: "hi",
//     });
//   }
//   // registerValidations,
//   // (req: express.Request, res: express.Response) => {
//   //   const errors = validationResult(req);
//   //   if (!errors.isEmpty()) {
//   //     return res.status(400).json({ errors: errors.array() });
//   //   }

//   // test
//   //   .create({
//   //     email: req.body.email,
//   //     fullname: req.body.fullname,
//   //     username: req.body.username,
//   //     password: req.body.password,
//   //   })
//   //   .then((user) => res.json(user));

//   // const token = jwt.sign(
//   //   {
//   //     email: req.body.email,
//   //     fullname: req.body.fullname,
//   //     username: req.body.username,
//   //     password: req.body.password,
//   //   },
//   //   "12345"
//   // );

//   // res.json({

//   //   // success: 'true',
//   //   // token,
//   // });
//   // }
// );

const startServer = () => {
  const PORT = process.env.PORT || 5000
  try {
    mongoose
      .connect("mongodb://localhost:27017/test")
      .then((res) => console.log("connected"))
      .catch((err) => console.log(err));
    app.listen(PORT, function () {
      test.find().then((res) => console.log(PORT));
    });
  } catch (e) {
    console.log("error");
  }
};

startServer();

//

app.get('/api/test', (req,res)=> {
  res.json({
    mode:'1'
  })
})

