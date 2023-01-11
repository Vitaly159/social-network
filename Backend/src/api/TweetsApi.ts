import express from "express";
import { TweetModel } from "../models/TweetModel";

const app = express();
app.use(express.json());

//СОЗДАНИЕ ТВИТТА------------------------------------------------------------------------
export const apiAddTweet = "/api/create-tweet";

// post запрос создание твитта
export const postAddTweet = (req: express.Request, res: express.Response) => {

  TweetModel.create({
    userId: req.body.userId,
    user: req.body.user,
    text: req.body.text,
    time: req.body.time,
  }).then((user) => res.json(user));
};

// get запрос на полученик твиттов--------------------------------------------------------
export const apiGetTweets = "/api/tweets/search";

export const getTweets = async (
  req: express.Request,
  res: express.Response
) => {
  res.send({
    results: await TweetModel.find({userId: req.query.keyword}).then((res) => res),
  });
};

// TweetModel.findOneAndDelete({ _id: req.body.id }).then((user) =>
// res.json(user)
// );

// УДАЛЕНИЕ ТВИТТА
export const apiDeleteTweet = "/api/delete-tweet/:text";

export const deleteTweet = (req: express.Request, res: express.Response) => {

  TweetModel.findOneAndDelete({ _id: req.body.id }).then((user) =>
    res.json(user)
  );
};
