import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "1",
        height: "50vh",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loading;
