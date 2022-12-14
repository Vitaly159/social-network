import express from "express";
// import { validationResult } from "express-validator";

import { TweetModel } from "../models/TweetModel";
// import { loginValidations } from "../validations/login";

const app = express();
app.use(express.json());

export const apiAddTweet = "/api/create-tweet";
// export const validLogin = loginValidations;

// post запрос авторизации------------------------------------
export const postAddTweet = (req: express.Request, res: express.Response) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

  TweetModel.create({
    user: req.body.user,
    text: req.body.text,
    time: req.body.time,
  }).then((user) => res.json(user));
};

export const apiGetTweets = "/api/tweets";
// export const validLogin = loginValidations;

// post запрос авторизации------------------------------------
export const getTweets = async (req: express.Request, res: express.Response) => {
  res.send({
    results: await TweetModel.find().then((res) => {
      return res;
    }),
  });
};
