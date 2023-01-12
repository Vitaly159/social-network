import React from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
//компоненты
import { Sidebar } from "../compoments/Home/IconsButtons/IconsButtons";
import { Recommendations } from "../compoments/Home/Recommendations";
import { TweetsBlock } from "../compoments/Home/TweetsBlock/TweetsBlock";

const useStyles = makeStyles({
  wrapper: {
    padding: "0",
  },
  iconButtons: {
    display: "block",
  },
});

export const HomePage: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Container className={classes.wrapper} maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.iconButtons}>
          <Sidebar />
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
