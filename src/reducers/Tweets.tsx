import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";

type User = {
  firstName: string;
  secondName: string;
  avatar: string;
};

type TweetType = {
  id: string;
  user: User;
  text: string;
};

type States = {
  tweets: TweetType[];
};

const initialState: States = {
  tweets: []
};

export const Tweets = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    getTweets(state, action) {
      state.tweets = action.payload;
    },
  },
});

export const { getTweets } = Tweets.actions;
export default Tweets.reducer;
