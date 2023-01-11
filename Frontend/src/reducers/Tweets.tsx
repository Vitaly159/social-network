import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UsersTweet = {
  firstname: string;
  secondname: string;
  //avatar: string;
};

type TweetType = {
  id: string;
  userId: string
  user: UsersTweet;
  text: string;
  time: string;
};

type User = {
  _id: string;
  email: string;
  firstname: string;
  secondname: string;
  confirmed_hash: string;
};

type States = {
  user: User[];
  tweets: TweetType[];
  showError: boolean;
  isAuth: boolean;
  registerErrors: string[];
};

const initialState: States = {
  user: [],
  tweets: [],
  showError: false,
  isAuth: false,
  registerErrors: [],
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
    setRegisterErrors(state, action: PayloadAction<string[]>) {
      state.registerErrors = action.payload;
    },
  },
});

export const {
  getTweets,
  getUser,
  onAddTweet,
  setShowError,
  setIsAuth,
  setRegisterErrors
} = Tweets.actions;
export default Tweets.reducer;
