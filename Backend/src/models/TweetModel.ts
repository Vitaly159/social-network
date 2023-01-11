import { model, Schema, Document, StringSchemaDefinition } from "mongoose";
import { object } from "prop-types";

type UserType = {
  user: {
    firstname: string;
    secondname: string;
    //avatar: string
  };
};

type TweetModelType = {
  userId: string;
  user: UserType;
  text: string;
  time: string;
};

type TweetModelAndDocumentType = TweetModelType & Document;

const TweetScheme = new Schema(
  {
    userId: {},
    text: {},
    user: {},
    time: {},
  },
  { versionKey: false }
);

export const TweetModel = model<TweetModelAndDocumentType>(
  "Tweet",
  TweetScheme
);
