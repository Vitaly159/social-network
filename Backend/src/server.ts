import express from "express";
import mongoose from "mongoose";
// import { validationResult } from "express-validator";
// import { registrationValidations } from "./validations/registration";
import { UserModel } from "./models/UserModel";
// import jwt from "jsonwebtoken";
import { apiReg, validReg, postReg } from "./api/registrationApi";
import { apiLogin, validLogin, postLogin } from "./api/loginApi";
import { apiAddTweet, postAddTweet } from "./api/TweetsApi";
import { apiGetTweets, getTweets } from "./api/TweetsApi";
import { apiDeleteTweet, deleteTweet } from "./api/TweetsApi";
import { TweetModel } from "./models/TweetModel";

const app = express();
app.use(express.json());

const startServer = () => {
  const PORT = process.env.PORT || 5000;
  try {
    mongoose
      .connect("mongodb://localhost:27017/users")
      .then((res) => console.log("connected"))
      .catch((err) => console.log("err"));
    app.listen(PORT, () => {
        console.log('working');
    });
  } catch (e) {
    console.log("error");
  }
};

startServer();

app.post(apiReg, validReg, postReg); //регистрация
app.post(apiLogin, validLogin, postLogin); //авторизация
app.post(apiAddTweet, postAddTweet); //добавление твита
app.get(apiGetTweets, getTweets); //получение твиттов
app.delete(apiDeleteTweet, deleteTweet); //удаление твитта

app.post("/api/set-user", (req: express.Request, res: express.Response) => {
  UserModel.findOne({
    confirmed_hash: req.body.hash,
  }).then((user) => res.json(user));
});
