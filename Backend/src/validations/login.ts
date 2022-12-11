import { body } from "express-validator";

export const loginValidations = [
  body("email", "Введите E-Mail").isEmail().withMessage("Недопустимый E-Mail"),
  body("password", "Укажите пароль")
    .isString() 
    .isLength({
      min: 6,
      max: 40,
    })
    .withMessage("Пароль должен быть минимум 6 символов")
];
