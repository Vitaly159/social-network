import validator from "express-validator";

export const registerValidations = [
  validator
    .body("email", "Введите E-Mail")
    .isEmail()
    .withMessage("Неверный E-Mail")
    .isLength({
      min: 10,
      max: 40,
    })
    .withMessage("Допустимое количество символов то 10 до 40"),
  validator
    .body("fullname", "Введите имя")
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage("Допустимое количество символов то 2 до 40"),
  validator
    .body("username", "Укажите логин")
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage("Допустимое количество символов то 2 до 40"),
  validator
    .body("password", "Укажите пароль")
    .isString()
    .isLength({
      min: 6,
      max: 40,
    })
    .withMessage("Пароль должен быть минимум 6 символов")
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error("Пароли не совпадают");
      } else {
        return value;
      }
    }),
];
