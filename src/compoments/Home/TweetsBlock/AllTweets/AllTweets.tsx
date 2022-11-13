import React, { useEffect } from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Avatar, Typography } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";
//store
import { useAppSelector, useAppDispatch } from "../../../../hooks/hooks";
import { getTweets } from "../../../../reducers/Tweets";
import { Dispatch, SetStateAction } from "react";

import axios from "axios";

import { AllTweetsHeader } from "./AllTweetsHeader";

const useStyles = makeStyles({
  post: {
    padding: 7,
    display: "flex",
    cursor: "pointer",
    borderBottom: "1px rgb(220,220,220) solid",
    "&:hover": {
      backgroundColor: "rgb(250,250,250)",
    },
  },
  names: {
    display: "flex",
    padding: 6,
  },
  myName: {
    fontWeight: 600,
    fontSize: 13,
  },
  friendsName: {
    marginLeft: 3,
    opacity: 0.5,
    fontSize: 13,
  },
  postsText: {
    padding: "0 6px",
    wordBreak: "break-all",
  },
  icons: {
    display: "flex",
    padding: "10px 52px 3px 0",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 16,
    marginRight: 10,
    padding: 5,
    borderRadius: 10,
    "&:hover": {
      backgroundColor: "rgb(240,240,240)",
    },
  },
});

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

interface Props {
  setShowChosenTweet: Dispatch<SetStateAction<(TweetType | undefined)[]>>;
}

export const AllTweets = ({setShowChosenTweet}: Props): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const tweets = useAppSelector((state) => state.tweets.tweets);

  useEffect(() => {
    const postReq = async () => {
      const { data } = await axios.get(
        "https://636f5720f2ed5cb047db0d0f.mockapi.io/api/v1/tweets/1"
      );
      dispatch(getTweets(data));
    };
    postReq();
  }, [dispatch]);

  const clickOnTweet = (value: any): void => {
    const tweet = [tweets.find((tweet) => tweet["_id"] === value)]    
    setShowChosenTweet(tweet)
  };

  return (
    <Paper>
      <AllTweetsHeader />

      {tweets
        .slice()
        .reverse()
        .map((tweet) => (
          <Box
            key={tweet["_id"]}
            className={classes.post}
            onClick={() => clickOnTweet(tweet["_id"])}
          >
            <Box>
              <Avatar
                alt="Remy Sharp"
                src={tweet.user.avatar && tweet.user.avatar}
              />
            </Box>

            <Box style={{ width: "100%" }}>
              <Box>
                <Box className={classes.names}>
                  <Typography
                    className={classes.myName}
                  >{`${tweet.user.firstName} ${tweet.user.secondName}`}</Typography>
                  <Typography className={classes.friendsName}>
                    @userName
                  </Typography>
                </Box>
                <Box className={classes.postsText}>{tweet.text}</Box>
              </Box>
              <Box className={classes.icons}>
                <Box>
                  <ChatBubbleOutlineIcon className={classes.icon} />
                  <span style={{ top: -8, position: "relative" }}>1</span>
                </Box>
                <Box>
                  <RepeatIcon className={classes.icon} />
                  <span style={{ top: -8, position: "relative" }}>1</span>
                </Box>
                <Box>
                  <FavoriteBorderIcon className={classes.icon} />{" "}
                  <span style={{ top: -8, position: "relative" }}>1</span>
                </Box>

                <Box>
                  <ReplyIcon className={classes.icon} />
                  <span style={{ top: -8, position: "relative" }}>1</span>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
    </Paper>
  );
};
