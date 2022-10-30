import React, { useState } from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Container } from "@material-ui/core";
//компоненты
import { ButtonsIcons } from "./IconsButtons";

const useStyles = makeStyles({
  wrapper: {
    height: "100vh",
  },
  iconButtons: {
    width: 50,
    display: "block",
  },
});

export const Home: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.iconButtons}>
          <ButtonsIcons />
        </Grid>
        <Grid item xs={6}>
          <Paper>здесь будет контент</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>здесь будут рекомендации</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
