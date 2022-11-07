import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Avatar, Typography } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";

import { BlogsHeader } from "./BlogsHeader";

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

export const Blog: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Paper>
      <BlogsHeader />

      <Box className={classes.post}>
        <Box>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>

        <Box>
          <Box>
            <Box className={classes.names}>
              <Typography className={classes.myName}>Vitaly</Typography>
              <Typography className={classes.friendsName}>@Vlad</Typography>
            </Box>
            <Box className={classes.postsText}>
              Президент РФ Владимир Путин намерен лично обсудить с россиянами,
              как обстоит дело с поддержкой мобилизованных. Об этом заявил сам
              российский лидер.
            </Box>
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

      <Box className={classes.post}>
        <Box>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>

        <Box>
          <Box>
            <Box className={classes.names}>
              <Typography className={classes.myName}>Vitaly</Typography>
              <Typography className={classes.friendsName}>@Vlad</Typography>
            </Box>
            <Box className={classes.postsText}>
              Президент РФ Владимир Путин намерен лично обсудить с россиянами,
              как обстоит дело с поддержкой мобилизованных. Об этом заявил сам
              российский лидер.
            </Box>
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

    </Paper>
  );
};
