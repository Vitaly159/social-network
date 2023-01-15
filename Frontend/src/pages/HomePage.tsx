//import React from "react";
import { Route, Link, Outlet } from "react-router-dom";
//material ui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
//компоненты
import { Sidebar } from "../compoments/HomePage/Sidebar/Sidebar";
import { Recommendations } from "../compoments/HomePage/Recommendations";
//import { PostColumn } from "../compoments/HomePage/PostColumn/PostColumn";

const useStyles = makeStyles({
  wrapper: {
    padding: "0",
    marginTop: 10,
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
          <Outlet />
        </Grid>
        <Grid item xs={3}>
          <Recommendations />
        </Grid>
      </Grid>
    </Container>
  );
};
