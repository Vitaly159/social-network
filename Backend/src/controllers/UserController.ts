import { json } from "body-parser";
import { Request, Response } from "express";
import { ValidationError, validationResult } from "express-validator";
import { UserModel } from "../models/UserModel";

// const UserController = (): void => {
//   async (req: Request, res: Response): Promise<void> => {
//   try {
//     const users: any = await UserModel.find();
//     res.json({ status: "success", data: users });
//   } catch (error) {
//     res.json({
//       status: "error",
//       message:  JSON.stringify(error),
//     });
//   }
//   }

// };

// export const UserCtrl: any = UserController();

const UserController = (): void => {

exports.index = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: any = await UserModel.find();
    res.json({ status: "success", data: users });
  } catch (error) {
    res.json({
      status: "error",
      message: JSON.stringify(error),
    });
  }
};

exports.create = async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ status: "error", errors: errors.array() });
      return;
    }
    const data = {
      email: req.body.email,
      username: req.body.username,
      fullname: req.body.fullname,
      password: req.body.password,
    };

    const user = await UserModel.create(data);
    res.json({ status: "success", data: user });
  } catch (error) {
    res.json({
      status: "error",
      message: JSON.stringify(error),
    });
  }
};
}
export const UserCtrl: any = UserController();
