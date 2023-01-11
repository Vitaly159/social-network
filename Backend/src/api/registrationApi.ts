import { registrationValidations } from "../validations/registration";
import express from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/UserModel";

const app = express();
app.use(express.json());

// post запрос регистрации------------------------------------
export const apiReg = "/api/auth/registration";
export const validReg = registrationValidations;

export const postReg = (req: express.Request, res: express.Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const token = jwt.sign(
    {
      email: req.body.email,
      fullname: req.body.fullname,
      username: req.body.username,
      password: req.body.password,
    },
    req.body.password
  );

  UserModel.findOne({ email: req.body.email }).then((user) => {
    if (req.body.email !== user?.email) {
      UserModel.create({
        email: req.body.email,
        firstname: req.body.firstname,
        secondname: req.body.secondname,
        password: req.body.password,
        confirmed_hash: token,
      }).then((user) => res.json(user));
    } else {
      return res.status(400).json({
        errors: [
          {
            msg: "Выберете другой email для регистрации",
          },
        ],
      });
    }
  });
};

// put запрос example------------------------------------
// app.put("/api/test/:_id", async (req: express.Request, res) => {
//   UserModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then((user) => {
//     UserModel.findOne({ _id: req.params.id }).then((user) => {
//       res.send(user);
//     });
//   });
// });
