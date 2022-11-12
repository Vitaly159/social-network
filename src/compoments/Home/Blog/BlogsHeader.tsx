import React, { useState, useRef } from "react";

import {
  makeStyles,
  withStyles,
//   Theme,
//   createStyles,
} from "@material-ui/core/styles";
import { Box, Typography, Avatar, TextField, Button } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import GifIcon from "@material-ui/icons/Gif";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import EventIcon from "@material-ui/icons/Event";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    width: "100%",
    position: "relative",
    marginLeft: 10,
  },
  application: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
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
  progressBar: {
    display: "inline-block",
    width: 100,
    textAlign: "center",
  },
});

// const useStylesBar = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//       "& > * + *": {
//         marginLeft: theme.spacing(2),
//       },
//     },
//   })
// );

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
//   const classesBar = useStylesBar();
  const inputTextRef = useRef("");

  const [textBar, setTextBar] = useState<number>(280);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = (e.target as HTMLInputElement).value;
    if (value.length < 281) {
      inputTextRef.current = value;
      setTextBar(280 - value.length);
    }
  };

  return (
    <Box>
      <Box>
        <Typography className={classes.header}>Главная</Typography>
      </Box>
      <Box className={classes.createTwiteBlock}>
        <Box className={classes.writingField}>
          <Box style={{paddingLeft: 20}}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Box>
          <Box className={classes.form}>
            <CssTextField
              placeholder="Что происходит?"
              label={null}
              multiline
              style={{ width: "90%" }}
              onChange={handleText}
              inputProps={{ maxLength: 280 }}
            />
          </Box>
        </Box>
        <Box>Отвечать могут все пользователи</Box>
      </Box>
      <Box className={classes.application}>
        <Box>

        
        <AddPhotoAlternateIcon />
        <GifIcon />
        <EqualizerIcon />
        <SentimentVerySatisfiedIcon />
        <EventIcon />
        </Box>
        <Box>
        {inputTextRef.current.length > 0 && (
          <Box className={classes.progressBar}>
            <span>{textBar}</span>
            <CircularProgress
              variant="determinate"
              style={{ color: "rgb(220,220,220)", position: "absolute" }}
              size={20}
              thickness={4}
              value={100}
            />
            <CircularProgress
              variant="determinate"
              style={{ color: "blue", position: "absolute" }}
              size={20}
              thickness={4}
              value={(100 / 280) * inputTextRef.current.length}
            />
          </Box>
        )}

        <Button className={classes.buttonTwite}>Твитнуть</Button>
        </Box>
      </Box>
      <Box className={classes.space} />
    </Box>
  );
};
