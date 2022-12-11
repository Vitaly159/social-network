import express from "express";
import mongoose from "mongoose";
// import { validationResult } from "express-validator";
// import { registrationValidations } from "./validations/registration";
// import { UserModel } from "./models/UserModel";
// import jwt from "jsonwebtoken";
import { apiReg, validReg, postReg } from "./api/registrationApi";
import { apiLogin, validLogin, postLogin } from "./api/loginApi";

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
      console.log("server is working");
    });
  } catch (e) {
    console.log("error");
  }
};

startServer();

app.post(apiReg, validReg, postReg);//регистрация
app.post(apiLogin, validLogin, postLogin);//авторизация
