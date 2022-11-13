import React from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
//компоненты
import { ButtonsIcons } from "./IconsButtons/IconsButtons";
import { Recommendations } from "./Recommendations";
import { TweetsBlock } from "./TweetsBlock/TweetsBlock";

const useStyles = makeStyles({
  wrapper: {
    // height: "100vh",
    padding: '0'
  },
  iconButtons: {
    display: "block",
  },
});

export const Home: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Container className={classes.wrapper} maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.iconButtons}>
          <ButtonsIcons />
        </Grid>
        <Grid item xs={6}>
          <TweetsBlock />
        </Grid>
        <Grid item xs={3}>
          <Recommendations />
        </Grid>
      </Grid>
    </Container>
  );
};
