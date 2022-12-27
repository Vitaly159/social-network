import express from "express";
import { UserModel } from "../models/UserModel";

const app = express();
app.use(express.json());

export const apiCheckAuth = "/api/set-user";

// post запрос авторизации------------------------------------
export const postCheckAuth = (req: express.Request, res: express.Response) => {
  UserModel.findOne({
    confirmed_hash: req.body.hash,
  }).then((user) => res.json(user));
};
