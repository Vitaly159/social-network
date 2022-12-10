import { model, Schema } from "mongoose";

const UserScheme = new Schema({
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
  // location: String,
  password: {
    select: false,
    required: true,
    type: String,
  },
  password2: {
    select: false,
    type: String,
  },
  // confirmed: {
  //   type: Boolean,
  //   default: false,
  // },
  confirmed_hash: {
    required: true,
    type: String,
  },
  // about: String,
  // website: String,
});

export const UserModel = model("User", UserScheme);
