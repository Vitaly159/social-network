import express from "express";
import { validationResult } from "express-validator";

import { UserModel } from "../models/UserModel";
import { loginValidations } from "../validations/login";

const app = express();
app.use(express.json());

export const apiLogin = "/api/auth/login";
export const validLogin = loginValidations;

// post запрос авторизации------------------------------------
export const postLogin = (req: express.Request, res: express.Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  UserModel.findOne({
    email: req.body.email,
    password: req.body.password,
  }).then((user) =>
    user
      ? res.json(user)
      : res.status(400).json({
          errors: [
            {
              msg: "Неверный email или пароль",
            },
          ],
        })
  );
};
