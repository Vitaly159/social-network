import React, { useEffect, useState } from "react";
//material ui
import { Paper } from "@material-ui/core";

//store
import { useAppDispatch } from "../../../hooks/hooks";
import { getTweets } from "../../../reducers/Tweets";

import axios from "axios";

import { AllTweets } from "./AllTweets/AllTweets";
import { ChosenTweet } from "./ChosenTweet";

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

export const TweetsBlock: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const [showChosenTweet, setShowChosenTweet] = useState<
    (TweetType | undefined)[]
  >([]);

  useEffect(() => {
    const postReq = async () => {
      const { data } = await axios.get(
        "https://636f5720f2ed5cb047db0d0f.mockapi.io/api/v1/tweets/1"
      );
      dispatch(getTweets(data));
    };
    postReq();
  }, [dispatch]);

  return (
    <Paper>
      {showChosenTweet[0] ? (
        <ChosenTweet showChosenTweet={showChosenTweet} setShowChosenTweet={setShowChosenTweet}/>
      ) : (
        <AllTweets setShowChosenTweet={setShowChosenTweet} />
      )}
    </Paper>
  );
};
