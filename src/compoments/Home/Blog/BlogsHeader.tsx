import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar, TextField, Button } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import GifIcon from "@material-ui/icons/Gif";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import EventIcon from "@material-ui/icons/Event";

const useStyles = makeStyles({
  header: {
    padding: "13px 10px",
    fontWeight: 600,
    border: "1px rgb(230, 230, 230) solid",
  },
  createTwiteBlock: {
    borderBottom: "1px rgb(230, 230, 230) solid",
    padding: "10px 0",
  },
  writingField: {
    display: "flex",
  },
  form: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    marginLeft: 10,
  },
  application: {
    padding: "10px 0",
    borderBottom: "1px rgb(230, 230, 230) solid",
  },
  buttonTwite: {
    width: "100px",
    backgroundColor: "DeepSkyBlue",
    borderRadius: "200px",
    color: "white",
    textTransform: "none",
    fontSize: 14,
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "rgba(0, 191, 255, 0.54)",
    },
  },
  space: {
    backgroundColor: "rgb(235,235,235)",
    height: 10,
  },
});

const CssTextField = withStyles({
  root: {
    "& .MuiInputBase-input": {
      padding: 0,
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
  },
})(TextField);

export const BlogsHeader: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Box>
      <Box>
        <Typography className={classes.header}>Главная</Typography>
      </Box>
      <Box className={classes.createTwiteBlock}>
        <Box className={classes.writingField}>
          <Box>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Box>
          <Box>
            <form className={classes.form}>
              <CssTextField placeholder="Что происходит?" label={null} />
            </form>
          </Box>
        </Box>
        <Box>Отвечать могут все пользователи</Box>
      </Box>
      <Box className={classes.application}>
        <AddPhotoAlternateIcon />
        <GifIcon />
        <EqualizerIcon />
        <SentimentVerySatisfiedIcon />
        <EventIcon />
        <Button className={classes.buttonTwite}>Твитнуть</Button>
      </Box>
      <Box className={classes.space} />
    </Box>
  );
};
