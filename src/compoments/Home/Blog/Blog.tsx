import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography, Avatar } from "@material-ui/core";

import { BlogsHeader } from "./BlogsHeader";

const useStyles = makeStyles({
  header: {
    fontWeight: 600,
  },
});

export const Blog: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Paper>
      <BlogsHeader />

      
      <Box>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Box>
    </Paper>
  );
};
