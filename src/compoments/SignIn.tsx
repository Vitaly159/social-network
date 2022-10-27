import { useState } from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Typography } from "@material-ui/core";
//окно входа
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  wrapper: {
    height: "100vh",
    display: "flex",
  },
  leftBlock: {
    width: "50%",
    backgroundColor: "DeepSkyBlue",
  },
  textBlock: {
    width: 400,
    margin: "0 auto",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
  list: {
    display: "flex",
    color: "white",
    marginBottom: 30,
  },
  listText: {
    marginLeft: 10,
    fontWeight: 600,
  },
  rightBlock: {
    width: "50%",
  },
  actionBlock: {
    width: 320,
    margin: "0 auto",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
  signUp: {
    backgroundColor: "DeepSkyBlue",
    width: "100%",
    borderRadius: "200px",
    color: "white",
    textTransform: "none",
    fontSize: 14,
    margin: "10px 0",
    "&:hover": {
      backgroundColor: "rgba(0, 191, 255, 0.54)",
    },
  },
  signIn: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: "200px",
    textTransform: "none",
    fontSize: 14,
    color: "DeepSkyBlue",
    border: "1px DeepSkyBlue solid",
    "&:hover": {
      backgroundColor: "rgba(0, 191, 255, 0.2)",
    },
  },
  twitterIcon: {
    fontSize: 40,
    color: "DeepSkyBlue",
    marginBottom: 20,
  },
  titleText: {
    letterSpacing: "0.06rem",
    fontWeight: 600,
  },
  subTitleText: {
    marginTop: 40,
    fontWeight: 600,
  },
  //окно входа
  signInWrapper: {
    "& .MuiDialog-paperWidthSm": {
      width: 400,
      borderRadius: "10px",
      padding: "0 20px 15px",
    },
    "& .MuiSvgIcon-root": {
      color: "#1e90ff",
      fontSize: 20,
      "&:hover": {
        color: "blue",
        cursor: "pointer",
      },
    },
    "& .MuiDialogTitle-root": {
      padding: "13px 24px 10px 0",
    },
  },
  dialogHeader: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  dialogHeaderText: {
    fontWeight: 700,
    marginLeft: 25,
    position: "relative",
  },
  dialogTitle: {
    borderBottom: "1px c solid",
  },
  input: {
    marginTop: "10px",
    "& .MuiInputLabel-filled": {
      transform: "translate(5px, 5px) scale(0.7)",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "rgb(245,245,245)",
    },
  },
  buttonDialog: {
    marginTop: 20,
    backgroundColor: "DeepSkyBlue",
    width: "100%",
    borderRadius: "200px",
    color: "white",
    textTransform: "none",
    fontSize: 14,
    margin: "10px 0",
    "&:hover": {
      backgroundColor: "rgba(0, 191, 255, 0.54)",
    },
  },
});

function SignIn() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.leftBlock}>
        <Box className={classes.textBlock}>
          <Box className={classes.list}>
            <SearchIcon />
            <Typography className={classes.listText}>
              Читайте о том, что вам интересно.
            </Typography>
          </Box>

          <Box className={classes.list}>
            <PeopleIcon />
            <Typography className={classes.listText}>
              Узнайте, о чем говорят в ммре.
            </Typography>
          </Box>

          <Box className={classes.list}>
            <ChatBubbleOutlineIcon />
            <Typography className={classes.listText}>
              Присоединяйтесь к общению.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.rightBlock}>
        <Box className={classes.actionBlock}>
          <TwitterIcon className={classes.twitterIcon} />
          <Typography variant="h5" className={classes.titleText}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography variant="body2" className={classes.subTitleText}>
            Присоединяйтесь к Твиттеру прямо сейчас!
          </Typography>
          <Button className={classes.signUp}>Зарегистрироваться</Button>
          <Button className={classes.signIn} onClick={handleClickOpen}>
            Войти
          </Button>
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.signInWrapper}
      >
        <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
          <Box className={classes.dialogHeader}>
            <CloseIcon onClick={handleClose} />
            <Typography variant="body1" className={classes.dialogHeaderText}>
              Войти в Твиттер
            </Typography>
          </Box>
        </DialogTitle>
        <TextField className={classes.input} label="Email" variant="filled" />
        <TextField className={classes.input} label="Пароль" variant="filled" />
        <Button className={classes.buttonDialog}>Войти</Button>
      </Dialog>
    </Box>
  );
}

export default SignIn;
