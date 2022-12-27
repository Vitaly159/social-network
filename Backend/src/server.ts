import express from "express";
import mongoose from "mongoose";
//api
import { apiReg, validReg, postReg } from "./api/registrationApi";//регистрация юзера
import { apiLogin, validLogin, postLogin } from "./api/loginApi";//авторизация
import { apiAddTweet, postAddTweet } from "./api/TweetsApi";//добавление твитов
import { apiGetTweets, getTweets } from "./api/TweetsApi";//получение твитов пользователя
import { apiDeleteTweet, deleteTweet } from "./api/TweetsApi";//удвление твитов
import { apiCheckAuth, postCheckAuth } from "./api/checkAuth";

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

app.post(apiCheckAuth, postCheckAuth);//проверка авторизован ли юзер
app.post(apiReg, validReg, postReg); //регистрация
app.post(apiLogin, validLogin, postLogin); //авторизация
app.post(apiAddTweet, postAddTweet); //добавление твита
app.get(apiGetTweets, getTweets); //получение твиттов
app.delete(apiDeleteTweet, deleteTweet); //удаление твитта
