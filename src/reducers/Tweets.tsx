import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UsersTweet = {
  firstName: string;
  secondName: string;
  avatar: string;
};

type TweetType = {
  id: string;
  user: UsersTweet;
  text: string;
};

type User = {
  id: string;
  user: UsersTweet;
};

type States = {
  user: User[];
  tweets: TweetType[];
};

const initialState: States = {
  user: [],
  tweets: [],
};

export const Tweets = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    getTweets(state, action: PayloadAction<TweetType[]>) {
      state.tweets = action.payload;
    },
    getUser(state, action: PayloadAction<User[]>) {
      state.user = action.payload;
    },
    onAddTweet(state, action) {
      state.tweets.push(action.payload);
    },
  },
});

export const { getTweets, getUser, onAddTweet } = Tweets.actions;
export default Tweets.reducer;
