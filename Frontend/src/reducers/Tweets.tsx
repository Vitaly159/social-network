import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UsersTweet = {
  firstname: string;
  secondname: string;
  //avatar: string;
};

type TweetType = {
  id: string;
  user: UsersTweet;
  text: string;
  time: string;
};

type User = {
  _id: string;
  email: string;
  firstname: string;
  secondname: string;
  _v: number;
  confirmed_hash: string;
};

type States = {
  user: User[];
  tweets: TweetType[];
  showError: boolean;
  isAuth: boolean;
};

const initialState: States = {
  user: [],
  tweets: [],
  showError: false,
  isAuth: false,
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
    onAddTweet(state, action: PayloadAction<TweetType>) {
      state.tweets.push(action.payload);
    },
    setShowError(state, action: PayloadAction<boolean>) {
      state.showError = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const { getTweets, getUser, onAddTweet, setShowError, setIsAuth } =
  Tweets.actions;
export default Tweets.reducer;
