import React from "react";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
//компоненты
import { Sidebar } from "../compoments/Home/Sidebar/Sidebar";
import { Recommendations } from "../compoments/Home/Recommendations";
import { PostColumn } from "../compoments/Home/PostColumn/PostColumn";

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
          <PostColumn />
        </Grid>
        <Grid item xs={3}>
          <Recommendations />
        </Grid>
      </Grid>
    </Container>
  );
};
