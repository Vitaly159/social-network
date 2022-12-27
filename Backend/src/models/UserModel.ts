import { model, Schema } from "mongoose";

const UserScheme = new Schema(
  {
    email: {
      unique: true,
      required: true,
      type: String,
    },
    firstname: {
      required: true,
      type: String,
    },
    secondname: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
      select: false,
    },
    password2: {
      type: String,
    },
    confirmed_hash: {
      required: true,
      type: String,
    },
  },
  { versionKey: false }
);

export const UserModel = model("User", UserScheme);
