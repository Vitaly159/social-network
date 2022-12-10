import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { Dispatch, SetStateAction } from "react";

const useStyles = makeStyles({
  signInWrapper: {
    "& .MuiDialog-paperWidthSm": {
      width: 400,
      borderRadius: "10px",
      padding: "0 0 15px",
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
    padding: "0 20px",
  },
  dialogHeaderText: {
    fontWeight: 700,
    marginLeft: 25,
    position: "relative",
  },
  dialogTitle: {
    borderBottom: "1px rgb(220,220,220) solid",
  },
  input: {
    margin: "10px 20px 0",
    "& .MuiInputLabel-filled": {
      transform: "translate(5px, 5px) scale(0.7)",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "rgb(245,245,245)",
    },
  },
  buttonDialog: {
    backgroundColor: "DeepSkyBlue",
    borderRadius: "200px",
    color: "white",
    textTransform: "none",
    fontSize: 14,
    margin: "20px 20px 10px",
    "&:hover": {
      backgroundColor: "rgba(0, 191, 255, 0.54)",
    },
  },
});

interface Props {
  openSignIn: boolean;
  setOpenSignIn: Dispatch<SetStateAction<boolean>>;
}

export const DialogSignIn = ({ openSignIn, setOpenSignIn }: Props) => {
  const classes = useStyles();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e: any): void => {
    setEmail(e.target.value);
  };

  const changePassword = (e: any): void => {
    setPassword(e.target.value);
  };

  const handleClose = (): void => {
    setOpenSignIn(false);
  };

  const fetchLogin = () => {
    const userData = {
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    };

    fetch("/api/auth/login", {
      method: "post",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) =>
      
        res.errors
          ? console.log(res)
          : (console.log(res), localStorage.setItem("twHash", JSON.stringify(res.confirmed_hash)))
      )
      .catch((err) => console.log(err));
  };

  return (
    <Dialog
      open={openSignIn}
      onClose={handleClose}
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
      <TextField
        className={classes.input}
        label="Email"
        variant="filled"
        value={email}
        onChange={changeEmail}
        inputRef={emailRef}
      />
      <TextField
        className={classes.input}
        label="Пароль"
        variant="filled"
        value={password}
        onChange={changePassword}
        inputRef={passwordRef}
      />
      <Button
        // component={Link}
        // to={"/home"}
        className={classes.buttonDialog}
        onClick={fetchLogin}
      >
        Войти
      </Button>
    </Dialog>
  );
};
