import React from "react";
import { Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";
import { Dispatch, SetStateAction } from "react";

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
  showChosenTweet: (TweetType | undefined)[];
  setShowChosenTweet: Dispatch<SetStateAction<(TweetType | undefined)[]>>;
}

export const ChosenTweet = ({
  showChosenTweet,
  setShowChosenTweet,
}: Props): React.ReactElement => {
  const classes = useStyles();

  return (
    <>
      {showChosenTweet[0] && (
        <Box className={classes.post}>
          <Box onClick={()=>setShowChosenTweet([])}>back</Box>
          <Box>
            <Avatar
              alt="Remy Sharp"
              src={showChosenTweet[0] && showChosenTweet[0].user.avatar}
            />
          </Box>

          <Box style={{ width: "100%" }}>
            <Box>
              <Box className={classes.names}>
                <Typography
                  className={classes.myName}
                >{`${showChosenTweet[0].user.firstName} ${showChosenTweet[0].user.secondName}`}</Typography>
                <Typography className={classes.friendsName}>
                  @userName
                </Typography>
              </Box>
              <Box className={classes.postsText}>{showChosenTweet[0].text}</Box>
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
      )}
    </>
  );
};
