import { model, Schema, Document, StringSchemaDefinition } from "mongoose";
import { object } from "prop-types";

type UserType = {
  user: {
    firstname: string,
    secondname: string,
    //avatar: string
  }
};

type TweetModelType = {
  user: UserType
  text: string;
  time: string
};

type TweetModelAndDocumentType = TweetModelType & Document;

const TweetScheme = new Schema<TweetModelAndDocumentType>({
  text: {
    // required: true,
  },
  user: {
    //required: true,
    // ref: "User",
    // type: object,
  },
  time: {
    //required: true,
  }
});

export const TweetModel = model<TweetModelAndDocumentType>(
  "Tweet",
  TweetScheme
);
