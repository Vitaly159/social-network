import React, { useEffect, useState } from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
//store
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getTweets } from "../../../reducers/Tweets";

import axios from "axios";
//компоненты
import { AllPosts } from "./AllPosts/AllPosts";
import { ChosenPost } from "./ChosenPost";

const useStyles = makeStyles({
  errorBlock: {
    padding: "15px",
  },
  error: {
    backgroundColor: "rgba(255,0,0,0.1)",
    display: "flex",
    padding: "10px",
  },
  iconWarning: {
    color: "red",
    fontSize: 16,
    marginRight: 5,
  },
});

type UsersTweet = {
  firstname: string;
  secondname: string;
  //avatar: string;
};

type TweetType = {
  id: string;
  userId: string;
  user: UsersTweet;
  text: string;
  time: string;
};

export const MyPostColumn: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.tweets.user);
  const [loadingTweetsError, setLoadingTweetsError] = useState<boolean>(false);
  const [isLoadingTweets, setIsLoadingTweets] = useState<boolean>(true);

  const [showChosenTweet, setShowChosenTweet] = useState<
    (TweetType | undefined)[]
  >([]);
  
  const postReq = async () => {
    await axios
      .get(`api/tweets/search?keyword=${user[0]._id}`)
      .then((res) => {        
        dispatch(getTweets(res.data.results));
        setLoadingTweetsError(false);
        setIsLoadingTweets(false);
      })
      .catch((error) => {
        setLoadingTweetsError(true);
        setIsLoadingTweets(false);
      });
  };

  useEffect(() => {
    postReq();
  }, [dispatch]);

  return (
    <Paper>
      {showChosenTweet[0] ? (
        <ChosenPost
          showChosenTweet={showChosenTweet}
          setShowChosenTweet={setShowChosenTweet}
        />
      ) : (
        <AllPosts
          setShowChosenTweet={setShowChosenTweet}
          isLoadingTweets={isLoadingTweets}
          postReq={postReq}
        />
      )}

      {loadingTweetsError && (
        <Box className={classes.errorBlock}>
          <Box className={classes.error}>
            <ErrorOutlineIcon className={classes.iconWarning} />
            <span>Ошибка при загрузке твитов</span>
          </Box>
        </Box>
      )}
    </Paper>
  );
};
