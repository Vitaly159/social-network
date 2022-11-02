import React from "react";

import { Paper, Box, Avatar } from "@material-ui/core";

import { BlogsHeader } from "./BlogsHeader";

export const Blog: React.FC = (): React.ReactElement => {

  return (
    <Paper>
      <BlogsHeader />

      
      <Box>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Box>
    </Paper>
  );
};
