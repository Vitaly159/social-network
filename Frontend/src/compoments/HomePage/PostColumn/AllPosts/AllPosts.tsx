import React from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Avatar, Typography } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";
import CircularProgress from "@material-ui/core/CircularProgress";
//store
import { useAppSelector } from "../../../../hooks/hooks";
import { Dispatch, SetStateAction } from "react";

import { Header } from "./Header";

const useStyles = makeStyles({
  post: {
    padding: 7,
    display: "flex",
    cursor: "pointer",
    borderBottom: "1px rgb(220,220,220) solid",
    "&:hover": {
      backgroundColor: "rgb(250,250,250)",
    },
    zIndex: 1,
  },
  names: {
    display: "flex",
    justifyContent: "space-between",
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
  progressBar: {
    textAlign: "center",
    padding: 20,
  },
  publishedTiem: {
    fontSize: 14,
    opacity: 0.5,
    padding: "10px 5px",
  },
});

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

interface Props {
  setShowChosenTweet: Dispatch<SetStateAction<(TweetType | undefined)[]>>;
  isLoadingTweets: boolean;
}

export const AllPosts = ({
  setShowChosenTweet,
  isLoadingTweets,
}: Props): React.ReactElement => {
  const classes = useStyles();
  const tweets = useAppSelector((state) => state.tweets.tweets);

  const clickOnTweet = (value: any): void => {
    const tweet = [tweets.find((tweet) => tweet["_id"] === value)];
    setShowChosenTweet(tweet);
  };

  const deleteTweet = (e, id): void => {
    e.stopPropagation();

    fetch(`/api/delete-tweet/${id}`, {
      method: "delete",
      body: JSON.stringify({ id: id }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => res);
  };

  return (
    <Paper>
      <Header />

      {isLoadingTweets && (
        <Box className={classes.progressBar}>
          <CircularProgress />
        </Box>
      )}

      {tweets &&
        tweets
          .slice()
          .reverse()
          .map((tweet, index) => (
            <Box
              key={index}
              className={classes.post}
              onClick={() => {
                clickOnTweet(tweet["_id"]);
              }}
            >
              <Box>
                <Avatar alt="Remy Sharp" src={""} />
              </Box>

              <Box style={{ width: "100%" }}>
                <Box>
                  <Box className={classes.names}>
                    <Box>
                      <Typography
                        className={classes.myName}
                      >{`${tweet.user.firstname} ${tweet.user.secondname}`}</Typography>
                      <Typography className={classes.friendsName}>
                        @userName
                      </Typography>
                    </Box>
                    <Box
                      style={{ zIndex: 100 }}
                      onClick={(e) => {
                        deleteTweet(e, tweet["_id"]);
                      }}
                    >
                      X
                    </Box>
                  </Box>
                  <Box className={classes.postsText}>{tweet.text}</Box>
                  <Box className={classes.publishedTiem}>{tweet.time}</Box>
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
