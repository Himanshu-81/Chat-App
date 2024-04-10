import React from "react";
import { Typography, Box } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import { gray } from "../constants/color";

const Home = () => {
  return (
    <Box bgcolor={gray} height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select a friend to chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
